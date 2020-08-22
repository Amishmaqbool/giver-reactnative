import React from "react";
import { Provider as PaperProvider } from 'react-native-paper';
import EnterAmount from "./app/screens/EnterAmount";


export default function App() {
  return (
    <PaperProvider >
     <EnterAmount />
  </PaperProvider>
  );
}