const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');

let blogPosts = [];

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req,res)=>
{
    res.render('index',{blogPosts:blogPosts});
});
app.get('/new',(req,res)=>
{
    res.render('new');
});
app.post('/add',(req,res)=>{
    const { title, content } = req.body;
    blogPosts.push({ title, content });
    res.redirect('/');
});
app.listen(port,()=>{

    console.log(`Server is running ${port}`);
})