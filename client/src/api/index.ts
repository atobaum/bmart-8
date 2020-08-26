import axios from 'axios';

const baseURL = 'http://localhost:4000/api';

export const googleLogin = async () => {
  window.location.href = `${baseURL}/auth/google`;
};
