# Exercise 04 - User Registration Endpoint

## Objective
Create a user registration endpoint that validates input, hashes passwords, and stores users.

## Requirements

1. Create an in-memory users database (array) to store users

2. Create a User model/structure with:
   - `id` - Unique identifier (generate with UUID or timestamp)
   - `email` - User's email (must be unique)
   - `password` - Hashed password
   - `name` - User's full name
   - `createdAt` - Registration timestamp

3. Create input validation for registration:
   - Email must be valid format
   - Password must be at least 8 characters
   - Name is required
   - Email must not already exist

4. Create `POST /api/auth/register` endpoint that:
   - Validates input data
   - Checks if email already exists
   - Hashes the password with bcrypt
   - Creates a new user
   - Returns success message and user data (without password)
   - Returns appropriate error messages for validation failures

5. Create `GET /api/users` endpoint (for testing):
   - Returns all registered users
   - Excludes passwords from the response

## Expected Output

**POST /api/auth/register** with body:
```json
{
  "email": "john@example.com",
  "password": "mySecret123",
  "name": "John Doe"
}
```

Success Response (201):
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "1",
    "email": "john@example.com",
    "name": "John Doe",
    "createdAt": "2024-01-05T10:30:00.000Z"
  }
}
```

Error Response - Email exists (409):
```json
{
  "success": false,
  "error": "Email already registered"
}
```

Error Response - Validation (400):
```json
{
  "success": false,
  "error": "Password must be at least 8 characters"
}
```

## Tips

- Use a simple email regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Check for existing email before hashing password (more efficient)
- Use `array.find()` to search for existing users
- Generate unique IDs with: `Date.now().toString()` or UUID library
- Use HTTP status codes: 201 (created), 400 (bad request), 409 (conflict)

## Bonus Challenges

1. Add password strength requirements (uppercase, number, special char)
2. Trim whitespace from email and name
3. Convert email to lowercase before storing
4. Add a `role` field (default: "user")
5. Add username field (must be unique)
6. Create a helper function `sanitizeUser(user)` to remove password from objects
