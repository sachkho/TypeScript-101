document.addEventListener('DOMContentLoaded', newGame);
/* Fonctions directionnelles*/
function haut() {
    console.log("haut");
}
function bas() {
    console.log("bas");
}
function gauche() {
    console.log("gauche");
}
function droite() {
    console.log("droite");
}
/* Incrémentation du score */
let score = 0;
let boxupdate = document.querySelector('.boxupdate');
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        haut();
        for (let j = 0; j < 4; j++) {
            up(j);
        }
        if (!up(0) && !up(1) && !up(2) && !up(3)) {
            boxupdate.innerHTML = "Ce mouvement n'a servi à rien";
        }
        else {
            boxupdate.innerHTML = "Mouvement effectué";
        }
        console.log(up(0), up(1), up(2), up(3));
        score += 1;
        newGame();
    }
    if (event.key === 'ArrowDown') {
        bas();
        for (let j = 0; j < 4; j++) {
            down(j);
        }
        score += 1;
        newGame();
    }
    if (event.key === 'ArrowLeft') {
        gauche();
        for (let i = 0; i < 4; i++) {
            left(i);
        }
        score += 1;
        newGame();
    }
    if (event.key === 'ArrowRight') {
        droite();
        for (let i = 0; i < 4; i++) {
            right(i);
        }
        score += 1;
        newGame();
    }
    let scoreElement = document.querySelector('.score');
    if (scoreElement) {
        scoreElement.innerHTML = 'Score: ' + score;
    }
});
const table = document.querySelector('.game-board');
function getCell(i, j) {
    if (table && i >= 0 && i < table.rows.length && j >= 0 && j < table.rows[i].cells.length) {
        return table.rows[i].cells[j];
    }
    return undefined;
}
function setValue(i, j, value) {
    let cell = getCell(i, j);
    if (cell) {
        cell.textContent = value.toString();
        return true;
    }
    return false;
}
function getValue(i, j) {
    let cell = getCell(i, j);
    if (cell) {
        return cell.innerHTML;
    }
    return '';
}
function isEmpty(i, j) {
    return getValue(i, j) === '';
}
function statistics() {
    let premiereCase = Math.random();
    let deuxiemeCase = Math.random();
    let cases = [premiereCase < 0.85 ? 2 : 4, deuxiemeCase < 0.86 ? 2 : 4];
    return cases;
}
/*dans le vrai jeu il n'y pas de deuxième case generée aléatoiremeent*/
function newGame() {
    let ligne1 = Math.floor(Math.random() * 4);
    let colonne1 = Math.floor(Math.random() * 4);
    /*let ligne2=Math.floor(Math.random() * 4);
    let colonne2=Math.floor(Math.random() * 4);*/
    let premiereCase = statistics()[0];
    /*let deuxiemeCase=statistics()[1];*/
    if (isEmpty(ligne1, colonne1) /* && isEmpty(ligne2,colonne2) && (ligne1!=ligne2 || colonne1!=colonne2)*/) {
        setValue(ligne1, colonne1, premiereCase.toString());
        /*setValue(ligne2, colonne2, deuxiemeCase.toString());*/
    }
    else {
        newGame();
    }
}
function moveUp(j) {
    let hasmoved = false;
    for (let i = 0; i < 4; i++) {
        if (!isEmpty(i, j)) {
            let k = i;
            while (k > 0 && isEmpty(k - 1, j)) {
                setValue(k - 1, j, getValue(k, j));
                setValue(k, j, '');
                hasmoved = true;
                k--;
            }
        }
    }
    return hasmoved;
}
function moveDown(j) {
    let hasmoved = false;
    for (let i = 3; i >= 0; i--) {
        if (!isEmpty(i, j)) {
            let k = i;
            while (k < 3 && isEmpty(k + 1, j)) {
                setValue(k + 1, j, getValue(k, j));
                setValue(k, j, '');
                hasmoved = true;
                k++;
            }
        }
    }
    return hasmoved;
}
function moveLeft(i) {
    let hasmoved = false;
    for (let j = 0; j < 4; j++) {
        if (!isEmpty(i, j)) {
            let k = j;
            while (k > 0 && isEmpty(i, k - 1)) {
                setValue(i, k - 1, getValue(i, k));
                setValue(i, k, '');
                hasmoved = true;
                k--;
            }
        }
    }
    return hasmoved;
}
function moveRight(i) {
    let hasMoved = false;
    for (let j = 3; j >= 0; j--) {
        if (!isEmpty(i, j)) {
            let k = j;
            while (k < 3 && isEmpty(i, k + 1)) {
                setValue(i, k + 1, getValue(i, k));
                setValue(i, k, '');
                hasMoved = true;
                k++;
            }
        }
    }
    return hasMoved;
}
function FusionDown(j) {
    let fused = false;
    for (let i = 0; i < 4; i++) {
        if (getValue(i, j) === getValue(i + 1, j) && getValue(i, j) != '' && getValue(i + 1, j) != '') {
            setValue(i + 1, j, (parseInt(getValue(i, j)) + parseInt(getValue(i + 1, j))).toString());
            setValue(i, j, '');
            fused = true;
        }
    }
    return fused;
}
function FusionUp(j) {
    let fused = false;
    for (let i = 3; i >= 0; i--) {
        if (getValue(i, j) === getValue(i - 1, j) && getValue(i, j) != '' && getValue(i - 1, j) != '') {
            setValue(i - 1, j, (parseInt(getValue(i, j)) + parseInt(getValue(i - 1, j))).toString());
            setValue(i, j, '');
            fused = true;
        }
    }
    return fused;
}
function FusionLeft(i) {
    let fused = false;
    for (let j = 3; j >= 0; j--) {
        if (getValue(i, j) === getValue(i, j - 1) && getValue(i, j) != '' && getValue(i, j - 1) != '') {
            setValue(i, j - 1, (parseInt(getValue(i, j)) + parseInt(getValue(i, j - 1))).toString());
            setValue(i, j, '');
            fused = true;
        }
    }
    return fused;
}
function FusionRight(i) {
    let fused = false;
    for (let j = 0; j < 4; j++) {
        if (getValue(i, j) === getValue(i, j + 1) && getValue(i, j) != '' && getValue(i, j + 1) != '') {
            setValue(i, j + 1, (parseInt(getValue(i, j)) + parseInt(getValue(i, j + 1))).toString());
            setValue(i, j, '');
            fused = true;
        }
    }
    return fused;
}
function right(i) {
    let hasmoved = false;
    let fused = false;
    hasmoved = moveRight(i);
    fused = FusionRight(i);
    moveRight(i);
    FusionRight(i);
    if (!hasmoved && !fused) {
        return false;
    }
    return true;
}
function left(i) {
    let hasmoved = false;
    let fused = false;
    hasmoved = moveLeft(i);
    fused = FusionLeft(i);
    moveLeft(i);
    FusionLeft(i);
    if (!hasmoved && !fused) {
        return false;
    }
    return true;
}
function up(j) {
    let hasmoved = false;
    let fused = false;
    hasmoved = moveUp(j);
    fused = FusionUp(j);
    moveUp(j);
    FusionUp(j);
    if (!hasmoved && !fused) {
        return false;
    }
    return true;
}
function down(j) {
    let hasmoved = false;
    let fused = false;
    hasmoved = moveDown(j);
    fused = FusionDown(j);
    moveDown(j);
    FusionDown(j);
    if (!hasmoved && !fused) {
        return false;
    }
    return true;
}
console.log(up(0), up(1), up(2), up(3));
//# sourceMappingURL=directions_console.js.map