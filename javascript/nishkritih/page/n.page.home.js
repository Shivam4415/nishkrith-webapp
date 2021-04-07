N.Page.Home = new (function () {
  const Ids = {
    MobileRepair: "#mobileRepair",
    HomePageButtonLogIn: "#btnHomePageLogIn",
    HomePageButtonSignUp: "#btnHomePageSignUp",
    LoginPageButtonSignUp:"#btnSignUp",
    LoginModal: "#loginModal",
    RegisterModal: "#registerModal",


  };
  const init = () => {
    const _brands = [
      { Id: 1, Name: "Apple", ImageUrl: "/logo/apple.jpg" },
      { Id: 2, Name: "Realme", ImageUrl: "/logo/realme.jpg" },
    ];
    N.Page.Brand.init(_brands);

    // $(Ids.MobileRepair).on('mouseover',function(){
    //     console.log("hovered");

    // });
    // $(Ids.MobileRepair).on('click',function(){
    //     console.log("clicked");

    // });
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

  return {
    init: init,
  };
})();

window.onload = function () {
  N.Page.Home.init();
};
