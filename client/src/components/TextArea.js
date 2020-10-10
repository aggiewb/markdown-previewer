import React from 'react';

function TextArea(props) {
    return <section>
        <textarea id="editor" value={props.text} onChange={props.userInput}></textarea>
    </section>;
}

export default TextArea;