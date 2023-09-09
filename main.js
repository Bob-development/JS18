import { Component } from "./core/Component";
import { render } from "./core/render";

import './common/style.css'

const app = document.querySelector('#app');

const div = new Component({
    tagName : 'div', 
    id : '#chat', 
    textContent : 'Hello world', 
}).toHtml();


render(div, app);
