import React from "react";
import List from "./List";
import Search from "./Search";

function SearchableList(props) {
  return (
    <div>
      <Search>Enter a keyword: </Search>
      <List />
    </div>
  );
}

export default SearchableList;
