// Exercise 03 - JWT Token Creation and Verification
// TODO: Import required modules (express, jsonwebtoken, dotenv)

// TODO: Load environment variables from .env file

// TODO: Create Express app and add middleware

// TODO: Create generateToken function
// function generateToken(payload) {
//   // Use jwt.sign() to create a token
//   // Use process.env.JWT_SECRET and process.env.JWT_EXPIRES_IN
// }

// TODO: Create verifyToken function
// function verifyToken(token) {
//   // Use jwt.verify() to verify and decode the token
//   // Handle errors for invalid/expired tokens
// }

// TODO: Create POST /api/token/generate endpoint
// - Get user data from request body
// - Generate token with the data
// - Return token and expiration info

// TODO: Create POST /api/token/verify endpoint
// - Get token from request body
// - Verify the token
// - Return validation result and decoded data

// TODO: Create POST /api/token/decode endpoint
// - Get token from request body
// - Decode without verification (use jwt.decode())
// - Return the decoded structure

// TODO: Start the server on port 3000
