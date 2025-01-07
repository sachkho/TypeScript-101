var salut = "Hello World!";
var hellots = "Bonjour, TypeScript!";
// create a new heading 1 element
var heading_02 = document.createElement("h1");
var h = document.createElement("h1");
var div01 = document.createElement("div");
div01.id = "app";
document.body.appendChild(div01);
heading_02.textContent = salut;
h.textContent = hellots;
// add the heading the document
document.body.appendChild(heading_02);
div01.appendChild(h);
