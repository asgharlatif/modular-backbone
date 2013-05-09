define([
    'jquery',
    'underscore',
    'backbone',
    'models/project/ProjectModel',
    'collections/projects/ProjectsCollection',
    'collections/projects/myProjectCollection',
    'views/projects/myProjectListView',

    'views/assignments/addnewprojectdetail',

    'views/sidebar/SidebarView',
    'text!templates/myprj/myprglook.html'

], function($, _, Backbone,PrjModel,PrjCollection,myPrjCollection,MyPrjListView,addnewprojectdetail,SideBarView,  ProjectsTemplate){

    var myProjectList=Backbone.View.extend({
        el: $("#page"),
        initialize:function(){
            var date=new Date;
            console.log("My project view has been initilized at this time... " +  date.getDate() );
          },
        events: {
        'click .projectfooterdetail': 'handleSendBtnClick'
        },
        handleSendBtnClick:function(){
            $(alert('it is list item click event'));
        },
        render:function(){

            $('.menu li').removeClass('active');
            $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');

            this.$el.html(ProjectsTemplate);



            var prjMode22=new PrjModel({ProjectId:22,ProjectName:'New dynamic model',Language:'VB6.0 / .Net C#'});


            var myprjCollection=new  myPrjCollection();


            var myPrjListView = new MyPrjListView({ collection: myprjCollection});
            myPrjListView.render();

            myprjCollection.on('add',function(){
                console.log('New item added into the collection .');
                myPrjListView.render();
            });
            myprjCollection.on('remove',function(){
                console.log('New item remove from the collection .');
                myPrjListView.render();
            });


            /*
            myprjCollection.on('reset',function(){
                console.log('Ready to reset new model .');
                myPrjListView.render();
            });
            */

            var myprjcol=myprjCollection;

            myprjcol.add(prjMode22);

            var Addnewprojectdetail=new addnewprojectdetail({collection:myprjcol,el:$("#addnewproject")});
            Addnewprojectdetail.render();

            //myprjCollection.on('reset', $(alert('ready to reset')), this);

            var sideBarView= new SideBarView();
            sideBarView.render();

        }
    });

    return myProjectList;

});

