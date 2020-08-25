import React, { useState } from "react";
import { Appbar, Avatar, Title ,List, Button} from "react-native-paper";
import { View, StyleSheet,Text,TextInput,ScrollView,SafeAreaView,Image} from "react-native";


export default function PaidSuccessfully(props){
 
     const _goBack = () => console.log('Went back');

     const _handleSearch = () => console.log('Searching');

     const _handleMore = () => console.log('Shown more');


      return(
        <View>
        <Appbar.Header statusBarHeight={40} mode={"text"} style={styles.container}>
           <Appbar.Action icon="close" onPress={_goBack} style={{marginRight:"22%"}} />
      <Appbar.Content title="Giver" titleStyle = {{fontSize:27,fontWeight:"bold"}}  style={{marginRight:"10%",}} />
      <Appbar.Content title="SHARE"titleStyle ={{fontSize:16,fontWeight:"bold" ,marginTop:"8%"}} color={"#003289"}  onPress={_handleSearch} />
      
    </Appbar.Header>
     <View style={{paddingHorizontal:"15%",paddingVertical:"20%"}}>
             <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
             <Avatar.Image
             source={require("../assets/bhavana.png")}
             style={{ backgroundColor: "white" ,}}
             size={39} />
              
              <Image source={require("../assets/arrowright.png")} style={{ backgroundColor: "white",marginVertical:"6%" ,marginHorizontal:"2%" ,}}/>
              <Avatar.Image
             source={require("../assets/captain.png")}
             style={{ backgroundColor: "white" ,}}
             size={39} />
            
           


            </View>

           
           <List.Item style={{marginLeft:"20%"}}
             titleStyle={{marginTop:"40%",fontWeight:"bold"}}
             descriptionStyle={{fontSize:12,paddingHorizontal:"2%",color:"#000000 ,",position:"absolute",top:"54%",left:"7%"}}
             title="Captain America"
             description="Paid successfully to" 
              />

              <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:"15%",marginLeft:"8%"}}>
                  
                  <View >
                  <Text style={{fontWeight:"bold",fontSize:25}}>$ 2,000</Text>
                  </View>
                  <View style={{marginLeft:"5%"}}>
                  <Image source={(require("../assets/correct.png"))}></Image>
                  </View>
              </View>

        </View>

        <View style={{marginTop:"35%",paddingVertical:"5%"}}>
         <List.Item
           
           titleStyle={{fontSize:15,fontWeight:"bold"}}
           descriptionStyle={{color:"#000000",fontSize:15}}
           description="07:09 PM (IST), 22 Aug 2020"
           left={props => <Avatar.Icon
           color={"#003289"}
           style={{ backgroundColor: "white"  ,}}
           
           size={60}
               />}/> 

<Button
          uppercase={false}
          style={styles.paybtn}
          contentStyle={{ height: 50 }}
          labelStyle={{ color: "white", fontSize: 15 }}
          mode="contained"
          onPress={() => console.log("Pressed")}
        > Back to home</Button>
         
         </View>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: "#FFFFFF",
  },      
paybtn: {
        width: "80%",
        marginVertical:"10%",
        marginHorizontal:"10%",  
        borderRadius: 0,
        backgroundColor: "#003289",
        fontSize: 4,
      },
    })