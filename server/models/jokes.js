import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const JokersSchema = new Schema({

});

const Jokers = mongoose.model('jokers', JokersSchema);

export default Jokers;
