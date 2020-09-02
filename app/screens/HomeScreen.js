import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/Giver.png")}
      ></Image>
      <View style={styles.btn}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "40%",
  },
  btn: {
    backgroundColor: "#003289",
    width: "70%",
    height: "7%",
    position: "absolute",
    top: "85%",
  },
});


