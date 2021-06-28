import { connect } from "react-redux";
import { withRouter } from "react-router";
import { unlikeCompany } from "../actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  UnlikeCompany: (company) => {
    dispatch(unlikeCompany(company));
  },
});
const LikedCompanies = ({ like, history, UnlikeCompany }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        overflow: "auto",
        flexWrap: "wrap",
      }}
    >
      {like.companies.map((company, index) => (
        <div className="flexC my-0">
          <p
            className="addedComps"
            onClick={() => history.push(`/Company/${company}`)}
          >
            <em>{company}</em>
          </p>
          <p className="removeComps" onClick={() => UnlikeCompany(company)}>
            Remove
          </p>
        </div>
      ))}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LikedCompanies));
