import { connect } from "react-redux";
import { Component } from "react";
import LikedCompanies from "./LikedCompanies";

const mapStateToProps = (state) => ({
  likedCompanies: state.companies.length,
});

class likedCompaniesIndicator extends Component {
  state = {
    isClicked: false,
  };
  render() {
    return (
      <>
        {this.props.likedCompanies > 0 && (
          <div
            className="mt-1"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p
              onClick={() =>
                !this.state.isClicked
                  ? this.setState({ isClicked: true })
                  : this.setState({ isClicked: false })
              }
              style={{
                fontWeight: "700",
                color: "rgb(10,88,202)",
                cursor: "pointer",
              }}
            >
              Favourite Companies{" "}
            </p>
            <p style={{ fontWeight: "700", color: "rgb(10,88,202)" }}>
              {this.props.likedCompanies}{" "}
            </p>
          </div>
        )}
        {this.state.isClicked && <LikedCompanies />}
      </>
    );
  }
}

export default connect(mapStateToProps)(likedCompaniesIndicator);
