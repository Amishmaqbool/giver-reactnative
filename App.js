import React from "react";
import { Provider as PaperProvider } from 'react-native-paper';
import PaidSuccessfully from "./app/screens/PaidSuccessfully";


export default function App() {
  return (
    <PaperProvider >
     <PaidSuccessfully />
  </PaperProvider>
  );
}
