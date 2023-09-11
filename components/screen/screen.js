import { Component } from "./core/Component";
// import { render } from "./core/render";

export const screen = new Component({
    tagName : 'div', 
    className : 'screen', 
}).toHtml();

// render(screen, chat);