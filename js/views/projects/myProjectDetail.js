define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/myprj/myprgdetail.html'
],function($, _, Backbone,ProjectsTemplate){

    var DocumentDetailView=Backbone.View.extend({
        //tagName:'div',
        //el:$('#prjdetaildiv'),

        render:function(){


            var data = {
                owner: this.model.toJSON(),
                _: _
            };

            var compiledTemplate = _.template( ProjectsTemplate,data );

            this.$el.html(compiledTemplate);

            return this;
        }

    })

    return DocumentDetailView;
})



