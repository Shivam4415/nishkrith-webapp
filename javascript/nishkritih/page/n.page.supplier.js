// function redirect(){
//     var a=10;
// window.location.replace("C:\Users\dipak\OneDrive\Desktop\nishkrith\nishkritih-webapp\views\partials\supplierModal.html");
// console.log(a);
// }
N.Page.Supplier = (function () {
  const Ed = {
    // SupplierModal: "#redirect",
    Addbtn: "#databtn",
  };
  const init = () => {
    // $(Ed.SupplierModal).on("click", redirec);
    $(Ed.Addbtn).on("click", addData);
  };
//   const redirec = () => {
//     window.location.redirects("www.youtube.com");
//   };
  const addData = () => {
    const Supplier = document.getElementById("usupplier").value;
    const Address = document.getElementById("raddress").value;
    const Phone = document.getElementById("rphone").value;
    const Services = document.getElementById("rservices").value;
    append(Supplier, Address, Phone, Services);
  };
  const append = (Supplier, Address, Phone, Services) => {
    var row =
      '<tr><td class="uk-width-1-5 uk-text-center">' +
      Supplier +
      '</td><td class="uk-width-1-5 uk-text-center" >' +
      Address +
      '</td><td class="uk-width-1-5 uk-text-center">' +
      Phone +
      '</td><td class="uk-width-1-5 uk-text-center">' +
      Services +
      "</td></tr>";
  };

  return {
    init: init,
  };
})();
// window.onload = function () {
//   N.Page.Supplier.init();
// };
