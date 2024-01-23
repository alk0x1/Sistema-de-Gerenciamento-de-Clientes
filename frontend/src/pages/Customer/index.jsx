import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../../components/Customer/SearchBar';
import { CustomerList } from '../../components/Customer/CustomerList';
import { OptimizeRoute } from '../../components/Customer/OptimizeRoute';
import { fetchCustomers, deleteCustomer } from '../../services/customerService';
import { fetchOptimizedRoute } from '../../services/routeOptimizationService';

export const ListCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [route, setRoute] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showOptimizeRouteModal, setShowOptimizeRouteModal] = useState(false);
  
  useEffect(() => {
    fetchCustomers()
      .then(data => setCustomers(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleFetchOptimizedRoute = () => {
    setIsLoading(true);
    fetchOptimizedRoute()
      .then(data => {
        setRoute(data);
        setShowOptimizeRouteModal(true); // Show the modal after fetching the data
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDelete = (customerId) => {
    deleteCustomer(customerId)
      .then(() => setCustomers(customers.filter(customer => customer.id !== customerId)))
      .catch(error => console.error('Error:', error));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm) ||
    customer.email.toLowerCase().includes(searchTerm) ||
    customer.phone.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <h1>Lista de Clientes</h1>
      <SearchBar onSearchChange={handleSearchChange} />
      <CustomerList customers={filteredCustomers} onDelete={handleDelete} />
      <p><Link to="/">cadastrar cliente</Link></p>
      <button variant="primary" onClick={handleFetchOptimizedRoute} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Optimize Route'}
      </button>
      {showOptimizeRouteModal && (
        <OptimizeRoute route={route} onClose={() => setShowOptimizeRouteModal(false)} />
      )}
    </>
  );
};
