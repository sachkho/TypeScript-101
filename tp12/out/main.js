class rectangle {
    constructor(largeur, longueur) {
        this.largeur = largeur;
        this.longueur = longueur;
    }
    calculerSurface() {
        if (this.largeur <= 0 || this.longueur <= 0) {
            throw new Error("Les valeurs doivent être positives");
        }
        else {
            return this.largeur * this.longueur;
        }
    }
    essayerCalculerSurface() {
        try {
            console.log(this.calculerSurface());
        }
        catch (e) {
            console.error(e.message);
        }
        finally {
            console.log("fin de la tentative de calcul de surface");
        }
    }
}
let rectangle1 = new rectangle(5, 10);
let rectangle2 = new rectangle(5, -10);
let rectangle3 = new rectangle(0, 10);
rectangle1.essayerCalculerSurface();
rectangle2.essayerCalculerSurface();
rectangle3.essayerCalculerSurface();
//# sourceMappingURL=main.js.map