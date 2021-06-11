N.Page.LoginOffCanvas = new (function () {
  let _phone = "";
  let _hash = "";
  const channel = "sms";
  const _elements = {
    btnPhoneNumber: "#btnPhoneNumber",
    loginPhoneNumber: "#loginPhoneNumber",
    inputOtp: "#inputOtp",
    btnVerifyOtp: "#btnVerifyOtp",
    labelPhone: "#labelPhone",
    divLoginUser: "#divLoginUser",
    divVerifyUser: "#divVerifyUser",
    divRegisterUser: "#divRegisterUser",
    btnRegisterUser: "#btnRegisterUser",
    registerName: "#registerName",
    registerEmail: "#registerEmail",
    registerPhone: "#registerPhone",
  };

  const init = function () {
    $(_elements.btnPhoneNumber).on("click", generateOtp);
    $(_elements.btnVerifyOtp).on("click", loginUser);
    $(_elements.btnRegisterUser).on("click", registerUser);
  };

  function loginData(res) {
    _hash = res.hash;
    $(_elements.divVerifyUser).removeAttr("hidden");
  }

  function generateOtp() {
    // Show loading circle
    _phone = $(_elements.loginPhoneNumber).val();
    $(_elements.labelPhone).html(_phone);
    /* Logics: Validate phone number is from India and contains 10 digit number only. If 12 digit lets remove first two digit. */
    sendOtp({ phone: _phone, channel })
      .done(function (res) {
        if (!res.isUserExists) {
          $(_elements.divRegisterUser).removeAttr("hidden");
        } else {
          loginData(res);
        }
        $(_elements.divLoginUser).attr("hidden", "hidden");

        // Once otp is send now show UI to verify OTP by sending verifyOtp endpoints
      })
      .fail(function (res, err) {
        const error = err;
        const resp = res;
      });
  }

  function loginUser() {
    const otp = $(_elements.inputOtp).val();
    verifyOtp({ phone: _phone, otp, hash: _hash }).done(function (data) {
      // generate hash from response received in sendOtp endPoints.
      const h = data;
      /* now add logic to create cookie and store in the browser. In case if someone removes the cookie then log out that user. */
    });
  }

  function registerUser() {
    const user = {
      uname: $(_elements.registerName).val(),
      uemail: $(_elements.registerEmail).val(),
      uphone: $(_elements.registerPhone).val(),
    };
    register(user).done(function (response) {
      loginData(response);
    });
  }

  function verifyOtp(data) {
    var d = $.Deferred();
    $.ajax({
      url: "./verifyToken",
      method: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
      dataType: "json",
      success: function (res, xhr) {
        d.resolve(res);
      },
      fail: function (error, xhr) {
        d.reject(error);
      },
    });
    return d.promise();
  }

  function sendOtp(data) {
    var d = $.Deferred();
    $.ajax({
      url: N.apiUrl + "/sendOtp/",
      method: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
      dataType: "json",
      success: function (res, xhr) {
        d.resolve(res);
      },
      fail: function (error) {
        d.reject(error);
      },
    });
    return d.promise();
  }

  function register(user) {
    var d = $.Deferred();
    $.ajax({
      url: N.apiUrl + "/register/",
      method: "POST",
      data: JSON.stringify(user),
      contentType: "application/json",
      dataType: "json",
      success: function (res, xhr) {
        d.resolve(res);
      },
      fail: function (error) {
        d.reject(error);
      },
    });
    return d.promise();
  }
  return {
    init: init,
  };
})();
