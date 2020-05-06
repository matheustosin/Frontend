import Http from './http';

export const login = (data) => Http.post('/login', data);

export const cadastrarUsuario = (data) => Http.post('/users', data);
