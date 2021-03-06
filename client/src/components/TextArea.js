import React from 'react';

function TextArea(props) {
    return <section>
        <textarea rows="30" cols="70" id="editor" value={props.text} onChange={props.userInput}></textarea>
    </section>;
}

export default TextArea;