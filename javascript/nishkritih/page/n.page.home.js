N.Page.Home= new function(){
   var Ids={
      MobileRepair:"#mobileRepair"
   };
   var init=function(){
      var _brands=[{Id:1, 'Name':'Apple','ImageUrl':'/logo/apple.jpg'},
      {'Id':2, 'Name':'Apple','ImageUrl':'/logo/realme.jpg'}];
      N.Page.Brand.init(_brands);
      // $(Ids.MobileRepair).on('mouseover',function(){
      //     console.log("hovered");
      
      // });
      // $(Ids.MobileRepair).on('click',function(){
      //     console.log("clicked");
      
      // });
       
   }
  
  return{
      init:init
  }
  };
  
  window.onload=function(){
   N.Page.Home.init();
  };