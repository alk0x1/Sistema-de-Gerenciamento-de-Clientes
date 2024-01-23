// const apiBaseUrl = process.env.REACT_APP_API_URL;
const apiBaseUrl = "http://localhost:5000/api";

export const fetchCustomers = async () => {
  return fetch(`${apiBaseUrl}/customers`).then(res => res.json());
};

export const deleteCustomer = (customerId) => {
  return fetch(`${apiBaseUrl}/customers/${customerId}`, { method: 'DELETE' });
};

export const createCustomer = async (newCustomer) => {
  return fetch(`${apiBaseUrl}/customers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newCustomer)
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
};
