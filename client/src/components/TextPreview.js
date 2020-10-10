import React from 'react';

function TextPreview(props) {
    return <section>
        <p id="preview">{props.text}</p>
    </section>;
}

export default TextPreview;