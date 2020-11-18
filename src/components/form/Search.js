import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "React"
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
      <div>
        {this.props.children}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.onChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
