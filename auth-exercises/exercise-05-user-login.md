# Exercise 05 - User Login Endpoint

## Objective
Create a user login endpoint that verifies credentials and returns a JWT token.

## Requirements

1. Use the users database from Exercise 04

2. Create `POST /api/auth/login` endpoint that:
   - Accepts email and password
   - Validates that both fields are provided
   - Finds user by email
   - Verifies password using bcrypt
   - Generates JWT token with user information
   - Returns token and user data

3. Handle various error cases:
   - Missing email or password (400)
   - User not found (401)
   - Invalid password (401)

4. Include in JWT payload:
   - `userId` - User's ID
   - `email` - User's email
   - `name` - User's name

5. Create `POST /api/auth/me` endpoint for testing:
   - Extracts token from Authorization header
   - Verifies the token
   - Returns the current user's information

## Expected Output

**POST /api/auth/login** with body:
```json
{
  "email": "john@example.com",
  "password": "mySecret123"
}
```

Success Response (200):
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "1",
    "email": "john@example.com",
    "name": "John Doe"
  }
}
```

Error Response - Invalid credentials (401):
```json
{
  "success": false,
  "error": "Invalid email or password"
}
```

Error Response - Missing fields (400):
```json
{
  "success": false,
  "error": "Email and password are required"
}
```

**POST /api/auth/me** with header:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Response (200):
```json
{
  "success": true,
  "user": {
    "id": "1",
    "email": "john@example.com",
    "name": "John Doe"
  }
}
```

## Tips

- Use bcrypt.compare() to verify passwords
- Don't reveal whether email or password was wrong (security best practice)
- JWT payload should NOT include sensitive data like passwords
- Authorization header format: `Bearer <token>`
- Extract token: `req.headers.authorization?.split(' ')[1]`
- Use appropriate HTTP status codes

## Bonus Challenges

1. Add rate limiting to prevent brute force attacks
2. Add "Remember Me" functionality with longer token expiration
3. Log failed login attempts
4. Add account lockout after X failed attempts
5. Return token expiration time with the response
6. Support case-insensitive email login
