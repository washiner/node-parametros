const express = require('express')
const app = express()


app.get('/Ola/:cargo/:nome/:cor', function(require, response){
   response.send(" <h1>Ola " + require.params.nome+"</h1> "+ " <h1> Seu cargo e: " 
   + require.params.cargo+ " </h1> "+ " <h1>Sua cor favorita e: " + require.params.cor+ "</h1>")
})



app.listen(3000, function(){
     console.log("Servidor logado na porta :3000")
})

// nao pode usar mais de um send na sua funcao de rotas
// sempre colocando /:nome do atributo