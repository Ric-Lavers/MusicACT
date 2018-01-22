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

export function createProfile(profile) {
  // console.log(profile);
  const id = { _id: profile._id };
  const contactDetails = profile.contactDetails;
  const bio = profile.profile;
  const socialIcons = profile.socialMedia;
  const socialEmbed = profile.multimedia;

  return fetch('/directory/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      contactDetails,
      bio,
      socialIcons,
      socialEmbed
    })
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });
}
