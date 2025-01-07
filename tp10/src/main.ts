interface IUser {
    id: number;
    name: string;
    age: number;
    scores: number[];
    getMaxScore(): number;
    getAverageScore(): number;

}

class User implements IUser {
    id: number;
    name: string;
    age: number;
    scores: number[];

    constructor(id: number, name: string, age: number, scores: number[]) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.scores = scores;
    }

    getMaxScore(){
        return Math.max(...this.scores);
    }

    getAverageScore(){
        return this.scores.reduce((a, b) => a + b, 0) / this.scores.length;
    }
}

let user1 = new User(1, 'John', 25, [100, 90, 80]);
let user2 = new User(2, 'Jane', 24, [95, 85, 75]);
let user3 = new User(3, 'Mike', 30, [90, 80, 70]);

let tableau : IUser[] = [user1, user2, user3];

function serializeUser(table: IUser[]){
    return JSON.stringify(table);
}



console.log(serializeUser(tableau));


/* reponse à la question 7 : Non, ce n'est pas possible directement. 
Lorsque vous désérialisez un objet en utilisant JSON.parse(), vous obtenez un objet littéral JavaScript, pas une instance de la classe User. 
Cela signifie que les méthodes de la classe User ne sont pas disponibles pour l'objet désérialisé.*/


function deserializeUser(serialized: string): IUser[] {
    let obj = JSON.parse(serialized);
    return obj.map((user: any) => new User(user.id, user.name, user.age, user.scores));
}

let serialized = serializeUser(tableau);
let deserialized = deserializeUser(serialized);

deserialized.forEach(user => {
    console.log(user.getMaxScore());
    console.log(user.getAverageScore());
});

let deuxième_user = deserialized[1];
console.log(deuxième_user.name);
console.log(deuxième_user.getMaxScore());   
console.log(deuxième_user.getAverageScore());

