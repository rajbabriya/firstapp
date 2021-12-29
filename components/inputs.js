// Excercise 5. ============================================================================================================================================
//
//
//
// INPUT COMPONENTS
//
//
import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

export default function Input(props) {
  let [optext, setoptext] = useState("");

  function setoptextHandler(enteredtxt) {
    setoptext(enteredtxt);
  }

  return (
    <View style={styles.main}>
      <TextInput
        placeholder="Enter Your Name"
        onChangeText={setoptextHandler}
        value={optext}
        style={styles.Inputtext}
      />

      <View style={{ flex: 1, marginLeft: 10 }}>
        <Button
          title="Add"
          color="#068027"
          onPress={props.onAddName.bind(this, optext)}
          //   onPress={() => props.onAddName(optext)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    marginTop: 50,
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Inputtext: {
    borderRadius: 10,
    backgroundColor: "lightgray",
    borderBottomColor: "black",
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    padding: 10,
    width: "70%",
    color: "black",
    fontSize: 20,
  },
});
