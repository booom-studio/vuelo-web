import React from 'react';
import ReactDOM from 'react-dom';

import ApolloProvider from 'ConfiguredApolloProvider';
import ReduxProvider from 'ConfiguredReduxProvider';
import App from '@Containers/App';

ReactDOM.render(
  <ReduxProvider>
    <ApolloProvider>
      <App />
    </ApolloProvider>
  </ReduxProvider>,
  document.getElementById('root')
);
