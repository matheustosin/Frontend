import Http from './http';

export const login = (data) => Http.post('/login', data);

export const cadastrarMentor = (data) => Http.post('/users', data);
