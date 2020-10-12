import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import TextArea from './components/TextArea.js';

//https://jestjs.io/docs/en/expect
//shallow: https://enzymejs.github.io/enzyme/docs/api/shallow.html
//mount: https://enzymejs.github.io/enzyme/docs/api/mount.html

const EXPECTED_DEFAULT_MARKDOWN = "# Welcome to my markdown previewer! This is an h1.\n\n## This is an h2.\n\n[This is a link.](https://www.aggiewb.com)\n\nThis is an example of some inline code: `console.log('Hello World');`\n\n\n```\n//This is a code block.\nfunction fizzBuzz(){\n  for(let i = 1; i <= 100; i++){\n    let word = '';\n    if(i % 3 === 0){\n      word += 'Fizz';\n    }\n    if(i % 5 === 0){\n      word += 'Buzz';\n    }\n    if(word){\n      console.log(word);\n    } else {\n      console.log(i);\n    }\n  }\n}\n```\n\n1. An\n2. ordered\n3. list\n- An\n- unordered\n- list\n\nThis is a block quote.\n> Blockquotes are very handy in email to emulate reply text. This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone.\n\nThis is an image:\n![Orange cat](https://upload.wikimedia.org/wikipedia/commons/archive/1/18/20190829201925%21Orange_cat_cartoon.png)\n\nIf you're **bold**, you can check out more syntax [**here**](https://www.markdownguide.org/cheat-sheet/)!";

const EXPECTED_USER_INPUT = "# Hello World";

it('App deeply renders as a smoke test', () => {
  mount(<App />);
});

it('should render App class child components, and initialize their props', () => {
  const app = shallow(<App />);
  const textArea = app.find('TextArea');
  const textPreview = app.find('TextPreview');
  const footer = app.find('Footer');

  expect(textArea.exists()).toEqual(true);
  expect(textArea.prop('userInput')).toBeDefined();
  expect(textArea.prop('text')).toEqual(EXPECTED_DEFAULT_MARKDOWN);

  expect(textPreview.exists()).toEqual(true);
  expect(textPreview.prop('text')).toEqual(EXPECTED_DEFAULT_MARKDOWN);

  expect(footer.exists()).toEqual(true);
});

it('should render TextArea, and set textarea to a user input text prop', () => {
  const textArea = shallow(<TextArea text={EXPECTED_USER_INPUT}/>);
  const textAreaElement = textArea.find('textarea');

  expect(textAreaElement.prop('value')).toEqual(EXPECTED_USER_INPUT);
});

it('should be able to call userInput on change within textarea element in TextArea', () => {
  const userInput = jest.fn();
  const textArea = shallow(<TextArea userInput={userInput}/>);
  const textAreaElement = textArea.find('textarea');
  
  textAreaElement.simulate('change');
  expect(userInput).toHaveBeenCalled();
});