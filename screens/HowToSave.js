import React from "react";
import { View, StyleSheet, Text } from "react-native";

function HowToSaveScreen(props) {
  return (
    <View style={styles.container}>
      <Text> How to Save the Environment </Text>
      <View>
        <Text> Information </Text>
      </View>
      <View>
        <Text> List of Ideas </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default BostonScreen;
