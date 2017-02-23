import md5 from 'md5';
import {
  createClient
} from 'redis';

const client = createClient();

export default {
  clear(res, params) {
    const maxAge = -1;

    res.cookie('email', '', {
      maxAge
    });
    res.cookie('data', '', {
      maxAge
    });
    res.cookie('auth', '', {
      maxAge
    })

    client.del(email);
  },
  set(res, params) {
    const maxAge = 30 * 24 * 60 * 60 * 1000;

    res.cookie('email', params.email, {
      maxAge
    });
    res.cookie('data', JSON.stringify(params), {
      maxAge
    });
    res.cookie('auth', md5(params._id), {
      httpOnly: true,
      maxAge
    })

    client.set(params.email, md5(params._id));
  }
}
