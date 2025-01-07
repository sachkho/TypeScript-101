/* exercice 1 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function calculateSumAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 3000);
    });
}
function printSum() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Calcul en cours...");
        yield calculateSumAsync(2, 3).then((result) => {
            console.log("Le résultat est: " + result);
        });
    });
}
printSum();
/* exercice 2 */
function verifyUser(id, mdp) {
    return new Promise((resolve, reject) => {
        if (id === "admin" && mdp === "1234") {
            resolve("accès autorisé");
        }
        else {
            reject("accès refusé");
        }
    });
}
verifyUser("admin", "1234").then(result => console.log(result)); // Affiche "Opération réussie" si la promesse est résolue
verifyUser("aDmin", "1234").catch(error => console.error(error));
/* exercice 3 */
class Calculator {
    calculateSumAsync(a, b) {
        return new Promise((resolve, reject) => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject('Invalid input');
            }
        });
    }
}
class User {
    verifyUser(id, mdp) {
        return new Promise((resolve, reject) => {
            if (id === "admin" && mdp === "1234") {
                resolve("accès autorisé");
            }
            else {
                reject("accès refusé");
            }
        });
    }
}
let calculator = new Calculator();
calculator.calculateSumAsync(1, 2).then(sum => console.log(sum));
let user = new User();
user.verifyUser("admin", "1234").then(result => console.log(result));
user.verifyUser("aDmin", "1234").catch(error => console.error(error));
//# sourceMappingURL=main.js.map