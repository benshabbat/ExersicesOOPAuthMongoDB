// Exercise 08 - Complete Authentication System
// This is a capstone project. Build a complete auth system!

// TODO: Set up project structure
// Consider organizing code into separate files:
// - middleware/auth.js
// - utils/jwt.js
// - utils/bcrypt.js
// - routes/auth.js
// - routes/users.js
// - routes/admin.js
// - data/db.js

// For this exercise, you can start with everything in one file
// and refactor later, or organize from the beginning.

// REQUIRED FEATURES:
// 1. User registration with validation
// 2. User login with JWT (access + refresh tokens)
// 3. Token refresh endpoint
// 4. Logout and logout-all endpoints
// 5. Protected user profile routes
// 6. Password change for logged-in users
// 7. Password reset flow (forgot password, reset with token)
// 8. Email verification system
// 9. Role-based access control
// 10. Admin endpoints (list users, delete user, change role)

// DATABASES (in-memory):
// - users: { id, email, password, name, role, isVerified, createdAt }
// - refreshTokens: { token, userId, createdAt }
// - resetTokens: { token, userId, expiresAt }
// - verificationTokens: { token, userId }

// MIDDLEWARE:
// - authenticateToken: Verify JWT access token
// - authorizeRole: Check user role
// - validateInput: Validate request data

// UTILITIES:
// - Hash and verify passwords
// - Generate and verify tokens
// - Validate email format
// - Validate password strength
// - Generate random tokens

// Start building your complete authentication system here!
// Good luck! 🚀
