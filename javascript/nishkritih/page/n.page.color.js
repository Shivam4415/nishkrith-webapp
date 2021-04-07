N.Page.Color=new function(){
var init=function(){
    var _parentContainerId="#Color";
        var _outerGrid='<div uk-grid name="grid"></div>';
         $(_parentContainerId).append(_outerGrid);
        var _grid=$(_parentContainerId).find('[ name="grid"]');
        var _colors=arguments[0];
        // _colors.forEach(function(p){
            var _cardHtml=N.Page.Util.getCard(_colors.Id,_colors.Name,_colors.ImageUrl);
            _grid.append(_cardHtml);
        // });
}

    return {
    init:init
};
};