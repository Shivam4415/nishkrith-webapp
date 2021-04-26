N.Control.Accessories=(function(){
    var _addButton='<button name="addButton" class="uk-button uk-button-default uk-border-rounded">Add +</button>';
    var _removeButton='<button name="removeButton" class="uk-hidden uk-button uk-button-default uk-border-rounded">Remove +</button>';
    var _template='<div uk-grid>'+
    '<div><span class="uk-icon" uk-icon="icon:phone;ratio:3"></span></div>'+
    '<div class="uk-padding-remove"><span>Screen</span></br>'+
    '<span>3,889</span></br>'+
    '<span>Know More</span>'+
    '</div>'+
      '<div class="uk-padding-remove">'+
      _addButton+_removeButton+
      '</div>'+
'</div>'
 var Accessories=function(){
    var _data=arguments[0];
    var _container=_data.Container;
    var _icon=_data.Icon;
    var _name=_data.Name;
    var _price=_data.Price;
    $(_container).append(_template);
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