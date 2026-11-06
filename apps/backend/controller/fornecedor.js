const Fornecedor = require("../models/Fornecedor");

async function listar(req, res) {
	const dados = await Fornecedor.findAll();
	res.json(dados);
}

async function cadastrar(req, res) {
	await Fornecedor.create(req.body);
	res.send("Fornecedor cadastrado");
}

async function alterar(req, res) {
	await Fornecedor.update(req.body, {
		where: { id: req.params.id },
	});
	res.send("Fornecedor alterado");
}

async function excluir(req, res) {
	await Fornecedor.destroy({
		where: { id: req.params.id },
	});
	res.send("Fornecedor excluído");
}

module.exports = {
	listar,
	cadastrar,
	alterar,
	excluir,
};
