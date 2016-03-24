"use strict";
if (Meteor.isClient) {
	
	Template.UserProfile.helpers({
		test: function () {
			console.log(Meteor.user());
		},

		userName: function () {
			if (Meteor.user()) {
			 	return Meteor.user().profile.name;
			 } else {
			 	return "Butts"
			 }
		},
	});

}