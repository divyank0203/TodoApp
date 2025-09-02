const express = require("express");
const { createTodoschema, updateTodoschema } = require("./types");
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
if(!val.success){
    res.status(411).json({
        msg: "You sent the wrong inputs"
    })
    return;
}
//if the input format is correct, put this in mongodb and create a todo
})

app.get('/todos', function(req, res){ //to get all todos or a specific todo

})

app.put('/completed', function(req, res){ // to mark a todo as completed
const todoId = req.body;
const val2 = updateTodoschema.safeParse(todoId);
if(!val2.success){
    res.status(411).json({
        msg: "You sent the wrong inputs"
    })
    return;
}
})


app.listen(3000);