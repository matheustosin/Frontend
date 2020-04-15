import axios from 'axios';

// const api = axios.create({baseURL: 'localhost:3000'})

const apiServer = `http://${(process.env.API_URL) ? process.env.API_URL : 'localhost'}`;
const port = (process.env.API_PORT) ? process.env.API_PORT : '3000';

console.log(`BASE_URL ${apiServer}:${port}`);

const client = axios.create({
  baseURL: `${apiServer}:${port}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export default client;
