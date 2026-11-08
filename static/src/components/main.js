
/** @odoo-module **/

console.log("MON FICHIER MAIN.JS EST CHARGÉ !");
import {useService} from "@web/core/utils/hooks";
import { Component, useState , useRef} from "@odoo/owl";
import { registry } from "@web/core/registry";

export class Main extends Component {

    setup() {
        console.log("Composant Main initialisé");

        this.state = useState({
                value: 1
        });
        this.myInput = useRef("myInput");
        this.orm = useService("orm");
    }

    async onButtonClick() {
        console.log("Bouton cliqué !");
        console.log("Valeur myInput :", this.myInput);
        console.log("Valeur myInput.current :", this.myInput.el.value);
        await this.orm.call("res.users", "search_read", [], 
        {        fields:["login"]}
        ).then((result) => {
            console.log("Résultat de la requête ORM :", result);
            const  firstUserLogin = result.length > 0 ? result[0].login : "Aucun utilisateur trouvé";
            this.myInput.el.value = firstUserLogin;
        }       )
    }

    increment() {
        this.state.value++;
    }
}

Main.template = "owl_module.Main";

// Enregistrement du composant dans le registre public
registry.category("public_components").add(
    "owl_module.Main",
    Main
);
