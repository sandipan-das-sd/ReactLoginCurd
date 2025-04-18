import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import ejs from 'ejs';

dotenv.config(); 

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.in',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: true
});

export const sendMail = async (to, subject, template, data) => {
  try {
    // Get template path
    const templatePath = path.join(process.cwd(), 'mails', 'templates', `${template}.ejs`);

    // Render template with data
    const html = await ejs.renderFile(templatePath, data);

    // Send email
    await transporter.sendMail({
      from: `"React CRUD" <${process.env.EMAIL_USER}>`, // Better to add sender email
      to,
      subject,
      html
    });

    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
