const express = require("express");
const cors = require("cors");

const produtoRoutes = require("./routes/produto.route");
const fornecedorRoutes = require("./routes/fornecedor.route");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/produtos", produtoRoutes);
app.use("/fornecedores", fornecedorRoutes);
app.listen(3000, () => {
	console.log("Servidor rodando na porta 3000");
});
