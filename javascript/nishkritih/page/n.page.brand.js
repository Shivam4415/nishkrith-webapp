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
                var _products=[{'Id':1,'Name':'Apple6','ImageUrl':'https://s3n.cashify.in/cashify/product/img/xhdpi/csh-qp4ba4sq-aeny.png'}];
                N.Page.Product.init(_products);
                $(_containerIds.Navigation).append('<a href="http://localhost:3000/home" class="uk-padding-remove">>Product</a>');
            });
        });

    };

    return{
      init:init
    };
};