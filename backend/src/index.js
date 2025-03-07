import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import pinRoutes from './routes/pins.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/pins', pinRoutes);

// Connect to MongoDB
connectDB();

app.listen(port, () => console.log(`Server running on port ${port}`));
