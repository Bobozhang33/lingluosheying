$.ajax({
    url:"header.html",
    type:"GET",
    success:(data)=>{
           $("#header").html(data); 
    }
})

$(window).scroll(function(){
        var scorllTop=$(window).scrollTop();
        console.log(scorllTop)
        if(scorllTop>800){
            $("#header").css({
                "position":"fixed",
                "top":0,
                "backgroundColor":"#27AFAF"
            })
        }else{
            $("#header").css({
                "position":"static"
            })
        }
})