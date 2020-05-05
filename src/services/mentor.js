import { client as Http } from './http';

export const mentoriasByMentor = (headers) => Http.get('/mentoriaSession', headers);