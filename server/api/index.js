import setUserApi from './users';
import setTokenApi from './token';
import setJokeApi from './jokes';

export default (app, connect) => {
  setUserApi(app, connect);
  setTokenApi(app, connect);
  setJokeApi(app, connect);
}

