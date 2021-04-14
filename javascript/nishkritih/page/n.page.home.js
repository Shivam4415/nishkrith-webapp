// import { config } from "./config";

N.Page.Home = new (function () {


  const Ids = {
    MobileRepair: "#mobileRepair",
    HomePageButtonLogIn: "#btnHomePageLogIn",
    HomePageButtonSignUp: "#btnHomePageSignUp",
    LoginPageButtonSignUp: "#btnSignUp",
    LoginModal: "#loginModal",
    RegisterModal: "#registerModal",
  };
  const init = () => {
    brand().done(function (brands) {
      N.Page.Brand.init(brands);
      // set cookies header;
    });
    _initModal();
  };
  const _initModal = function () {
    $(Ids.HomePageButtonLogIn).on("click", openLoginModal);
    $(Ids.HomePageButtonSignUp).on("click", openSignUpModal);
    $(Ids.LoginPageButtonSignUp).on("click", openSignUpModal);
  };

  const openLoginModal = () => {
    UIkit.modal(Ids.LoginModal).show();
  };

  const openSignUpModal = () => {
    UIkit.modal(Ids.RegisterModal).show();
  };

  function brand() {
    var d = $.Deferred();
    $.ajax({
      url:"https://0611a1cca392.ngrok.io/brands/1",
      method: "GET",
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

  return {
    init: init,
    openSignUpModal: openSignUpModal,
  };
})();

window.onload = function () {
  N.Page.Home.init();
};
