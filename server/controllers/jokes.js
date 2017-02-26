import MJokes from '../models/jokes';
import validator from '../services/validator';
import {
  vTitle,
  vJoke
} from '../../common/constants/validation';

class CJokes {
  constructor(connect) {
    this.joke = new MJokes(connect);
  }

  addJoke(req, res) {
    const params = req.body;

    validator.config = {
      title: {
        match: vTitle.match,
        msg: vTitle.matchMsg
      },
      joke: {
        match: vJoke.match,
        msg: vJoke.matchMsg
      }
    }

    const vData = {
      title: params.title,
      joke: params.joke
    };

    validator.validate(vData);

    if(validator.hasError()){
      res.send({
        code: 101,
        msg: validator.message
      });
      return;
    }

    this.joke.insertJoke(params, r => res.send(r));
  }
}

export default CJokes;
