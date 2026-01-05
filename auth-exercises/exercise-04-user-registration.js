// Exercise 04 - User Registration Endpoint
// TODO: Import required modules (express, bcrypt)

// TODO: Create Express app and add middleware

// TODO: Create in-memory users database (array)
// const users = [];

// TODO: Create helper function to validate email format
// function isValidEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// TODO: Create helper function to sanitize user (remove password)
// function sanitizeUser(user) {
//   const { password, ...userWithoutPassword } = user;
//   return userWithoutPassword;
// }

// TODO: Create POST /api/auth/register endpoint
// - Get email, password, name from request body
// - Validate all required fields are present
// - Validate email format
// - Validate password length (at least 8 characters)
// - Check if email already exists
// - Hash the password
// - Create user object with id, email, hashedPassword, name, createdAt
// - Add to users array
// - Return success response with sanitized user data

// TODO: Create GET /api/users endpoint (for testing)
// - Return all users without passwords

// TODO: Start the server on port 3000
