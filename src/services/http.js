import axios from 'axios'
 
//const api = axios.create({baseURL: 'localhost:3000'})

var apiServer = `http://localhost`
var port = '3000'

const client = axios.create({
  baseURL: apiServer + ':' + port,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
})

export default client;