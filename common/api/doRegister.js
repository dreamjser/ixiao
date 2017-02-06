import fetch from 'isomorphic-fetch';

export default params => {
  return fetch('/doRegister', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(res => res.json());
}
