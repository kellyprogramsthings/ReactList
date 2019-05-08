import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap'; 
import './HelloWorld.css';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedGreeting: ""
    };

    // this.removeGreeting = this.removeGreeting.bind(this);
    // this.editGreeting = this.editGreeting.bind(this);
    // this.handleUpdate = this.handleUpdate.bind(this);
    // this.toggleModal = this.toggleModal.bind(this);
  }

  // removeGreeting() {
  //   this.props.removeGreeting(this.props.nid);
  // }

  // editGreeting() {
  //   this.props.editGreeting(this.props.name, this.state.editedGreeting);
  // }

  // handleUpdate(event) {
  //   this.setState({editedGreeting: event.target.value})
  // }

  render() {
    return (
      <Row className="HelloWorld">
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

export default HelloWorld;