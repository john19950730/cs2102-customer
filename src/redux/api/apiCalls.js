import fetch from 'node-fetch';

const endPoint = 'http://localhost:4000/';

export const login = ({ username }) => (fetch(`${endPoint}fds/customer/login/${username}`));
