//require("./landing");
//require('./collection');
//require('./album');
//require('./profile');


// angular.module('BlocJams', []).controller('Landing.controller', ['$scope', function($scope) {
  blocJams = angular.module('BlocJams', ['ui.router']);
  blocJams.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
 
   $stateProvider.state('landing', {
     url: '/',
     controller: 'Landing.controller',
     templateUrl: '/templates/landing.html'
   });
    $stateProvider.state('song', {
     url: '/',
     controller: 'Landing.controller',
     template: '<h1> Song Template </h1>'
   });
 }]);




  blocJams.controller('Landing.controller', ['$scope', function($scope) {
  $scope.subText = "Turn the music up!";
  $scope.subText1 = "Bloc Jams";
     $scope.subTextClicked = function() {
     $scope.subText += '!';
   };
     $scope.albumURLs = [
     '/images/album-placeholders/album-1.jpg',
     '/images/album-placeholders/album-2.jpg',
     '/images/album-placeholders/album-3.jpg',
     '/images/album-placeholders/album-4.jpg',
     '/images/album-placeholders/album-5.jpg',

     '/images/album-placeholders/album-6.jpg',
     '/images/album-placeholders/album-7.jpg',
     '/images/album-placeholders/album-8.jpg',
     '/images/album-placeholders/album-9.jpg',
   ];



   var o = $scope.albumURLs;
   $scope.moveImage = function() {
     function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o; 
    };

   } 
 }]);