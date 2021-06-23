import { Component } from "react";
import { Col, Row, Spinner, Card, Button } from "react-bootstrap";
import JobDetail from "./JobDetail";
import { AiFillHeart } from "react-icons/ai";

class JobList extends Component {
  state = {
    isLoading: false,
    jobs: [],
    selectedJob: "",
  };

  toggleLoader = () => {
    this.state.isLoading
      ? this.setState({ isLoading: false })
      : this.setState({ isLoading: true });
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.query !== this.props.query) {
      try {
        this.toggleLoader();
        let res = await fetch(
          "https://remotive.io/api/remote-jobs?search=" + this.props.query
        );
        if (res.ok) {
          let data = await res.json();
          this.toggleLoader();
          this.setState({ jobs: data.jobs });
        } else {
          this.toggleLoader();
          alert("response status is : " + res.status);
        }
      } catch (error) {
        this.toggleLoader();
        console.log(error);
        alert(error.message);
      }
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
            <p style={{ color: "#b9b9b9" }}>
              Results : {this.state.jobs.length}
            </p>
          )}

          <Col sm={4}>
            {this.state.jobs.length > 0 && !this.state.isLoading ? (
              this.state.jobs.map((job) => (
                <Card key={job.id} style={{ width: "270px" }}>
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Text>
                      <strong>Job Type : </strong>
                      {job.job_type}
                    </Card.Text>
                    <div
                      className="d-flex "
                      style={{
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <strong>Company: </strong>
                      <em>{job.company_name} </em>

                      <Button style={{ float: "right" }} variant="danger">
                        <AiFillHeart style={{ fontSize: "1rem" }} />
                      </Button>
                    </div>
                    <div
                      className="mt-1"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        onClick={() =>
                          this.setState({ selectedJob: job.description })
                        }
                        variant="info"
                        className="mr-1"
                      >
                        Details
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() =>
                          this.props.history.push(
                            `/Company/${job.company_name}`
                          )
                        }
                      >
                        Company
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <h2> </h2>
            )}
          </Col>
          <Col sm={8}>
            <JobDetail job={this.state.selectedJob} />
          </Col>
        </Row>
      </>
    );
  }
}

export default JobList;
