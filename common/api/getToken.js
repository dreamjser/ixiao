import fetch from 'isomorphic-fetch';

export default () => {
  return fetch('/getToken')
    .then(res => res.json());
}
