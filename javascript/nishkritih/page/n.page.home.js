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
    const _brands = [
      { Id: 1, Name: "Apple", ImageUrl: "/logo/apple.jpg" },
      { Id: 2, Name: "Realme", ImageUrl: "/logo/realme.jpg" },
      { Id: 3, Name: "Asus", ImageUrl: "/logo/asus.jpg" },
      { Id: 4, Name: "Mi", ImageUrl: "/logo/mi.jpg" },
      { Id: 5, Name: "Motorola", ImageUrl: "/logo/motorola.jpg" },
      { Id: 6, Name: "Honor", ImageUrl: "/logo/honor.jpg" },
      { Id: 7, Name: "Nokia", ImageUrl: "/logo/nokia.jpg" },
      { Id: 8, Name: "OnePlus", ImageUrl: "/logo/oneplus.jpg" },
      { Id: 9, Name: "Samsung", ImageUrl: "/logo/samsung.jpg" },
      { Id: 10, Name: "Sony", ImageUrl: "/logo/sony.jpg" },
      { Id: 11, Name: "Vivo", ImageUrl: "/logo/vivo.jpg" },
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
