/* exercice 1 */

function calculateSumAsync(a : number, b : number): Promise<number>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 3000);
    });
}

async function printSum(){
    console.log("Calcul en cours...");
    await calculateSumAsync(2, 3).then((result) => {
        console.log("Le résultat est: " + result);
    });

}

printSum();

/* exercice 2 */

function verifyUser(id : string, mdp : string): Promise<string>{
    return new Promise((resolve, reject) => {
            if(id === "admin" && mdp === "1234"){
                resolve("accès autorisé");
            } else {
                reject("accès refusé");
            }
        });

}

verifyUser("admin","1234").then(result => console.log(result)); // Affiche "Opération réussie" si la promesse est résolue
verifyUser("aDmin","1234").catch(error => console.error(error));


/* exercice 3 */

class Calculator {
    calculateSumAsync(a: number, b: number): Promise<number> {
        return new Promise((resolve, reject) => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Invalid input');
            }
        });
    }
}

class User {
    verifyUser(id: string, mdp: string): Promise<string> {
        return new Promise((resolve, reject) => {
            if (id === "admin" && mdp === "1234") {
                resolve("accès autorisé");
            } else {
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