import { SignedIn, useUser } from "@clerk/clerk-expo";
import { SignedOut, SignOutButton } from "@clerk/clerk-react";
import { Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
	const { user } = useUser();
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>GG</Text>
			<SignedIn>
				<Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
				<SignOutButton />
			</SignedIn>

			<SignedOut>
				<Link href="/(auth)/sign-in">
					<Text>Sign in</Text>
				</Link>
				<Link href="/(auth)/sign-up">
					<Text>Sign up</Text>
				</Link>
			</SignedOut>
		</View>
	);
}
