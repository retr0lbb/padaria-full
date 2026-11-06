const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Fornecedor = sequelize.define("Fornecedor", {
 nome: DataTypes.STRING,
 telefone: DataTypes.STRING
}, {
 tableName: "fornecedor",
 timestamps: false
});
module.exports = Fornecedor;