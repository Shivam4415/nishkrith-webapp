N.Page.Login = (function () {

  const apiUrl = 'http://localhost:5000';
  function _init() {
    $("#btnSignUp").on("click", btnSignup);
    $("#btnSignIn").on("click", btnSignin);
  }

  function btnSignup() {

  }

  function btnSignin() {
    const remail = document.getElementById("uname").value;
    const rpassword = document.getElementById("rpassword").value;

    if (remail == "") {
      document.getElementById("Remail").innerHTML = "*email must be filled ";
    }
    else {
      var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!remail.match(mailformat)) {
        document.getElementById("Remail").innerHTML = "entered an invalid email! ";
        return false;
      }
      else {
        document.getElementById("Remail").innerHTML = "";
      }
    };

    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (rpassword.length < minNumberofChars || rpassword.length > maxNumberofChars) {
      document.getElementById("Rpassword").innerHTML = "password must be atleast 6 char";
      return false;
    }
    else {
      document.getElementById("Rpassword").innerHTML = "";

    }
    validateLogin(remail, rpassword).done(function () {
      // set cookies header;

    });
    if (regularExpression.test(rpassword)) {
      document.getElementById("Rpassword").innerHTML =
        "password combination wrong";
      return false;
    }
    else {
      document.getElementById("Rpassword").innerHTML = "";
    }
  };


  function validateLogin(userEmail, userPassword) {
    var defer = $.Deferred();
    $.ajax({
      url: apiUrl+"/login",
      method: 'POST',
      data:{email: userEmail, password:userPassword},
      dataType: 'json',
      success: function (res, xhr) {
        defer.resolve(res);
      },
      fail: function (error, xhr) {
        defer.reject(error);
      }
    });
    // validateLogin(remail, rpassword).done(function () {
    //   // set cookies header;
    // });

    return defer.promise();
  };




  return {
    init: _init,
  };
})();
window.onload = function () {
  N.Page.Login.init();
};
