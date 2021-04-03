N.Page.Util=new function(){
    var createCard=function(id,name,imgUrl,type){
        if(type=='Varient'){
            return '<a class="uk-card-media-left uk-cover-container">'+
                    '<img src="'+imgUrl+'" uk-cover>'+
                    '<canvas width="600" height="400"></canvas>'+
                   '</a>'+
                   '<a class="uk-card-body">'+
                   '<h3 class="uk-card-title">'+name+'</h3>'+
                   '<p></p>'+
                   '</a>'
        }
       return '<a class="uk-card uk-card-default" name="'+id+'">'+
            '<div class="uk-card-media-top">'+
                '<img src="'+imgUrl+'">'+
            '</div>'+
            '<div class="uk-card-body">'+
                '<h3 class="uk-card-title">'+name+'</h3>'+
            '</div>'+
        '</a>';
    };
    return{
        getCard:createCard
    }
};