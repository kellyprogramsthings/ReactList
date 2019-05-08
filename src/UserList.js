import React, {Component} from 'react';
import _ from 'lodash';
import {Container, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'; 

import User from './User';
import AddUser from './AddUser';

let nextId = 4;

const getNextId = () => {
  nextId++;
  return nextId;
};

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Modal isOpen={true} toggle={this.props.onCloseModal}>
          <ModalHeader toggle={this.props.onCloseModal}>Hi.</ModalHeader>
          <ModalBody>
            {this.props.editingName.name}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.onCloseModal}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.props.onCloseModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetings: [{id: 1, name: 'Vanya'}, {id: 2, name: 'Klaus'}, {id: 3, name: 'Diego'}],
      editingItem: null
    };

    this.addGreeting = this.addGreeting.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
    this.editGreeting = this.editGreeting.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  addGreeting(newName) {
    this.setState({greetings: [...this.state.greetings, {id: getNextId(), name: newName}]});
  }

  removeGreeting(removeId) {
    const filteredGreetings = _.reject(this.state.greetings, x => x.id === removeId);
    this.setState({greetings: filteredGreetings});
  }

  editGreeting(g) {
    this.setState({editingItem: g});
  }

  renderGreetings() {
    return _.chain(this.state.greetings)
      .sortBy(x => x.name)
      .map(g => (
        <User key={g.id} greeting={g} removeGreeting={this.removeGreeting} editGreeting={this.editGreeting}/>
      ))
      .value();
  }

  onCloseModal() {
    this.setState({editingItem: null});
  }

  render() {
    return (
      <Container>
        {this.renderGreetings()}
        <AddUser addGreeting={this.addGreeting} />
        {this.state.editingItem ? <EditModal editingName={this.state.editingItem} onCloseModal={this.onCloseModal}/> : null}
      </Container>
    )
  }
}

export default UserList;