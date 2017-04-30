import axios from 'axios';

export const lambda = axios.create({
  baseURL: ENV.lambdaEndpoint,
});
