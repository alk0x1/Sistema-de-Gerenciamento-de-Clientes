import { getOptimizedCustomerRoute } from '../services/routeOptimization.js';

export const getOptimizedRoute = async (req, res) => {
  try {
    const optimizedRoute = await getOptimizedCustomerRoute();
    res.json(optimizedRoute);
  } catch (error) {
    console.error('Route optimization error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
