const express = require("express") // biblioteca

const mysql = require("mysql2/promise")

const PORT = 3000 // definindo a porta
const app = express() // usar express

// get 
app.get('/', async (req, res) => {
    const conn = await mysql.createConnection({ // await em funçao assincrona
        host: 'localhost',
        user: 'root',
        database: 'aula0104'
    })

    const [resultado] = await conn.query({
        sql: "SELECT id, nome, sobrenome FROM pessoas"
    })
    // res.send('Hello World!')
    // Map: retornar um vetor com os mesmo valores / Filter: retornar parte do nosso vetor
    // res.json(resultado.map(function(pessoa){
    //     return {
    //         id: pessoa.id,
    //         nomeCompleto: pessoa.nome + '' + pessoa.sobrenome
    //     }
    // }))
    res.json(resultado.map(( {id, nome, sobrenome}) => ({id, nome, sobrenome, nomeCompleto: `${nome} ${sobrenome}`}) ))
})

app.post('/', (req, res) => {
    res.send("Você enviou uma requisição POST")
})

// rodar o servidor
app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}!`)
})