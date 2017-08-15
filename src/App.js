import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';


class App extends Component {

  constructor(props) {
    super(props);

    App.defaultProps = {
      charCounter: 0
    }

    this.state = {
      name: 'wrld',
      boo: 'boo',
      color: 'blue',
      underline: ''
    };

  }

  handleClick(target) {
    console.log('click: ',target);

  }

  handleChange(target) {
    console.log('change: ',target);


  }

  handleSelect(target) {
    console.log('select: ',target);
  }

  // look up "class fields" - property initializer for properties outside of the constructor

  render() {

    return (
      <div className="App-logo">
        <div className="App wrapper" onClick={({target}) => this.handleClick(target)}>
          Hello {this.state.name}
        </div>
        <div>
          <input
            value={this.state.name}
            onChange={({target}) =>
              this.handleChange(target)}
          />
        <h1>Good morning!</h1>

          <label>
          Enter text here:
          <input
            value={this.state.name}
            type="textarea"
            onChange={({target}) =>
              this.handleChange(target)}
            onSelect={({target}) => this.handleSelect(target)}
          />
          </label>
        </div>
      </div>
    );
  }
}

export default App;
