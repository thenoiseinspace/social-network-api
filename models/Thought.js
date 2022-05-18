const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({

  thoughtText: { type: String, required: true, min_length: 1, max_length: 280,},
  createdAt: { type: Date, required: true, default: Date.now(), match: /.+\@.+\..+/,},
  username: [{type: String, required: true, }],
  reactions: [ Reaction ],
});

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

