
/** @odoo-module **/

console.log("MON FICHIER MAIN.JS EST CHARGÉ !");
import {useService} from "@web/core/utils/hooks";
import { Component, useState , useRef, onMounted} from "@odoo/owl";
import { registry } from "@web/core/registry";
import  {Sub} from "./sub";
export class Main extends Component {
    static teùmplate = "owl_module.Main";
    static components = { Sub };

    setup() {
        console.log("Composant Main initialisé");

        this.state = useState({
                value: 1,
                subName: "Sub Component Name",
                contacts: []
        });

        this.myInput = useRef("myInput");
        this.orm = useService("orm");

    
        onMounted(async () => {
            await this.orm.call("res.partner", "search_read", [], 
            {        fields:["name","email"]}
            ).then((result) => {
            console.log("Composant Main monté !");
            console.log("Résultat de la requête ORM :", result);
            this.state.contacts = result;
        })
         })
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
            this.state.subName = firstUserLogin;
        }       )
    }

    onSubClickedButParentMethod(contactName ) {
        if (!contactName || contactName.trim() === "" || contactName === "undefined") {
            contactName = "Aucun contact sélectionné";
        }
        console.log("Bouton du composant Sub cliqué !", contactName);
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
