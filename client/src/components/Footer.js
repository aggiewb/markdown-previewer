import React from 'react';

function Footer() {
    return <footer>
        <div>
            Image by <a href="https://commons.wikimedia.org/wiki/File:Orange_cat_cartoon.png" rel="noreferrer noopener" target="_blank">XuLily</a>, licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en" rel="noreferrer noopener" target="_blank">CC BY-SA 4.0</a>
        </div>
        <div>
            <a href="https://www.aggiewb.com" rel="noreferrer noopener" target="_blank">Aggie Wheeler Bateman</a> &copy; {new Date().getFullYear()}
        </div>
    </footer>;
}

export default Footer;