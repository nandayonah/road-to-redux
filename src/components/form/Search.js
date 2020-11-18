import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { value } = this.input;

    console.log("Searched keyword: " + value);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref={(node) => (this.input = node)} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
