import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

function Test({ data: { allUsers, refetch } }) {
  return (
    <div>
      <button onClick={() => refetch()}>
        Refresh
      </button>
      <ul>
        {allUsers && allUsers.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default graphql(gql`
{ 
  allUsers {
    id
    name
  }
}
`)(Test);
