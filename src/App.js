import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  // this is a call to Component.constructor()
  // data down, events up
  constructor(props) {
    super(props);

    this.state = {
      name: 'wrld',
      boo: 'boo',
      color: 'blue',
      underline: ''
    };
  }

  handleClick(target) {
    console.log('click: ',target);
    // const name = this.state.name === 'wrld' ? 'mars' : 'wrld';
    // this.setState(headerColor);
    // this.setState({textDecoration: underline})
    // state is a set of keys
    // this.setState({ secondHeaderColor});
  }

  handleChange(target) {
    console.log('change: ',target);

    // state is a set of keys
    // console.log('v: ',value)
    // this.setState({ value });
  }

  handleSelect(target) {
    console.log('select: ',target);


  }

  // look up "class fields" - property initializer for properties outside of the constructor

  render() {
    // either a state change or a prop change will re-render
    // inside the render function you can use fat arrow functions
    return (
      <div>
        <div className="App" onClick={({target}) => this.handleClick(target)}>
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
