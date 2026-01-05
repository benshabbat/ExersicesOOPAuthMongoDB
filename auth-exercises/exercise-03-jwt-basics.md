# Exercise 03 - JWT Token Creation and Verification

## Objective
Learn how to create and verify JSON Web Tokens (JWT) for authentication.

## Background

**What is JWT?**
- JWT = JSON Web Token
- Used for securely transmitting information between parties
- Consists of three parts: Header.Payload.Signature
- Stateless authentication - no need to store sessions on server

**JWT Structure:**
- **Header**: Token type and algorithm
- **Payload**: Data (user info, expiration, etc.)
- **Signature**: Ensures token hasn't been tampered with

## Requirements

1. Create a `.env` file with:
   - `JWT_SECRET` - A secret key for signing tokens
   - `JWT_EXPIRES_IN` - Token expiration time (e.g., "1h", "7d")

2. Create a function `generateToken(payload)` that:
   - Takes a payload object (e.g., userId, email)
   - Returns a signed JWT token
   - Sets an expiration time

3. Create a function `verifyToken(token)` that:
   - Takes a JWT token
   - Verifies its signature
   - Returns the decoded payload if valid
   - Throws an error if invalid or expired

4. Create endpoints:
   - `POST /api/token/generate` - Generate a token from user data
   - `POST /api/token/verify` - Verify a token and show its contents
   - `POST /api/token/decode` - Decode without verification (just show structure)

## Expected Output

**POST /api/token/generate** with body:
```json
{
  "userId": "123",
  "email": "user@example.com",
  "role": "user"
}
```

Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": "1h"
}
```

**POST /api/token/verify** with body:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Response (if valid):
```json
{
  "valid": true,
  "decoded": {
    "userId": "123",
    "email": "user@example.com",
    "role": "user",
    "iat": 1704448200,
    "exp": 1704451800
  }
}
```

## Tips

- Import: `const jwt = require('jsonwebtoken')`
- Import: `require('dotenv').config()` to load .env file
- Use `jwt.sign(payload, secret, options)` to create token
- Use `jwt.verify(token, secret)` to verify token
- Use `jwt.decode(token)` to decode without verification
- Handle errors with try-catch for expired/invalid tokens

## Bonus Challenges

1. Create tokens with different expiration times (15m, 1h, 1d)
2. Add additional claims to the payload (issuer, audience)
3. Create a utility to decode and display token expiration in human-readable format
4. Test with an expired token and handle the error gracefully
