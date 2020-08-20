import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Dashboard from "./app/screens/Dashboard";
import { Provider as PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider >
  <Dashboard />
  </PaperProvider>
  );
}
