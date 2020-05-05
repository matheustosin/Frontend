import { client as Http } from './http';

export const login = (data) => Http.post('/login', data);
export const profile = (headers) => Http.get('/users', headers);
