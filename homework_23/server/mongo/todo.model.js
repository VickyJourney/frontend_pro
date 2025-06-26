const { Schema, model } = require("mongoose");

const TodoSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Todos", TodoSchema);
