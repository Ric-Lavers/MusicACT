import jwt_decode from 'jwt-decode';
import * as auth from './auth';
const TOKEN_KEY = 'token';

export function token() {
  return localStorage.getItem(TOKEN_KEY);
}

export function createProfile({ input, token }) {
  return fetch('/directory/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      input,
      token
    })
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });
}
