import React from "react";
import CounterContainer from "./components/counter/CounterContainer";
import SearchableList from "./components/form/SearchableList";
import Space from "./components/Space";
import "./styles.css";

const list = [
  {
    id: "1",
    name: "React"
  },
  {
    id: "2",
    name: "Redux"
  },
  {
    id: "3",
    name: "Redux Saga"
  }
];

function App() {
  return (
    <main>
      <h1>Road to Redux</h1>
      <CounterContainer />
      <Space />
      <SearchableList list={list} />
    </main>
  );
}

export default App;
