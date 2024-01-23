import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { createCustomer } from '../../services/customerService';

export function RegisterCustomerForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [xCoordinate, setXCoordinate] = useState('');
  const [yCoordinate, setYCoordinate] = useState('');

  const notifyError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3900,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifySuccess = () => {
    toast.success('Cliente cadastrado com sucesso', {
      position: "top-right",
      autoClose: 3900,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !phone) {
      return notifyError('Por favor, preencha todos os campos obrigatórios.');
    }

    const newCustomer = {
      name,
      email,
      phone,
      xCoordinate,
      yCoordinate
    };
  
    createCustomer(newCustomer)
      .then(data => {
        console.log("data: ", data);
        notifySuccess();
      })
      .catch(error => {
        console.error('Error:', error);
        notifyError('Erro ao cadastrar cliente.');
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nome do cliente"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email do cliente"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Telefone do cliente"
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Coordenada X</Form.Label>
        <Form.Control
          type="text"
          placeholder="Coordenada X"
          onChange={(e) => setXCoordinate(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Coordenada Y</Form.Label>
        <Form.Control
          type="text"
          placeholder="Coordenada Y"
          onChange={(e) => setYCoordinate(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Cadastrar Cliente
      </Button>
    </Form>
  );
}
