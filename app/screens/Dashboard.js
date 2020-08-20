import React from "react";
import { Appbar, Avatar, Button, Title,List ,} from "react-native-paper";
import { View, StyleSheet, Image,Text } from "react-native";

export default function Dashboard(props) {
  const _goBack = () => console.log("Went back");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <View style={{backgroundColor:"#E5E5E5" ,paddingBottom:"4.5%"}}>
      <Appbar.Header statusBarHeight={40} style={styles.container}>
        <View style={styles.profileimage}>
          <Avatar.Image size={50} source={require("../assets/jhon.png")} />
        </View>
        <View style={styles.navtext}>
          <Appbar.Content
            color={"#000000"}
            title="Hii, Rinky"
            subtitle="Check your profile"
          />
        </View>
        <View style={styles.navmenu}>
          <Appbar.Action size={30} icon="menu" onPress={_handleSearch} />
        </View>
      </Appbar.Header>
      <View style={styles.bar}></View>

      <View style={styles.giverboxcontainer}>
        <Image
          style={styles.balancebox}
          source={require("../assets/GiverBlanaceBox.png")}
        ></Image>

        <Text style={styles.giverbalanceheading}>Giver Balance</Text>

        <Text style={styles.giverbalancedetailsheading}>88,456/- USD</Text>

        <Button
          uppercase={false}
          style={styles.btn}
          contentStyle={{ height: 31 }}
          labelStyle={{ color: "white", fontSize: 6.5 }}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Add money to your wallet
        </Button>
      </View>

      <View style={styles.dbsendmoneyview}>
        <Title style={styles.sendmoneyheading}>Send Money</Title>
        <Image source={require("../assets/Arrow.png")}></Image>
      </View>

      <View style={styles.dbsendmoneyprofile}>
        <View style={{ marginRight: "3%", paddingTop: "13%" }}>
          <Avatar.Icon
            style={{ backgroundColor: "#E5E5E5", borderWidth: 1, marginLeft: -4 }}
            size={45}
            icon="plus"
          />
        </View>
        <View
          style={{ marginRight: "3%", alignItems: "center", paddingTop: "20%" }}
        >
          <Avatar.Image
            source={require("../assets/ramzee.png")}
            style={{ backgroundColor: "white" }}
            size={45}
          />
          <Text style={styles.dbsendmoneytext}>Ramzee {"\n"}Bolten</Text>
        </View>
        <View style={{ marginRight: "3%", paddingTop: "20%" }}>
          <Avatar.Text
            style={{ backgroundColor: "#003289" }}
            size={45}
            label="KP"
          />
          <Text style={styles.dbsendmoneytext}>Karan {"\n"}Patel</Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: "6%", marginTop: "17%" }}>
        <Title style={styles.reacentactivitytitle}>Recent Activity</Title>
        <View style={styles.Recentbar}></View>
      
        <List.Item

    title="Ramzee Bolton"
    description="Payment recieved to bank"
    left={props => <Avatar.Image 
      
      source={require("../assets/ramzee.png")}
      style={{ backgroundColor: "white" ,marginTop:"2%" , marginRight:"2%"}}
      size={40}

      
    />}
    right={props => <Title
      style={styles.amountheading}> -1270$ </Title>

      
    }
    
  />
  
  <List.Item
  title="Arya Stark"
  description="Payment recieved to bank"
  left={props => <Avatar.Image
    source={require("../assets/arya.png")}
    style={{ backgroundColor: "white" ,marginTop:"2%", marginRight:"2%"}}
    size={40}
  />}
  right={props => <Title
    style={styles.amountheading}> +300$ </Title>}
/>

<List.Item
    title="Payoneer"
    description="Payment recieved to bank"
    left={props => <Avatar.Image
      source={require("../assets/payoneer.png")}
      style={{ backgroundColor: "white" ,marginTop:"2%", marginRight:"2%" }}
      size={40}
    />}
    right={props => <Title
      style={styles.amountheading}> -200$ </Title>}
  />
  
  <List.Item
  title="Upwork"
  description="Payment recieved to bank"
  left={props => <Avatar.Image
    source={require("../assets/upwork.png")}
    style={{ backgroundColor: "white" ,marginTop:"2%" , marginRight:"2%"}}
    size={40}
  />}
  right={props => <Title 
  style={styles.amountheading}
  > +500$ </Title>}
/>
        

      </View>
      <Button
          uppercase={false}
          icon={"plus"}
          style={styles.paymentbtn}
          contentStyle={{ height: 45 }}
          labelStyle={{ color: "white", fontSize: 12 }}
          mode="contained"
          onPress={() => console.log("Pressed")}
        > New Payment</Button>

      <View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "9%",
    backgroundColor: "#E5E5E5",
  },
  profileimage: {
    marginLeft: "8%",
    marginTop: "12.5%",
  },
  navtext: {
    marginLeft: "2%",
    marginTop: "4.5%",
  },
  navmenu: {
    marginLeft: "20%",
    marginTop: "12.5%",
  },
  bar: {
    marginLeft: "6.5%",
    width: "87%",
    borderWidth: 0.5,
    borderColor: "#9E9E9E",
  },
  balancebox: {
    marginTop: "8%",
    marginLeft: "6.5%",
    width: "87%",
    borderWidth: 0.5,
    borderColor: "#9E9E9E",
    borderRadius: 18,
  },
  giverbalanceheading: {
    position: "absolute",
    top: "40%",
    left: "13%",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 15,
    lineHeight: 17,
    fontWeight: "normal",
  },

  giverbalancedetailsheading: {
    position: "absolute",
    top: "52%",
    left: "13%",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 22,
    lineHeight: 26,
    fontWeight: "normal",
  },
  btn: {
    position: "absolute",
    top: "72%",
    left: "11%",
    width: "36%",
    borderRadius: 0,
    backgroundColor: "#003289",
    fontSize: 4,
  },
  giverboxcontainer: {
    marginBottom: "4%",
  },
  dbsendmoneyview: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: "8%",
    paddingVertical:"6%"
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
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: "8%",
  },
  dbsendmoneytext: {
    textAlign: "center",
    lineHeight: 9,
    marginTop: "10%",
    fontSize: 7,
  },
  Recentbar: {
    marginLeft: "-3%",
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#000000",
    
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
  amountheading:{
    fontSize:15,
    marginTop:"3%"
  },
  paymentbtn:{
    position: "absolute",
    top: "96%",
    left: "25%",
    width: "50%",
    borderRadius: 30,
    backgroundColor: "#003289",
    fontSize: 30,
  }

});

