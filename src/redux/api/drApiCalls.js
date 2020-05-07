import fetch from 'node-fetch';

const endPoint = 'http://localhost:4000/fds';

export const login = ({ username, password }) => (fetch(`${endPoint}/rider/login/${username}/${password}`))


