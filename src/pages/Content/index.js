import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function Content() {
  return (
    <SafeAreaView>
      <View>
        <Text>Header</Text>
      </View>
      <View>
        <Text>Content</Text>
      </View>
      <View>
        <Text>footer</Text>
      </View>
    </SafeAreaView>
  );
}
