import { Component } from "react";
import { Col, Row, Spinner, Card } from "react-bootstrap";
import JobDetail from "./JobDetail";
import { AiFillHeart } from "react-icons/ai";
import { connect } from "react-redux";
import { likeCompany, unlikeCompany, fetchJobsAction } from "../actions";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  LikeCompany: (company) => {
    dispatch(likeCompany(company));
  },
  UnlikeCompany: (company) => {
    dispatch(unlikeCompany(company));
  },
  fetchingJobs: (endpoint, query) => {
    dispatch(fetchJobsAction(endpoint + query));
  },
});

class JobList extends Component {
  state = {
    isLoading: this.props.data.isLoading,
    jobs: this.props.data.jobs,
    selectedJob: "",
    jobTitle: "",
  };

  heartChecker = (selectedCompanies, currentCompany) => {
    let filteredArray = selectedCompanies.filter(
      (company) => company === currentCompany
    );
    return filteredArray.length > 0 ? "selectedHeart " : "unselectedHeart";
  };

  componentDidUpdate = (prevProps) => {
    if (
      prevProps.data.query !== this.props.data.query ||
      prevProps.data.isLoading !== this.props.data.isLoading
    ) {
      this.setState({
        jobs: this.props.data.jobs,
        isLoading: this.props.data.isLoading,
      });
    }
  };

  render() {
    return (
      <>
        {this.state.isLoading && (
          <div style={{ display: "flex" }}>
            <div className="mx-auto">
              <Spinner
                animation="grow"
                style={{ marginRight: "10px" }}
                variant="info"
              />
              <Spinner
                animation="grow"
                style={{ marginRight: "10px" }}
                variant="info"
              />
              <Spinner animation="grow" variant="info" />
            </div>
          </div>
        )}

        <Row>
          {this.state.jobs.length > 0 && !this.state.isLoading && (
            <p style={{ color: "#b9b9b9", fontStyle: "italic" }}>
              Results : {this.state.jobs.length}
            </p>
          )}

          <Col sm={4}>
            {this.state.jobs.length > 0 && !this.state.isLoading ? (
              this.state.jobs.map((job) => (
                <Card key={job.id}>
                  <Card.Body>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                      }}
                    >
                      <Card.Title>{job.title}</Card.Title>
                      <a href="#jobDetailPage">
                        <p
                          onClick={() =>
                            this.setState({
                              selectedJob: job.description,
                              jobTitle: job.title,
                            })
                          }
                          className="mr-1 functionalP"
                        >
                          Details
                        </p>
                      </a>
                    </div>
                    <Card.Text>
                      <strong>Job Type : </strong>
                      {job.job_type.indexOf("_") !== -1
                        ? job.job_type.replace("_", " ")
                        : job.job_type}
                    </Card.Text>
                    <div
                      style={{
                        display: "flex ",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                      }}
                    >
                      <strong>Company :</strong>
                      <p
                        className="functionalP"
                        onClick={() =>
                          this.props.history.push(
                            `/Company/${job.company_name}`
                          )
                        }
                      >
                        {job.company_name}
                      </p>

                      <button
                        onClick={() => {
                          this.props.like.companies.includes(job.company_name)
                            ? this.props.UnlikeCompany(job.company_name)
                            : this.props.LikeCompany(job.company_name);
                        }}
                        style={{
                          float: "right",
                          border: "none",
                          backgroundColor: "white",
                        }}
                      >
                        <AiFillHeart
                          className={this.heartChecker(
                            this.props.like.companies,
                            job.company_name
                          )}
                        />
                      </button>
                    </div>
                    <div
                      className="mt-1"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    ></div>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <h2> </h2>
            )}
          </Col>
          <Col sm={8}>
            <JobDetail
              job={this.state.selectedJob}
              title={this.state.jobTitle}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
