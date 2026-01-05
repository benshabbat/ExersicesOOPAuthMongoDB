// Exercise 02 - Password Hashing with bcrypt
// Goal: Learn how to encrypt passwords securely

// Step 1: Import required packages
// TODO: import express from 'express';
// TODO: import bcrypt from 'bcrypt';

// Step 2: Create Express application
// TODO: const app = express();

// Step 3: Add middleware to parse JSON
// Must add this to receive data from POST requests!
// TODO: app.use(express.json());

// Step 4: Define salt rounds (security level)
// TODO: const saltRounds = 10;

// Step 5: Function to hash password
// This function takes a plain password and returns an encrypted password
// TODO: async function hashPassword(password) {
//   const hashed = await bcrypt.hash(password, saltRounds);
//   return hashed;
// }

// Step 6: Function to verify password
// This function checks if a plain password matches an encrypted password
// TODO: async function verifyPassword(password, hashedPassword) {
//   const isMatch = await bcrypt.compare(password, hashedPassword);
//   return isMatch;
// }

// Step 7: Endpoint to hash password - POST /api/hash-password
// TODO: app.post('/api/hash-password', async (req, res) => {
//   try {
//     // Get password from request body
//     const password = req.body.password;
//     
//     // Check if password exists
//     if (!password) {
//       return res.status(400).json({ error: "Password is required" });
//     }
//     
//     // Hash the password
//     const hashed = await hashPassword(password);
//     
//     // Return both versions
//     res.json({
//       original: password,
//       hashed: hashed,
//       message: "Password hashed successfully!"
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Error hashing password" });
//   }
// });

// Step 8: Endpoint to verify password - POST /api/verify-password
// TODO: app.post('/api/verify-password', async (req, res) => {
//   try {
//     const { password, hashedPassword } = req.body;
//     
//     // Check if both fields exist
//     if (!password || !hashedPassword) {
//       return res.status(400).json({ error: "Missing data" });
//     }
//     
//     // Check if password matches
//     const isMatch = await verifyPassword(password, hashedPassword);
//     
//     // Return result
//     res.json({
//       match: isMatch,
//       message: isMatch ? "Password is correct! ✅" : "Password is incorrect! ❌"
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Error verifying password" });
//   }
// });

// Step 9: Start the server
// TODO: app.listen(3000, () => {
//   console.log('🔐 Password hashing server running on http://localhost:3000');
//   console.log('Try sending a POST request to /api/hash-password');
// });

// Explanation of try-catch:
// try - Try to run the code
// catch - If there's an error, handle it here
