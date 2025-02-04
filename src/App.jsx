import { Fragment } from "react";
import "./App.scss";
import Header from './components/Header/Header';
import Greeting from './components/GreetingFunctionalComponent/Greeting';
import Counter from "./components/CounterClassComponent/Counter";

const message = "Digital Date and Time";

function App() {
  return (
    <Fragment>
      {/* Header component */}
      <Header />
      <main className="main-container">

        {/* Greeting and Counter components */}
        <span className="card-component">
          <Greeting message={message} />
          <Counter />
        </span>


      </main>
    </Fragment>
  )
};

export default App
