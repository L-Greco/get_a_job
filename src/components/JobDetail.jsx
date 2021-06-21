import { Component } from "react";

class JobDetail extends Component {
  render() {
    return <td dangerouslySetInnerHTML={{ __html: this.props.job }} />;
  }
}

export default JobDetail;
