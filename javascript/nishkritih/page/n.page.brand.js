N.Page.Brand=new function(){
    var _containerIds={
        'Product':'#Product',
        'Brand':'#Brand',
        'Color':'#Color',
        'Navigation':'#Navigation'
    };
    var init=function(){
        var _parentContainerId="#Brand";
        var _outerGrid='<div uk-grid name="grid"></div>';
         $(_parentContainerId).append(_outerGrid);
        var _grid=$(_parentContainerId).find('[ name="grid"]');
        var _brands=arguments[0];
        _brands.forEach(function(b){
            var _cardHtml=N.Page.Util.getCard(b.Id,b.Name,b.ImageUrl);
            _grid.append(_cardHtml);
            $(_parentContainerId).on('click','[name="'+b.Id+'"]',function(){
                $(_containerIds.Color).addClass("uk-hidden");
                $(_containerIds.Brand).addClass("uk-hidden");
                $(_containerIds.Product).removeClass("uk-hidden");
                //fecth all product having id b.id and pass that as parameter;
                var _products=[{'Id':1,'Name':'Apple6','ImageUrl':'https://s3n.cashify.in/cashify/product/img/xhdpi/csh-qp4ba4sq-aeny.png'},
                { Id: 2, Name: "Realme", ImageUrl: "/logo/realme.jpg" },
                { Id: 3, Name: "Asus", ImageUrl: "/logo/asus.jpg" },
                { Id: 4, Name: "Mi", ImageUrl: "/logo/mi.jpg" },
                { Id: 5, Name: "Motorola", ImageUrl: "/logo/motorola.jpg" },
                { Id: 6, Name: "Honor", ImageUrl: "/logo/honor.jpg" },
                { Id: 7, Name: "Nokia", ImageUrl: "/logo/nokia.jpg" },
                { Id: 8, Name: "OnePlus", ImageUrl: "/logo/oneplus.jpg" },
                { Id: 9, Name: "Samsung", ImageUrl: "/logo/samsung.jpg" },
                { Id: 10, Name: "Sony", ImageUrl: "/logo/sony.jpg" },
                { Id: 11, Name: "Vivo", ImageUrl: "/logo/vivo.jpg" },];
                N.Page.Product.init(_products[b.Id-1]);
                $(_containerIds.Navigation).append('<a href="http://localhost:3000/home" class="uk-padding-remove">>Product</a>');
            });
        });

    };

    return{
      init:init
    };
};