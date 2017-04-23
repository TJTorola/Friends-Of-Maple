import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://vgi5mhxvwd.execute-api.us-east-1.amazonaws.com/dev',
});

export const get = instance.get;
export const post = instance.post;
