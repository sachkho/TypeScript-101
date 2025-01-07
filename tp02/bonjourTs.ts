const salut: string = "Hello World!"
const hellots: string = "Bonjour, TypeScript!"
// create a new heading 1 element
const heading_02: HTMLHeadingElement = document.createElement("h1");
const h: HTMLHeadingElement = document.createElement("h1");
const div01: HTMLDivElement= document.createElement("div");
div01.id =  "app";
document.body.appendChild(div01);


heading_02.textContent = salut;
h.textContent = hellots;
// add the heading the document
document.body.appendChild(heading_02)
div01.appendChild(h);

