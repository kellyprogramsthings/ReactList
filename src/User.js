import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap'; 

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedGreeting: ""
    };
  }

  render() {
    return (
      <Row className="User">
        <Col xs="10">
          Hello {this.props.greeting.name}!
        </Col>
        <Col xs="2">
          <Button color="danger" onClick={() => this.props.removeGreeting(this.props.greeting.id)}>Remove</Button>
          <Button color="primary" onClick={() => this.props.editGreeting(this.props.greeting)}>Edit</Button>
        </Col>
      </Row>
    );
  }
}

export default User;