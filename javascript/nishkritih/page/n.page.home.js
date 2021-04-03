N.Page.Home= new function(){
 var Ids={
    MobileRepair:"#mobileRepair"
 };
 var init=function(){
    var _brands=[{Id:1, 'Name':'Apple','ImageUrl':'https://s3n.cashify.in/cashify/brand/img/xhdpi/1071214e-b44f.jpg'},
    {'Id':2, 'Name':'Apple','ImageUrl':'https://s3n.cashify.in/cashify/brand/img/xhdpi/1071214e-b44f.jpg'}];
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