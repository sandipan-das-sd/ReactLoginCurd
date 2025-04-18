import UserModel from '../models/users.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { sendMail } from '../utlis/sendMail.js';
import { otpStore } from '../utils/otpStore.js'; 

// 🔹 Generate 6-digit OTP
export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};


export const signUp = async (req, res) => {
  const { name, email, password, phone, address } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const otp = generateOTP();
    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = { name, email, password: hashedPassword, phone, address };

    otpStore.set(email, { otp, userData });

    await sendMail(email, 'Signup OTP', 'otp', { otp, name }); 

    res.status(200).json({ message: 'OTP sent to email' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send OTP', error: error.message });
  }
};


export const verifyOtpAndSignup = async (req, res) => {
  const { email, otp } = req.body;

  const record = otpStore.get(email);
  if (!record) {
    return res.status(400).json({ message: 'No OTP found or expired' });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  try {
    const user = await UserModel.create(record.userData);
    otpStore.delete(email);
    res.status(201).json({ message: 'Signup successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Signup failed', error: error.message });
  }
};

// 🔹 Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};
