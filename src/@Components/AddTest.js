import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class AddTest extends React.Component {

  state = {
    name: ''
  }

  render() {
    return (
      <div>
      <input
        value={this.state.name}
        onChange={(e) => this.setState({name: e.target.value})} />
      <button onClick={() => this.props.mutate({variables: {name: this.state.name}})}>
        Add User
      </button>
      <p> Refresh manually after adding a user! </p>
    </div>
  )}
};

const createUser = gql`
  mutation createUser($name: String!) {
    createUser(name: $name) {
      id
    }
  }
`;

const AddUserWithData = graphql(createUser)(AddTest);

export default AddUserWithData