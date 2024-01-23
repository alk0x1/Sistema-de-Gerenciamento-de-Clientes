import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export const CustomerItem = ({ customer, onDelete }) => {
  return (
    <ListGroup.Item
      className="d-flex justify-content-between align-items-start"
      key={customer.id}>
      {customer.name} - {customer.email} - {customer.phone}
      <Button 
        variant="outline-danger" 
        size="sm" 
        onClick={() => onDelete(customer.id)}>
          Delete
      </Button>
    </ListGroup.Item>
  );
};
