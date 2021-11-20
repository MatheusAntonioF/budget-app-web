import axios from 'axios';

import globalEnvs from '../config/global';

const api = axios.create({
  baseURL: globalEnvs.api_base_url,
});

export { api };
