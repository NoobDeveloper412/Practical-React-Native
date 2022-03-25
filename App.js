import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Person from "./src/components/Person";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      {/* This is the wrong method */}

      {/* <input type="text" maxlength="10" readonly> */}
  
        {/* <Text>
          <TextInput style={{ height: 20, width: 100 }} />
          is a knowledge community in which we can ask programming questions and
          we can answer others’ programming questions.
        </Text>
    */}
    <Person />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
