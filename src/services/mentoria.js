import { client as Http } from './http';

export const desativarMentoria = (headers) => Http.delete(`/mentoria/deactivate/${headers.param.id}`, headers);
export const atualizarMentoria = (headers, data) => Http.put(`/mentoria/alter/${headers.headers.param.id}`, data, headers);
export const mentoriasByMentor = (headers) => Http.get('/mentoriaSession', headers);
export const cadastrarMentoria = (headers, data) => Http.post('/cadastroMentoria', data, headers);
// export const mudarVisibilidade = (headers, data) => Http.post('/cadastroMentoria', data, headers);
