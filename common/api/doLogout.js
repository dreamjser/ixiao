import fetch from 'isomorphic-fetch';

export default params => {
  return fetch('/doLogout', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json());
}
