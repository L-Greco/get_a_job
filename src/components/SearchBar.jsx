import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";

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
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "NumpadEnter") {
              this.props.queryToState(this.state.query);
            }
          }}
        ></input>
        <button
          className="btn btn-outline-info "
          onClick={() => {
            this.props.history.push(`/`);
            this.props.queryToState(this.state.query);
          }}
        >
          Go!
        </button>
      </div>
    );
  }
}

export default withRouter(SearchBar);
