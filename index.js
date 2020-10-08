// const Person = require('./person');

// const person1 = new Person('John Doe', 31);
// const person2 = new Person('Will Smith', 42);
// person1.greeting();
// person2.greeting();

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // if(req.url === '/'){
        
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type':'text/html'});
    //         res.end(content);
    //     });
        
    // }

    // if(req.url === '/api/users'){

    //     const users = [
    //         {name: 'Bob Smith', age: '40'},
    //         {name: 'John Doe', age: '32'}
    //     ];
        
    //         res.writeHead(200, { 'Content-Type':'application/json'});
    //         res.end(JSON.stringify(users));
        
        
    // }

    // Build file path
    let filepath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // Extension of file
    let extname = path.extname(filepath);

    // initial content
    let contentType = 'text/html';

    // check ext and set content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
    }

    // read file
    fs.readFile(filepath, (err, content) => {
        if(err){
            if(err.code == 'ENOENT'){
                // page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) =>{
                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.end(content, 'utf8')
                })
            } else{
                // Server error
                res.writeHead(500);
                res.end(`Server Error ${err.code}`)
            }
        } else {
            // Success
            res.writeHead(200, {'Content-Type' : contentType});
            res.end(content, 'utf8')
        }
    });
    // console.log(filepath);
    // res.end();
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server running on port : ${PORT}`));