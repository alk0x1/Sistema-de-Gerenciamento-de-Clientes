// OptimizeRoute.js
import React from 'react';
import { Button, ListGroup, Modal } from 'react-bootstrap';

export const OptimizeRoute = ({ route, onClose }) => {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Optimized Route</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {route.map((customer, index) => (
            <ListGroup.Item key={customer.id}>
              {index + 1}. {customer.name} - Coordinates: ({customer.x_coordinate}, {customer.y_coordinate})
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};