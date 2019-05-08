import React, {Component} from 'react';
import {Row, Col, Input, Button} from 'reactstrap'; 

class AddGreeter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetingName: ""
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.addGreeting = this.addGreeting.bind(this);
  }

  handleUpdate(event) {
    this.setState({greetingName: event.target.value});
  }

  addGreeting() {
    this.props.addGreeting(this.state.greetingName);
    this.setState({greetingName: ""});
  }

  render() {
    return (
      <Row>
        <Col xs="10">
          <Input type="text" value={this.state.greetingName} onChange={this.handleUpdate} />
          </Col>
          <Col xs="2">
          <Button color="success" onClick={this.addGreeting}>Add</Button>
        </Col>
      </Row>
    )
  }
}

export default AddGreeter;