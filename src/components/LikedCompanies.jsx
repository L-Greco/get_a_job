import { connect } from "react-redux";
import { withRouter } from "react-router";
const mapStateToProps = (state) => state;

const LikedCompanies = ({ like, history }) => {
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
            style={{
              color: "rgb(13,202,240)",
              fontWeight: "700",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            onClick={() => history.push(`/Company/${company}`)}
          >
            <em>{company}</em>
          </p>
          <p className="removeComps">Remove</p>
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(withRouter(LikedCompanies));
