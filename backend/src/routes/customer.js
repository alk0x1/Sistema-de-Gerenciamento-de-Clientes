import express from 'express';
import { getCustomersController, addCustomerController, getCustomerController, updateCustomerController, deleteCustomerController } from '../controllers/customer.js';

const router = express.Router();

router.get('/', getCustomersController);
router.post('/', addCustomerController);
router.get('/:customerId', getCustomerController);
router.put('/:customerId', updateCustomerController);
router.delete('/:customerId', deleteCustomerController);

export { router as customerRoutes };
