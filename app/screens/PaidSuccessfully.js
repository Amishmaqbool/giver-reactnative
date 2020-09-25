import React, { useState } from "react";
import { Appbar, Avatar, Title, List, Button } from "react-native-paper";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { setVisiable } from "../redux/actions/addAmmountActions";
function PaidSuccessfully(props) {
  const {Amount, modalvisibalityHandler} = props;
  console.log("Paid successfully connected to redux store",Amount)
  const _goBack = () => console.log("Went back");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <View style={styles.container}>
      <Appbar.Header
        statusBarHeight={40}
        mode={"text"}
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <Appbar.Action
          icon="close"
          onPress={_goBack}
          style={{ marginRight: "22%" }}
        />
        <Appbar.Content
          title="Giver"
          titleStyle={{ fontSize: 27, fontWeight: "bold" }}
        />
        <Appbar.Content
          title="SHARE"
          titleStyle={{ fontSize: 16, fontWeight: "bold", marginTop: "8%" }}
          color={"#003289"}
          onPress={_handleSearch}
        />
      </Appbar.Header>
      <View style={styles.paidsuccessfulContainer}>
        
      
        <View
          style={{  flexDirection: "row", alignItems:'center'}}
        >
          <Avatar.Image
            source={require("../assets/bhavana.png")}
            style={{ backgroundColor: "white" }}
            size={39}
          />

          <Image
            source={require("../assets/arrowright.png")}
            style={{
              backgroundColor: "white",
              marginVertical: "6%",
              marginHorizontal: "2%",
            }}
          />
          <Avatar.Image
            source={require("../assets/captain.png")}
            style={{ backgroundColor: "white" }}
            size={39}
          />
        </View>

        <View style={{ paddingVertical:"2%"}}>
          <List.Item
            style={{ width:160 }}
            titleStyle={{ fontWeight: "bold" }}
            descriptionStyle={{
              fontSize: 12,
              paddingHorizontal: "2%",
              color: "#000000 ,",
              
            }}
            title="Captain America"
            description="Paid successfully to"
          />
        </View>
         </View>
         <View style={styles.balanceContainer}>
        <List.Item
          style={{ width:160 }}
          title="$ 2000"
          titleStyle={{ fontWeight: "bold", fontSize: 25 }}
          right={(props) => (
            <Avatar.Image
              source={require("../assets/correct.png")}
              style={{ backgroundColor: "white", marginTop: "2%" }}
              size={35}
            />
          )}
        />
      </View>

      <View style={styles.bottomContainer}>
        <List.Item
        style={{width:'70%' }}
          titleStyle={{ fontSize: 15, fontWeight: "bold" }}
          descriptionStyle={{ color: "#000000", fontSize: 15 }}
          description="07:09 PM (IST), 22 Aug 2020"
          
           
        />

        <Button
          uppercase={false}
          style={styles.paybtn}
          contentStyle={{ height: 50 }}
          labelStyle={{ color: "white", fontSize: 15 }}
          mode="contained"
          onPress={() => props.navigation.navigate("Dashboard")}
        >
          {" "}
          Back to home
        </Button>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(PaidSuccessfully);


const styles = StyleSheet.create({
  container: {flex:1},

  paidsuccessfulContainer:{
    flex:2,
    alignItems:"center",
    justifyContent:'center'

  },
  balanceContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    
  },
  bottomContainer:{
    flex:3,
    justifyContent:'space-evenly',
    alignItems:'center'


  },
  
  paybtn: {
    width: "80%",
    borderRadius: 0,
    backgroundColor: "#003289",
    fontSize: 4,
  },
});
