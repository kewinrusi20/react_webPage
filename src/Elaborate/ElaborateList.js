import {Registry} from "./RegisterItems";
import ListItems_Basic from "../data/ListItems_Basic.json"
import ListItems_Evolved from "../data/ListItems_Evolved.json"
import ListItems_Passive from "../data/ListItems_Passive.json"
import CatalogCombo from "../data/CatalogCombo.json"


let RegistryPlus = [];
let RegistryCombo = [];
let RegistryFiltered = [];

function RenderList() {
    console.log("Registry")
    console.log(Registry);
    console.log("RegistryPlus")
    console.log(RegistryPlus)
    console.log("RegistryCombo")
    console.log(RegistryCombo)
    console.log("RegistryFiltered")
    console.log(RegistryFiltered)
}

function ElaborateList() {
    setName()
    setTypeWeapon()
    setCombo()
}

function setName() {
    for (let i = 0; i < Registry.length; i++) {
        // TODO: inserire gli oggetti nell'array 
        //       usando gl'indici è sbagliato perchè 
        //       quando inizializzi l'array nella riga 8 
        //       l'array è di lunghezza 0, quindi per esempio
        //       RegistryPlus[3] non esiste: quindi usa push()
        RegistryPlus[i] = {"name": Registry[i]};
    }
}

function setTypeWeapon() {
    // TODO: .map() viene usato per mappare un array
    //       non per essere usata come i cicli for() o while()
    //       quindi usa .forEach() che ha la stessa sintacci di map()
    //       oppure usa i classici for() o while(), 
    //       oppure for(let item of array) {}; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of?retiredLocale=de
    //       oppure for(let elem in obj) {}; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
    RegistryPlus.map((e) => {
        // TODO invece di usare i .map() 
        //      sulle tre array qui sotto prova a usare .find(); https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find


        // TODO leggi il commento riga 41 in questo caso puoi usare .forEach()
        ListItems_Basic.map((e_Basic) => {
            if (e.name === e_Basic.name) {
                e.typeWeapon = "Basic"
            }
        })

        // TODO leggi il commento riga 41 in questo caso puoi usare .forEach()
        ListItems_Evolved.map((e_Evolved) => {
            if (e.name === e_Evolved.name) {
                e.typeWeapon = "Evolved"
            }
        })

        // TODO leggi il commento riga 41 in questo caso puoi usare .forEach()
        ListItems_Passive.map((e_Passive) => {
            if (e.name === e_Passive.name) {
                e.typeWeapon = "Passive"
            }
        })
    });
}

function setCombo() {
    // TODO pure qua potresti usare forEach() però il map() va anche bene
    //      la differenza tra forEach() e map() è che map() ritorna una nuova array,
    //      invece forEach() non ritorna niente (se tieni conto della sintassi Java: forEach() ritorna void)
    RegistryPlus.map((e) => {
        e.combo = false
    })

    for (let i = 0; i < CatalogCombo.length; i++) {
        // check if the Evolved Weapon have been selected
        // TODO attento ad usare nomi tipo: "split" o "suffix"
        //      perchè potrebbero essere già delle keyword di javascript
        //      potresti chiamare le variabili tipo: "comboSplit" e "comboSuffix"
        let split = CatalogCombo[i].title.split("_");

        // TODO cossa succede se CatalogCombo[i].title è uguale a "SoulEater"?
        //      la riga qui sotto darà errore, quindi aggiungerei un controllo
        //      (non credo sia troppo necessario ma evitare questi errori sarebbe buono)
        let suffix = split[1];
        const checkEvolved = RegistryPlus.find((e) => e.name === suffix)
        // change the 'combo' status of the found item
        let checkPassive = false;
        if (checkEvolved) {


            // check if the Passive Items have been selected
            CatalogCombo[i].composition.map((eC) => {
                if (eC.typeWeapon === "Passive") {
                    checkPassive = RegistryPlus.find((eR) => eR.name === eC.name);
                    // change the 'combo' status of the found item
                    if (checkPassive) {
                        checkPassive.combo = true;
                    }
                }
            })
        }
        // check if both Evolved and Passive items are selected
        if (checkEvolved && checkPassive) {
            checkEvolved.combo = true;
            RegistryCombo.push(CatalogCombo[i].title)
        }
    } // close for loop: CatalogCombo

    filterRegistryPlus()
} // close function: setCombo()

function filterRegistryPlus() {
    RegistryFiltered = [];
    for (let i = 0; i < RegistryPlus.length; i++) {
        if (RegistryPlus[i].combo === false) {
            RegistryFiltered.push(RegistryPlus[i].name);
        }
    }
}

export default ElaborateList;
export {RenderList};
