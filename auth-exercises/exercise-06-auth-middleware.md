# Exercise 06 - Protected Routes with Authentication Middleware

## Objective
Create reusable authentication middleware to protect routes that require authentication.

## Requirements

1. Create an `authenticateToken` middleware function that:
   - Extracts the JWT token from the Authorization header
   - Verifies the token is valid
   - Attaches the decoded user data to `req.user`
   - Calls `next()` if authentication succeeds
   - Returns 401 error if token is missing or invalid

2. Create protected endpoints that use the middleware:
   - `GET /api/profile` - Get current user's profile
   - `PUT /api/profile` - Update current user's profile (name)
   - `DELETE /api/profile` - Delete current user's account

3. Create an optional `authorizeRole` middleware that:
   - Checks if user has required role(s)
   - Can be used in combination with `authenticateToken`

4. Test endpoints:
   - Add a `role` field to users (default: "user")
   - Create admin-only endpoint: `GET /api/admin/users`
   - Regular users should get 403 Forbidden

## Expected Output

**GET /api/profile** with Authorization header:
```
Authorization: Bearer <valid-token>
```

Response (200):
```json
{
  "success": true,
  "profile": {
    "id": "1",
    "email": "john@example.com",
    "name": "John Doe",
    "role": "user",
    "createdAt": "2024-01-05T10:30:00.000Z"
  }
}
```

**PUT /api/profile** with body:
```json
{
  "name": "John Smith"
}
```

Response (200):
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "profile": {
    "id": "1",
    "email": "john@example.com",
    "name": "John Smith",
    "role": "user"
  }
}
```

**Without token** - Error (401):
```json
{
  "success": false,
  "error": "Access token is missing"
}
```

**With invalid token** - Error (401):
```json
{
  "success": false,
  "error": "Invalid or expired token"
}
```

**GET /api/admin/users** as regular user - Error (403):
```json
{
  "success": false,
  "error": "Insufficient permissions"
}
```

## Middleware Usage Example

```javascript
// Protect a single route
app.get('/api/profile', authenticateToken, (req, res) => {
  // req.user is available here
});

// Protect with role check
app.get('/api/admin/users', 
  authenticateToken, 
  authorizeRole('admin'), 
  (req, res) => {
    // Only admins can access
  }
);
```

## Tips

- Middleware functions have signature: `(req, res, next)`
- Always call `next()` when middleware succeeds
- Use `return` before sending responses to prevent further execution
- Handle token errors with try-catch
- `req.user` should contain the decoded JWT payload

## Bonus Challenges

1. Create middleware that logs all authenticated requests
2. Add support for multiple roles: `authorizeRole(['admin', 'moderator'])`
3. Create a `optionalAuth` middleware (doesn't fail if no token)
4. Add token to blacklist when user deletes account
5. Create middleware to check if user account is active/enabled
