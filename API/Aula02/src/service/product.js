const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllProduct(){
    const connection = await mysql.createConnection(databaseConfig);
    const [rows] = await connection.query("SELECT * FROM product");
    await connection.end();
    return rows;
}

async function createProduct(nome, preco, estoque){
    const connection = await mysql.createConnection(databaseConfig);  //cria conexão
    const insertproduct = 'INSERT INTO product(nome, preco, estoque) VALUES(?, ?, ?)';
    await connection.query(insertproduct, [nome, preco, estoque ]) //chama conexão
    await connection.end(); //usa conexao
}

async function updateProduct(id, nome, preco, estoque){
    const connection = await mysql.createConnection(databaseConfig);
    const updateProduct = 'UPDATE product SET nome = ?, preco = ?, estoque = ? WHERE id = ?';
    await connection.query(updateProduct, [nome, preco, estoque, id]);
}

async function deleteProduct(id){
    const connection = await mysql.createConnection(databaseConfig);
    await connection.query('DELETE FROM product WHERE id = ?', [id]);
    await connection.end();
}

async function getProductById(id){
    const connection = await mysql.createConnection(databaseConfig);
    const[product] = await connection.query("SELECT * FROM product WHERE id = ?",[id]);
    await connection.end();
    return product
}

module.exports = {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById
};