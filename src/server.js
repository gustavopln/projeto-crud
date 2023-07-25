//express é uma função, precisa ser chamada para retornar uma aplicação em express
const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')

//dentro de app tem vários métodos que vão ajudar a construir o servidor
const app = express()

// conexão com o banco de dados
db.connect()

// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// definindo um middleware para habilitar server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true}))

// definindo as rotas da aplicação
app.use('/', routes)

// 404 error (not found)
app.use((req, res) => { // middleware - executa entre uma requisição
    res.send('Página não encontrada!')
})

// executando o servidor
// Quando instalar em um servidor, o servidor que vai escolher em qual porta vai rodar, para isso usaremos dessa forma
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is lintening on port ${port}`))