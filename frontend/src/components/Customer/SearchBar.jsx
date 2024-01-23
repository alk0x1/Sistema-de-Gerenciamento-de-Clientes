import React from 'react';
import Form from 'react-bootstrap/Form';

export const SearchBar = ({ onSearchChange }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Control 
        type="text" 
        placeholder="Procurar por nome, email ou telefone" 
        onChange={onSearchChange}
      />
    </Form.Group>
  );
};
