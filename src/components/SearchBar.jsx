import { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { typeQuery, fetchJobsAction } from "../actions";

const mapStateToProps = (state) => ({
  query: state.data.query,
});

const mapDispatchToProps = (dispatch) => ({
  typingQuery: (query) => {
    dispatch(typeQuery(query));
  },
});

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
          style={{ fontFamily: '"Indie Flower" !important;' }}
          placeholder="Search for the job you're looking for..."
          aria-label="Search"
          value={this.state.query}
          onChange={(e) => this.setState({ query: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "NumpadEnter") {
              console.log(this.props.history);
              // this.props.history.push(`/`);
              this.props.typingQuery(this.state.query);
            }
          }}
        ></input>
        <button
          className="btn btn-outline-info px-4"
          onClick={() => {
            console.log(this.props.history);
            // this.props.history.push(`/`);
            this.props.typingQuery(this.state.query);
          }}
        >
          Go!
        </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchBar));
