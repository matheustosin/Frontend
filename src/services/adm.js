import { client as Http } from './http';

export const mentoringEvaluation = (headers, id) => Http.put(`/mentoringEvaluation/${id}`, headers);
export const pendingMentorings = (headers) => Http.get('/pendingMentorings', headers);
