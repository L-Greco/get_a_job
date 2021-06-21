import { Component } from "react";
import { Col, Row } from "react-bootstrap";

class SearchBar extends Component {
  state = {
    query: "",
  };
  render() {
    return (
      <div style={{ display: "flex", alignItems: "flex-end" }} className="mt-3">
        <input
          className="form-control mt-3 "
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={this.state.query}
          onChange={(e) => this.setState({ query: e.target.value })}
        ></input>
        <button
          className="btn btn-outline-info "
          onClick={() => this.props.queryToState(this.state.query)}
        >
          Go!
        </button>
      </div>
    );
  }
}

export default SearchBar;
