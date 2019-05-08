import React, {Component} from 'react';
import _ from 'lodash';
import {Container, Button, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'; 

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
      editedName: this.props.editingItem.name
    }

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(event) {
    this.setState({editedName: event.target.value});
  }

  render() {
    return (
      <div>
        <Modal isOpen={true} toggle={this.props.onCloseModal}>
          <ModalHeader toggle={this.props.onCloseModal}>Edit User</ModalHeader>
          <ModalBody>
            <Input value={this.state.editedName} onChange={this.handleUpdate}></Input>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.setChangedUser(this.props.editingItem.id, this.state.editedName)}>Save</Button>{' '}
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
      users: [{id: 1, name: 'Vanya'}, {id: 2, name: 'Klaus'}, {id: 3, name: 'Diego'}],
      editingItem: null
    };

    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.setChangedUser = this.setChangedUser.bind(this);
  }

  addUser(newName) {
    this.setState({users: [...this.state.users, {id: getNextId(), name: newName}]});
  }

  removeUser(removeId) {
    const filteredUsers = _.reject(this.state.users, x => x.id === removeId);
    this.setState({users: filteredUsers});
  }

  editUser(u) {
    this.setState({editingItem: u});
  }

  setChangedUser(id, newName) {
    let list = this.state.users;
    const index = _.findIndex(list, x => x.id === id);
    list[index] = {name: newName};
    this.setState({users: list});
    this.setState({editingItem: null});
  }

  renderUsers() {
    return _.chain(this.state.users)
      .sortBy(x => x.name)
      .map(u => (
        <User key={u.id} user={u} removeUser={this.removeUser} editUser={this.editUser}/>
      ))
      .value();
  }

  onCloseModal() {
    this.setState({editingItem: null});
  }

  render() {
    return (
      <Container>
        {this.renderUsers()}
        <AddUser addUser={this.addUser} />
        {this.state.editingItem ? <EditModal editingItem={this.state.editingItem} editUser={this.editUser} setChangedUser={this.setChangedUser} onCloseModal={this.onCloseModal}/> : null}
      </Container>
    )
  }
}

export default UserList;