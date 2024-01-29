const express = require('express')
const app = express()

const port = 8000

app.listen(port, () => {
    console.log(`Server connected to port ${port}`)
})

app.get("/", (req, res) => {
    res.send(`
    <div>
        Hello World!
    </div>
  `)

    console.log("request received")
})