N.Page.Home= new function(){
 var Ids={
    MobileRepair:"#mobileRepair"
 };
 var init=function(){
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