define([
    'jquery',
    'underscore',
    'backbone',
    'models/project/ProjectModel'
], function($, _, Backbone, ProjectModel){
    var myProjectsCollection = Backbone.Collection.extend({
        model: ProjectModel,

        initialize: function(){


            var prjModelArray=[
                {ProjectId:1,ProjectName:'Star Shop Warranty System.',Language:'VB6.0'},
                {ProjectId:2,ProjectName:'Finance System.',Language:'VB6.0 / .Net C#'},
                {ProjectId:3,ProjectName:'Inventory System',Language:'VB6.0 / .Net C#'},
                {ProjectId:4,ProjectName:'Leasing System',Language:'VB6.0'},
                {ProjectId:5,ProjectName:'NDP Calculation Process',Language:'VB6.0 / .Net C#'},
                {ProjectId:6,ProjectName:'Production Control Modules (Work Center Based)',Language:'VB6.0 / .Net C#'},
                {ProjectId:7,ProjectName:'Free Copan Management Program running at all regions (Service module)',Language:'VB6.0 / .Net C#'},
                {ProjectId:8,ProjectName:'Fixed Assets Management System',Language:'VB6.0 / .Net C#'},
                {ProjectId:9,ProjectName:'Vendor Evaluation Module ',Language:'VB6.0 / .Net C#'},
                {ProjectId:10,ProjectName:'PDI System (Pre Delivery Inspection for vehicle)',Language:'VB6.0 / .Net C#'},
                {ProjectId:11,ProjectName:'Document Scanning System',Language:'VB6.0 / .Net C#'},
                {ProjectId:12,ProjectName:'HRMS System',Language:'VB6.0 / .Net C#'},
                {ProjectId:13,ProjectName:'LC Management System (Costing note and Banking LC module)',Language:'VB6.0 / .Net C#'},
                {ProjectId:14,ProjectName:'MRP for vehicle industry',Language:'VB6.0 / .Net C#'},
                {ProjectId:15,ProjectName:'Online Sale Order Controlling System at each region',Language:'VB6.0 / .Net C#'},
                {ProjectId:16,ProjectName:'Central User Rights Management and security Plan',Language:'VB6.0 / .Net C#'},
                {ProjectId:17,ProjectName:'Help Desk and Support System',Language:'VB6.0 / .Net C#'},
                {ProjectId:18,ProjectName:'Template Based Financial MIS Controlling Program',Language:'VB6.0 / .Net C#'},
                {ProjectId:19,ProjectName:'Web based Dealer Ledger and Controlled MIS printing at ',Language:'VB6.0 / .Net C#'},
                {ProjectId:20,ProjectName:'Lease Scheme Management Application',Language:'VB6.0 / .Net C#'},
                {ProjectId:21,ProjectName:'Queued Replication Conversion Program',Language:'VB6.0 / .Net C#'}

            ];


            this.add(prjModelArray);

        }

    });

    return myProjectsCollection;
});
