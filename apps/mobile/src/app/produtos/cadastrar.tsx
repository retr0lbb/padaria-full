import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import CampoTexto from "../../components/campoTexto";
import { api } from "../../constants/api";
export default function CadastrarProduto() {
	const [nome, setNome] = useState("");
	const [preco, setPreco] = useState("");
	const [quantidade, setQuantidade] = useState("");
	const [fornecedorId, setFornecedorId] = useState<number | null>(null);
	const [fornecedores, setFornecedores] = useState<any[]>([]);

	useEffect(() => {
		api.get("/fornecedores").then((res) => setFornecedores(res.data));
	}, []);

	function cadastrar() {
		const produto = {
			nome,
			preco: Number(preco),
			quantidade: Number(quantidade),
			fornecedor_id: fornecedorId,
		};
		api.post("/produtos", produto).then(() => router.replace("/produtos"));
	}
	return (
		<ScrollView style={estilos.container}>
			<Text style={estilos.titulo}>Cadastrar Produto</Text>
			<CampoTexto titulo="Nome" valor={nome} alterar={setNome} />
			<CampoTexto titulo="Preço" valor={preco} alterar={setPreco} />
			<CampoTexto
				titulo="Quantidade"
				valor={quantidade}
				alterar={setQuantidade}
			/>
			<Text style={estilos.label}>Selecione o Fornecedor:</Text>
			{fornecedores.map((item) => (
				<Pressable
					key={item.id}
					style={[
						estilos.fornecedor,
						fornecedorId === item.id && estilos.selecionado,
					]}
					onPress={() => setFornecedorId(item.id)}
				>
					<Text style={estilos.textoFornecedor}>{item.nome}</Text>
				</Pressable>
			))}
			<Pressable style={estilos.botao} onPress={cadastrar}>
				<Text style={estilos.textoBotao}>Cadastrar</Text>
			</Pressable>
		</ScrollView>
	);
}
const estilos = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#f5f5f5",
	},
	titulo: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	label: {
		fontSize: 16,
		marginBottom: 10,
	},
	fornecedor: {
		backgroundColor: "white",
		padding: 12,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 6,
		marginBottom: 8,
	},
	selecionado: {
		backgroundColor: "#b7e4c7",
		borderColor: "#198754",
	},
	textoFornecedor: {
		fontSize: 16,
	},
	botao: {
		backgroundColor: "#198754",
		padding: 15,
		borderRadius: 8,
		marginTop: 15,
		marginBottom: 40,
	},
	textoBotao: {
		color: "white",
		textAlign: "center",
		fontSize: 16,
	},
});
