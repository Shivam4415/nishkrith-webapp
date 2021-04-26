N.Page.Block = new (function () {
    var createCard = function (id, name, imgUrl, type) {
   
      return (
        document.getElementById(id).src=imgUrl
      );
    };
    return {
      Card: createCard,
    };
  })();
  