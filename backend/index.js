const express = require("express");
const { createTodoschema } = require("./types");
const app = express();
// const zod = require("zod");

// const schema = zod.object({
//     title: zod.string(),
//     description: zod.string(),
// })

app.use(express.json());

app.post('/todo', function(req, res){ //to create a todo
const newTodo = req.body;
const val = createTodoschema.safeParse(newTodo);
})

app.get('/todos', function(req, res){ //to get all todos or a specific todo

})

app.put('/completed', function(req, res){ // to mark a todo as completed
const todoId = req.body.id;
const val2 = updateTodoschema.safeParse(todoId);
})


app.listen(3000);