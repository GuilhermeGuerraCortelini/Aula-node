const express = require("express") // biblioteca

const mysql = require("mysql2/promise")

const PORT = 3000 // definindo a porta
const app = express()

// get 
app.get('/', (req, res) => {
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'aula0104'
    })
    console.log(conn)
    res.send('Hello World!')
})

// rodar o servidor
app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}!`)
})