from odoo import http


class FrontendController(http.Controller):

    @http.route("/owl_module", type="http", auth="public", website=True)
    def index(self, **kw):
        return http.request.render("owl_module.frontend_template", {})
