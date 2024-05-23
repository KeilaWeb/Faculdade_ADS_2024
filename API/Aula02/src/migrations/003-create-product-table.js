const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");

async function createProductTable(){
    try{
        const connection = await mysql.createConnection(databaseConfig);
        await connection.query(`USE ${databaseConfig.database}`)
        await connection.query(
            `CREATE TABLE IF NOT EXISTS product(
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(255) not null,
                preco VARCHAR(255),
                estoque int
            )`
        );
        await connection.end();
        console.log("TABLE PRODUCT CREATED!")
    }catch(error){
        console.log(`Error creating table product: ${error}`);
    }
}

createProductTable()