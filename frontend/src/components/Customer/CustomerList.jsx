import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { CustomerItem } from './CustomerItem';

export const CustomerList = ({ customers, onDelete }) => {
  return (
    <ListGroup variant="flush">
      {customers.map((customer) => (
        <CustomerItem key={customer.id} customer={customer} onDelete={onDelete} />
      ))}
    </ListGroup>
  );
};
