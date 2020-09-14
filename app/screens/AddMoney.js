import React, { useState, useEffect } from "react";
import {
  Appbar,
  List,
  Button,
} from "react-native-paper";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import io from "socket.io-client";

export default function AddMoney({ navigation }) {
  const _goBack = () => console.log("Went back");
  const [text, setText] = React.useState("");
  const onChangeText = (text) => setText(text);

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <Appbar.Header statusBarHeight={40} style={{ backgroundColor: '#fff' }}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content
          titleStyle={{ fontSize: 16 }}
          style={styles.sendpaymentnavtext}
        />
      </Appbar.Header>
      <View style={styles.bar}></View>

      <View style={styles.titleContainer}>
        <List.Item
          titleStyle={{ marginTop: "-1%", fontWeight: "bold", fontSize: 21 }}
          descriptionStyle={{
            fontSize: 12,
            paddingHorizontal: "1%",
            paddingVertical: "2%",
          }}
          title="Add Money to Giver Balance"
          description="Available balance $0"
        />
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
       

    </View>

      <View style={styles.buttomContainer}>
        <Button
          uppercase={false}
          style={styles.payBtn}
          contentStyle={{ height: 45 }}
          labelStyle={{ color: "white", fontSize: 12 }}
          mode="contained"

          onPress={() => navigation.navigate('GiverWallet')}
        >
          Proceed
        </Button>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  titleContainer: { 
    flex: 2,
    paddingTop: '10%',
    paddingHorizontal: '5%',
  },
  fieldContainer: { 
    flex: 3,
    flexDirection: 'row',
    paddingHorizontal: '10%',
  },
  currencyContainer: {
    flex: 2,
  },
  inputContainer: {
    flex: 5,
  },
  buttomContainer: { 
    flex: 1,
    alignItems: 'center',
  },
  bar: {
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
  payBtn: {
    width: "80%",
    borderRadius: 0,
    backgroundColor: "#003289",
    fontSize: 4,
  }
});
