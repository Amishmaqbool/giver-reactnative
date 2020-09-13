import React from "react";
import { 
  Appbar,
  Avatar,
  Button,
  Title,
  List,
} from "react-native-paper";
import { 
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
} from "react-native";

export default function Dashboard({ navigation }) {
  const _handleSearch = () => console.log("Searching");

  return (
    <View style={styles.container}>

      <Appbar.Header statusBarHeight={40} style={{ backgroundColor: "#fff" }}>

          <Avatar.Image size={50} source={require("../assets/jhon.png")} />

          <Appbar.Content
            color={"#000000"}
            title="Hi, Rinky"
            subtitle="Check your profile"
          />

          <Appbar.Action size={30} icon="menu" onPress={_handleSearch} />

      </Appbar.Header>

      <View style={styles.balanceContainer}>
        <Image
          style={styles.balanceBox}
          source={require("../assets/GiverBlanaceBox.png")}
        ></Image>

        <Text style={styles.balanceTitle}>Giver Balance</Text>

        <Text style={styles.balanceAmount}>$88,456/- USD</Text>

        <Button
          uppercase={false}
          style={styles.addMoneyButton}
          contentStyle={{ height: 31 }}
          labelStyle={{ color: "white", fontSize: 6.5 }}
          mode="contained"
          onPress={() => navigation.navigate('AddMoney')}
        >
          Add money to your wallet
        </Button>

      </View>

      <View style={styles.dbSendMoneyView}>

        <View style={styles.sendMoneyTitle}>
          <Title>Send Money</Title>
        </View>
      
        <View style={styles.arrowContainer}>
          <Image source={require("../assets/Arrow.png")}></Image>
        </View>

      </View>

      <View style={styles.recentContacts}>

        <View>
          <Avatar.Icon
            style={{ backgroundColor: "#E5E5E5", borderWidth: 1, marginLeft: -4 }}
            size={45}
            icon="plus"
          />
        </View>

        <View>
          <Avatar.Image
            source={require("../assets/ramzee.png")}
            style={{ backgroundColor: "white" }}
            size={45}
          />
          <Text>Ramzee {"\n"}Bolten</Text>
        </View>

        <View>
          <Avatar.Text
            style={{ backgroundColor: "#003289" }}
            size={45}
            label="KP"
          />
          <Text>Karan {"\n"}Patel</Text>
        </View>

      </View>

      <View style={styles.activityContainer}>

        <Title style={styles.reacentActivityTitle}>Recent Activity</Title>
        <View style={styles.recentBar}></View>

        <ScrollView>

          <List.Item
            title="Ramzee Bolton"
            description="Payment recieved to bank"
            left={props => <Avatar.Image
            source={require("../assets/ramzee.png")}
            style={{ backgroundColor: "white", marginTop: "2%", marginRight: "2%" }}
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
              style={{ backgroundColor: "white", marginTop: "2%", marginRight: "2%" }}
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
              style={{ backgroundColor: "white", marginTop: "2%", marginRight: "2%" }}
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
              style={{ backgroundColor: "white", marginTop: "2%", marginRight: "2%" }}
              size={40}
            />}
            right={props => <Title
              style={styles.amountheading}
            > +500$ </Title>}
          />

        </ScrollView>

      </View>

      <View style={styles.bottomBar}>
        <Button
          uppercase={false}
          icon={"plus"}
          style={styles.paymentBtn}
          contentStyle={{ height: 45 }}
          labelStyle={{ color: "white", fontSize: 12 }}
          mode="contained"
          onPress={() => navigation.navigate('SearchContact')}>
          New Payment
        </Button>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bar: {
    marginLeft: "6.5%",
    width: "87%",
    borderWidth: 0.5,
    borderColor: "#9E9E9E",
  },
  balanceBox: {
    resizeMode: "cover",
    borderWidth: 0.5,
    borderColor: "#9E9E9E",
    borderRadius: 18,
  },
  balanceTitle: {
    position: "absolute",
    bottom: 130,
    left: 52,
    color: "#FFFFFF",
    fontSize: 15,
    lineHeight: 17,
    fontWeight: "normal",
  },

  balanceAmount: {
    position: "absolute",
    bottom: 90,
    left: 52,
    color: "#FFFFFF",
    fontSize: 22,
    lineHeight: 26,
    fontWeight: "normal",
  },
  addMoneyButton: {
    position: "absolute",
    bottom: 40,
    left: 52, 
    borderRadius: 0,
    backgroundColor: "#003289",
    fontSize: 4,
  },
  balanceContainer: {
    alignItems: 'center',
    padding: 20
  },
  dbSendMoneyView: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 22,
  },
  sendMoneyTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  activityContainer: {
    flex: 3,
  },
  bottomBar: {
    flex: 1,
    alignItems: 'center',
  },
  recentContacts: {
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  recentBar: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#000000",
  },
  reacentActivityTitle: {
    paddingHorizontal: 30,
    paddingVertical: 22,
  },
  amountheading: {
    fontSize: 15,
  },
  paymentBtn: {
    width: "45%",
    borderRadius: 30,
    backgroundColor: "#003289",
    fontSize: 30,
  },

});
