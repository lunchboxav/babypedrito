$(function(){

	var ApplicationRouter = Backbone.Router.extend({

		//map url routes to contained methods
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
			//deselect all navigation pills
			$('ul.dropdown-menu li').removeClass('active');
			$('ul.sub-menu li').removeClass('active');
		},

		selectPill: function(pill){
			//deselect all navigation pills
			this.deselectPills();
			//select passed navigation pill by selector
			$(pill).addClass('active');
		},

		hidePages: function(){
			//hide all pages with 'pages' class
			$('div.pages').hide();
		},

		showPage: function(page){
			//hide all pages
			this.hidePages();
			//show passed page by selector
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

		//bind view to body element (all views should be bound to DOM elements)
		el: $('body'),

		//observe navigation click events and map to contained methods
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

		//called on instantiation
		initialize: function(){
			//set dependency on ApplicationRouter
			this.router = new ApplicationRouter();

			//call to begin monitoring uri and route changes
			Backbone.history.start();
		},

		displayHome: function(){
			//update url and pass true to execute route method
			this.router.navigate("home", true);
		},

		displaySunrise: function(){
			//update url and pass true to execute route method
			this.router.navigate("sunrise", true);
		},

		displaySmile: function(){
			//update url and pass true to execute route method
			this.router.navigate("smile", true);
		},

		displayCircle: function(){
			//update url and pass true to execute route method
			this.router.navigate("circle", true);
		},

		displayStar: function(){
			//update url and pass true to execute route method
			this.router.navigate("star", true);
		},

		displayAbout: function(){
			//update url and pass true to execute route method
			this.router.navigate("about", true);
		},

		displayHowto: function(){
			//update url and pass true to execute route method
			this.router.navigate("howto", true);
		},

		displayFeedback: function(){
			//update url and pass true to execute route method
			this.router.navigate("feedback", true);
		}

	});

	//load application
	new ApplicationView();

});

