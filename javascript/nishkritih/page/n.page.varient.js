N.Page.Varient=new function(){
    var init =function(){
        var _data=arguments[0];
        var _imageUrl=_data.ImageUrl;
        var _parentContainerId="#Varient";
        var _outerGrid='<div uk-grid name="grid"></div>';
         $(_parentContainerId).append(_outerGrid);
        var _grid=$(_parentContainerId).find('[ name="grid"]');
        _brands.forEach(function(b){
            var _cardHtml=N.Page.Util.getCard(b.Name,b.ImageUrl);
            _grid.append(_cardHtml);
        });
        var _onBrandClick=function(){
            
        };

    };
    return {
        init:init
    };
};