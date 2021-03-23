N.Page.Login = (function () {
  function _init() {
    $("#btnSignUp").on("click", btnSignup);
    $("#btnSignIn").on("click", btnSignin);
  }

  function btnSignup() {}

  function btnSignin() {
    const remail = document.getElementById("uname").value;
    const rpassword = document.getElementById("rpassword").value;

    if (remail == "") 
    {
      document.getElementById("Remail").innerHTML = "*email must be filled ";
    }
     else
    {
      var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!remail.match(mailformat)) 
      {
        document.getElementById("Remail").innerHTML ="entered an invalid email! ";
        return false;
      } 
      else 
      {
        document.getElementById("Remail").innerHTML = "";
      }
    };
    if (rpassword.length < 6)
     {
      document.getElementById("Rpassword").innerHTML =
        "password must be atleast 6 char";
      return false;
    }
    var passformat = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).[8,]/;
    if (rpassword.match(passformat)) {
      document.getElementById("Rpassword").innerHTML = "";
    } else {
      document.getElementById("Rpassword").innerHTML =
        "password combination wrong";
    }
  }

  return {
    init: _init,
  };
})();
window.onload = function () {
  N.Page.Login.init();
};
