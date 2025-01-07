const salut: string = "Hello, World!";
// create a new heading 1 element
const heading_02: HTMLHeadingElement = document.createElement("h1");
heading_02.textContent = salut;
// add the heading the document
document.body.appendChild(heading_02);
