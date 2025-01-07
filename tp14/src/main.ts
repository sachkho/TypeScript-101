interface Adress{
    properties :{
        city : string;
        postcode : number;
        street  : string;
        housenumber : number;
        context : string;
        lat : number;
        lon : number;

    }
}

class AdressService{
    async searchAdress(query : string, limit : number) : Promise<Adress[]>{
        const response= await fetch('https://api-adresse.data.gouv.fr/search/?q='+encodeURIComponent(query)+'&limit='+limit)
        const responseJson = await response.json();
        return responseJson.features;

    }
    afficherAdress(){
        this.searchAdress('8 bd du port', 5).then((adresses) => {
        for (let adress of adresses){
            if(adress && adress.properties){
                console.log(adress.properties.city);
                console.log(adress.properties.postcode);
                console.log(adress.properties.street);
                console.log(adress.properties.housenumber);
                console.log(adress.properties.context);
                console.log(adress.properties.lat);
                console.log(adress.properties.lon);
            }
            else{
                console.log('Pas de résultat')
            }
        }
    }
    )}
}
const adressService = new AdressService();
adressService.afficherAdress();

