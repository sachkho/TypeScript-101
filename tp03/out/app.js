import { pi, phi, soustraire, absolue } from "./moduleMath.js";
const resultat = document.createElement("div");
resultat.textContent = `la valeure absolue de phi - pi = ${absolue(soustraire(phi, pi)).toString()}`;
document.body.appendChild(resultat);
//# sourceMappingURL=app.js.map