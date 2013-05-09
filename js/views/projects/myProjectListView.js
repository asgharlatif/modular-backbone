define([
    'jquery',
    'underscore',
    'backbone',
    // Pull in the Collection module from above,
    'models/project/ProjectModel',
    'collections/projects/ProjectsCollection',
    'text!templates/myprj/myprglooklist.html',
    'views/projects/myProjectDetail',
    'views/assignments/addnewprojectdetail'



], function($, _, Backbone, ProjectModel, ProjectsCollection, myprglooklistTemplate,myProjectDetail,addnewprojectdetail){

    var myPrjListView=Backbone.View.extend({

        el:$("#MPL"),

        initialize: function () {
        },

        render:function(){

            var data = {
                projects: this.collection.models,
                _: _
            };

            // it is working fine
            //$("#MPL").html(new ContentsView({collection: this.collection.models}).render().el);
            // $('#MPL').html(new view1().render().el);
            //$('#MPL').html(this.rendertest().render().el);
            //$('#MPL').html(this.ContentsViewfuntion(this.collection.models).render().el);
            // end it is working fine
            //this.TestFunction();
            $('#MPL').html(this.ContentsViewfuntion(this.collection.models).render().el);
        },
        rendertest:function(){

            var view1=Backbone.View.extend({
                tagName:'p',
                render:function(){

                    this.$el.html('mr asghar ali ');
                    return this;
                }
            })
            var v1=new view1();
            return v1;
        },
        ContentsViewfuntion:function(ModelCollection){
            var that=this;
            var ContentsView1 = Backbone.View.extend({

                tagName: 'ul',
                render: function () {

                     //that.TestFunction();

                    _(ModelCollection).each(function (project) {

                        this.$el.append(that.FncDocumentListView(project).render().el);

                    }, this);
                    return this;
                }
            })
            var CV=new ContentsView1();
            return CV;

        }
        ,
        FncDocumentListView:function(project){
            var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
            var that=this;
            var InternalDocumentListView = Backbone.View.extend({
                tagName: 'li',
                events: {
                    "click":function(){
                        var MyProjectDetail=new myProjectDetail({model:project});
                        $(".projectfooterdetail").html(MyProjectDetail.render().el);
                        this.$el.css('background-color',hue);
                   },
                    "mouseover":function(e){
                        this.MouseOverEvent(e);
                    },
                    "dblclick":function(e){

                        this.MouseDoubleClickEvent(e);
                    }
                },
                render: function () {
                    this.$el.html(project.get('ProjectName'));
                    return this;
                },
                MouseOverEvent:function(e){
                    var MyProjectDetail=new myProjectDetail({model:project});
                    $(".projectfooterdetail").html(MyProjectDetail.render().el).css('background-color',hue);

                },
                MouseDoubleClickEvent:function(e){

                    $('#txtProjectId').val(project.get('ProjectId'));
                    $('#txtProjectName').val(project.get('ProjectName'));
                    $('#txtLanguage').val(project.get('Language'));

                }
            })

            var internalDocumentListView=new InternalDocumentListView();
            return internalDocumentListView;
        },
        FncTestFunc:function(project){
            //$(alert('Allah'));
            //return this;
        },
        FncDocumentDetailView:function(project){

            var InternalDocumentDetailView=Backbone.View.extend({
                tagName:'div',
                render:function(){

                    this.$el.html(project.get('ProjectName'));
                    return this;
                }
            })

            var internalDocumentDetailView =new InternalDocumentDetailView();
            return internalDocumentDetailView;

        }

        });

    return myPrjListView;

});

/*
eventAggregator.on('document:selected', function(document) {
    $(alert(document.get('ProjectId')));
});
*/