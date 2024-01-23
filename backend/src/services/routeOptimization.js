import { CustomerModel } from '../models/customer.js';

const calculateDistance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

const findNearestNeighbor = (current, customers, visited) => {
  return customers.reduce((nearest, customer) => {
    if (!visited.has(customer.id)) {
      const distance = calculateDistance(current.x_coordinate, current.y_coordinate, customer.x_coordinate, customer.y_coordinate);
      return !nearest || distance < nearest.distance ? { customer, distance } : nearest;
    }
    return nearest;
  }, null);
};

const calculateRoute = (customers) => {
  let current = { x_coordinate: 0, y_coordinate: 0 }; // Starting point
  const route = [];
  const visited = new Set();

  while (route.length < customers.length) {
    const nearest = findNearestNeighbor(current, customers, visited);

    if (nearest) {
      visited.add(nearest.customer.id);
      route.push(nearest.customer);
      current = nearest.customer;
    } else {
      break;
    }
  }

  return route;
};

export const getOptimizedCustomerRoute = async () => {
  const customers = await CustomerModel.findAllWithCoordinates();
  return calculateRoute(customers);
};
