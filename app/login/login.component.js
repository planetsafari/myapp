'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('login').
component('login', {
  templateUrl: 'login/login.html',
  controller: function loginController($http) {
    var self = this;
    // $http.get('http://localhost:4000/users').then(function(response){
    //   self.users = response.data;
    //   //alert(JSON.stringify(self.users));
    // });


    this.signup = function(){
      location.href = '#!/signup';
    };

    this.loginUser = function(){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          self.response = this.responseText;
          if(isNaN(self.response))
            alert(self.response);
          else
            location.href = '#!/login/dashboard/'+self.response;
        }
      };
      xhttp.open("POST", "https://stormy-harbor-19273.herokuapp.com/login.php", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("email="+this.email+"&password="+this.password);
      
    };

    




  }


});
