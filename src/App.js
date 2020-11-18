import React from "react";
import CounterContainer from "./components/counter/CounterContainer";
import Search from "./components/form/Search";
import Space from "./components/Space";
import "./styles.css";

function App() {
  return (
    <main>
      <h1>Road to Redux</h1>
      <CounterContainer />
      <Space />
      <Search />
    </main>
  );
}

export default App;
