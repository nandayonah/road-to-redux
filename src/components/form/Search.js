import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { value } = event.target;

    this.setState({ query: value });
  }

  onSubmit(event) {
    const { query } = this.state;

    console.log("Searched keyword: " + query);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
