"use strict";

var curTemp = "MainMenu";

if (Meteor.isClient) {

  Template.body.onCreated( function () {
    this.currentTemplate = new ReactiveVar("MainMenu");
  });

  Template.body.helpers({
  
    getUserArray: function () {
      var obj = Meteor.user();
      var objArray = [];
      var val = '';
      
      for (var key in obj) {
        objArray.push({name: key, value: obj[key]});
      }

      return objArray;
    }

  });

  Template.MainMenu.events({
    'click .user-profile': function (event) {
      event.preventDefault();
      FlowRouter.go('/profile');
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
