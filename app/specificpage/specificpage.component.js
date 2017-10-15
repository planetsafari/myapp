'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('specificpage').
  component('specificpage', {
    templateUrl: 'specificpage/specificpage.html',
    controller: ['$routeParams', '$http',
      function specificpageController($routeParams, $http) {
        var self = this;
        self.uID = $routeParams.userID;
        self.bID = $routeParams.bID;
        if (self.bID == 1) {
          self.bikeName = "Royal Enfield 350cc";
          self.weekday8 = 500;
          self.weekend8 = 750;
          self.weekdayMore8 = 1000;
          self.weekendMore8 = 1500;
          self.kmLimit = "10 km/hr with excess km charges of Rs 5/km";
        }
        if (self.bID == 2) {
          self.bikeName = "Bajaj Avenger";
          self.weekday8 = 350;
          self.weekend8 = 500;
          self.weekdayMore8 = 700;
          self.weekendMore8 = 1000;
          self.kmLimit = "10 km/hr with excess km charges of Rs 5/km";
        }
        if (self.bID == 3) {
          self.bikeName = "Desert Storm 500cc";
          self.weekday8 = 600;
          self.weekend8 = 900;
          self.weekdayMore8 = 1200;
          self.weekendMore8 = 1800;
          self.kmLimit = "10 km/hr with excess km charges of Rs 5/km";
        }
        if (self.bID == 4) {
          self.bikeName = "Thunder Bird 500cc";
          self.weekday8 = 500;
          self.weekend8 = 750;
          self.weekdayMore8 = 1000;
          self.weekendMore8 = 1500;
          self.kmLimit = "10 km/hr with excess km charges of Rs 5/km";
        }
        if (self.bID == 5) {
          self.bikeName = "Activa";
          self.weekday8 = 250;
          self.weekend8 = 350;
          self.weekdayMore8 = 500;
          self.weekendMore8 = 700;
          self.kmLimit = "5 km/hr with excess km charges of Rs 3/km";
        }
        self.imageURL = "specificpage/images/" + self.bID + ".jpg";
        document.getElementById("bike-image").src = self.imageURL;
        // alert(self.uID);
        // alert(self.bID);
        $http.get('users/users.json').then(function (response) {
          self.users = response.data;
          //alert(JSON.stringify(self.users));
        });

        this.goToProfile = function () {
          location.href = '#!/login/dashboard/profile/' + self.uID;
        };

        this.goToHome = function () {
          location.href = '#!/login/dashboard/' + self.uID;
        };

        this.book = function () {
          if (!(document.getElementById("below8").checked) && !(document.getElementById("above8").checked)) {
            alert("Please select a checkbox");
          }
          else {
            // alert("hi");
            var d = new Date();
            var n = d.getDay();
            if (n == 0 || n == 6) {
              if(document.getElementById("below8").checked)
                self.price = self.weekend8;
              else if(document.getElementById("above8").checked)
                self.price = self.weekendMore8;

            }
            else
              {
                if(document.getElementById("below8").checked)
                  self.price = self.weekday8;
                else if(document.getElementById("above8").checked)
                  self.price = self.weekdayMore8;
              }
              //alert(self.price);
            var xhttp = new XMLHttpRequest();
            
            xhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                alert(this.responseText);
              }
            };
            xhttp.open("GET", "http://localhost/test.php", true);
            //xhttp.setRequestHeader("Origin","http://localhost:3001");
            xhttp.send();
          };
        }




      }

    ]
  });
