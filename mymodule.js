// const fullname = ["Juan dela Cruz", "Pedro Penduko", "Tiagong Akyat"]

// const students = [
//     { name: fullname[0], age: 18, course: 'IT' },
//     { name: fullname[1], age: 19, course: 'IS' },
//     { name: fullname[2], age: 20, course: 'CS' }
// ]

// const hello = function (name = "Cardo") {
//     console.log(`Hello ${name}`);
// }

// module.exports = { fullname, students, hello }

// ------------------------

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url);
    // res.setHeader('Content-Type', 'text/html')


    let myurl = './views/'
    if (req.url == '/') {
        myurl += 'index.html'
        res.statusCode = 200
    } else if (req.url == '/about') {
        myurl += 'about.html'
        res.statusCode = 200
    } else {
        myurl += 'error.html'
        res.statusCode = 404
    }
    fs.readFile(myurl, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listen')
})