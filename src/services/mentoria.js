import { client as Http } from './http';

export const atualizarMentoria = (data) => Http.post('/mentoria/deactivate/', null, data);
