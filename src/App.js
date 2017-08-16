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
      ['Choose a writing prompt', ''],
      ['sudden riches', ''],
      [  'sudden fame',  ''],
      [  'tragedy',  ''],
      [  'love',  ''],
      [  'school',  ''],
      [  'travel',  ''],
      [  'moving to a new city',  ''],
      [  'apocalypse',  ''],
      [  'adventure',  ''],
      [  'childhood',  '']]
  };

 this.promptItems = this.state.prompts.map(prompt => {
      return <option name="promptOption" value="{prompt[1]}">{prompt[0]}</option>
})



}







  handleClick({name, value}) {
    console.log('click: ',name,value);
  }


  handleChange({name, value}) {
    console.log('change: ',name,value);
    // this.setState({ [name]: value });
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
      {this.promptItems}
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