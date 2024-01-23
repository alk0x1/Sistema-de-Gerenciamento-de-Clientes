// /src/services/customerService.js

import { CustomerModel } from '../models/customer.js';

const getAllCustomers = async () => {
  return await CustomerModel.findAll();
};

const getCustomerById = async (id) => {
  return await CustomerModel.findById(id);
};

const createCustomer = async (customerData) => {
  return await CustomerModel.create(customerData);
};

const updateCustomer = async (id, customerData) => {
  return await CustomerModel.updateById(id, customerData);
};

const deleteCustomer = async (id) => {
  return await CustomerModel.deleteById(id);
};

export { getAllCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer };
