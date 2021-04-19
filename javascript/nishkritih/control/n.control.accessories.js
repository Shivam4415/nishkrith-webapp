N.Control.Accessories=(function(){
    var _addButton='<button name="addButton" class="uk-button uk-button-default uk-border-rounded uk-margin-small-left">Add +</button>';
    var _removeButton='<button name="removeButton" class="uk-hidden uk-button uk-button-default uk-border-rounded uk-margin-small-left">Remove +</button>';
    var _template='<div uk-grid class="uk-margin-remove-top">'+
    '<div><span class="uk-icon" uk-icon="icon:{0};ratio:3"></span></div>'+
    '<div class="uk-padding-remove"><span>{1}</span></br>'+
    '<span>{2}</span></br>'+
    '<a>Know More</a>'+
    '</div>'+
      '<div class="uk-padding-remove">'+
      _addButton+_removeButton+
      '</div>'+
'</div>'
var _container="";
 var Accessories=function(){
    var _data=arguments[0].Data;
    _container=arguments[0].Container;
    $(_container).append('<div name="accessoriesGrid" uk-grid></div>');
    var _grid=$(_container).find('[name="accessoriesGrid"]');
    _data.forEach(function(d){
      var _icon=d.Icon;
      var _name=d.Name;
      var _price=d.Price;
      _grid.append( _template.format(_icon,_name,_price));

    });
   
 };
 var _onAddButtonClick=function(){
    $(_container).find('[name="addButton"]').addClass("uk-hidden");
    $(_container).find('[name="removeButton"]').removeClass("uk-hidden");
 };
 var _onRemoveButtonClick=function(){
    $(_container).find('[name="removeButton"]').addClass("uk-hidden");
    $(_container).find('[name="addButton"]').removeClass("uk-hidden");
 };
 var _onKnowMoreClick=function(){

 };
 return Accessories;

})();