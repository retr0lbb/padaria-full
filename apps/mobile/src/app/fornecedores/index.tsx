import { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { api } from "../../constants/api";

export default function Fornecedores() {
	const [fornecedores, setFornecedores] = useState<any[]>([]);

	function listar() {
		api.get("/fornecedores").then((res) => setFornecedores(res.data));
	}

	useEffect(() => {
		listar();
	}, []);

	function excluir(id: number) {
		api.delete("/fornecedores/" + id).then(() => listar());
	}

	return (
		<View style={estilos.container}>
			<Text style={estilos.titulo}>Gerenciar Fornecedores</Text>
			<Pressable
				style={estilos.cadastrar}
				onPress={() => router.push("/fornecedores/cadastrar")}
			>
				<Text style={estilos.textoBotao}>Cadastrar Fornecedor</Text>
			</Pressable>
			<FlatList
				data={fornecedores}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => (
					<View style={estilos.card}>
						<Text style={estilos.nome}>{item.nome}</Text>
						<Text>Telefone: {item.telefone}</Text>
						<View style={estilos.acoes}>
							<Pressable
								style={estilos.editar}
								onPress={() =>
									router.push({
										pathname: "/fornecedores/editar",
										params: {
											id: item.id,
											nome: item.nome,
											telefone: item.telefone,
										},
									})
								}
							>
								<Text style={estilos.textoBotao}>Editar</Text>
							</Pressable>
							<Pressable
								style={estilos.excluir}
								onPress={() => excluir(item.id)}
							>
								<Text style={estilos.textoBotao}>Excluir</Text>
							</Pressable>
						</View>
					</View>
				)}
			/>
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
	cadastrar: {
		backgroundColor: "#198754",
		padding: 15,
		borderRadius: 8,
		marginBottom: 20,
	},
	card: {
		backgroundColor: "white",
		padding: 15,
		borderRadius: 8,
		marginBottom: 10,
	},
	nome: {
		fontSize: 18,
		fontWeight: "bold",
	},
	acoes: {
		flexDirection: "row",
		marginTop: 12,
		gap: 10,
	},
	editar: {
		backgroundColor: "#ffc107",
		padding: 10,
		borderRadius: 5,
	},
	excluir: {
		backgroundColor: "#dc3545",
		padding: 10,
		borderRadius: 5,
	},
	textoBotao: {
		color: "white",
		textAlign: "center",
	},
});
