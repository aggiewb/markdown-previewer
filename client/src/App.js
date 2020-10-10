import React from 'react';
import TextArea from './components/TextArea.js'
import TextPreview from './components/TextPreview.js'
import Footer from './components/Footer.js'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      markDown: ''
    }
    this.userInput = this.userInput.bind(this);
  }

  userInput(event){
    this.setState({markDown: event.target.value});
  }
  
  render(){
    return <main>
      <h1>Markdown Previewer</h1>
      <TextArea userInput={this.userInput}/>
      <TextPreview text={this.state.markDown}/>
      <Footer />
    </main>;
  }
}

export default App;