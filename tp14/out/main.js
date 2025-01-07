var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class AdressService {
    searchAdress(query, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('https://api-adresse.data.gouv.fr/search/?q=' + encodeURIComponent(query) + '&limit=' + limit);
            const responseJson = yield response.json();
            return responseJson.features;
        });
    }
    afficherAdress() {
        this.searchAdress('8 bd du port', 5).then((adresses) => {
            for (let adress of adresses) {
                if (adress && adress.properties) {
                    console.log(adress.properties.city);
                    console.log(adress.properties.postcode);
                    console.log(adress.properties.street);
                    console.log(adress.properties.housenumber);
                    console.log(adress.properties.context);
                    console.log(adress.properties.lat);
                    console.log(adress.properties.lon);
                }
                else {
                    console.log('Pas de résultat');
                }
            }
        });
    }
}
const adressService = new AdressService();
adressService.afficherAdress();
//# sourceMappingURL=main.js.map