const TOKEN_KEY = 'token';

function setToken(token) {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    localStorage.removeItem(TOKEN_KEY);
  }
}

export function token() {
  return localStorage.getItem(TOKEN_KEY);
}

export function signIn({ email, password }) {
  const SIGNIN_URL = 'http://localhost:3001/signin';

  return fetch('/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
    .then(json => {
      if (json) {
        setToken(json['token']);
      }
      return json;
    })
    .catch(error => {
      console.log(error);
    });
}

export function isSignedIn() {
  return !!token();
}

export function signOut() {
  setToken();
}
