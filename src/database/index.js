const mongoose = require('mongoose')

function connect(){
    //mongoose.set('useNewUrlParser', true)
    //mongoose.set('useUnifiedTopology', true)
    
    mongoose.connect('mongodb://localhost:27017')
    
    const db = mongoose.connection
    
    // Caso a conexão seja realizada com sucesso
    db.once('open', () => {
        console.log('Conected to database!')
    })
    
    // Caso der erro na conexão
    db.on('error', console.error.bind(console,'Connection error: '))
}

module.exports = {
    connect
}