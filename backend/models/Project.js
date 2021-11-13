const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  github: { type: String, required: true },
  demo: { type: String, required: true },
  stack: { type: String, required: true },
  args: { type: Array, required: true },
  position: { type: Array, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Project', projectSchema);





