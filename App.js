import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import GiverMain from "./app/screens/GiverMain";

export default function App() {
  return (
    <PaperProvider>
      <GiverMain />
    </PaperProvider>
  );
}
