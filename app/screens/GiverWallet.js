import React, { useState } from "react";
import { Appbar, Avatar, Title ,List, Button,RadioButton} from "react-native-paper";
import { View, StyleSheet,Text,TextInput,ScrollView,SafeAreaView,Image} from "react-native";


export default function GiverWallet({navigation}){
 
     const _goBack = () => console.log('Went back');
     const [value, setValue] = React.useState('first');
     const [text, setText] = React.useState('');
     const onChangeText = text => setText(text);

      return(

        <View>
            <Appbar.Header statusBarHeight={40} style={styles.container}>
        <Appbar.BackAction 
        
        onPress={_goBack} />
        <Appbar.Content title="Giver Wallet" titleStyle = {{fontSize:16}}
        style={styles.sendpaymentnavtext}
        />
      </Appbar.Header>
      <View style={styles.bar}></View>
       
      <View style={{paddingVertical:"7%" ,paddingHorizontal:"7%"}}>
      <RadioButton.Group  onValueChange={value => setValue(value)} value={value}>
      <View >
        <Text style={{position:"absolute" ,top:"14%",left:"15%" ,fontSize:17}}>Debit Card</Text>
        <RadioButton color={"#003289"} value="first" />
        
      </View>
      </RadioButton.Group>
      </View>

      <View style={{backgroundColor:"#F4FAFF", borderWidth:1,marginHorizontal:"5%",height:250,paddingVertical:"7%",borderRadius:10,borderColor:"#B6B6B6"}}>
          <View style={{marginHorizontal:"5%"}}>
          <Text style={{fontSize:14}}>Enter your card details</Text>
          <View>
          <TextInput style={{borderColor:"#8F909A",borderWidth:1,borderRadius:5,fontSize:35,paddingHorizontal:5,marginVertical:25}}  placeholder={""} placeholderTextColor={"#C8C8C8"} value={text} onChangeText={onChangeText} />
          </View>
          <View  style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
           <View >
          <Text style={{fontSize:13}}>Expiry / Validation Date</Text>
          <View style={{width:"95%" ,marginLeft:"2%"}}>
          <TextInput style={{borderColor:"#8F909A",borderWidth:1,borderRadius:5,fontSize:15,paddingHorizontal:15,marginVertical:10,paddingHorizontal:15,paddingVertical:9,height:45}}  placeholder={"MM/YY"} placeholderTextColor={"#C8C8C8"} value={text} onChangeText={onChangeText} />
          </View>
          </View>
          <View style={{marginLeft:"10%",width:"40%"}}>
          <Text style={{fontSize:14}}>CVV</Text>
          <View style={{ marginLeft:"2%"}}>
          <TextInput style={{borderColor:"#8F909A",borderWidth:1,borderRadius:5,fontSize:15,paddingHorizontal:15,marginVertical:10,paddingHorizontal:15,paddingVertical:9,height:45}}  placeholder={""} placeholderTextColor={"#C8C8C8"} value={text} onChangeText={onChangeText} />
          </View>
          </View>
          </View>

         
          </View>
          
     </View>
     <Button
          uppercase={false}
          style={styles.paybtn}
          contentStyle={{ height: 45 }}
          labelStyle={{ color: "white", fontSize: 12 }}
          mode="contained"
          onPress={() => navigation.navigate('Dashboard')}
        > Pay</Button>
        </View>

      )}


      const styles = StyleSheet.create({

        container: {
            borderWidth:0,
            backgroundColor: "#ffffff",
            
          },
          sendpaymentnavtext:{
            marginLeft:"-3%",
            
        },
        RadioButton:{
         flex:1,
        flexDirection:"row"
        },
        bar: {
            marginLeft: "6.5%",
            width: "87%",
            borderWidth: 0.5,
            borderColor: "#9E9E9E",
          },
          paybtn: {
            marginVertical:"15%",
            marginHorizontal:"12%",
            width: "75%",
            borderRadius: 0,
            backgroundColor: "#003289",
            fontSize: 4,
          },
})