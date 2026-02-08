import CounterButton from "@/components/CounterButton";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <CounterButton />
    </View>
  );
}
