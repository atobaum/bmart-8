import React from 'react';
import { useHistory } from 'react-router-dom';
import qs from 'querystring';

const LoginCallbackPage: React.FC<any> = ({ match }: any) => {
  const history = useHistory();
  const { token } = qs.parse(window.location.search.replace('?', ''));
  localStorage.setItem('token', token as string);
  history.push('/');
  return <></>;
};

export default LoginCallbackPage;
