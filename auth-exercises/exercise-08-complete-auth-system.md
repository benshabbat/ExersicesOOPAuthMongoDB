# Exercise 08 - Complete Authentication System

## Objective
Build a comprehensive authentication system combining all previous exercises with additional features.

## Requirements

This is a capstone project that combines everything you've learned. Build a complete API with:

### 1. User Management
- ✅ User registration with validation
- ✅ Email and password login
- ✅ User profile viewing and updating
- ✅ Account deletion
- ✅ Role-based access control (user, admin)

### 2. Authentication Features
- ✅ JWT access tokens (short-lived)
- ✅ JWT refresh tokens (long-lived)
- ✅ Token refresh endpoint
- ✅ Logout and logout from all devices
- ✅ Protected routes with middleware

### 3. New Features to Add

#### Password Reset Flow
- `POST /api/auth/forgot-password`
  - Accept email
  - Generate reset token (store in memory)
  - Return reset token (in real app, send via email)
  
- `POST /api/auth/reset-password`
  - Accept reset token and new password
  - Validate token
  - Update user's password

#### Change Password (for logged-in users)
- `PUT /api/auth/change-password` (protected)
  - Accept current password and new password
  - Verify current password
  - Update to new password

#### Email Verification
- `POST /api/auth/verify-email`
  - Accept verification token
  - Mark user as verified
  - Add `isVerified` field to users

#### Admin Features
- `GET /api/admin/users` - List all users (admin only)
- `DELETE /api/admin/users/:id` - Delete user by ID (admin only)
- `PUT /api/admin/users/:id/role` - Change user role (admin only)

### 4. Enhanced Security
- Input sanitization
- Password strength validation
- Rate limiting simulation (track requests per IP)
- Account lockout after failed login attempts
- Refresh token rotation

### 5. Proper Structure
Organize code into separate files:
```
├── middleware/
│   ├── auth.js (authenticateToken, authorizeRole)
│   └── validation.js (input validation)
├── utils/
│   ├── jwt.js (token generation and verification)
│   ├── bcrypt.js (password hashing)
│   └── validators.js (email, password validation)
├── routes/
│   ├── auth.js (all auth routes)
│   ├── users.js (user profile routes)
│   └── admin.js (admin routes)
├── data/
│   └── db.js (in-memory database)
├── .env
└── server.js (main file)
```

## API Documentation

Create a comprehensive list of all endpoints with:
- Method and path
- Required authentication
- Required role
- Request body/params
- Response examples
- Error responses

## Testing Checklist

Test all scenarios:
- [ ] Register new user
- [ ] Register with existing email (should fail)
- [ ] Register with invalid email (should fail)
- [ ] Register with weak password (should fail)
- [ ] Login with correct credentials
- [ ] Login with wrong password (should fail)
- [ ] Access protected route with valid token
- [ ] Access protected route without token (should fail)
- [ ] Access protected route with expired token (should fail)
- [ ] Refresh access token
- [ ] Update profile
- [ ] Change password
- [ ] Request password reset
- [ ] Reset password with token
- [ ] Access admin route as regular user (should fail)
- [ ] Access admin route as admin
- [ ] Logout (invalidate refresh token)
- [ ] Delete account

## Expected Features Summary

```javascript
// Authentication Endpoints
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh
POST /api/auth/logout
POST /api/auth/logout-all
POST /api/auth/forgot-password
POST /api/auth/reset-password
POST /api/auth/verify-email
PUT  /api/auth/change-password (protected)

// User Profile Endpoints
GET    /api/profile (protected)
PUT    /api/profile (protected)
DELETE /api/profile (protected)

// Admin Endpoints
GET    /api/admin/users (admin only)
DELETE /api/admin/users/:id (admin only)
PUT    /api/admin/users/:id/role (admin only)

// Public Endpoints
GET /
GET /health
GET /api/info
```

## Bonus Challenges

1. Add MongoDB integration instead of in-memory storage
2. Implement actual email sending for verification and password reset
3. Add OAuth2 login (Google, GitHub)
4. Add two-factor authentication (2FA)
5. Create a simple frontend to test the API
6. Add API documentation with Swagger/OpenAPI
7. Add logging system for authentication events
8. Add unit tests for all endpoints
9. Deploy to a cloud platform (Heroku, Vercel, Railway)
10. Add Docker containerization

## Tips

- Start by copying code from previous exercises
- Refactor into separate files gradually
- Test each feature as you add it
- Use Postman collections to save and organize tests
- Add comprehensive error handling
- Use environment variables for all configuration
- Add JSDoc comments for documentation
- Consider using express-validator for input validation
- Use proper HTTP status codes
- Add CORS configuration if building a frontend

Good luck! This is a production-ready authentication system foundation. 🚀
