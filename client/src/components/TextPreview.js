//https://marked.js.org/
import React from 'react';
import marked from 'marked';

function TextPreview(props) {
    marked.setOptions({
      breaks: true
    });

    //https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
    return <section>
        <p id="preview" dangerouslySetInnerHTML={{__html: marked(props.text)}}></p>
    </section>;
}

export default TextPreview;