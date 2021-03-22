//iffe
N.Page.Register = (function () {

    var $email;
    var $password;
    var repassword;

    function _init() {
        $("#submit").on("click", btnsubmit);
    };
    function _email() {
        $("#email").on("blur", ValidateEmail);
    };

    function btnsubmit() {
        const lname = document.getElementById("name").value;
        const dateofbirth = document.getElementById("dob").value;
        const rgender = document.getElementById("gender").value;
        const rphone = document.getElementById("phone").value;
        const raddress = document.getElementById("address").value;
        const remail = document.getElementById("email").value;
        const rpassword = document.getElementById("password").value;
        const rconfirmpassword = document.getElementById("repass").value;

        if (lname == "" || raddress == "") {
            var x = "Required input must be filled";
            document.getElementById("demo").innerHTML = x;
        }
        ValidateEmail(remail);

    };

    function ValidateEmail(remail) {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (remail.value.match(mailformat)) {
            alert("Valid email address!");
            return true;
        }
        else {
            alert("You have entered an invalid email address!");
            return false;
        }
    }

    return {
        init: _init
        

    };
}());

window.onload = function () {
    N.Page.Register.init();
}