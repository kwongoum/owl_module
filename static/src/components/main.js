
/** @odoo-module **/

console.log("MON FICHIER MAIN.JS EST CHARGÉ !");

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class Main extends Component {

    setup() {
        console.log("Composant Main initialisé");

        this.state = useState({
            value: 1
        });
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
