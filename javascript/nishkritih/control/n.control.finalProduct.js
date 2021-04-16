N.Control.FinalProduct=(function(){
    var _template=
    '<div uk-grid>'+
        '<div class="uk-padding-remove">'+
            '<img src="{0}">'+
        '</div>'+
        '<div class="uk-padding-remove">'+
            '<span name="productName">{1}</span></br>'+
            '<span name="color">color : {2}</span>'+
        '</div>'+
    '</div>';
var Product=function(){
    var _data=arguments[0];
    var _name=_data.Name;
    var _color=_data.Color;
    var _imageUrl=_data.ImageUrl;
    var _container=_data.Container;
    $(_container).append(_template.format(_imageUrl,_name,_color));

};
return Product;
})();