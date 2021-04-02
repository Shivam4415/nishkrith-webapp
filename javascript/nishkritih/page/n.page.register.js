//iffe
N.Page.Register = (function () {

  function _init() {
    $("#submit").on("click", btnsubmit);
  }
  function btnsubmit() {
    //ToDo: use jquery
    const lname = document.getElementById("name").value;
    const dateofbirth = document.getElementById("dob").value;
    const rgender = document.getElementById("gender").value;
    const rphone = document.getElementById("phone").value;
    const raddress = document.getElementById("address").value;
    const remail = document.getElementById("email").value;
    const rpassword = document.getElementById("password").value;
    const rconfirmpassword = document.getElementById("repass").value;

    if (!lname) {
      document.getElementById("Rname").innerHTML = "*name must be filled ";
      return false;
    } 
    else if(!isNaN(lname))
    {
        document.getElementById("Rname").innerHTML = "only char allowed ";
        return false;
    }
    else{
      document.getElementById("Rname").innerHTML = "";
    }

    if(!dateofbirth)
    {
        document.getElementById("Rdob").innerHTML = "*DOB must be filled ";
        return false;
    }
    else{
      document.getElementById("Rdob").innerHTML = "";
    }

    if(rphone=="")
    {
        document.getElementById("Rphone").innerHTML = "*Phone_no must be filled ";
        return false;
    }
    else if(isNaN(rphone))
    {
        document.getElementById("Rphone").innerHTML = "only number allowed ";
        return false;
    }
    else{
      document.getElementById("Rphone").innerHTML = "";
    }

    if(raddress==""){
         document.getElementById("Raddress").innerHTML = "**address must be filled ";
        return false;
     }
    ValidateEmail(remail);

     if (rpassword.length < 6) {
      document.getElementById("Rpassword").innerHTML ="password must be atleast 6 char";
      return false;
    }
    var passformat = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).[8,]/;
    if (rpassword.match(passformat)) {
      document.getElementById("Rpassword").innerHTML = "password combination wrong";
    }
    else if(rpassword!=rconfirmpassword)
    {
        document.getElementById("Rrepass").innerHTML = "password did`t match";
    }
    else
    {
      document.getElementById("Rrepass").innerHTML = "";
  }
    
  }

  function ValidateEmail(remail) {
      if(remail==""){
        document.getElementById("Remail").innerHTML = "*email must be filled ";

      }
      else{
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!remail.match(mailformat)) {
        document.getElementById("Remail").innerHTML = "entered an invalid email! ";
      return false;
    }
    }
  }

  const btnnSignup=function(email,password,phone,address,dob){

  }

  return {
    init: _init,
  };
})();

window.onload = function () {
  N.Page.Register.init();
};
