import React, { useState } from "react";
import { Appbar, Avatar, Title ,Searchbar,List} from "react-native-paper";
import { View, StyleSheet,Text,ScrollView,SafeAreaView,} from "react-native";

export default function SearchContact({navigation}){

    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const [selectedId, setSelectedId] = useState(null);
      
      
   
    return(
        <View>
        <Appbar.Header statusBarHeight={40} style={styles.container}>
        <Appbar.BackAction 
        
        onPress={_goBack} />
        <Appbar.Content title="Send payments" titleStyle = {{fontSize:16}}
        style={styles.sendpaymentnavtext}
        />
      </Appbar.Header>
      <View style={styles.bar}></View>

      <View style={{ paddingVertical :"8%" ,paddingHorizontal:"8%"}}>

      <Searchbar
      style= {styles.searchbar}
      inputStyle={{marginLeft:"-3%" , fontSize:15}}
      placeholder="Search for name, number"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
      </View>

      <View style={styles.dbsendmoneyview}>
        <Title style={styles.sendmoneyheading}>Recents</Title>
        
      </View>

      
      <View style={styles.dbsendmoneyprofile}>
        <View style={{  marginRight: "6%", paddingTop: "5%", }}>
        <Avatar.Image
            source={require("../assets/ramzee.png")}
            style={{ backgroundColor: "white" }}
            size={45}
          />

          <Text style={styles.dbsendmoneytext}>Ramzee {"\n"}Bolten</Text>
          
          
        </View>
        <View style={{  marginRight: "6%", paddingTop: "5%", }}>
        <Avatar.Text
            style={{ backgroundColor: "#003289" }}
            size={45}
            label="KP"
          />
           <Text
           
           style={styles.dbsendmoneytext}>Karan {"\n"}Patel</Text>
          
          
        </View>
    </View>

    <View style={{ paddingHorizontal: "6%", marginTop: "23%" }}>
        <Title style={styles.reacentactivitytitle}>Contacts</Title>
        </View>
        <SafeAreaView style={styles.containerscroller}>
            
      <ScrollView 
      
      style={styles.scrollView}>
      <List.Item
  title="Jhon Doe"
   description="+92-11254658213"
  left={props => <Avatar.Image
    source={require("../assets/jhondoe.png")}
    style={{ backgroundColor: "white" ,marginTop:"2%" , marginRight:"2%"}}
    size={40}
  />}
/>
<List.Item
  title="Bhawana Kapoor"
   description="+92-11254658213"
  left={props => <Avatar.Image
    source={require("../assets/bhavana.png")}
    style={{ backgroundColor: "white" ,marginTop:"2%" , marginRight:"2%"}}
    size={40}
  />}
  
/>
<List.Item  onPress={() => navigation.navigate('EnterAmount')}
  title="Captain America"
   description="+92-11254658213"
  left={props => <Avatar.Image
    source={require("../assets/captain.png")}
    style={{ backgroundColor: "white" ,marginTop:"2%" , marginRight:"2%"}}
    size={40}
  />}
/>

<List.Item
  title="Upwork"
   description="+92-11254658213"
  left={props => <Avatar.Image
    source={require("../assets/upwork.png")}
    style={{ backgroundColor: "white" ,marginTop:"2%" , marginRight:"2%"}}
    size={40}
  />}
/>
<List.Item
  title="Ketan Sinha"
  description="+92-11254658213"
  left={props => <Avatar.Text
    style={{ backgroundColor: "#003289" ,marginTop:"2%" ,marginRight:"2%"}}
    size={40}
    label="KS"
  />}
  right={props => <Title 
  style={styles.invite}
  > INVITE </Title>}
/>
<List.Item
  title="Nusrat Fathe Ali Khan"
   description="+92-11254658213"
  left={props =><Avatar.Text
    style={{ backgroundColor: "#003289" ,marginTop:"2%" ,marginRight:"2%"}}
    size={40}
    label="NK"
  />}
  right={props => <Title 

  style={styles.invite}
  > INVITE </Title>}
/>
<List.Item
  title="Arya"
   description="+92-11254658213"
  left={props => <Avatar.Image
    source={require("../assets/arya.png")}
    style={{ backgroundColor: "white" ,marginTop:"2%" , marginRight:"2%"}}
    size={40}
  />}
/><List.Item
  title="Daniel schiffed"
   description="+92-11254658213"
  left={props => <Avatar.Image
    source={require("../assets/Danial.png")}
    style={{ backgroundColor: "white" ,marginTop:"2%" , marginRight:"2%"}}
    size={40}
  />}
  
/>
      </ScrollView>
    </SafeAreaView>
 
        

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
      backgroundColor: "#ffffff",
    },
    sendpaymentnavtext:{
        marginLeft:"-3%",
        
    },
    bar: {
        marginLeft: "6.5%",
        width: "87%",
        borderWidth: 0.5,
        borderColor: "#9E9E9E",
      },
      searchbar:{
          
          width:"98%",
          borderWidth:1,
          borderRadius:30
      },
      dbsendmoneyview: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: "8%",
        paddingVertical:"2%"
      },
      sendmoneyheading: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 19,
        width: 100,
        height: 20,
        marginLeft: -10,
      },
      dbsendmoneyprofile: {
      flex:1,
      flexDirection:"row",
      paddingHorizontal:"10%"
      },
      dbsendmoneytext: {
        textAlign: "center",
        lineHeight: 9,
        marginTop: "10%",
        fontSize: 7,
      },
      

      reacentactivitytitle:{
        marginLeft: -5,
        marginBottom:"4%",
        marginTop:"5%" ,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 19,
        height: 20
      },
      containerscroller: {
          height:"53%",
        marginHorizontal:"1%"
        
      },
      scrollView: {
        
        marginHorizontal: 20,
      },
      text: {
        fontSize: 42,
      },
      invite:{
          paddingTop:"3%",
          fontSize:12,
          color:"#003289"
      }
    
})