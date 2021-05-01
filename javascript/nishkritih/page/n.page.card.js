N.Page.Block = new (function () {
    var createCard = function (id, name, imgUrl, type) {
      $(`#`+id).parent().removeClass("nk-animate");

      return (
        document.getElementById(id).src=imgUrl
      );
    };
    return {
      Card: createCard,
    };
  })();
  