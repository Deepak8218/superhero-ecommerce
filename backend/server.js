// // server.js
// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import cors from 'cors';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // DB Connection
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Default route
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors"; 

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Add this
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

