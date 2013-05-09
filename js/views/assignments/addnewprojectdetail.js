define([

    'jquery',
    'underscore',
    'backbone',
    'models/project/ProjectModel',
    'text!templates/myprj/myprgdetailadd.html'

], function($, _, Backbone,PrjModel,ProjectTemplate){

var AddMyProject=Backbone.View.extend({

    events:{

        'click #btnAdd': 'SaveNewModel',
        'click #btnRemove':'RemoveExistingModel',
        'click #btnReset':'ResetEntryModel'

    }
    ,

    initialize:function(){
        var date=new Date;
        console.log("My project add view has been initilized Today " +  date.getDate() );
    },
    render:function(){
        this.$el.html(ProjectTemplate);

    },
    SaveNewModel:function(){
        var ProjectId=$('#txtProjectId').val();
        if (ProjectId != "")
        {
            var FilterModel= this.collection.find(function(model){
               return model.get('ProjectId')=== Number(ProjectId);
            });

            this.collection.remove(FilterModel);

            FilterModel.set('ProjectName',$('#txtProjectName').val());
            FilterModel.set('Language',$('#txtLanguage').val());

            this.collection.add(FilterModel);
        }
        else
        {
            var prjMode23=new PrjModel({ProjectId:this.collection.length+1,ProjectName:$('#txtProjectName').val(),Language:$('#txtLanguage').val()});
            this.collection.add(prjMode23);
            console.log(this.collection.length);
        }

    },
    RemoveExistingModel:function(){
        var ProjectId=$('#txtProjectId').val();
        if (ProjectId != "")
        {
            var FilterModel= this.collection.find(function(model){
                return model.get('ProjectId')=== Number(ProjectId);
            });

            $(alert(JSON.stringify(FilterModel)));

            this.collection.remove(FilterModel);
            this.ResetAllEntryFields();


        }
    }
    ,
    ResetEntryModel:function(){
        this.ResetAllEntryFields();
    },
    ResetAllEntryFields:function(){
        //1st method
        //$('#prjdetailadd').find('input:text').val('');
        //2st method
        //$('#prjdetailadd').find('input:text').each(function(){
        //    this.value = "";
        //});
        //3rd method
        $('#prjdetailadd :text').val('');
        //4th method (the simplest one if there is no other  input box);
        $(':text').val('');
    }



});

    return AddMyProject;

});