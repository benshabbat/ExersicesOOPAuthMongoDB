# Exercise 02 - Password Hashing with bcrypt

## Objective
Learn how to hash passwords using bcrypt and verify them securely.

## Background

**Why hash passwords?**
- Never store plain text passwords in a database
- Hashing is a one-way function - you can't reverse it
- bcrypt adds "salt" to make each hash unique, even for the same password
- bcrypt is intentionally slow to prevent brute-force attacks

## Requirements

1. Create a function `hashPassword(password)` that:
   - Takes a plain text password
   - Returns a hashed version using bcrypt
   - Uses a salt rounds value of 10

2. Create a function `verifyPassword(password, hashedPassword)` that:
   - Takes a plain text password and a hashed password
   - Returns true if they match, false otherwise

3. Create an Express endpoint `POST /api/test-hash` that:
   - Accepts a password in the request body
   - Returns both the original and hashed password
   - Shows how long the hashing took

4. Create an Express endpoint `POST /api/test-verify` that:
   - Accepts `password` and `hashedPassword` in the request body
   - Returns whether they match

## Expected Output

**POST /api/test-hash** with body `{ "password": "mySecret123" }`:
```json
{
  "original": "mySecret123",
  "hashed": "$2b$10$XYZ...",
  "timeTaken": "150ms"
}
```

**POST /api/test-verify** with body:
```json
{
  "password": "mySecret123",
  "hashedPassword": "$2b$10$XYZ..."
}
```

Response:
```json
{
  "match": true,
  "message": "Password verification successful"
}
```

## Tips

- Import bcrypt: `const bcrypt = require('bcrypt')`
- Use `bcrypt.hash(password, saltRounds)` to hash
- Use `bcrypt.compare(password, hash)` to verify
- Both functions are asynchronous - use async/await or promises
- Higher salt rounds = more secure but slower (10 is a good balance)

## Bonus Challenges

1. Add input validation (password length, complexity requirements)
2. Test the same password multiple times - notice different hashes
3. Add timing comparison for different salt round values (8, 10, 12)
4. Create a route that demonstrates why plain text comparison is insecure
