import React ,{ useState } from "react";
import { Image, Text, View, StyleSheet,TextInput } from "react-native";
import { List, Button } from "react-native-paper";

export default function CreateAccount(props) {
    const [Nametext, setNameText] = React.useState("");
    const [Mnotext, setMnotext] = React.useState("");
    const [Passtext, setPasstext] = React.useState("");
    
    const onNameChangeText = Nametext => setNameText(Nametext);
    const onMnoChangeText = Mnotext => setMnotext(Mnotext);
    const onPassChangeText = Passtext => setPasstext(Passtext);
    return (
    <View>
        <View style={{marginTop:"30%" ,marginHorizontal:"3%"}}>
      <List.Item
        title="Hello There!"
        titleStyle={{ fontSize: 30, fontWeight: "bold",color:"#003289" }}
        descriptionStyle={{
          fontSize:20,
          fontWeight:"bold",
          color: "#000000",
        }}
        description={"Create Account"}
      />
      </View>
      <View style={{marginHorizontal:"9%",marginVertical:"15%"}}>
      <TextInput style={{borderBottomColor:"#DBDBDB",borderBottomWidth:2,fontSize:20,paddingHorizontal:5,paddingVertical:5, }}  
      placeholder={"Name"} placeholderTextColor={"#C8C8C8"} value={Nametext} onChangeText={onNameChangeText} />

        <TextInput style={{borderBottomColor:"#DBDBDB",borderBottomWidth:2,fontSize:20,paddingHorizontal:2,paddingVertical:5,marginVertical:"15%"}}  
      placeholder={"Mobile No ."} placeholderTextColor={"#C8C8C8"} value={Mnotext} onChangeText={onMnoChangeText} />
        <TextInput style={{borderBottomColor:"#DBDBDB",borderBottomWidth:2,fontSize:20,paddingHorizontal:5,paddingVertical:5,}}  
      placeholder={"Password"} secureTextEntry={true} placeholderTextColor={"#C8C8C8"} value={Passtext} onChangeText={onPassChangeText} />
      </View>

      <View style={{marginHorizontal:"10%" ,alignItems:"center"}}> 
          <Text style={{fontSize:12,}}>By registering you are agreeing to our</Text>
          <Text style={{fontSize:12,color:"#4B87F8"}}>Term and Conditions</Text>
      </View>
      <View>
      <Button
            uppercase={false}
            style={styles.paybtn}
            contentStyle={{ height: 45 }}
            labelStyle={{ color: "white", fontSize: 18 }}
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
             Submit
          </Button>

          <Text style={{marginLeft:"15%",fontSize:18}}>Already have an account? <Text style={{color:"#003289"}}>Sign In</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  paybtn: {
      
      marginHorizontal:"25%",
      width:"50%",
    marginVertical: "7%",
    borderRadius: 25,
    backgroundColor: "#003289",
    fontSize: 10,
  },
});
