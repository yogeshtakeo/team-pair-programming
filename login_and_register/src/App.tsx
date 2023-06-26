import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Firstpage from "./pages/Firstpage";
import Registerpage from "./pages/Registerpage";
import Loginpage from "./pages/Loginpage";

import Homepage from "./pages/Homepage";
import { UserContext } from "./types/UserContext";

function App() {
  return (
    <>
      <Routes>
        <UserContext.Provider value="Hello from the context">
          <Route path="/firstpage" element={<Firstpage />}></Route>
          <Route path="/register" element={<Registerpage />}></Route>
          <Route path="/login" element={<Loginpage />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
        </UserContext.Provider>
      </Routes>
    </>
  );
}

export default App;
