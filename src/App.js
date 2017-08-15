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
      editor: '',
      promptString : 'Clicky'
    };

  }

  handleClick({name, value}) {
    console.log('click: ',name,value);


  }

  handleChange({name, value}) {
    console.log('change: ',name,value);
    this.setState({ [name]: value });
    // this.setState[target.value] = target.value;
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
      <label>
      Clicky
      <input name="promptString" value = {this.state.promptString} onClick = {({target}) => this.handleClick({target})} />

      </label>
      <label>
      Enter text here:
        <input name = "editor" value = {this.state.editor} onChange = {({target}) =>this.handleChange(target)}/>
      </label>
        <label >
          Enter text here:
        </label>
    </div>
    </div>
    );
  }
}

export default App;