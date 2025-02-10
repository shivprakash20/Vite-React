import { Fragment } from "react";
import "./App.scss";
import Header from './components/Header/Header';
import Greeting from './components/GreetingFunctionalComponent/Greeting';
import Counter from "./components/CounterClassComponent/Counter";
import EventHandling from "./components/EventHandling/EventHandling";

const message = "Digital Date and Time";

function App() {
  return (
    <Fragment>
      {/* Header component */}
      <Header />
      <main className="main-container">

        {/* Greeting and Counter components */}
        <div className="card-component">
          <Greeting message={message} />
          <Counter />
        </div>

        {/* Event Handling */}
        <div className="event-handling">
        <EventHandling />
        </div>

      </main>
    </Fragment>
  )
};

export default App
