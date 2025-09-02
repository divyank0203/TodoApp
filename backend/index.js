const express = require("express");
const { Todo } = require("./db");
const { createTodoschema, updateTodoschema } = require("./types");
const app = express();
// const zod = require("zod");

// const schema = zod.object({
//     title: zod.string(),
//     description: zod.string(),
// })

app.use(express.json());

app.post('/todo', async function(req, res){ //to create a todo
const newTodo = req.body;
const val = createTodoschema.safeParse(newTodo);
if(!val.success){
    res.status(411).json({
        msg: "You sent the wrong inputs"
    })
    return;
}
//if the input format is correct, put this in mongodb and create a todo

await Todo.create({
    title: newTodo.title, 
    description: newTodo.description,
    completed: false
})

res.json({
    msg: "Todo created successfully"
})

})

app.get('/todos', async function(req, res){ //to get all todos or a specific todo
    const todos = await Todo.find({});
    console.log(todos);
    res.json(todos);
})

app.put('/completed', async function(req, res){ // to mark a todo as completed
const todoId = req.body;
const val2 = updateTodoschema.safeParse(todoId);
if(!val2.success){
    res.status(411).json({
        msg: "You sent the wrong inputs"
    })
    return;
}
await Todo.updateOne({ _id: req.body.id}, {completed: true})
res.json({
    msg: "Todo marked as completed"
})
})


app.listen(3000);