import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

const prompts= [
      [0, 'Choose a writing prompt', ''],
      [1, 'sudden riches', ''],
      [2,  'sudden fame',  ''],
      [3,  'tragedy',  ''],
      [4,  'love',  ''],
      [5,  'school',  ''],
      [6,  'travel',  ''],
      [7 , 'moving to a new city',  ''],
      [8,  'apocalypse',  ''],
      [9,  'adventure',  ''],
      [10 , 'childhood',  '']
];


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
      editor: ''
      }
    }

    // console.log(SelectPrompt());
    handleClick({name, value}) {
      console.log('click: ',name,value);
    }

    handleChange({name, value}) {
      console.log('change: ',name,value);
      console.log(typeof prompts[0][0]);
      // this.setState({ [name]: value });
      // this.setState[target.value] = target.value;
    }

    handlePromptSelect(target) {
      console.log('select: ', target);
    }

   Prompts({ prompts }) {
      return (
        <select value={this.state.value} onChange={this.handleChange}>
        {prompts.map(prompt => (
            <option key={prompt[0]} prompt={prompt[1]}/>
          ))}
        </select>
      );
    }






    render() {
      return (
        <div className="App wrapper">
        <div className="App-logo"/>
        <h3> eddy - itor awaits your input </h3>
        <div>
        <Prompt/>
        </div>

        <div>

        <label>
        Enter text here:
        <textarea name ="editor" value = {this.state.editor} onChange = {({target}) =>this.handleChange(target)}/>
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