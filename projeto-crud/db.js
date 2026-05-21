const mysql = require('mysql2');


//paramentro de configuracao do banco credenciais
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'catolica', //catolica
    database: 'userdb_vinicius2', 
    port: '3307'

});

//estabelecer conexão
db.connect(err =>{
    if(err) throw err;
    console.log('conectado ao banco de dados');    
});

module.exports = db;
