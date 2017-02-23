var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/login',{templateUrl:'partials/login.html'})
	.when('/dash',{templateUrl:'partials/dash.html'})
	.when('/addHero',{templateUrl:'partials/addHero.html'})
	.otherwise({redirectTo:'/login'})
})