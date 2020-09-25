import React from "react";
import { connect } from "react-redux";
import { setVisiable } from "../redux/actions/addAmmountActions"
import { Image, Text, View, StyleSheet, ImageBackground } from "react-native";
import {Button} from 'react-native-paper'

 function GiverMain(props) {
  const {Amount, modalvisibalityHandler} = props;
  const image = require("../assets/mainbackground.png");
  console.log("Givermain connected to redux",Amount)
  return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <View style={{flex:1,flexDirection:"row",marginTop:"25%" ,marginHorizontal:"5%"}}>
      <Image source={require("../assets/icon.png")}></Image>
      <Text style={styles.text}>Giver</Text>
      
       </View>
       <View  style={{position:"absolute",top:"23%" ,left:"10%"}}>
       <Text style={{fontSize:28,fontWeight:"bold"}}>Banking in {"\n"}your pocket</Text>
       </View>

       <View>
       <Button
          uppercase={false}
         
          style={styles.getstartedbtn}
          contentStyle={{ height: 50 }}
          labelStyle={{ color: "#000000", fontSize: 28 }}
          mode="text"
          onPress={() => props.navigation.navigate('CreateAccount')}
        > Get started</Button>
       </View>
    </ImageBackground>
  </View>
  );
}

const mapStateToProps = (state) => {
  return {
    Amount: state.enterAmount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
   
    modalvisibalityHandler:() =>{
      dispatch(setVisiable())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GiverMain);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    
  },
  text: {
    marginTop:"2%",
    color: "#000000",
    fontSize: 45,
    fontWeight: "bold"
  },
  getstartedbtn: {
    marginVertical:"25%",
    marginHorizontal:"15%",
    width: "70%",
    borderRadius: 0,
    backgroundColor:"#FFFFFF",
    fontSize: 4,
    fontWeight:"500",
    elevation:4
  },
});


