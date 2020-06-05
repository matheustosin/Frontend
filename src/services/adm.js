import { client as Http } from './http';


export const pendingMentorings = (headers) => Http.get('/pendingMentorings', headers);
