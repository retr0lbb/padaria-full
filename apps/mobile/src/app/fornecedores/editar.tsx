import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import CampoTexto from "../../components/campoTexto";
import { api } from "../../constants/api";

export default function EditarFornecedor() {
	const dados = useLocalSearchParams();
	const [nome, setNome] = useState(String(dados.nome));
	const [telefone, setTelefone] = useState(String(dados.telefone));
	function alterar() {
		const fornecedor = { nome, telefone };
		api
			.put("/fornecedores/" + dados.id, fornecedor)
			.then(() => router.replace("/fornecedores"));
	}
	return (
		<View style={estilos.container}>
			<Text style={estilos.titulo}>Editar Fornecedor</Text>
			<CampoTexto titulo="Nome" valor={nome} alterar={setNome} />
			<CampoTexto titulo="Telefone" valor={telefone} alterar={setTelefone} />
			<Pressable style={estilos.botao} onPress={alterar}>
				<Text style={estilos.textoBotao}>Salvar Alterações</Text>
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
		backgroundColor: "#ffc107",
		padding: 15,
		borderRadius: 8,
	},
	textoBotao: {
		color: "black",
		textAlign: "center",
		fontSize: 16,
	},
});
