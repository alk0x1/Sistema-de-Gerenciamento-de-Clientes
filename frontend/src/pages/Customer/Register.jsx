import { Link } from 'react-router-dom';
import { RegisterCustomerForm } from '../../components/Customer/RegisterForm';

export function RegisterCustomer() {
  return (
    <>
      {/* <ToastContainer /> */}
      <h1>Cadastrar Cliente</h1>
      <RegisterCustomerForm />
      <p><Link to="listCustomers">ver clientes cadastrados</Link></p>
    </>
  );
}
