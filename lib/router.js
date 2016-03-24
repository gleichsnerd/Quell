FlowRouter.route('/', {
    name: 'main',
    action: function(params) {
        BlazeLayout.render('main', {body: "MainMenu"});
    }
});

FlowRouter.route('/profile', {
    name: 'profile',
    action: function(params) {
        BlazeLayout.render('main', {body: "UserProfile"});
    }
});