import axios from 'axios';

const baseURL = 'https://cafe-backend-davidivad96.herokuapp.com/api';

const cafeApi = axios.create({ baseURL });

export default cafeApi;
