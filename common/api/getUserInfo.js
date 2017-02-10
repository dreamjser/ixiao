import fetch from 'isomorphic-fetch';

export default () => {
  return fetch('/getUserInfo',{
    credentials: 'same-origin',
  })
    .then(res => res.json());
}
