N.Page.Color = new (function () {
  var _containerIds = {
    Product: "#Product",
    Brand: "#Brand",
    Color: "#Color",
    Navigation: "#Navigation",
    Checkout: "#Checkout",
  };
  var init = function () {
    var _parentContainerId = "#Color";
    var _outerGrid = '<div uk-grid name="grid"></div>';
    var _logInOffCanvas = "#offcanvas-flip";
    $(_parentContainerId).append(_outerGrid);
    var _grid = $(_parentContainerId).find('[ name="grid"]');
    var _colors = arguments[0];
    _colors.forEach(function (p) {
      var _cardHtml = N.Page.Util.getCard(p.id, p.name, p.logo);
      _grid.append(_cardHtml);
      $(_parentContainerId).on("click", '[name="' + p.id + '"]', function () {
        //check if user is logged in
        //if not then show log in interface.
        //UIkit.offcanvas($(_logInOffCanvas)).show();
        $(_containerIds.Product).addClass("uk-hidden");
        $(_containerIds.Brand).addClass("uk-hidden");
        $(_containerIds.Color).addClass("uk-hidden");
        $(_containerIds.Checkout).removeClass("uk-hidden");
        var _productObject = {
          Name: "Iphone 8 plus",
          ImageUrl:
            "https://s3n.cashify.in/cashify/product/img/xhdpi/csh-jcko8mvm-sf7x.png",
          Color: "Black",
          Container: "#ProductSummary",
        };
        var _accessoriesObject = {
          Data: [
            {
              Name: "Iphone 8 plus",
              Price: "8745",
              Icon: "phone",
            },
            {
              Name: "Iphone 8 plus",
              Price: "8745",
              Icon: "phone",
            },
          ],
          Container: "#ProductSummary",
        };
        var _priceSummary = {
          Accessories: [
            { Name: "iPhone 8 plus Screen", Price: "3894" },
            { Name: "iPhone 8 plus charging Jack", Price: "1299" },
          ],
          Saving: "9281",
          TotalAmount: "5198",
          Container: "#PriceSummary",
        };
        N.Control.FinalProduct(_productObject);
        N.Control.Accessories(_accessoriesObject);
        N.Control.PriceSummary(_priceSummary);
        //N.Page.Home.openSignUpModal();
      });
    });
  };

  return {
    init: init,
  };
})();
