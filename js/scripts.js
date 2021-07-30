$("#carouselButton").click(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
if ($("#carouselButton").children("span").hasClass('fa-pause')) {
    $("#mycarousel").carousel('pause');
    $("#carouselButton").children("span").removeClass('fa-pause');
    $("#carouselButton").children("span").addClass('fa-play');
}
else if ($("#carouselButton").children("span").hasClass('fa-play')){
    $("#mycarousel").carousel('cycle');
    $("#carouselButton").children("span").removeClass('fa-play');
    $("#carouselButton").children("span").addClass('fa-pause');                    
}
});

$("#login").click(function(){
$("#loginModal").modal("toggle");

});
$("#logindismiss").click(function(){
$("#loginModal").modal("hide");
});
$("#logindismiss2").click(function(){
$("#loginModal").modal("hide");
});



$("#reservebutton").click(function(){
$("#registerform").modal("toggle");

}); 
$("#formdismiss").click(function(){
$("#registerform").modal("hide");
});
$("#formdismiss2").click(function(){
$("#registerform2").modal("hide");
});


