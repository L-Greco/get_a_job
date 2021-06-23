import { Component } from "react";
import { Col, Row, Spinner, Card, Button } from "react-bootstrap";
import JobDetail from "./JobDetail";
class CompanyDetail extends Component {
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

  fetchData = async () => {
    try {
      this.toggleLoader();
      let res = await fetch(
        "https://remotive.io/api/remote-jobs?company_name=" +
          this.props.match.params.company
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
  };

  componentDidMount = async () => {
    this.fetchData();
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.match.params.company !== this.props.match.params.company) {
      this.fetchData();
    }
  };

  render() {
    return (
      <Row>
        {this.state.isLoading && (
          <Spinner className="mx-auto" animation="border" variant="info" />
        )}
        <Col xs={4}>
          {this.state.jobs.length > 0 && !this.state.isLoading ? (
            this.state.jobs.map((job) => (
              <Card key={job.id}>
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Text>
                    <strong>Job Type : </strong>
                    {job.job_type}
                  </Card.Text>
                  <Card.Text>
                    <strong>Company: </strong>
                    {job.company_name}
                  </Card.Text>
                  <div style={{ display: "flex" }}>
                    <Button
                      onClick={() =>
                        this.setState({ selectedJob: job.description })
                      }
                      variant="primary"
                    >
                      Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h2> </h2>
          )}
        </Col>
        <Col xs={8}>
          <JobDetail job={this.state.selectedJob} />
        </Col>
      </Row>
    );
  }
}

export default CompanyDetail;
