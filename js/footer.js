$.ajax({
    url:"footer.html",
    type:"GET",
    success:(data)=>{
           $("#footer").html(data); 
    }
})