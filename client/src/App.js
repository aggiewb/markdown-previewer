import React from 'react';
import TextArea from './components/TextArea.js'
import TextPreview from './components/TextPreview.js'
import Footer from './components/Footer.js'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      markDown: this.defaultMarkdown
    }
    this.userInput = this.userInput.bind(this);
  }

  h1 = '# Welcome to my markdown previewer! This is an h1.\n\n';
  h2 = '## This is an h2.\n\n'
  a = '[This is a link.](https://www.aggiewb.com)\n\n'
  inlineCode = `This is an example of some inline code: \`console.log('Hello World');\`\n\n`;
  codeBlock = `
\`\`\`
//This is a code block.
function fizzBuzz(){
  for(let i = 1; i <= 100; i++){
    let word = '';
    if(i % 3 === 0){
      word += 'Fizz';
    }
    if(i % 5 === 0){
      word += 'Buzz';
    }
    if(word){
      console.log(word);
    } else {
      console.log(i);
    }
  }
}
\`\`\`\n\n`;
  list = '1. An\n2. ordered\n3. list\n- An\n- unordered\n- list\n\n';
  blockQuote = 'This is a block quote.\n> Blockquotes are very handy in email to emulate reply text. This is a very long line that will still be quoted properly when it wraps. Oh boy let\'s keep writing to make sure this is long enough to actually wrap for everyone.\n\n';
  image = 'This is an image:\n![Orange cat](https://upload.wikimedia.org/wikipedia/commons/archive/1/18/20190829201925%21Orange_cat_cartoon.png)\n\n';
  bold='If you\'re **bold**, you can check out more syntax [**here**](https://www.markdownguide.org/cheat-sheet/)!'

  defaultMarkdown = `${this.h1}${this.h2}${this.a}${this.inlineCode}${this.codeBlock}${this.list}${this.blockQuote}${this.image}${this.bold}`;

  userInput(event){
    this.setState({markDown: event.target.value});
  }
  
  render(){
    return <main>
      <h1>Markdown Previewer</h1>
      <TextArea userInput={this.userInput} text={this.state.markDown}/>
      <TextPreview text={this.state.markDown}/>
      <Footer />
    </main>;
  }
}

export default App;