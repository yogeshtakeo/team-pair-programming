import "./App.css";
import Button from "./button.jsx";
import Card from "./card";
import Form from "./form";

function App() {
  return (
    <>
      <div class="grid gap-10 grid-cols-1">
        <header>
          Learning Props The Hard Way And Thinking About Father's Day
        </header>
        <main>
          <p>
            Father’s Day celebrates and honors the men who have embraced the
            essential role of fatherhood. On this day, we also thank fathers and
            father figures (uncles, grandfathers) for the sacrifices they make,
            for embracing the responsibility of nurturing and raising children,
            and for their devotion to their families.
          </p>
        </main>
        <div class="grid gap-4 grid-cols-3 font-mono ... font-extralight underline ">
          <Button>Buy Cards</Button>
          <Button>Get Gifts</Button>
          <Button> Join Groups</Button>
        </div>
        <div class="grid-cols-1  bg-yellow-300 ... font-sans ... font-extralight p-5">
          <h1> Happy Father's Day!</h1>
          <img
            class="object-fill h-48 w-96 ..."
            src="https://wesleychoice.org/content/uploads/2020/06/fathersDay.jpg"
            alt="Happy Father's day"
          />

          <Card> Thank you dad for all your love and support</Card>
        </div>
        <div class="grid gap-4 grid-cols-3  font-mono ... text-neutral-950 p-5">
          <Form>Leave some sparkles wherever you go!</Form>
          <Form>Together, we can move the mountain!</Form>
          <Form>Turn Dreams Into Reality</Form>
        </div>
      </div>
      <footer>copy right@2023 Namkhang and Sandesh Task</footer>
    </>
  );
}

export default App;
