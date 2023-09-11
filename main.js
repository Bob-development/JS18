// import { screen } from "./components/screen/screen";
import { Component } from "./core/Component";
import { render } from "./core/render";

import './common/style.css'

const app = document.querySelector('#app');

//CREATE DIV WITH ID CHAT
const chat = new Component({
    tagName : 'div', 
    id : '#chat'
}).toHtml();

render(chat, app);


//CREATE DIV WITH CLASS SCREEN 
const screen = new Component({
    tagName : 'div', 
    className : 'screen', 
}).toHtml();

render(screen, chat);

//CREATE MAIN-KEYBOARD
const keyBoard = new Component({
    tagName : 'div', 
    className : 'main-keyboard', 
}).toHtml();

render(keyBoard, chat);

const alphabet = 'abcdefghigklmnopqrstuvwxyz';

for(let i = 0; i < alphabet.length; i++){
    let btnClassname =  `btn--${alphabet[i]}`;

    const btn = new Component({
        tagName : 'button',
        textContent : `${alphabet[i]}`,
        className : `btn-keyboard ${btnClassname}`
    }).toHtml();

    render(btn, keyBoard);

    btn.addEventListener("click", (e) => {
        screen.textContent += e.target.textContent;
    })
}

//CREATE WRAPPER FOR BTN "CLEAR" AND ALSO BTN
const clearBtnWrapper = new Component({
    tagName : 'div', 
    className : 'clearBtnWrapper', 
}).toHtml();

render(clearBtnWrapper, chat);

const clearBtn = new Component({
    tagName : 'button', 
    className : 'clearBtn',
    textContent : 'CLEAR!' 
}).toHtml();

render(clearBtn, clearBtnWrapper);

clearBtn.addEventListener("click", (e) => {
    screen.textContent = '';
})