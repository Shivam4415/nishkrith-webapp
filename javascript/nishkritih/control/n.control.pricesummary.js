N.Control.PriceSummary=(function(){
    var PriceSummary=function(){
        var _data=arguments[0];
        var _accessories=_data.Accessories;
        var _saving=_data.Saving;
        var _totalAmount=_data.TotalAmount;
        var _container=_data.Container;
        _accessories.forEach(function(a){
            $(_container).append('<hr><span uk-grid>'+
            '<span class="uk-padding-remove-right uk-text-break" style="max-width:150px">'+a.Name+'</span>'+
            '<span class="uk-padding-remove-right uk-padding-small-left uk-padding-small-right uk-text-break" style="max-width:105px">'+
            a.Price+'</span>'+
            '</span>');

        });
        if(_saving>0){
            $(_container).append('<hr><span uk-grid>'+
            '<span class="uk-padding-remove-right uk-text-break" style="max-width:150px;min-width:150px">You Save</span>'+
            '<span class="uk-padding-remove-right uk-padding-small-left uk-padding-small-right uk-text-break" style="max-width:105px">'+
            _saving+'</span>'+
            '</span>');
        }
        $(_container).append('<hr><span uk-grid>'+
        '<span class="uk-padding-remove-right uk-text-break" style="max-width:150px;min-width:150px">Total Amount</span>'+
        '<span class="uk-padding-remove-right uk-padding-small-left uk-padding-small-right uk-text-break" style="max-width:105px">'+
        _totalAmount+'</span>'+
        '</span>');
        $(_container).append('<hr><button class="uk-button uk-button-primary">Book Now</button>');

    }
    return PriceSummary;
})();