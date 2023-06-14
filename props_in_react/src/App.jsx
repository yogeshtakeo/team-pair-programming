import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/button";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card heading1="Ashma and Dina Travels"></Card>
    </>
  );
}

export default App;
