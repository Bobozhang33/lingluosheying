$(window).scroll(function(){
    var scorllTop=$(window).scrollTop();
    console.log(scorllTop)
    if(scorllTop>300){
        $("nav").css({
            "position":"fixed",
            "top":0
        })
    }else{
        $("nav").css({
            "position":"static"
        })
    }
})