// const http = require('http')
// const fs = require('fs')
// const url = require('url')
// const path = require('path')


// http.createServer((req, res) =>{
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     const fileName = path.join(__dirname, req.url === '/' ? 'index.html' : req.url)
//     fs.readFile(fileName, (err, content)=>{
//         if(err){
//             fs.readFile(path.join(__dirname, '404.html'), (err, content) => {
//                 if(err) throw err
//                 res.writeHead(404, {'Content-Type': 'text/html'})
//                 res.write(content)
//                 res.end()
//             })
//         }else{
//             res.writeHead(200, {'Content-Type': 'text/html'})
//             res.write(content)
//             res.end()
//         }
//     })
// }).listen(8080)


const express = require('express')
const app = express()

const path = require('path')


app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, 'index.html'))
})

app.get('/about', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '/about.html'))
})

app.get('/contact-me', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '/contact-me.html'))
})

app.get('*', (req, res)=>{
    res.status(500).sendFile(path.join(__dirname, '/404.html'))
})

app.listen(3000, () =>{
    console.log("App Listening on port 3000");
})