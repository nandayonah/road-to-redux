import React from "react";
import List from "./List";
import Search from "./Search";

class SearchableList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "Redux"
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { value } = event.target;

    this.setState({ query: value });
  }

  render() {
    const { query } = this.state;
    const { list } = this.props;

    return (
      <div>
        <Search query={query} onChange={this.onChange}>
          Enter a keyword:{" "}
        </Search>
        <List list={(list || []).filter(byQuery(query))} />
      </div>
    );
  }
}

function byQuery(query) {
  return function (item) {
    return !query || item.name.toLowerCase().includes(query.toLowerCase());
  };
}

export default SearchableList;
