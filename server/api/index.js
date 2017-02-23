import setUserApi from './users';
import setTokenApi from './token';

export default (app, connect) => {
  setUserApi(app, connect);
  setTokenApi(app, connect);
}

