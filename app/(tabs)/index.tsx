import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>GG</Text>
      <TouchableOpacity onPress={() => alert("Touched")}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
}
