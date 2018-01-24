// import jwt_decode from 'jwt-decode';
// import * as auth from './auth';
import queryString from 'query-string';

const TOKEN_KEY = 'token';

export function token() {
  var token = localStorage.getItem(TOKEN_KEY);
  if (token !== null) {
    return token;
  }
  return null;
}

// export function hasProfileId(id){
//
//
// }

export function createProfile(profile) {
  // console.log(profile);
  const id = { user: profile._id };
  const contactDetails = profile.contactDetails;
  const bio = profile.profile;
  const socialIcons = profile.socialMedia;
  const socialEmbed = profile.multimedia;

  return (
    fetch('/api/directory/create', {
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
      // .then(res => localStorage.setItem('hasProfile', res))
      .catch(error => {
        console.log(error);
      })
  );
}

export function fetchProfile(id) {
  // const userID = encodeURIComponent(id);
  // const userID = queryString.stringify(id);
  // console.log(`user ID here ${userID}`);
  // console.log(userID);
  return fetch(`/api/directory/${id}`, {
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
