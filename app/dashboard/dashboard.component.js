'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('dashboard').
  component('dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: ['$routeParams','$http',
      function dashboardController($routeParams,$http) {
        var self = this;
          self.uID = $routeParams.userID;
        this.goToPage = function($bID){
         // alert('#!/login/dashboard/specificpage/'+self.uID+'/'+$bID);
          location.href = '#!/login/dashboard/specificpage/'+self.uID+'/'+$bID;
        
        
      };

      this.goToProfile = function(){
          location.href = '#!/login/dashboard/profile/'+self.uID;        
      };

      
      }
    ]
  });
