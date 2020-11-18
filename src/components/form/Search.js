import React from "react";

function Search(props) {
  return (
    <div>
      {props.children}
      <form>
        <input type="text" value={props.query} onChange={props.onChange} />
      </form>
    </div>
  );
}

export default Search;
