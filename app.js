const express = require('express');
const path = require ('path')
const app = express();

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));


app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
})

app.get('/register',(req, res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
})

app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
})

// app.listen(3000,()=>{
//     console.log('Servidor corriendo en http://localhost:3000')
// })

app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en puerto 3000');
})

