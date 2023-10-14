const dotenv = require("dotenv");
const Admin = require("../models/Admin");
const jwt = require('jsonwebtoken');

dotenv.config();

const adminAuthentication = async (req, res, next) => {
    try {
        const token = req.cookies.jwt; 
        if (!token) {
            return res.status(401).json({
                success: false,
                error_code: 401,
                message: "Authentication failed. Token not provided.",
                data: null
            });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const admin = await Admin.findOne({ _id: decoded.adminId });

        if (!admin) {
            return res.status(403).json({
                success: false,
                error_code: 403,
                message: "Authentication failed. User is not an admin.",
                data: null
            });
        }

        req.admin = admin;

        next();
    } catch (err) {
        return res.status(500).json({
            success: false,
            error_code: 500,
            message: err.message,
            data: null
        });
    }
};

module.exports = {adminAuthentication};