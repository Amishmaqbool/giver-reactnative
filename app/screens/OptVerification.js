import React from "react";
import { Image, Text, View, StyleSheet, TextInput } from "react-native";
import { List, Surface, Button } from "react-native-paper";

export default function OptVeification({ navigation }) {
  const [text, setText] = React.useState("");
  const onChangeText = (text) => setText(text);
  return (
    <View>
      <View style={{ marginTop: "30%", marginHorizontal: "22%" }}>
        <Image source={require("../assets/otpverification.png")}></Image>
      </View>
      <View style={{ paddingHorizontal: "25%" }}>
        <List.Item
          title="OTP Verification"
          titleStyle={{ fontSize: 21, fontWeight: "bold" }}
          descriptionStyle={{
            marginLeft: "-31%",
            marginTop: "10%",
            color: "#000000",
          }}
          description={"Enter the OTP sent to "}
        />

        <Text
          style={{
            position: "absolute",
            top: "64%",
            right: "22%",
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          {" "}
          +92-9999000099{" "}
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Surface style={styles.surface}>
          <TextInput
            style={{
              borderBottomColor: "#000000",
              borderBottomWidth: 2,
              fontSize: 20,
              paddingVertical: 3,
              paddingHorizontal: 10,
              textAlign: "center",
            }}
            placeholder={"7"}
            placeholderTextColor={"#000000"}
            value={text}
            onChangeText={onChangeText}
          />
        </Surface>
        <Surface style={styles.surface}>
          <TextInput
            style={{
              borderBottomColor: "#000000",
              borderBottomWidth: 2,
              fontSize: 20,
              paddingVertical: 3,
              paddingHorizontal: 10,
              textAlign: "center",
            }}
            placeholder={"5"}
            placeholderTextColor={"#000000"}
            value={text}
            onChangeText={onChangeText}
          />
        </Surface>
        <Surface style={styles.surface}>
          <TextInput
            style={{
              borderBottomColor: "#000000",
              borderBottomWidth: 2,
              fontSize: 20,
              paddingVertical: 3,
              paddingHorizontal: 10,
              textAlign: "center",
            }}
            placeholder={"3"}
            placeholderTextColor={"#000000"}
            value={text}
            onChangeText={onChangeText}
          />
        </Surface>
        <Surface style={styles.surface}>
          <TextInput
            style={{
              borderBottomColor: "#000000",
              borderBottomWidth: 2,
              fontSize: 20,
              paddingVertical: 3,
              paddingHorizontal: 10,
              textAlign: "center",
            }}
            placeholder={"2"}
            placeholderTextColor={"#000000"}
            value={text}
            onChangeText={onChangeText}
          />
        </Surface>
      </View>
      <View style={{ paddingVertical: "16%", marginLeft: "22%", flex: 1 }}>
        <Text style={{ fontSize: 15 }}>
          (OTP is valid for{" "}
          <Text style={{ fontSize: 15, color: "#FFC6C6" }}>05:00</Text> mins)
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 15 }}>
          Dont't recieve OTP?{" "}
          <Text style={{ fontSize: 15, color: "#003289", fontWeight: "bold" }}>
            {" "}
            RESEND OTP
          </Text>
        </Text>

        <View style={{ width: "50%" }}>
          <Button
            uppercase={false}
            style={styles.paybtn}
            contentStyle={{ height: 45 }}
            labelStyle={{ color: "white", fontSize: 14 }}
            mode="contained"
            onPress={() => navigation.navigate("AddMoney")}
          >
            Verify
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  surface: {
    height: 60,
    padding: 2,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    elevation: 0,
  },
  paybtn: {
    marginVertical: "40%",
    borderRadius: 25,
    backgroundColor: "#003289",
    fontSize: 10,
  },
});
