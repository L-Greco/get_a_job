import { Component } from "react";
import { Col, Row, Spinner, Card, Button } from "react-bootstrap";
import JobDetail from "./JobDetail";
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
          console.log(this.state.jobs);
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
      <Row>
        {this.state.isLoading && (
          <Spinner className="mx-auto" animation="border" variant="info" />
        )}
        <Col sm={4}>
          {this.state.jobs.length > 0 && !this.state.isLoading ? (
            this.state.jobs.map((job) => (
              <Card key={job.id}>
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Text>
                    <strong>{job.job_type}</strong>
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
                    <Button
                      variant="primary"
                      onClick={() =>
                        this.props.history.push(`/Company/:${job.company_name}`)
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
    );
  }
}

export default JobList;
