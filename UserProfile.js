"use strict";
if (Meteor.isClient) {
	
	Template.UserProfile.helpers({
		userName: function () {
			if (Meteor.user()) {
			 	return Meteor.user().userName;
			 } else {
			 	return "Butts"
			 }
		}
	});

}