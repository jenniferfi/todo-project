var express = require('express');
var router = express.Router();
var fs = require('fs');
//Hanna: lisätty id
const uuid = require('uuidv4').default;

//Hanna: array todos, jonne kerätään todo itemit
var todos = [];

// Hanna: GET/POST, todos listaus, jossa uusi id
router.route('').get(function (req, res, next) {
  res.json(todos);
}).post((req, res) => {
  let newTodo = req.body;
  newTodo.id = uuid();
  todos.push(newTodo);
  updateTodos();
  res.status(201).location(`http://localhost:3000/api/todos/${req.body.id}`)
    .send();
});
router.route('/:id')
  .get((req, res) => {
    for (var todo of todos) {
      if (todo.id == req.params.id) {
        res.json(todo);
        return;
      }
    }
    res.json("{'message': 'Error, no such to-do!'}");
  })
  //Hanna: ToDo itemin poistaminen id:n perusteella
  .delete((req, res) => {
    for (var todo in todos) {
      if (todos[todo].id == req.params.id) {
        todos.splice(todo, 1);
        res.json("{'message': 'To-do removed'}");
        updateTodos();
        return;
      }
    }
    res.json("{'message': 'Error, no such to-do!'}");
  })
  /*.put((req, res) => {
    //jos halutaan aidosti toimiva ratkaisu
  })*/
  ;
//Hanna: päivittää todot
function updateTodos() {
  fs.writeFile("todos.json", JSON.stringify(todos), () => {
  })
}

fs.readFile("todos.json", (err, data) => {
  todos = JSON.parse(data);
})
module.exports = router;
