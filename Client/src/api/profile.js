// import jwt_decode from 'jwt-decode';
// import * as auth from './auth';
const TOKEN_KEY = 'token';

export function token() {
  var token = localStorage.getItem(TOKEN_KEY);
  if (token !== null) {
    return token;
  }
  return null;
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
