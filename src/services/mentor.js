import { client as Http } from './http';

export const mentoriasByMentor = (headers) => Http.get('/mentoriaSession', headers);
export const cadastrarMentoria = (headers, data) => Http.post('/cadastroMentoria', data, headers);
