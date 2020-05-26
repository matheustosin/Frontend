import { client as Http } from './http';

export const allAreas = (headers) => Http.get('/areaConhecimento', headers);
