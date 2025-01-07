let tableau : string[]=["pomme", "kiwi", "banane", "cerise", "orange", "poire", "fraise", "prune", "ananas", "pêche"]
let tableauMaj : string[] = tableau.map((fruit) => fruit.toUpperCase())
let tableauP : string[] = tableau.filter( (fruit)=> {
    if (fruit[0] == "p") {
        return fruit
}
})
let tableau_reduced : string = tableau.reduce((acc, fruit) => acc + "," + fruit)
let tableau_find : string =tableau.find((fruit)=> fruit.length > 5)
console.log(tableau_reduced)
