import jwt from 'jsonwebtoken';
import UserModel from '../models/users.js';

// Middleware to check if the user is authenticated
export const isAuthenticated = async (req, res, next) => {
    try {
        // Check if Authorization header is present
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: "No token provided" });
        }

        // Expected format: "Bearer token123"
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Auth error:", error.message);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

// Middleware to check if the user is an admin
export const isAdmin = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: "No token provided" });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        const user = await UserModel.findById(decoded.id);
        if (!user || user.role !== 'admin') {
            return res.status(403).json({ message: "Access denied: Admins only" });
        }

        next();
    } catch (error) {
        console.error("Admin check error:", error.message);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
