angular.
  module('personalAssistantApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

$routeProvider.
        when('/homepage', {
          template: '<homepage></homepage>'
        }).
        when('/login', {
          template: '<login></login>'
        }).
        when('/signup', {
          template: '<signup></signup>'
        }).
        when('/login/dashboard/:userID', {
          template: '<dashboard></dashboard>'
        }).
        when('/login/dashboard/specificpage/:userID/:bID', {
          template: '<specificpage></specificpage>'
        }).
        when('/login/dashboard/profile/:userID', {
          template: '<profile></profile>'
        }).
        /*when('/login/dashboard/stickynotes/:userID', {
          template: '<stickynotes></stickynotes>'
        }).
        when('/login/dashboard/calender/:userID', {
          template: '<calender></calender>'
        }).
        // when('/login/dashboard/addstickynotes/:userID', {
        //   template: '<addstickynotes></addstickynotes>'
        // }).*/
        otherwise('/homepage');
    }
  ]);
