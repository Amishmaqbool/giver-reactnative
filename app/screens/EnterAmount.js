import React, { useState, useEffect } from "react";
import {
  Appbar,
  Avatar,
  List,
  Button,
  Paragraph,
  Dialog,
  Portal,
} from "react-native-paper";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import io from "socket.io-client";

export default function EnterAmount({ navigation }) {
  const _goBack = () => console.log("Went back");
  const [CurrenylistItem, setCurrenylistItem] = useState("USD");
  const [visible, setVisible] = React.useState(false);

  // const showDialog = () => ;

  const hideDialog = () => {
    setVisible(false);
    navigation.navigate("PaidSuccessfully");
  };
  const [text, setText] = React.useState("");
  const onChangeText = (text) => setText(text);
  var socket = io("ws://192.168.100.166:3000");

  function AddMoney() {
    socket.emit("amount", text);
  }

  useEffect(() => {
    // console.log(socket);
    socket.on("amount", function (giver) {
      console.log(giver);
      setText(giver);
      setVisible(true);
    });
  }, []);

  return (
    <View>
      <Appbar.Header statusBarHeight={40} style={styles.container}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content
          title="Send payments"
          titleStyle={{ fontSize: 16 }}
          style={styles.sendpaymentnavtext}
        />
      </Appbar.Header>
      <View style={styles.bar}></View>

      <View style={{ paddingHorizontal: "28%", paddingVertical: "15%" }}>
        <Avatar.Image
          source={require("../assets/Danial.png")}
          style={{ backgroundColor: "white", marginHorizontal: "32%" }}
          size={45}
        />

        <List.Item
          titleStyle={{ marginTop: "-1%" }}
          descriptionStyle={{ fontSize: 12, paddingHorizontal: "10%" }}
          title="Captain America"
          description="+92-11254658213"
        />
      </View>
      <View>
        <View>
          <List.Section>
            <List.Accordion style={{ width: "30%" }} title={CurrenylistItem}>
              <List.Item
                onPress={() => setCurrenylistItem("USD")}
                title="USD"
              />
              <List.Item
                onPress={() => setCurrenylistItem("EUR")}
                title="EUR"
              />
            </List.Accordion>
          </List.Section>
        </View>
        <View
          style={{
            width: "65%",
            position: "absolute",
            top: "10%",
            left: "27%",
          }}
        >
          <TextInput
            style={{
              borderBottomColor: "#003289",
              borderBottomWidth: 2,
              fontSize: 20,
              paddingHorizontal: 5,
            }}
            placeholder={"Enter Amount"}
            placeholderTextColor={"#C8C8C8"}
            value={text}
            onChangeText={onChangeText}
          />
        </View>

        <View style={{ paddingVertical: "15%" }}>
          <Button
            uppercase={false}
            style={styles.paymentbtn}
            contentStyle={{ height: 45 }}
            labelStyle={{ color: "#003289", fontSize: 14 }}
            mode="text"
            onPress={() => console.log("Pressed")}
          >
            {" "}
            Add a message
          </Button>
        </View>
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Amount Added</Dialog.Title>
          <Dialog.Content>
            <Paragraph>$-{text} has been added to you account</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <View
        style={{
          borderTopWidth: 1,
          borderColor: "#E5E5E5",
          marginTop: "25%",
          paddingVertical: "5%",
        }}
      >
        <List.Item
          title="Giver Wallet"
          titleStyle={{ fontSize: 15, fontWeight: "bold" }}
          descriptionStyle={{ color: "#000000" }}
          description="Avaliable balance :$2000.00"
          left={(props) => (
            <Avatar.Icon
              icon="wallet"
              color={"#003289"}
              style={{ backgroundColor: "white", marginTop: "2%" }}
              size={60}
            />
          )}
        />

        <Button
          uppercase={false}
          style={styles.paybtn}
          contentStyle={{ height: 40 }}
          labelStyle={{ color: "white", fontSize: 12 }}
          mode="contained"
          onPress={() => AddMoney()}
        >
          Pay
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  sendpaymentnavtext: {
    marginLeft: "-3%",
  },
  bar: {
    marginLeft: "6.5%",
    width: "87%",
    borderWidth: 0.5,
    borderColor: "#9E9E9E",
  },
  paymentbtn: {
    position: "absolute",
    top: 25,
    left: "25%",
    width: "50%",

    fontSize: 30,
  },
  paybtn: {
    marginTop: "5%",
    marginHorizontal: "10%",
    width: "80%",
    borderRadius: 0,
    backgroundColor: "#003289",
    fontSize: 4,
  },
});
