import React from 'react';
import TextArea from './components/TextArea.js'
import TextPreview from './components/TextPreview.js'
import Footer from './components/Footer.js'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }
  
  render(){
    return <main>
      <h1>Markdown Previewer</h1>
      <TextArea />
      <TextPreview />
      <Footer />
    </main>;
  }
}

export default App;