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

export function findAllUser() {
  console.log('hit this point');
  return fetch(`/api/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });
}

export function signUp({
  firstName,
  lastName,
  email,
  password,
  type,
  registrationDate
}) {
  return fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      type,
      registrationDate
    })
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

export function signIn({ email, password }) {
  return fetch('/api/signin', {
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
