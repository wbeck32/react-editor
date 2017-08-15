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
      underline: '',
      value: '',
      editor: ''
    };

  }

  handleClick(target) {
    console.log('click: ', target);

  }

  handleChange({name,value}) {
    console.log('change: ', name, value);
    this.setState({[name]: value})
  }

  handleSelect(target) {
    console.log('select: ', target);
  }

  render() {
    return (
      <div className="App wrapper">
      <div className="App-logo"/>
      <h3> eddy - itor awaits your input </h3>
      <div>
        <input name = "editor" value = {this.state.editor} onChange = {({target}) =>this.handleChange(target)}/>

        <label >
          Enter text here:
          <input value = {this.state.name}type = "textarea"onChange = {({target}) => this.handleChange(target)} onSelect = {({target}) => this.handleSelect(target)}/>
        </label>
    </div>
    </div>
    );
  }
}

export default App;