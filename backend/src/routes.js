import express from 'express';
import { getCustomersController, addCustomerController, getCustomerController, updateCustomerController, deleteCustomerController } from './controllers/customer.js';
import { getOptimizedRoute } from './controllers/routeOptimization.js';

const router = express.Router();

router.get('/', getCustomersController);
router.post('/', addCustomerController);
router.get('/optimize-route', getOptimizedRoute);

router.get('/:customerId', getCustomerController);
router.put('/:customerId', updateCustomerController);
router.delete('/:customerId', deleteCustomerController);



export { router as customerRoutes };
