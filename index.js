const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')


http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    const fileName = path.join(__dirname, req.url === '/' ? 'index.html' : req.url)
    fs.readFile(fileName, (err, content)=>{
        if(err){
            fs.readFile(path.join(__dirname, '404.html'), (err, content) => {
                if(err) throw err
                res.writeHead(404, {'Content-Type': 'text/html'})
                res.write(content)
                res.end()
            })
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(content)
            res.end()
        }
    })
}).listen(8080)