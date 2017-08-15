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
      charCount: 0,
      value: '',
      editor: '',
      promptString : []
    };

  }



  handleClick({name, value}) {
    console.log('click: ',name,value);
  }

  generatePrompt({name, value}) {
    let prompts = [
      {subject: 'royalty', string:'You '}
    ];



    // let index = Math.trunc(Math.random()*10);
    // console.log(index);
    // this.setState({[name]:prompts[0]});
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

        <select name="promptSelect">
        prompts.map(prompt =>{
          <option name="promptOption" value="{prompt.string}">{prompt.subject}</option>
        })
      </select>

      </label>

<div>




      <label>
      Enter text here:
        <input name = "editor" value = {this.state.editor} onChange = {({target}) =>this.handleChange(target)}/>
      </label>
      </div>
      <div>
        <label>
        characters:
        <div name="charCount" value={this.state.charCount}>{this.state.charCount}</div>
        </label>
        </div>
    </div>
    </div>
    );
  }
}

export default App;