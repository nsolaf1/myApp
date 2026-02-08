import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}
