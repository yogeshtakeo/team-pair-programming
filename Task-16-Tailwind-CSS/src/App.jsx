import "./App.css";
import Button from "./components/Button.jsx";
import Card from "./components/Card.jsx";
import options from "./components/Card.js";
import form from "./components/Form";

function App() {
  return (
    <>
      <div class="grid gap-10 grid-cols-1 h-100 bg-gradient-to-r from-cyan-500 to-blue-500 p-10">
        <h1 class="capitalize bold text-2xl">
          Learning Props The Hard Way And Thinking About Father's Day
        </h1>
        <p className="FatherDay">
          Father’s Day celebrates and honors the men who have embraced the
          essential role of fatherhood. On this day, we also thank fathers and
          father figures (uncles, grandfathers) for the sacrifices they make,
          for embracing the responsibility of nurturing and raising children,
          and for their devotion to their families.
        </p>

        <h2>Gift Options For Father's Day:</h2>
        <Card
          name={options[0].name}
          img={options[0].img}
          description={options[0].description}
          tel={options[0].tel}
          email={options[0].email}
        />
        <Card
          name={options[1].name}
          img={options[1].img}
          description={options[1].description}
          tel={options[1].tel}
          email={options[1].email}
        />
        <Card
          name={options[2].name}
          img={options[2].img}
          description={options[2].description}
          tel={options[2].tel}
          email={options[2].email}
        />
        <div className="box">
          <Button>Buy Father's Day Gifts</Button>
          <Button>Save For Later</Button>
          <Button>Check The Cart</Button>
        </div>
        <footer>copy right@2023 Namkhang and Sandesh Task</footer>
      </div>
    </>
  );
}

export default App;
