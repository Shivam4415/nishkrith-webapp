N.Page.Color = new(function() {
    var init = function() {
        var _parentContainerId = "#Color";
        var _outerGrid = '<div uk-grid name="grid"></div>';
        var _logInOffCanvas = "#offcanvas-flip";
        $(_parentContainerId).append(_outerGrid);
        var _grid = $(_parentContainerId).find('[ name="grid"]');
        var _colors = arguments[0];
        _colors.forEach(function(p) {
            var _cardHtml = N.Page.Util.getCard(p.id, p.name, p.logo);
            _grid.append(_cardHtml);
            $(_parentContainerId).on('click', '[name="' + p.id + '"]', function() {
                //check if user is logged in 
                //if not then show log in interface.
                UIkit.offcanvas($(_logInOffCanvas)).show();
                //N.Page.Home.openSignUpModal();
            });
        });
    };

    return {
        init: init,
    };
})();