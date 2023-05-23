const express = require(`express`);
const app = express();
const port = 3000;
app.get(`/`,(req,res)=>{
    res.send(`Hello World!`)
})
app.get(`/users`,(req,res)=>{
    res.json(["user1", "user2", "user3"])
})
app.post(`/users`,(req,res)=>{
    res.send(`юзер добавлен`)
})
app.get(`/admin`,(req,res)=>{
    res.json(`Нет доспута`)
})
app.delete(`/users/:id`,(req,res)=>{
    res.json(`юзер с этим id удалён`)
})
app.patch(`/users/:id`,(req,res)=>{
    res.json(`юзер с этим id изменён`)
})
app.listen(port,()=>{
    console.log(`сервер был запущен`)
})