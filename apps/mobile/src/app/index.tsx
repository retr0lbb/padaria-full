import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Home() {
	return (
		<View style={estilos.container}>
			<Text style={estilos.titulo}>Sistema da Padaria</Text>
			<Text style={estilos.subtitulo}>Gerenciamento de Cadastros</Text>
			<Pressable
				style={estilos.botao}
				onPress={() => router.push("/fornecedores")}
			>
				<Text style={estilos.textoBotao}>Fornecedores</Text>
			</Pressable>
			<Pressable style={estilos.botao} onPress={() => router.push("/produtos")}>
				<Text style={estilos.textoBotao}>Produtos</Text>
			</Pressable>
		</View>
	);
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 25,
		backgroundColor: "#f5f5f5",
	},
	titulo: {
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
	},
	subtitulo: {
		fontSize: 16,
		textAlign: "center",
		marginBottom: 35,
	},
	botao: {
		backgroundColor: "#198754",
		padding: 15,
		borderRadius: 8,
		marginBottom: 15,
	},
	textoBotao: {
		color: "white",
		fontSize: 18,
		textAlign: "center",
	},
});
