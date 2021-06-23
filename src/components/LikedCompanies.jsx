import { connect } from "react-redux";
import { withRouter } from "react-router";
const mapStateToProps = (state) => state;

const LikedCompanies = ({ companies, history }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {companies.map((company) => (
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
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(withRouter(LikedCompanies));
