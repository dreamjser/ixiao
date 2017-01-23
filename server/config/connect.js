import mongoose from 'mongoose';
import config from '../../config';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb:' + config.db);

export default mongoose;
