var express = require('express');
var router = express.Router();
//Hanna: lisätty file server
var fs = require('fs)');

//Hanna: array nimetty todos
var todos = [];

// GET todos listing.
router.get('/', function(req, res, next) {
  res.json(todos);
}).post((req, res) => {
  console.dir(req.body)
  let newTodo = req.body;
  todos.push(newTodo);
  updateTodos();
  res.status(201).location(`http://localhost:3000/api/${req.body.id}`)
  send();
});

router.route('/id')
.get((req, res) => {
  for (var todo of todos) {
    if (todo.id == req.params.id) {
      res.json(todo);
      return;
    }
  }
  res.json("{'message': 'Error, no such to-do!'}");
})
.delete((req, res) => {
  for (var todo in todos) {
    if(todos[todo].id == req.params.id) {
      todos.splice(todo, 1);
      res.json("{'message': 'To-do removed'}");
      updateTodos();
      return;
    }
  }
  res.json("{'message': 'Error, no such to do!'}");
});

function updateTodos() {
  fs.writeFile("todos.json", JSON.stringify(todos), () => {
    console.log("List of to-dos updated!")
  })
}

fs.readFile("todos.json", (err,data) => {
  todos=JSON.parse(data);
  console.dir(todos);
})
module.exports = router;
