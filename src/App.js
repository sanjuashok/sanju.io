import React, { Component } from 'react';
import Card from './components/Card.js';
import Fitness from './components/Fitness.js';
import Intro from './components/Intro.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Card>
            <Fitness />
        </Card>
      </div>
    );
  }
}

export default App;
