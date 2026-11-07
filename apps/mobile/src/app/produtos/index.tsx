import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { api } from "../../constants/api";

export default function Produtos() {
	const [produtos, setProdutos] = useState<any[]>([]);
	function listar() {
		api.get("/produtos").then((res) => setProdutos(res.data));
	}

	useFocusEffect(
		useCallback(() => {
			listar();
		}, []),
	);

	function excluir(id: number) {
		api.delete("/produtos/" + id).then(() => listar());
	}

	return (
		<View style={estilos.container}>
			<Text style={estilos.titulo}>Gerenciar Produtos</Text>
			<Pressable
				style={estilos.cadastrar}
				onPress={() => router.push("/produtos/cadastrar")}
			>
				<Text style={estilos.textoBotao}>Cadastrar Produto</Text>
			</Pressable>
			<FlatList
				data={produtos}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => (
					<View style={estilos.card}>
						<Text style={estilos.nome}>{item.nome}</Text>
						<Text>Preço: R$ {item.preco}</Text>
						<Text>Quantidade: {item.quantidade}</Text>
						<Text>Fornecedor: {item.Fornecedor?.nome}</Text>
						<View style={estilos.acoes}>
							<Pressable 
                                style={estilos.editar}
                                onPress={() => router.push({
                                    pathname: "/produtos/editar",
                                    params: {
                                        id: item.id,
                                        nome: item.nome,
                                        preco: item.preco,
                                        quantidade: item.quantidade,
                                        fornecedor_id: item.fornecedor_id
                                    }
                                })}    
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
