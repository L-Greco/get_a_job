import { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { typeQuery, fetchJobsAction } from "../actions";

const endpoint = "https://remotive.io/api/remote-jobs?search=";

const mapStateToProps = (state) => ({
  query: state.data.query,
});
const mapDispatchToProps = (dispatch) => ({
  typingQuery: (query) => {
    dispatch(typeQuery(query));
  },
  fetchingJobs: (endpoint, query) => {
    dispatch(fetchJobsAction(endpoint + query));
  },
});

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleEnter = () => {
    if (this.props.history.pathname !== "/") {
      this.props.history.push(`/`);
    }
    if (this.props.query !== this.state.query) {
      this.props.typingQuery(this.state.query);
      this.props.fetchingJobs(endpoint, this.state.query);
    }
  };
  render() {
    return (
      <div style={{ display: "flex", alignItems: "flex-end" }} className="mt-3">
        <input
          className="form-control mt-3 "
          type="search"
          style={{ fontFamily: '"Indie Flower" !important' }}
          placeholder="Search for the job you're looking for..."
          aria-label="Search"
          value={this.state.query}
          onChange={(e) => this.setState({ query: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "NumpadEnter") {
              this.handleEnter();
            }
          }}
        ></input>
        <button
          className="btn btn-outline-info px-4"
          onClick={() => {
            this.handleEnter();
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
