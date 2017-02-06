import fetch from 'isomorphic-fetch';

export default email => {
  return fetch(`/checkEmailUnique?email=${email}`)
    .then(res => res.json());
}
