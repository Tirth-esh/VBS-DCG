import axios from 'axios';

export const server_uri = 'http://localhost:5000';

export const registerUser = async (credentials) => {
  const res = await axios.post(`${server_uri}/auth/signup`, {
    name: credentials.name,
    email: credentials.email,
    password: credentials.password,
  });
  return res;
};

export const loginUser = async (credentials) => {
  const res = await axios.post(`${server_uri}/auth/login`, {
    email: credentials.email,
    password: credentials.password,
  });
  return res;
};