// Exercise 05 - User Login Endpoint
// TODO: Import required modules (express, bcrypt, jsonwebtoken, dotenv)

// TODO: Load environment variables

// TODO: Create Express app and add middleware

// TODO: Create in-memory users database
// const users = [];

// TODO: Copy helper functions from Exercise 04
// - isValidEmail
// - sanitizeUser

// TODO: Copy hashPassword function from Exercise 02

// TODO: Copy generateToken and verifyToken functions from Exercise 03

// TODO: Create POST /api/auth/register endpoint (copy from Exercise 04)

// TODO: Create POST /api/auth/login endpoint
// - Get email and password from request body
// - Validate both fields are provided
// - Find user by email (case insensitive)
// - If user not found, return 401 error
// - Use bcrypt.compare() to verify password
// - If password invalid, return 401 error
// - Generate JWT token with userId, email, name
// - Return success response with token and user data (without password)

// TODO: Create POST /api/auth/me endpoint
// - Get token from Authorization header (Bearer token)
// - If no token, return 401 error
// - Verify token
// - If invalid token, return 401 error
// - Find user by decoded userId
// - Return user data (without password)

// TODO: Start the server on port 3000
