import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const get = instance.get;
export const post = instance.post;
