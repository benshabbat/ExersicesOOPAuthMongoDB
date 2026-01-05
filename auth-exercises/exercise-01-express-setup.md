# Exercise 01 - Express Server Setup

## Objective
Learn how to set up a basic Express.js server with proper structure and middleware.

## Requirements

1. Create a basic Express server that listens on port 3000
2. Add middleware for:
   - JSON body parsing
   - URL-encoded data parsing
   - CORS (Cross-Origin Resource Sharing)
3. Create the following routes:
   - `GET /` - Returns a welcome message
   - `GET /health` - Returns server health status
   - `GET /api/info` - Returns API information (version, name, etc.)
4. Add error handling middleware

## Expected Output

When you run the server:
```
Server is running on port 3000
```

When you visit `http://localhost:3000/`:
```json
{
  "message": "Welcome to the Authentication API"
}
```

When you visit `http://localhost:3000/health`:
```json
{
  "status": "OK",
  "timestamp": "2024-01-05T10:30:00.000Z"
}
```

## Tips

- Use `app.use(express.json())` for parsing JSON bodies
- Use `app.use(express.urlencoded({ extended: true }))` for form data
- Error handling middleware should be the last middleware added
- Remember to use `res.json()` to send JSON responses

## Bonus Challenges

1. Add a logger middleware that logs each request (method, URL, timestamp)
2. Create a custom 404 handler for unknown routes
3. Add environment variables using dotenv for the port number
