// here we will put all the zod schemas for the input that we expect from the user

const zod = require("zod");

const createTodoschema = zod.object({
    title: zod.string(),
    description: zod.string(),
})

const updateTodoschema = zod.object({
    // title: zod.string().optional(),
    // description: zod.string().optional(),
    // isCompleted: zod.boolean().optional(),
    id: zod.string()
})


// tO export these schemas to our main file i.e., index.js:--

module.exports = {
    createTodoschema: createTodoschema,
    updateTodoschema: updateTodoschema
}