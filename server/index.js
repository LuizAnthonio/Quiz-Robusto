const express = require('express');
const app = express()
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
//const ejs = require('ejs');
const mongoose = require('mongoose')


const porta = 8080;



app.use(cors());
app.use(express.json())
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 
  
/*
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages'));

*/


//conectar o servidor com o Mongoose
const connectDatabase = () =>{
    console.log('Esperando conexão');
    
    mongoose.connect("mongodb+srv://Zezin0001:yGEFbGDqtV4MzNFH@cluster0.o5bhl.mongodb.net/quiz?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=> console.log('Mongo Conectado Com SUCESSO!')).catch((error)=> console.log(error))
}

module.exports = connectDatabase;

connectDatabase()



//estrutura do banco de dados

var Schema = mongoose.Schema;

var postSchema = new Schema({
    question:String,
    options:Array,
    answer:String,
    tag:String
},{collection:'perguntas'})


//variavel das tabelas Model
var Perguntas = mongoose.model("perguntas",postSchema);

module.exports = Perguntas;


//inserindo no banco de dados

function cadastrar_MongoDB(question,options,answer,tag){
    Perguntas.create({
        question:question,
        options:options,
        answer:answer,
        tag:tag
    })
}

module.exports = cadastrar_MongoDB;



//cadastrar_MongoDB(nome,cargo)

//console.log(collection("perguntas").find({cargo: "Garoto de Programa"}))

//let db = mongoose.model("perguntas",postSchema)




/*
perguntas.find({cargo: "Garoto de Programa"}, (error, data) => {
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})
*/

//console.log(teste)

/*
perguntas.find({cargo:"Garoto de Programa"}.exec(function(err,perguntas){
            
    
  
    perguntas = perguntas.map( val => {

    })
    
   
   

}))


myModel.find({}).then((res) => {
  //if succeded do this block of code
}).catch((err) => {
  //catch error
});



*/

//const teste = []

Perguntas.find({nome: "Luiz"}).then((res) => {
    //if succeded do this block of code
    //console.log(res)

    //teste.push(res)



    return res;
    


  }).catch((err) => {
    //catch error
  });


//  console.log('teste ',zabu)

 /* 

Perguntas.find({}).exec(function(err,perguntas){
    //console.log(posts[0]);

    agend = perguntas.map(function(val){
        return{
            nome: val.nome,
            cargo: val.cargo

            
            
        }
    })

    //res.render('home',{posts:posts});
    console.log(agend)
    


})

*/

app.post("/", (req,res)=> {

    console.log(req.body.selected)

    const selected = req.body.selected

    

    module.exports = selected

    
    
      

     
  





})


app.post('/categoria', (req,res)=> {
    console.log(req.body.selected)

    const selected = req.body.selected
})



app.get("/", (req,res)=> {

  //  console.log(selected)

        Perguntas.find({}).then((resp) => {
            //if succeded do this block of code
            console.log(resp)
        
            //teste.push(res)
        
        
            
             res.json(resp);
            
        
        
          }).catch((err) => {
            //catch error
          }); 

    

   
                //res.send()
            
    
    //res.send()

})






app.post('/register', (req,res)=> {

    let question = req.body.question
    let answer = req.body.answer
    let options = req.body.options
    let tag = req.body.tag


    let enviar = {
        question:question,
        options:options,
        answer:answer,
        tag:tag
    }

    console.log(enviar)

    cadastrar_MongoDB(question,options,answer,tag)

    
    
    //var nome = "Luiz"
   // var cargo = "Garoto de Programa"
    
 
})



app.listen(porta, ()=> {
    console.log(`a porta é ${porta}`)
   
})