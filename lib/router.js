FlowRouter.route('/', {
    name: 'main',
    action: function(params) {
        console.log("welcome");
        BlazeLayout.render('main', {body: "MainMenu"});
    }
});

FlowRouter.route('/profile', {
    name: 'profile',
    action: function(params) {
        console.log("hello, user");
        BlazeLayout.render('main', {body: "UserProfile"});
    }
});