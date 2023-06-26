import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Body";
import Bottom from "./components/Bottom";
import Campus from "./components/campusLife";
import Modal from "./components/Modal";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Slider />
      <Campus />
      <Bottom />
      <Modal />
    </div>
  );
}

export default App;
