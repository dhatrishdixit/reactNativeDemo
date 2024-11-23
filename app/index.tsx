import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:"#25292e",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        color: "#fff"
      }}>First React native app</Text>
    </View>
  );
}
