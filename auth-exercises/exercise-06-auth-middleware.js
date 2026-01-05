// Exercise 06 - Protected Routes with Authentication Middleware
// TODO: Import required modules (express, bcrypt, jsonwebtoken, dotenv)

// TODO: Load environment variables

// TODO: Create Express app and add middleware

// TODO: Create in-memory users database
// const users = [];

// TODO: Copy utility functions from previous exercises
// - isValidEmail, sanitizeUser, hashPassword, generateToken, verifyToken

// TODO: Create authenticateToken middleware
// function authenticateToken(req, res, next) {
//   // Get token from Authorization header
//   // Check if token exists
//   // Verify token
//   // Attach decoded data to req.user
//   // Call next()
//   // Handle errors (missing token, invalid token)
// }

// TODO: Create authorizeRole middleware
// function authorizeRole(...allowedRoles) {
//   return (req, res, next) => {
//     // Check if req.user exists (authentication already done)
//     // Check if user's role is in allowedRoles
//     // If yes, call next()
//     // If no, return 403 Forbidden
//   };
// }

// TODO: Create POST /api/auth/register endpoint
// - Add default role: "user"

// TODO: Create POST /api/auth/login endpoint

// TODO: Create GET /api/profile endpoint (protected)
// - Use authenticateToken middleware
// - Return current user's profile from req.user

// TODO: Create PUT /api/profile endpoint (protected)
// - Use authenticateToken middleware
// - Get name from request body
// - Update user's name in database
// - Return updated profile

// TODO: Create DELETE /api/profile endpoint (protected)
// - Use authenticateToken middleware
// - Remove user from database
// - Return success message

// TODO: Create GET /api/admin/users endpoint (admin only)
// - Use authenticateToken and authorizeRole('admin')
// - Return all users (without passwords)

// TODO: Start the server on port 3000
