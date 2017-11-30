import React, { Component } from 'react';

import TestComponent from '@Components/Test';
import AddTestComponent from '@Components/AddTest';


class App extends Component {
  render() {
    return (
      <div>
        <AddTestComponent />
        <TestComponent />
      </div>
    );
  }
}

export default App;
