N.Page.Brand = new (function () {
  var _containerIds = {
    Product: "#Product",
    Brand: "#Brand",
    Color: "#Color",
    Navigation: "#Navigation",
  };

  var init = function () {
    var _parentContainerId = "#Brand";
    var _outerGrid = '<div uk-grid name="grid"></div>';
    $(_parentContainerId).append(_outerGrid);
    var _grid = $(_parentContainerId).find('[ name="grid"]');
    // var _brands = arguments[0];
    var _brands = getBrands();
    _brands.forEach(function (b) {
      var _cardHtml = N.Page.Util.getCard(b.id, b.name, b.logo);
      _grid.append(_cardHtml);
      $(_parentContainerId).on("click", '[name="' + b.id + '"]', function () {
        $(_containerIds.Color).addClass("uk-hidden");
        $(_containerIds.Brand).addClass("uk-hidden");
        $(_containerIds.Product).removeClass("uk-hidden");
        //fecth all product having id b.id and pass that as parameter;
        var _products = b.model;
        N.Page.Product.init(_products);
        $(_containerIds.Navigation).append(
          '<a href="http://localhost:3000/home" class="uk-padding-remove">>Product</a>'
        );
      });
    });
  };

  function getBrands() {
    return [
      {
        id: "1",
        name: "Xiomi",
        logo: "logo/mi.jpg",
        productTypeId: "1",
        model: [
          {
            id: "5",
            name: "Xiomi Redmi Note 3",
            logo: "model_img\\redmi note3.png",
            accessories: [
              {
                id: "1",
                name: "RECEIVER",
                logo: "",
              },
            ],
          },
          {
            id: "7",
            name: "Xiomi Redmi Note 6 Pro",
            logo: "model_img\\xiomi redmi note 6 pro.png",
            accessories: [
              {
                id: "1",
                name: "RECEIVER",
                logo: "",
              },
            ],
          },
          {
            id: "8",
            name: "Xiomi Redmi Note 6",
            logo: "model_img\\xiomi redmi note 6.jpg",
            accessories: [
              {
                id: "1",
                name: "RECEIVER",
                logo: "",
              },
            ],
          },
          {
            id: "9",
            name: "Xiomi Redmi m2",
            logo: "model_img\\xiomi redmi m2.png",
            accessories: [
              {
                id: "1",
                name: "RECEIVER",
                logo: "",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        name: "Apple",
        logo: "logo/apple.jpg",
        productTypeId: "1",
        model: [
          {
            id: "1",
            name: "Apple iPhone SE 2020",
            logo: "model_img\\apple se 2020.jpg",
            accessories: [
              {
                id: "1",
                name: "RECEIVER",
                logo: "",
              },
              {
                id: "2",
                name: "SCREEN",
                logo: "",
              },
              {
                id: "3",
                name: "AUX JACK",
                logo: "",
              },
            ],
          },
          {
            id: "2",
            name: "Apple iPhone 8 plus",
            logo: " model_img\\apple iphone 8plus.jpg",
            accessories: [
              {
                id: "1",
                name: "RECEIVER",
                logo: "",
              },
            ],
          },
          {
            id: "3",
            name: "Apple iPhone 8",
            logo: "model_img\\apple iphone 8.png",
            accessories: [
              {
                id: "1",
                name: "RECEIVER",
                logo: "",
              },
            ],
          },
          {
            id: "4",
            name: "Apple iPhone 6",
            logo: "model_img\\apple iphone 6.png",
            accessories: [
              {
                id: "1",
                name: "RECEIVER",
                logo: "",
              },
            ],
          },
        ],
      },
      {
        id: "3",
        name: "Samsung",
        logo: "logo/samsung.jpg",
        productTypeId: "1",
        model: [
          {
            id: "24",
            name: "Samsung Galaxy M40",
            logo: "model_img\\samsung galaxy m40.jpg",
          },
        ],
      },
      {
        id: "4",
        name: "Vivo",
        logo: "logo/vivo.jpg",
        productTypeId: "1",
        model: [
          {
            id: "25",
            name: "Vivo v17 pro",
            logo: "model_img\\vivo v17 pro.jpg",
          },
        ],
      },
      {
        id: "5",
        name: "OnePlus",
        logo: "logo/oneplus.jpg",
        productTypeId: "1",
        model: [
          {
            id: "14",
            name: "OnePlus 7T",
            logo: "model_img\\oneplus 7t.jpg",
            accessories: [
              {
                id: "1",
                name: "RECEIVER",
                logo: "",
              },
            ],
          },
        ],
      },
      {
        id: "6",
        name: "Oppo",
        logo: "logo/oppo.jpg",
        productTypeId: "1",
        model: [
          {
            id: "22",
            name: "Oppo A3S",
            logo: "model_img\\oppo a3s.png",
          },
        ],
      },
      {
        id: "7",
        name: "Realme",
        logo: "logo/realme.jpg",
        productTypeId: "1",
        model: [
          {
            id: "23",
            name: "Realme Nazro 3",
            logo: "model_img\\realme nazro 3.jpg",
          },
        ],
      },
      {
        id: "8",
        name: "Motorolla",
        logo: "logo/motorola.jpg",
        productTypeId: "1",
        model: [
          {
            id: "20",
            name: "Motorola G6 Plus",
            logo: "model_img\\motorola g6 plus.jpg",
          },
        ],
      },
      {
        id: "9",
        name: "Lenovo",
        logo: "logo/lenovo.jpg",
        productTypeId: "1",
        model: [
          {
            id: "19",
            name: "Lenevo K3 Note",
            logo: "model_img\\lenevo k3 note.jpg",
          },
        ],
      },
      {
        id: "10",
        name: "Nokia",
        logo: "logo/nokia.jpg",
        productTypeId: "1",
        model: [
          {
            id: "21",
            name: "Nokia 7t",
            logo: "model_img\\nokia 7.2.jpg",
          },
        ],
      },
      {
        id: "11",
        name: "Honor",
        logo: "logo/honor.jpg",
        productTypeId: "1",
        model: [
          {
            id: "17",
            name: "Honor 7x",
            logo: "model_img\\honor 7x.png",
          },
        ],
      },
      {
        id: "12",
        name: "Asus",
        logo: "logo/asus.jpg",
        productTypeId: "1",
        model: [
          {
            id: "15",
            name: "Asus Zenfone maxPro M1",
            logo: "model_img\\asus zenfone max pro m1.png",
            accessories: [
              {
                id: "5",
                name: "MIC",
                logo: "",
              },
            ],
          },
        ],
      },
      {
        id: "13",
        name: "Poco",
        logo: "logo/poco.jpg",
        productTypeId: "1",
        model: [
          {
            id: "10",
            name: "POCO X2",
            logo: "model_img\\pocco x2.jpg",
            accessories: [
              {
                id: "1",
                name: "RECEIVER",
                logo: "",
              },
              {
                id: "5",
                name: "MIC",
                logo: "",
              },
            ],
          },
          {
            id: "11",
            name: "POCO X3",
            logo: "model_img\\pocco x3.jpg",
            accessories: [
              {
                id: "1",
                name: "RECEIVER",
                logo: "",
              },
              {
                id: "5",
                name: "MIC",
                logo: "",
              },
            ],
          },
          {
            id: "12",
            name: "POCO X3 Pro",
            logo: "model_img\\pocco x3 pro.jpg",
            accessories: [
              {
                id: "1",
                name: "RECEIVER",
                logo: "",
              },
              {
                id: "5",
                name: "MIC",
                logo: "",
              },
            ],
          },
          {
            id: "13",
            name: "POCO M2",
            logo: "model_img\\pocco m2.jpg",
            accessories: [
              {
                id: "1",
                name: "RECEIVER",
                logo: "",
              },
              {
                id: "5",
                name: "MIC",
                logo: "",
              },
            ],
          },
        ],
      },
      {
        id: "14",
        name: "Huawei",
        logo: "logo/huawei.jpg",
        productTypeId: "1",
        model: [
          {
            id: "15",
            name: "Asus Zenfone maxPro M1",
            logo: "model_img\\asus zenfone max pro m1.png",
            accessories: [
              {
                id: "5",
                name: "MIC",
                logo: "",
              },
            ],
          },
        ],
      },
      {
        id: "15",
        name: "LeTv",
        logo: "logo/letv.jpg",
        productTypeId: "1",
        model: [
          {
            id: "18",
            name: "Letv le2",
            logo: "model_img\\leeco le 2.png",
          },
        ],
      },
      {
        id: "16",
        name: "Google",
        logo: "logo/google.jpg",
        productTypeId: "1",
        model: [
          {
            id: "16",
            name: "Google Pixel",
            logo: "model_img\\google pixel.png",
          },
        ],
      },
    ];
  }

  return {
    init: init,
  };
})();
