/*var myApp = angular.module ('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

	$routeProvider
	
	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	
	.when('/page2', {
	
	})
});

myApp.controller('mainController', ['$scope', function($scope) {

}]); */

var app = angular.module('app', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'pages/name.html',
                controller  : 'mainController'
            })
	
            // route for the work page
            .when('/work', {
                templateUrl : 'pages/work.html',
                controller  : 'workController'
            })

			 // route for the skills page
            .when('/skills', {
                templateUrl : 'pages/skills.html',
                controller  : 'skillsController'
            })
			
			// route for the activity page
            .when('/activity', {
                templateUrl : 'pages/activity.html',
                controller  : 'activityController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })
			
			 .otherwise({ redirectTo: '/' });
    });  
	
    app.controller('mainController', function($scope) {   
		
		console.log("Angular initialized");
       
	});
	
	app.controller('workController', function($scope) {   
		
		console.log("Experience page");
		var acc = document.getElementsByClassName("accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
		  acc[i].onclick = function() {
			console.log("here");
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight){
			  panel.style.maxHeight = null;
			} else {
			  panel.style.maxHeight = panel.scrollHeight + "px";
			} 
		  }
		}
       
	});
	
	app.controller('activityController', function($scope) {   
		
		console.log("Ativities page");
        var acc = document.getElementsByClassName("accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
		  acc[i].onclick = function() {
			console.log("here");
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight){
			  panel.style.maxHeight = null;
			} else {
			  panel.style.maxHeight = panel.scrollHeight + "px";
			} 
		  }
		}
	});
	
	app.controller('contactController', function($scope) {   
		
		console.log("Contact page");
       
	});
	
	
$(document).ready (function() {

	//39e600
	$(".linkAnchor").hover (function() {
		$(this).css("transition", "color .5s ease-in-out");
		$(this).css("color",  "#0383f9");
	});
	
	$(".linkAnchor").mouseleave (function() {
		$(this).css("color", "white");
	});
	
	
	/*$("#headLinks").hover(function() {
		$(.linkAnchor).css("color", "white");
	}); 	
	
	$(".linkAnchor").click (function() {
		$(".linkAnchor").css("color" , "white");
		$(this).css("color", "#39e600");
	});  */
	
	$("#contactSubmitBtn").click(function() {
		console.log("Contact form submitted");
		$(".contactInput").clear();
	});
	
	
});