$(function(){

	var ApplicationRouter = Backbone.Router.extend({

		routes: {
			"": "home",
			"home": "home",
			"sunrise": "sunrise",
			"smile": "smile",
			"circle": "circle",
			"star": "star",
			"about": "about",
			"howto": "howto",
			"feedback": "feedback"
		},

		deselectPills: function(){
			$('ul.dropdown-menu li').removeClass('active');
			$('ul.sub-menu li').removeClass('active');
		},

		selectPill: function(pill){
			this.deselectPills();
			$(pill).addClass('active');
		},

		hidePages: function(){
			$('div.pages').hide();
		},

		showPage: function(page){
			this.hidePages();
			$(page).show();
		},

		home: function() {
			this.showPage('div#home-page');
			this.selectPill('li.home-pill');
		},

		sunrise: function() {
			this.showPage('div#sunrise-page');
			this.selectPill('li.sunrise-pill');
		},

		smile: function() {
			this.showPage('div#smile-page');
			this.selectPill('li.smile-pill');
		},

		circle: function() {
			this.showPage('div#circle-page');
			this.selectPill('li.circle-pill');
		},

		star: function() {
			this.showPage('div#star-page');
			this.selectPill('li.star-pill');
		},

		about: function() {
			this.showPage('div#about-page');
			this.selectPill('li.about-pill');
		},

		howto: function() {
			this.showPage('div#howto-page');
			this.selectPill('li.howto-pill');
		},

		feedback: function() {
			this.showPage('div#feedback-page');
			this.selectPill('li.feedback-pill');
		}

	});

	var ApplicationView = Backbone.View.extend({
		el: $('body'),
		events: {
			'click ul.dropdown-menu li.home-pill a': 'displayHome',
			'click ul.dropdown-menu li.sunrise-pill a': 'displaySunrise',
			'click ul.dropdown-menu li.smile-pill a': 'displaySmile',
			'click ul.dropdown-menu li.circle-pill a': 'displayCircle',
			'click ul.dropdown-menu li.star-pill a': 'displayStar',
			'click ul#menu li.parent ul.sub-menu li.about-pill a': 'displayAbout',
			'click ul#menu li.parent ul.sub-menu li.howto-pill a': 'displayHowto',
			'click ul#menu li.parent ul.sub-menu li.feedback-pill a': 'displayFeedback'
		},

		initialize: function(){
			this.router = new ApplicationRouter();
			Backbone.history.start();
		},

		displayHome: function(){
			this.router.navigate("home", true);
		},

		displaySunrise: function(){
			this.router.navigate("sunrise", true);
		},

		displaySmile: function(){
			this.router.navigate("smile", true);
		},

		displayCircle: function(){
			this.router.navigate("circle", true);
		},

		displayStar: function(){
			this.router.navigate("star", true);
		},

		displayAbout: function(){
			this.router.navigate("about", true);
		},

		displayHowto: function(){
			this.router.navigate("howto", true);
		},

		displayFeedback: function(){
			this.router.navigate("feedback", true);
		}

	});

	new ApplicationView();

});