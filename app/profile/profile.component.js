'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('profile').
  component('profile', {
    templateUrl: 'profile/profile.html',
    controller: ['$routeParams','$http',
      function profileController($routeParams,$http) {
        var self = this;
        self.uID = $routeParams.userID;
    //   $http.get('http://localhost:4000/users').then(function(response){
    //   self.users = response.data;
    //   //alert(JSON.stringify(self.users));
    //   for(var i = 0;i < self.users.length;i++)
    //   {
    //     if(self.uID == self.users[i]._id)
    //     {
    //       self.name = self.users[i].name;
    //       self.address = self.users[i].address;
    //       self.phoneno = self.users[i].phoneno;
    //       self.email = self.users[i].email;
    //     }
    //   }
    // });

    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        self.response = this.responseText;
        self.info = self.response.split(";");
        $("#name").html(self.info[0]);
        $("#email").html(self.info[1]);
        $("#phoneno").html(self.info[2]);
        $("#address").html(self.info[3]);
      }
    };
    xhttp.open("POST", "http://localhost/profile.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("uid="+self.uID);


        this.goToHome = function(){
          location.href = '#!/login/dashboard/'+self.uID;        
      };


      
      }
      
    ]
  });
