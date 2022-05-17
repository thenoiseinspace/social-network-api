const { Schema, Types, Model } = require('mongoose');
const mongoose = require('mongoose');

// Construct a new instance of the schema class
const userSchema = new mongoose.Schema({

  username: { type: String, unique: true, required: true, trim: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/,},
  thoughts: [{type: Schema.Types.ObjectId, ref: Thought, }],
  friends: [{type: Schema.Types.ObjectId, ref: User, }],
});

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
