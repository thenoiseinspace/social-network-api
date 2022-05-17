const { Schema, Types, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionID: {type: Schema.Types.ObjectID, default: ()=> new Types.ObjectID,},
    reactionBody: {type: String, required: true, max_length: 280},
    username: {type: String, required: true},
    createdAt: {type: Date, required: true, default: Date.now(), match: /.+\@.+\..+/,},
  }
);

//No model for this one, only schema
// const Student = model('student', studentSchema);

module.exports = reactionSchema;

