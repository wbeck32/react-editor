import React, { Component } from 'react';
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
        {index: 1, subject: 'sudden riches', prompt: 'The PowerBall is up to $435M and you buy the winning ticket.'},
        {index: 2, subject: 'sudden fame', prompt: 'You recreate the Star Wars kid video and it goes viral worldwide.'},
        {index: 3, subject: 'tragedy', prompt: 'Your significant other dies suddenly. How do you remember them?.'},
        {index: 4, subject: 'love', prompt: 'The person at the other end of the bar is checking you out. They send you a drink.'},
        {index: 5, subject: 'school', prompt: 'You win a full scholarship including a generous living stipend to the school of your choice. What do you study?'},
        {index: 6, subject: 'travel', prompt: 'You wake up in the most fascinating place in the world. Where are you?'},
        {index: 7 ,subject: 'moving to a new city', prompt: 'It\'s your first night in your new city. What are you going to do?'},
        {index: 8, subject: 'apocalypse', prompt: 'The zombies have risen and you need to make a plan.'},
        {index: 9, subject: 'adventure',  prompt:'You\'re forced to leave your home with nothing but whatever you can carry. What do you take? How do you survive?'},
        {index: 10, subject:'childhood', prompt: 'You\'re eight years old again. What will you do today?'}
      ],
      prompt: '',
      fontSize: 12,
      fontFamily: '',
      countColor: ''
    }

  }

  handleClick({name, value}) {
    this.setState({[name]: value});
  }

  handleChange({name, value}) {
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