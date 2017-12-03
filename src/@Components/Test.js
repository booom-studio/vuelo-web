import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Test = ({ data: { allUsers, refetch } }) => (
  <div>
    <button onClick={() => refetch()}>Refresh</button>
    <ul>
      {allUsers && allUsers.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  </div>
);

Test.propTypes = {
  data: PropTypes.object
};

export default graphql(gql`
  {
    allUsers {
      id
      name
    }
  }
`)(Test);
