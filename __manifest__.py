{
    "name": "custom OWL module",
    "summary": "A custom module for Odoo",
    "version": "1.0",
    "category": "Custom",
    "author": "WKAM",
    "license": "AGPL-3",
    "description": "",
    "depends": ["website"],
    "data": [
        "views/frontend_template.xml",
    ],
    "assets": {
        "web.assets_frontend": [
            "owl_module/static/src/components/*.js",
            "owl_module/static/src/components/*.scss",
            "owl_module/static/src/components/*.xml",
        ],
    },
    "installable": True,
    "application": True,
    "auto_install": False,
}
