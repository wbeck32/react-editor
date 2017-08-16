import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props);

    App.defaultProps = {
      charCount: 0
    }

    this.state = {
      name: 'wrld',
      charCount: 0,
      value: '',
      editor: '',
      prompts: [
        {index: 0, subject: 'Choose a writing prompt', prompt: ''},
        {index: 1, subject: 'sudden riches', prompt: ''},
        {index: 2, subject: 'sudden fame', prompt: ''},
        {index: 3, subject: 'tragedy', prompt: ''},
        {index: 4, subject: 'love', prompt: ''},
        {index: 5, subject: 'school', prompt: ''},
        {index: 6, subject: 'travel', prompt: ''},
        {index: 7 ,subject: 'moving to a new city', prompt: ''},
        {index: 8, subject: 'apocalypse', prompt: ''},
        {index: 9, subject: 'adventure',  prompt:''},
        {index: 10, subject:'childhood', prompt: ''}
      ]

    }

    }

    handleClick({name, value}) {
      console.log('click: ',name,value);
    }

    handleChange(target) {
      console.log('change: ',target.value);
      // console.log(typeof this.state.prompts);
      // this.setState({ [name]: value });
      // this.setState[target.value] = target.value;
    }

    handlePromptSelect(target) {
      console.log('change: ',target.value);
    }



    render() {
      return (
        <div className="App wrapper">
        <div className="App-logo"/>
        <h3> eddy - itor awaits your input </h3>
        <div>

        <select name="promptChooser" value={this.state.value} onChange= {({target}) => this.handlePromptSelect(target)}>
        {
          this.state.prompts.map(prompt => (
           <option key={prompt.index} value={prompt.index}>{prompt.subject}</option>
          ))
        }
        </select>


        </div>

        <div>

        <label>
        Enter text here:
        <textarea name ="editor" value = {this.state.editor} onChange = {({target}) => this.handleChange(target)}/>
        </label>
        </div>
        <div>
        <label>
        characters:
        <div name="charCount" value={this.state.charCount}>{this.state.charCount}</div>
        </label>
        </div>
        </div>

      );
    }
  }

  export default App;