import React, { useState, useEffect } from 'react';
import { SearchBar } from '../../components/Customer/SearchBar';
import { CustomerList } from '../../components/Customer/CustomerList';
import { Link } from 'react-router-dom';

export const ListCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const apiBaseUrl = process.env.REACT_APP_API_URL;
  const apiBaseUrl = "http://localhost:5000/api";

  useEffect(() => {
    fetch(`${apiBaseUrl}/customers`, { method: 'GET' })
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error('Error:', error));
  }, [apiBaseUrl]);

  const handleDelete = (id) => {
    fetch(`${apiBaseUrl}/customers/${id}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          setCustomers(customers.filter(customer => customer.id !== id));
        } else {
          console.error('Failed to delete customer');
        }
      })
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
    </>
  );
};
