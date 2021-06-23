import './App.css';
import { Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from './components/SearchBar';
import { Component } from "react"
import JobList from './components/JobList';
import CompanyDetail from "./components/CompanyDetail"
class App extends Component {
  state = {
    query: "",
    company: ""
  }

  queryToState = (query) => {
    let modifiedQuery = query.replace(" ", "%20")
    this.setState({ query: modifiedQuery })
  }

  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Col id="heading" sm={12} className="text-center mt-5">
              <Link to="/">
                <h1
                  onClick={() => this.setState({ query: this.state.query + " " })}
                >Get a Job</h1>
              </Link>
              <Route path="/" exact render={(routerProps) => <SearchBar {...routerProps} queryToState={this.queryToState} />} />
              {/* <SearchBar queryToState={this.queryToState} /> */}
            </Col>
          </Row>
          <hr />
          <Route path="/" exact render={(routerProps) => <JobList {...routerProps} query={this.state.query} />} />
          <Route path="/Company/:company" exact render={(routerProps) => <CompanyDetail {...routerProps} />} />
        </Container>
      </Router>
    );
  }

}

export default App;
