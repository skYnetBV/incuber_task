import React, { Component } from 'react';
import {StyledApp} from './styled';
import {Wrap} from './components';

class App extends Component {
  render() {
    return (
        <StyledApp>
            <Wrap/>
        </StyledApp>
    );
  }
}

export default App;
