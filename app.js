const express = require('express');
const app = express();
app.use(express.static('public'));

app.set("puerto",process.env.PORT || 3000)

// app.listen(3000, ()=>{
//     console.log('Servidor funcionando')
// });
app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
app.get('/producto', (req,res)=>{
    res.sendFile(__dirname + '/views/producto.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});