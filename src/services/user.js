import Http from './http'

export const login = data => Http.post('/login', data)