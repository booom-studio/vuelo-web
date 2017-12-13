import React from 'react';
import PropTypes from 'prop-types';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
});

const authLink = setContext((_, { headers = {} }) => {
  const token = localStorage.getItem('token');

  headers.authorization = token ? `Bearer ${token}` : null;

  return { headers };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const ConfiguredApolloProvider = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

ConfiguredApolloProvider.displayName = 'ConfiguredApolloProvider';
ConfiguredApolloProvider.propTypes = {
  children: PropTypes.node
};

export default ConfiguredApolloProvider;
