import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

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

    // Additional validations (like email format, phone number format, etc.) can be added here

    const newCustomer = {
      name,
      email,
      phone,
      xCoordinate,
      yCoordinate
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCustomer)
    };
    // const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const apiBaseUrl = "http://localhost:5000/api";

    fetch(`${apiBaseUrl}/customers`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
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
