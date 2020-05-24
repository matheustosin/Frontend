import { client as Http } from './http';

export const desativarMentoria = (headers) => Http.put(`/mentoria/deactivate/${headers.param.id}`, null, headers);
export const mentoriasByMentor = (headers) => Http.get('/mentoriaSession', headers);
export const cadastrarMentoria = (headers, data) => Http.post('/cadastroMentoria', data, headers);
