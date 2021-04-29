N.Page.Home = new (function () {
  const Ids = {
    MobileRepair: "#mobileRepair",
    HomePageButtonLogIn: "#btnHomePageLogIn",
    HomePageButtonSignUp: "#btnHomePageSignUp",
    LoginPageButtonSignUp: "#btnSignUp",
    LoginModal: "#loginModal",
    RegisterModal: "#registerModal",
    SupplierModal: "#redirect",

  };
  const productType = 1;
  const init = () => {
    var _parentId = "#Brand";

    for (i = 1; i <= N.totalBrands; i++) {
      $(_parentId).append(
        '<a class="uk-padding-remove" name="' +
          i +
          '">' +
          '<div class="uk-card uk-margin-bottom uk-margin-top uk-animate uk-card-body uk-margin-left uk-width-small@s">' +
          '<img src="" id="' +
          i +
          '">' +
          "</div>" +
          "</a>"
      );
    }

    brand().done(function (brands) {
      N.Page.Brand.init(brands);
      // set cookies header;
    });
    _initModal();
    N.Page.LoginOffCanvas.init();
    N.Page.Supplier.init();
  
  };

  const _initModal = function () {
    $(Ids.HomePageButtonLogIn).on("click", openLoginModal);
    $(Ids.HomePageButtonSignUp).on("click", openSignUpModal);
    $(Ids.LoginPageButtonSignUp).on("click", openSignUpModal);
    $(Ids.SupplierModal).on("click", supplier);

  };

  const openLoginModal = () => {
    UIkit.modal(Ids.LoginModal).show();
  };

  const openSignUpModal = () => {
    UIkit.modal(Ids.RegisterModal).show();
  };
  const supplier = () => {
    window.location.redirect("/oxygensupplier");
  };

  function brand() {
    var d = $.Deferred();
    $.ajax({
      url: N.apiUrl + "/brands/" + productType,
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
