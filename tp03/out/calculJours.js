import { calculerJoursRestants as calculer_jour_vacances } from "./moduleVacances.js";
import { calculerJoursRestants as calculer_jour_travail } from "./moduleTravail.js";
const div01 = document.createElement("div");
document.body.appendChild(div01);
let travail = calculer_jour_travail(12);
let vacances = calculer_jour_vacances(15);
div01.innerText = `Jours de travail restants: ${travail}, Jours de vacances restants: ${vacances}`;
//# sourceMappingURL=calculJours.js.map