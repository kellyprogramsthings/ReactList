import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap';

import './User.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedUser: ""
    };
  }

  render() {
    return (
      <Row className="User">
        <Col xs="10">
          Hello {this.props.user.name}!
        </Col>
        <Col xs="2">
          <Button color="danger" onClick={() => this.props.removeUser(this.props.user.id)}>Remove</Button>
          <Button color="primary" onClick={() => this.props.editUser(this.props.user)}>Edit</Button>
        </Col>
      </Row>
    );
  }
}

export default User;