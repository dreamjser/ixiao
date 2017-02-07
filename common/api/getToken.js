import fetch from 'isomorphic-fetch';

export default () => {
  return fetch('/getToken',{
    credentials: 'same-origin',
  })
    .then(res => res.json());
}
