import { 
  getAllCustomers, 
  createCustomer, 
  getCustomerById, 
  updateCustomer, 
  deleteCustomer 
} from '../services/customer.js';

export const getCustomersController = async (req, res) => {
  try {
    const customers = await getAllCustomers();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addCustomerController = async (req, res) => {
  try {
    const { name, email, phone, xCoordinate, yCoordinate } = req.body;
    if (!name || !email || !phone) {  
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const newCustomer = await createCustomer({name, email, phone, xCoordinate, yCoordinate});
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCustomerController = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const customer = await getCustomerById(customerId);
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCustomerController = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const updatedCustomer = await updateCustomer(customerId, req.body);
    if (updatedCustomer) {
      res.json(updatedCustomer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCustomerController = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const success = await deleteCustomer(customerId);
    if (success) {
      res.json({ message: "Customer deleted successfully" });
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
