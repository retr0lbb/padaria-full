import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import CampoTexto from "../../components/campoTexto";
import { api } from "../../constants/api";

export default function CadastrarFornecedor() {
	const [nome, setNome] = useState("");
	const [telefone, setTelefone] = useState("");
	function cadastrar() {
		const fornecedor = { nome, telefone };
		api
			.post("/fornecedores", fornecedor)
			.then(() => router.replace("/fornecedores"));
	}
	return (
		<View style={estilos.container}>
			<Text style={estilos.titulo}>Cadastrar Fornecedor</Text>
			<CampoTexto titulo="Nome" valor={nome} alterar={setNome} />
			<CampoTexto titulo="Telefone" valor={telefone} alterar={setTelefone} />
			<Pressable style={estilos.botao} onPress={cadastrar}>
				<Text style={estilos.textoBotao}>Cadastrar</Text>
			</Pressable>
		</View>
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
	botao: {
		backgroundColor: "#198754",
		padding: 15,
		borderRadius: 8,
	},
	textoBotao: {
		color: "white",
		textAlign: "center",
		fontSize: 16,
	},
});
