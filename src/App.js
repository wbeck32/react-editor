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
        {index: 1, subject: 'sudden riches', prompt: 'one'},
        {index: 2, subject: 'sudden fame', prompt: 'two'},
        {index: 3, subject: 'tragedy', prompt: 'three'},
        {index: 4, subject: 'love', prompt: 'four'},
        {index: 5, subject: 'school', prompt: 'five'},
        {index: 6, subject: 'travel', prompt: 'six'},
        {index: 7 ,subject: 'moving to a new city', prompt: 'seven'},
        {index: 8, subject: 'apocalypse', prompt: 'eight'},
        {index: 9, subject: 'adventure',  prompt:'nine'},
        {index: 10, subject:'childhood', prompt: 'ten'}
      ],
      promptText: 'hullo',
      prompt: 'p'

    }

    }

    handleClick({name, value}) {
      console.log('click: ',name,value);
    }

    handleChange({name, value}) {
      // console.log('change: ',target.value);
      // console.log(typeof this.state.prompts);
      console.log('name: ', name, 'value: ', value);
      console.log(value.length);
      this.setState({editor: value });
      this.setState({charCount: value.length})
      // this.setState[target.value] = target.value;
    }

    handlePromptSelect(target) {
      // console.log('change: ',target.value, target.name);
      this.state.prompt = this.state.prompts[target.value].prompt;
      // console.log('prompt: ', this.state.prompt)
      this.setState({promptText : this.state.prompt})
      // console.log({editor})
      // this.setState({target.value})
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
        <div name="promptText" value={this.state.value}>Writing prompt: {this.state.prompt}
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