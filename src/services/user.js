import { client as Http } from './http';

export const login = (data) => Http.post('/login', data);
export const cadastrarUsuario = (data) => Http.post('/users', data);
<<<<<<< HEAD
=======
export const editarUsuario = (data, headers) => Http.put('/users', data, headers);
>>>>>>> develop
export const profile = (headers) => Http.get('/users', headers);
