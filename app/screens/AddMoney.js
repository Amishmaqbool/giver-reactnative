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
  ScrollView,
  SafeAreaView,
} from "react-native";
import io from "socket.io-client";

export default function AddMoney({ navigation }) {
  const _goBack = () => console.log("Went back");

 

  const [text, setText] = React.useState("");
  const onChangeText = (text) => setText(text);
  

  
 

  return (
    <View>
      <Appbar.Header statusBarHeight={40} style={styles.container}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content
          titleStyle={{ fontSize: 16 }}
          style={styles.sendpaymentnavtext}
        />
      </Appbar.Header>
      <View style={styles.bar}></View>

    

      <View style={{ paddingHorizontal: "4%", paddingVertical: "8%" }}>
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
      <View>
        <View style={{ paddingVertical: "10%", marginHorizontal: "10%" }}>
          <Text style={{ fontSize: 20 }}>USD</Text>
        </View>
        <View
          style={{
            width: "65%",
            position: "absolute",
            top: "32%",
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
            keyboardType={"number-pad"}
            onChangeText={onChangeText}
          />
        </View>
      </View>
    
      <View>
        <Button
          uppercase={false}
          style={styles.paybtn}
          contentStyle={{ height: 45 }}
          labelStyle={{ color: "white", fontSize: 12 }}
          mode="contained"
          
          onPress={() => navigation.navigate('GiverWallet')}
        >
          Proceed
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
    marginHorizontal: "10%",
    marginTop: "95%",
    width: "80%",
    borderRadius: 0,
    backgroundColor: "#003289",
    fontSize: 4,
  },
});
