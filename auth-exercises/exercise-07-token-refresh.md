# Exercise 07 - Token Refresh System

## Objective
Implement a token refresh mechanism using access tokens and refresh tokens for better security.

## Background

**Why use refresh tokens?**
- Access tokens should be short-lived (15-30 minutes) for security
- Refresh tokens are long-lived (7-30 days) and used to get new access tokens
- If access token is stolen, it expires quickly
- Refresh tokens are stored securely and can be revoked

**The Flow:**
1. User logs in → Receive access token + refresh token
2. Use access token for API requests
3. When access token expires → Use refresh token to get new access token
4. If refresh token expires → User must login again

## Requirements

1. Modify environment variables to support two token types:
   - `JWT_ACCESS_SECRET` - Secret for access tokens
   - `JWT_ACCESS_EXPIRES_IN` - Short expiration (e.g., "15m")
   - `JWT_REFRESH_SECRET` - Secret for refresh tokens
   - `JWT_REFRESH_EXPIRES_IN` - Long expiration (e.g., "7d")

2. Create in-memory storage for refresh tokens:
   - Store refresh tokens with associated userId
   - Allow token revocation

3. Modify login endpoint to return both tokens:
   - Generate access token with user data
   - Generate refresh token with only userId
   - Store refresh token
   - Return both tokens

4. Create `POST /api/auth/refresh` endpoint:
   - Accept refresh token from body
   - Verify refresh token
   - Check if token is stored (not revoked)
   - Generate new access token
   - Return new access token

5. Create `POST /api/auth/logout` endpoint:
   - Remove refresh token from storage
   - Invalidate user's session

6. Create `POST /api/auth/logout-all` endpoint:
   - Remove all refresh tokens for the user
   - Logout from all devices

## Expected Output

**POST /api/auth/login**:
```json
{
  "success": true,
  "message": "Login successful",
  "accessToken": "eyJhbGci...",
  "refreshToken": "eyJhbGci...",
  "expiresIn": "15m"
}
```

**POST /api/auth/refresh** with body:
```json
{
  "refreshToken": "eyJhbGci..."
}
```

Response (200):
```json
{
  "success": true,
  "accessToken": "eyJhbGci...",
  "expiresIn": "15m"
}
```

**POST /api/auth/logout** with body:
```json
{
  "refreshToken": "eyJhbGci..."
}
```

Response (200):
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

Error - Invalid refresh token (401):
```json
{
  "success": false,
  "error": "Invalid or expired refresh token"
}
```

## Tips

- Use different secrets for access and refresh tokens
- Store refresh tokens as: `{ token: string, userId: string, createdAt: Date }`
- Access token should contain user data for quick access
- Refresh token should only contain userId (minimal data)
- Consider adding IP address or device info for better security

## Bonus Challenges

1. Add automatic cleanup of expired refresh tokens
2. Limit number of active sessions per user (e.g., max 5 devices)
3. Add device/browser information to refresh tokens
4. Create endpoint to list all active sessions
5. Add ability to logout from specific device
6. Implement refresh token rotation (issue new refresh token on refresh)
