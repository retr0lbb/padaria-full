const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Fornecedor = require("./Fornecedor");

const Produto = sequelize.define("Produto", {
 nome: DataTypes.STRING,
 preco: DataTypes.DECIMAL(10,2),
 quantidade: DataTypes.INTEGER,
 fornecedor_id: DataTypes.INTEGER
}, {
 tableName: "produto",
 timestamps: false
});
Fornecedor.hasMany(Produto, {
 foreignKey: "fornecedor_id"
});
Produto.belongsTo(Fornecedor, {
 foreignKey: "fornecedor_id"
});

module.exports = Produto;