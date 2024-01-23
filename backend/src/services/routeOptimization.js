import { CustomerModel } from '../models/customer.js';

// Calcula a distância euclidiana entre dois pontos (x1, y1) e (x2, y2)
const calculateDistance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

// Encontra o vizinho mais próximo de um ponto atual, dentro de uma lista de clientes
const findNearestNeighbor = (current, customers, visited) => {
  return customers.reduce((nearest, customer) => {
    // Verifica se o cliente atual já foi visitado
    if (!visited.has(customer.id)) {
      // Calcula a distância entre o ponto atual e o cliente atual
      const distance = calculateDistance(current.x_coordinate, current.y_coordinate, customer.x_coordinate, customer.y_coordinate);
      // Retorna o cliente mais próximo até agora, ou o cliente atual se for mais próximo
      return !nearest || distance < nearest.distance ? { customer, distance } : nearest;
    }
    // Se o cliente já foi visitado, mantém o mais próximo encontrado até agora
    return nearest;
  }, null);
};

// Calcula a rota otimizada passando por todos os clientes
const calculateRoute = (customers) => {
  let current = { x_coordinate: 0, y_coordinate: 0 }; // Ponto inicial (supõe-se ser a localização da empresa)
  const route = []; // Armazena a rota otimizada
  const visited = new Set(); // Armazena os IDs dos clientes já visitados

  // Enquanto houver clientes não visitados
  while (route.length < customers.length) {
    // Encontra o cliente mais próximo do ponto atual
    const nearest = findNearestNeighbor(current, customers, visited);

    if (nearest) {
      // Marca o cliente como visitado
      visited.add(nearest.customer.id);
      // Adiciona o cliente à rota
      route.push(nearest.customer);
      // Atualiza o ponto atual para a localização do cliente visitado
      current = nearest.customer;
    } else {
      // Se não encontrar um vizinho mais próximo, interrompe o loop
      break;
    }
  }

  // Retorna a rota otimizada
  return route;
};


export const getOptimizedCustomerRoute = async () => {
  const customers = await CustomerModel.findAllWithCoordinates();
  return calculateRoute(customers);
};
