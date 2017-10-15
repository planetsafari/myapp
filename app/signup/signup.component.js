'use strict';

angular.
  module('signup').
  component('signup', {
    templateUrl: 'signup/signup.html',
    controller: function loginController($http) {
    var self = this;
  this.save = function(){
    var isValid=true;
    var errorMsg="";
    var username=$('#username').val();
    var mobileNo=$('#number').val();

    //console.log(username);
    if (isValid && (username.length==0 || !isNaN(username) || !username.match(/[0-9a-zA-Z]+$/))){
      var errorMsg="USER IS NOT PROPER";
      isValid=false;
    }

    if((isValid)&& email.length>0){
      var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
      if(!(pattern.test(email))){
        var errorMsg="INVALID EMAILID";
        isValid=false;
      }
      
    }

    if(isValid && ((!mobileNo.match(/[0-9]+$/))||(mobileNo.length<10))){
      var errorMsg="MOBILE NO IS NOT PROPER";
      isValid=false;
    }
    
        
    if((isValid)&&((this.password.length < 5) || (this.password != this.cpassword))){
        this.password = '';
        this.cpassword = '';
        var errorMsg="PASSWORD ERROR";
        isValid=false;
      }

      if(isValid){
      // var user = {"name":this.username,"password":this.password,"email":this.mail,"phoneno":this.no,"address":this.address};
      // alert(JSON.stringify(user));
      // $http.post('http://localhost:4000/users',user).then(function(response){
      //     self.testdata = response.data;
      //     console.log(self.testdata);
      //     location.href = '#!/login/dashboard/'+self.testdata._id;
      //   });
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          self.userId = this.responseText;
          if(parseInt(self.userId) == -1 || parseInt(self.userId) == 0 ){
            if(parseInt(self.userId) == -1)
              var errorMsg="EMAIL ID ALEADY EXISTS";
            else
              var errorMsg="MOBILE NO ALEADY EXISTS";
            $('#status').html(errorMsg);
            $('#status').show();
            setTimeout(hideErrorMsg, 5000);
            function hideErrorMsg(){
             $('#status').hide(); 
            }
            
          }
          location.href = '#!/login/dashboard/'+self.userId;
        }
      };
      xhttp.open("POST", "http://localhost/signup.php", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("name="+this.username+"&password="+this.password+"&email="+this.mail+"&phoneno="+this.no+"&address="+this.address);
      }
      else{
        $('#status').html(errorMsg);
        $('#status').show();
        setTimeout(hideErrorMsg, 5000);
        function hideErrorMsg(){
         $('#status').hide(); 
        }
      }   
  }
      
    }
  });
