// add ngResource dependency
  angular.module('personalAssistantApp', ['ngRoute', 'ngResource'])
  // ...
        .factory('Users', ['$resource', function($resource){
          return $resource('http://localhost:3000/users/:id', null, {
            'update': { method:'PUT' }
          });
        }])
// ...
        .controller('AppController', ['$scope', 'Users', function ($scope, Users) {
          $scope.users = Users.query();
          console.log(JSON.stringify($scope.users));
        }])