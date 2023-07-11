import axios from 'axios';

export const testApi = axios.create({
	baseURL: 'http://localhost:4000',
});
