import Http from './http';


export const mentorias = (headers) => Http.get('/mentoriaSession', headers);
