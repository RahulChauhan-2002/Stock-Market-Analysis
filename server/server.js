import express from 'express';
import cors from 'cors';
import stockRoutes from './src/routes/stocks.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware cors
app.use(cors({
  origin: `${process.env.client_url}`, // restrict to your frontend origin
  methods: ['GET'],
  credentials: true,
}));
app.use(express.json()); // for parsing application/json

// Routes
app.use('/api/stocks', stockRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});