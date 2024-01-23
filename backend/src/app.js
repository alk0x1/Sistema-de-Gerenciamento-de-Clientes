import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { customerRoutes } from './routes.js';
import { initializeTable } from './db/init.js';
// import { errorHandler, notFound } from './middleware/errorMiddleware.js';

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'development') {
  initializeTable();
}

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies

// Routes
app.use('/api/customers', customerRoutes);

// app.use('/api/route-optimization', routeOptimizationRoutes);

// Error handling
// app.use(notFound); // Handle 404 errors
// app.use(errorHandler); // Handle other errors

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
