import { Stack } from "expo-router";
export default function Layout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: "Padaria" }} />
			<Stack.Screen
				name="fornecedores/index"
				options={{ title: "Fornecedores" }}
			/>
			<Stack.Screen name="produtos/index" options={{ title: "Produtos" }} />
		</Stack>
	);
}
