N.Page.Util = new (function () {
  var createCard = function (id, name, imgUrl, type) {
    if (type == "Varient") {
      return (
        '<a class="">' +
        '<img src="' +
        imgUrl +
        '" uk-cover class="">' +
        '<canvas width="600" height="400"></canvas>' +
        "</a>" +
        '<a class="uk-card-body">' +
        //   '<h3 class="uk-card-title">'+name+'</h3>'+
        "<p></p>" +
        "</a>"
      );
    }
    return (
      '<a class="uk-padding-remove " name="' +
      id +
      '">' +
      '<div class="uk-card uk-card-default uk-card-body uk-margin-left uk-card-small uk-width-small@s">' +
      '<img src="' +
      imgUrl +
      '" class="">' +
      "</div>" +
      '<div class="uk-card-title">' +
      // '<h3 class="uk-card-title">'+name+'</h3>'+
      "</div>" +
      "</a>"
    );
  };
  return {
    getCard: createCard,
  };
})();
