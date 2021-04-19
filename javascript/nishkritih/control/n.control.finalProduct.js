N.Control.FinalProduct=(function(){
    var _template=
    '<div>'+
        '<div>'+
            '<img src="{0}"></img>'+
        '</div'+
        '<div>'+
            '<span name="productName">{1}</span>'+
            '<span name="color">{2}</span>'+
        '</div>'+
    '</div>';
var Product=function(){
    var _data=arguments[0];
    var _name=_data.Name;
    var _color=_data.Color;
    var _imageUrl=_data.ImageUrl;
    var _container=_data.Container;
    var _tempTemplate=_template;
    _tempTemplate.format(_imageUrl,_name,_color);
    $(_container).append(_tempTemplate);

};
return Product;
})();