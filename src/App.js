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
      prompt: 'p',
     direction: 'ltr'
    }

  }

  handleClick({name, value}) {
    console.log('click: ',name, value);
    value === 'ltr' ? this.setState({direction: 'ltr'}) : this.setState({direction: 'rtl'})
  }

  handleChange({name, value}) {
    console.log('name: ', name, 'value: ', value);
    console.log(value.length);
    this.setState({editor: value });
    let msg = 'hey!'
    this.setState({charCount: value.length + msg})
    // this.setState[target.value] = target.value;
  }

  handlePromptSelect(target) {
    this.setState({prompt : this.state.prompts[target.value].prompt});
    this.setState({promptText : this.state.prompt})
    // this.setState({target.value})
  }


  render() {
    return (
      <div className="App wrapper">
      <div className="App-logo"/>
      <h3> eddy-itor awaits your input </h3>
      <div>
      <span>
      <select name="promptChooser" value={this.state.value} onChange= {({target}) => this.handlePromptSelect(target)}>
      {
        this.state.prompts.map(prompt => (
          <option key={prompt.index} value={prompt.index}>{prompt.subject}</option>
        ))
      }
      </select>
      </span>
      <span name="promptText" value={this.state.value}>
      {this.state.prompt}
      </span>
      </div>
<label>
<span>text direction</span>
<span>
left to right <input name="direction" value="ltr" type="radio" onClick = {({target}) => this.handleClick(target)}/>&nbsp;&nbsp;
right to left <input name="direction" value="rtl" type="radio" onClick = {({target}) => this.handleClick(target)}/>
</span>

</label>
      <div>
      <span>Enter text here:</span>
      <span> <textarea rows="20" name="editor" style={{direction: this.state.direction}}  value = {this.state.editor} onChange = {({target}) => this.handleChange(target)}/>
      </span>

      </div>
      <div>

      <span>
      characters:
      </span>
      <span name="charCount" value={this.state.charCount}>{this.state.charCount}
      </span>

      </div>
      </div>

    );
  }
}

export default App;