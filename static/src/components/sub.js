
/** @odoo-module **/
import { Component, useState , useRef} from "@odoo/owl";

export class Sub extends Component {
    
    static template = "owl_module.Sub";
    static  props = {
        name: { type: String, optional: true },
    };
    setup() {
    }


}

