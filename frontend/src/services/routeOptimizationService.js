// const apiBaseUrl = process.env.REACT_APP_API_URL;
const apiBaseUrl = "http://localhost:5000/api";

export const fetchOptimizedRoute = async () => {
  return fetch(`${apiBaseUrl}/customers/optimize-route`).then(res => res.json());
};
