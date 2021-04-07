N.Page.Product=new function(){
    var _containerIds={
        'Product':'#Product',
        'Brand':'#Brand',
        'Color':'#Color',
        'Navigation':'#Navigation'
    };

    var init=function(){
        var _parentContainerId="#Product";
        var _outerGrid='<div uk-grid name="grid"></div>';
         $(_parentContainerId).append(_outerGrid);
        var _grid=$(_parentContainerId).find('[ name="grid"]');
        var _products=arguments[0];
        // _products(function(){
            var _cardHtml=N.Page.Util.getCard(_products.Id,_products.Name,_products.ImageUrl);
            _grid.append(_cardHtml);
            $(_containerIds.Brand).removeClass("uk-hidden");

            $(_parentContainerId).on('click','[name="'+_products.Id+'"]',function(){

                //get colors associated with that product
                $(_containerIds.Product).addClass("uk-hidden");
                $(_containerIds.Brand).addClass("uk-hidden");
                $(_containerIds.Color).removeClass("uk-hidden");
                var colors=[{'Id':0,'Name':'Black','ImageUrl':'https://s3n.cashify.in/cashify/product/img/xhdpi/csh-qp4ba4sq-aeny.png'},
               
                { Id: 1, Name: "White", ImageUrl: "/logo/realme.jpg" },
                { Id: 2, Name: "Blue", ImageUrl: "/logo/asus.jpg" },
                { Id: 3, Name: "Rose Gold", ImageUrl: "/logo/mi.jpg" },
                { Id: 4, Name: "Pink", ImageUrl: "/logo/motorola.jpg" },
                { Id: 5, Name: "Blue Light", ImageUrl: "/logo/honor.jpg" },
                { Id: 6, Name: "Neon", ImageUrl: "/logo/nokia.jpg" },
                { Id: 7, Name: "Sky Blue", ImageUrl: "/logo/oneplus.jpg" },
                { Id: 8, Name: "White", ImageUrl: "/logo/samsung.jpg" },
                { Id: 9, Name: "Gold", ImageUrl: "/logo/sony.jpg" },
                { Id: 10, Name: "Pink", ImageUrl: "/logo/vivo.jpg" },];
                N.Page.Color.init(colors[_products.Id]);
                $(_containerIds.Navigation).append('<a href="http://localhost:3000/home" class="uk-padding-remove-left">>Color</a>');
            });
        // });

    }
    return {
        init:init
    };
};