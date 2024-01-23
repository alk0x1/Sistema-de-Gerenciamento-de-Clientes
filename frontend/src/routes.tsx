import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom' 
import { RegisterCustomer } from './pages/Customer/Register';
import { ListCustomers } from './pages/Customer';


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<RegisterCustomer />} />
        <Route path="/listCustomers"  element={<ListCustomers />} />
      </Routes>
    </BrowserRouter>
  )
}
