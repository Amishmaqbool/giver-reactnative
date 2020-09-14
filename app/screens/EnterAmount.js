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
  TouchableWithoutFeedback,
  Keyboard,
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
    <View style={styles.container}>
      <Appbar.Header statusBarHeight={40} style={{ backgroundColor: "#fff" }}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content
          title={"Send Payments"}
          titleStyle={{ fontSize: 16  }}
          style={styles.sendpaymentnavtext}
        />
      </Appbar.Header>
      <View style={styles.bar}></View>

      <View style={styles.recipientContainer}>
        <View>
          <Avatar.Image
            source={require("../assets/Danial.png")}
            // style={{ backgroundColor: "white", marginHorizontal: "32%" }}
            size={45}
          />
        </View>
        <View>
          <List.Item
            style={{ width: 150 }}
            // titleStyle={{ marginTop: "-1%" }}
            descriptionStyle={{ fontSize: 12, marginHorizontal: "4%" }}
            title="Captain America"
            description="+92-11254658213"
          />
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <View style={styles.currencyContainer}>
          <Text style={{ fontSize: 20 }}>USD</Text>
        </View>
        
          <View style={styles.inputContainer}>
            <TextInput
              style={{
                borderBottomColor: "#003289",
                borderBottomWidth: 2,
                fontSize: 20,
              }}
              placeholder={"Enter Amount"}
              placeholderTextColor={"#C8C8C8"}
              value={text}
              keyboardType={"number-pad"}
              onChangeText={onChangeText}
            />
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
      </View>
      <View style={styles.addMessageContainer}>
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
      <View style={styles.buttomContainer}>
        <List.Item style={{width:400}}
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
          style={styles.payBtn}
          contentStyle={{ height: 45 }}
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
    flex: 1,
    backgroundColor: "#ffffff",
  },
  recipientContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fieldContainer: {
    flex:0.2,
    flexDirection: "row",
    paddingHorizontal: "10%",
  },
  currencyContainer: {
    flex:1,
  },
  inputContainer: {
    flex: 5,
  },
  addMessageContainer:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  buttomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent:'space-evenly',
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
  },
  bar: {
    borderWidth: 0.5,
    borderColor: "#9E9E9E",
  },
  paymentbtn: {
    // position: "absolute",
    // top: 25,
    // left: "25%",
    width: "50%",
    fontSize: 30,
  },
  payBtn: {
    width: "80%",
    borderRadius: 0,
    backgroundColor: "#003289",
    fontSize: 4,
  },
 
  
});
