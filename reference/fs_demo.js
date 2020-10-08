const fs = require('fs');
const path = require('path');

// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
//     if(err) throw err;
//     console.log('Folder created....');
// });

// create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 
// 'Hello World, welcome to Node \n',
// err =>{
//     if(err) throw err;
//     console.log('File written to ....');

//     // Append file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 
//     'i love node.js',
//     err => {
//         if(err) throw err;
//         console.log('Text added');
//     });
// });

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) =>{
//     if(err) throw err;
//     console.log(data);
// });

// File renamed
fs.rename(path.join(__dirname, '/test', 'hello.txt'),
path.join(__dirname, '/test', 'helloWorld.txt'),
err => {
    if(err) throw err;
    console.log('File renamed....');
});