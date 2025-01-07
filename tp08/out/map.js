let tableau = ["pomme", "kiwi", "banane", "cerise", "orange", "poire", "fraise", "prune", "ananas", "pêche"];
let tableauMaj = tableau.map((fruit) => fruit.toUpperCase());
let tableauP = tableau.filter((fruit) => {
    if (fruit[0] == "p") {
        return fruit;
    }
});
let tableau_reduced = tableau.reduce((acc, fruit) => acc + "," + fruit);
let tableau_find = tableau.find((fruit) => fruit.length > 5);
console.log(tableau_reduced);
//# sourceMappingURL=map.js.map