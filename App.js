import React from "react";  
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./app/redux/configureStore";

import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GiverMain from "./app/screens/GiverMain";
import CreateAccount from "./app/screens/CreateAccount";
import OptVerification from "./app/screens/OptVerification";
import AddMoney from "./app/screens/AddMoney";
import EnterAmount from "./app/screens/EnterAmount";
import GiverWallet from "./app/screens/GiverWallet";
import Dashboard from "./app/screens/Dashboard";
import SearchContact from "./app/screens/SearchContact";
import PaidSuccessfully from "./app/screens/PaidSuccessfully";


const Stack = createStackNavigator();
const store =
createStore(
reducers,
applyMiddleware(thunk)
)

export default function App() {
  return (
    <Provider store={store}>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{  headerShown: false  }} component={GiverMain} />
          <Stack.Screen name="CreateAccount" options={{  headerShown: false  }} component={CreateAccount} />
          <Stack.Screen name="OptVerification" options={{  headerShown: false  }} component={OptVerification} />
          <Stack.Screen name="AddMoney" options={{  headerShown: false  }} component={AddMoney} />
          <Stack.Screen name="GiverWallet" options={{  headerShown: false  }} component={GiverWallet} />
          <Stack.Screen name="Dashboard" options={{  headerShown: false  }} component={Dashboard} />
          <Stack.Screen name="SearchContact" options={{  headerShown: false  }} component={SearchContact} />
          <Stack.Screen name="EnterAmount" options={{  headerShown: false  }} component={EnterAmount} />
          <Stack.Screen name="PaidSuccessfully" options={{  headerShown: false  }} component={PaidSuccessfully} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </Provider>
  );
}
