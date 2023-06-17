import "./App.css";
import Button from "./button.jsx";
import Card from "./card";
import Form from "./form";

function App() {
  return (
    <>
      <div class="grid gap-10 grid-cols-1 h-100 bg-gradient-to-r from-cyan-500 to-blue-500 p-10">
        <header class=" capitalize bold text-2xl">
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
        <div class="flex gap-2 bg-blue-400 ... font-sans ... font-extralight font-bold p-10">
          <h1 class="'center"> Happy Father's Day!</h1> <br />
          <img
            class=" border-black  h-48 w-50 ..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk89qOgDvtD-j0Zmq7IjAHUy74RyOBWHQmmQ&usqp=CAU"
            alt="Happy Father's day"
          />
          <img
            class=" border-lime-500  h-48 w-50 ..."
            src="https://wesleychoice.org/content/uploads/2020/06/fathersDay.jpg"
            alt="Happy Father's day"
          />
          <img
            class=" border-lime-500  h-48 w-50 ..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMLQGvfdtQkl66pkKgmSrHYq8W3z-MqclgQ&usqp=CAU"
            alt="Happy Father's day"
          />
          <Card class="font-bold text-center">
            Thank you dad for all your love and support!
          </Card>
        </div>
        <div class="grid gap-4 grid-cols-3  font-mono ... text-neutral-950 p-5">
          <Form>Leave some sparkles wherever you go!</Form>
          <Form>Together, we can move the mountain!</Form>
          <Form>Turn Dreams Into Reality</Form>
        </div>{" "}
        <footer>copy right@2023 Namkhang and Sandesh Task</footer>
      </div>
    </>
  );
}

export default App;
