import setUserApi from './users';
import setTokenApi from './token';

export default app => {
  setUserApi(app);
  setTokenApi(app);
}

