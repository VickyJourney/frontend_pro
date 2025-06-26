const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./mongo/todo.model");

const connect = mongoose.connect(
  "mongodb+srv://nirexe9026:q8y9So4J3Clzo1pp@cluster0.y7vjrrg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
connect.then(() => console.log("Connected!"));

app.use(cors());
app.use(express.json());

app.listen(8080, () => {
  console.log("Server is running on 8080.");
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  console.log(todos);
  res.send(todos);
});

app.post("/todos", async (req, res) => {
  const newTodo = new Todo({
    name: req.body.name,
  });
  const createdTodo = await newTodo.save();
  res.send(createdTodo);
});

app.delete("/todos/:id", async (req, res) => {
  const deletedTodo = await Todo.deleteOne({ _id: req.params.id });
  res.send(deletedTodo);
});

app.put("/todos/:id", async (req, res) => {
  const updatedTodo = await Todo.findOneAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      isDone: req.body.isDone,
    }
  );
  res.send(updatedTodo);
});
