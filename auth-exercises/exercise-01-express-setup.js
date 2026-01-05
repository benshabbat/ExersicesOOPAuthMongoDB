// Exercise 01 - Express Server Setup
// Goal: Create a simple Express server with 3 routes

// Step 1: Import Express
// TODO: import express from 'express';

// Step 2: Create Express application
// TODO: const app = express();

// Step 3: Create home route - GET /
// When someone visits http://localhost:3000 they'll get a welcome message
// TODO: app.get('/', (req, res) => {
//   res.json({ message: "Welcome to the Authentication API" });
// });

// Step 4: Create health route - GET /health
// This route checks if the server is working properly
// TODO: app.get('/health', (req, res) => {
//   const now = new Date().toISOString(); // Current date
//   res.json({ status: "OK", timestamp: now });
// });

// Step 5: Create info route - GET /api/info
// This route returns information about the API
// TODO: app.get('/api/info', (req, res) => {
//   res.json({
//     name: "Auth API",
//     version: "1.0.0",
//     author: "Your Name Here"
//   });
// });

// Step 6: Start the server on port 3000
// TODO: app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

// Notes:
// - app.get() defines a route that responds to GET requests
// - res.json() sends a response in JSON format
// - app.listen() starts the server
