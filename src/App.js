import React from "react";
import CounterContainer from "./components/counter/CounterContainer";
import SearchableList from "./components/form/SearchableList";
import Space from "./components/Space";
import "./styles.css";

function App() {
  return (
    <main>
      <h1>Road to Redux</h1>
      <CounterContainer />
      <Space />
      <SearchableList />
    </main>
  );
}

export default App;
