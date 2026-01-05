// Exercise 07 - Token Refresh System
// TODO: Import required modules (express, bcrypt, jsonwebtoken, dotenv)

// TODO: Load environment variables
// Need: JWT_ACCESS_SECRET, JWT_ACCESS_EXPIRES_IN, JWT_REFRESH_SECRET, JWT_REFRESH_EXPIRES_IN

// TODO: Create Express app and add middleware

// TODO: Create in-memory databases
// const users = [];
// const refreshTokens = []; // Store { token, userId, createdAt }

// TODO: Copy utility functions from previous exercises

// TODO: Modify generateToken to support token types
// function generateAccessToken(payload) {
//   return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
//     expiresIn: process.env.JWT_ACCESS_EXPIRES_IN
//   });
// }
//
// function generateRefreshToken(payload) {
//   return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
//     expiresIn: process.env.JWT_REFRESH_EXPIRES_IN
//   });
// }

// TODO: Modify verifyToken to support token types
// function verifyAccessToken(token) {
//   return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
// }
//
// function verifyRefreshToken(token) {
//   return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
// }

// TODO: Modify authenticateToken middleware to use verifyAccessToken

// TODO: Create POST /api/auth/register endpoint

// TODO: Modify POST /api/auth/login endpoint
// - Generate access token with user data (userId, email, name)
// - Generate refresh token with minimal data (userId only)
// - Store refresh token in refreshTokens array
// - Return both tokens and expiration time

// TODO: Create POST /api/auth/refresh endpoint
// - Get refresh token from request body
// - Verify refresh token
// - Check if token exists in refreshTokens array
// - If valid, generate new access token
// - Return new access token

// TODO: Create POST /api/auth/logout endpoint
// - Get refresh token from request body
// - Remove token from refreshTokens array
// - Return success message

// TODO: Create POST /api/auth/logout-all endpoint (protected)
// - Use authenticateToken middleware
// - Remove all refresh tokens for current user (req.user.userId)
// - Return success message

// TODO: Create GET /api/profile endpoint (protected)

// TODO: Start the server on port 3000
