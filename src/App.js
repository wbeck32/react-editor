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
      prompt: 'p',
      fontSize: 12,
      fontFamily: '',
      countColor: ''
    }

  }

  handleClick({name, value}) {
    console.log('click: ',name, value);
    this.setState({[name]: value});
  }

  handleChange({name, value}) {
    console.log('name: ', name, 'value: ', value);
    console.log(value.length);
    this.setState({editor: value });
    let msg = ' less than 1500 characters'
    this.setState({charCount: value.length + msg})
    if (value.length > 1500) {
      this.setState({countColor: '#FF5733'})
      this.setState({charCount: value.length + msg})
    }
  }

  handlePromptSelect(target) {
    this.setState({prompt : this.state.prompts[target.value].prompt});
    this.setState({promptText : this.state.prompt})
  }


  render() {
    return (
      <div>
      <div className="App-logo"></div>
      <h3 style={{fontFamily: this.state.fontFamily}}> eddy-itor awaits your input </h3>
      <div>


      <span className="labelTxt">not sure what to write?</span>
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
      <div>

      <span className="labelTxt">font style</span>
      <button className="myButton" name="fontFamily" value={"'Source Code Pro', monospace"} onClick = {({target}) => this.handleClick(target)}>plain</button>
      <button className="myButton" name="fontFamily" value={"'Sacramento', cursive"} onClick = {({target}) => this.handleClick(target)}>script</button>
      <button className="myButton" name="fontFamily" value={"'Monoton', cursive"} onClick = {({target}) => this.handleClick(target)}>other</button>

      </div>
      <div>

<span className="labelTxt">text size</span>
<span>
small <input name="fontSize" value={12}  type="radio" onClick = {({target}) => this.handleClick(target)}/>&nbsp;&nbsp;
medium <input name="fontSize" value={18} type="radio" onClick = {({target}) => this.handleClick(target)}/>&nbsp;&nbsp;
large <input name="fontSize" value={36} type="radio" onClick = {({target}) => this.handleClick(target)}/>
</span>
</div>

      <div>
      <span className="labelTxt">Enter text here:</span>
      <span> <textarea rows="20" name="editor" style={{fontFamily: this.state.fontFamily, fontSize: this.state.fontSize}} value = {this.state.editor} onChange = {({target}) => this.handleChange(target)}/>
      </span>
      </div>
      <div>
      <span className="labelTxt">characters:</span>
      <span name="charCount" style={{color: this.state.countColor}} value={this.state.charCount}>{this.state.charCount}
      </span>
      </div>
</div>
    );
  }
}

export default App;