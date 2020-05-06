const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ws.db');

db.serialize(function(){

/*

    //criar tabela ---*

    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `);


    
    //inserir dados ---*

    const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);
    `

    const values = [
        "https://image.flaticon.com/icons/svg/2737/2737547.svg",
        "Cursos de Programação",
        "Estudo",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "https://rocketseat.com.br"
    ]
    
    db.run(query, values, function(err){
        if(err) return console.log(err)

        console.log(this)
    })



    //deletar ----*

    db.run(`DELETE FROM ideas WHERE id = ?`, [5], function(err){
        if (err) return console.log(err)

        
    })



    //consultar ---*

    db.all(`SELECT * FROM ideas`, function(err, rows){
        if (err) return console.log(err)

        console.log(rows)
    });

*/

    
})

module.exports = db