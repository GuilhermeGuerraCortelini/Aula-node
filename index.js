const express = require("express") // importar uma biblioteca 

const app = express() // criar o servidor 
const PORT = 3000

app.get('/', function(req,res){ // app.método / req - requisição  res - resposta / _ ignora o parâmetro
    res.send('Você enviou uma requisição GET!')
})

app.get('/cidade/:cidade', function(req,res){ // app.método / req - requisição  res - resposta / _ ignora o parâmetro / cidade/Bento muita mão então => cidade/:cidade
    console.log(req.params)
    const {cidade} = req.params
    res.send(`Você está em cidade ${cidade}`)// ou res.send('Você está em cidade + req.params.cidade')
})

app.post('/', function(_,res){
    res.send('Você enviou uma requisição POST!')
})

app.put('/', function(_,res){
    res.send('Você criou uma requisição PUT!')
})

app.delete('/', function(_,res){
    res.send('Você enviou uma requisição DELETE!')
})

app.listen(PORT, function(){ // em qual porta do computador vai chegar, nesse caso a porta 3000, função para ver se deu certo
    console.log(`Servidor rodando na porta ${PORT}!`) // ` chamar variáveis / acessar = localhost:3000
}) 