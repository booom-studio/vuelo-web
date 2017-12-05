import React, { Component } from 'react';

import TestComponent from '@Components/Test';
import AddTestComponent from '@Components/AddTest';

import Login from '@Containers/Login';

class App extends Component {
  render() {
    return (
      <div>
        <AddTestComponent />
        <TestComponent />
        <Login />
      </div>
    );
  }
}

export default App;
