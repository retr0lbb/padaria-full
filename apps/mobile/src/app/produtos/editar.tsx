import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import CampoTexto from "../../components/campoTexto";
import { api } from "../../constants/api";

export default function EditarProduto() {
	const dados = useLocalSearchParams();
	const [nome, setNome] = useState(String(dados.nome));
	const [preco, setPreco] = useState(String(dados.preco));
	const [quantidade, setQuantidade] = useState(String(dados.quantidade));
	const [fornecedorId, setFornecedorId] = useState(Number(dados.fornecedor_id));
	const [fornecedores, setFornecedores] = useState<any[]>([]);
	useEffect(() => {
		api.get("/fornecedores").then((res) => setFornecedores(res.data));
	}, []);
	function alterar() {
		const produto = {
			nome,
			preco: Number(preco),
			quantidade: Number(quantidade),
			fornecedor_id: fornecedorId,
		};
		api
			.put("/produtos/" + dados.id, produto)
			.then(() => router.replace("/produtos"));
	}
	return (
		<ScrollView style={estilos.container}>
			<Text style={estilos.titulo}>Editar Produto</Text>
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
			<Pressable style={estilos.botao} onPress={alterar}>
				<Text style={estilos.textoBotao}>Salvar Alterações</Text>
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
		backgroundColor: "#ffc107",
		padding: 15,
		borderRadius: 8,
		marginTop: 15,
		marginBottom: 40,
	},
	textoBotao: {
		color: "black",
		textAlign: "center",
		fontSize: 16,
	},
});
