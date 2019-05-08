import React, {Component} from 'react';
import {Row, Col, Input, Button} from 'reactstrap'; 

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  handleUpdate(event) {
    this.setState({name: event.target.value});
  }

  addUser() {
    this.props.addUser(this.state.name);
    this.setState({name: ""});
  }

  render() {
    return (
      <Row>
        <Col xs="10">
          <Input type="text" value={this.state.name} onChange={this.handleUpdate} />
          </Col>
          <Col xs="2">
          <Button color="success" onClick={this.addUser}>Add</Button>
        </Col>
      </Row>
    )
  }
}

export default AddUser;