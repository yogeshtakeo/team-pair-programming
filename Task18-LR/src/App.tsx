// import { useEffect } from "react";
import { Outlet } from "react-router-dom";


// const apiUrl = "https://backend-namkhang.vercel.app/clients";
// const apiUrl = " http://localhost:3000/clients";

function App() {
  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div>
      <Outlet />
      {/* <Register/> */}
    </div>
  );
}

export default App;
