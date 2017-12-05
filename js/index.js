$(function(){
$.ajax({
	url: 'data/carousel.php',
	type: 'GET',
	success:function(data){
		console.log(data);
		var html="";
		for(var c of data){
			html+=`
					<li>
						<a href="${c.href}"><img src="${c.img}" title="${c.title}"></a>
					</li>
			`;
		}
		$("#banner>ul").html(html);

		var $bimg=$(".banner-img");//ul
		var imgIndex=0,//图片显示第几张
			imgLength=$bimg.children().length;//图片的总数
		var $firstImg=$bimg.find("li").first();//第一张图片
		var $lastImg=$bimg.find("li").last();//最后一张图片
		var isAnimate=false;//状态锁
			$bimg.prepend($lastImg.clone());//将最后一张图片克隆到最前面
			$bimg.append($firstImg.clone());
			$bimg.width($lastImg.width()*$bimg.children().length);
			$bimg.css("left",-$lastImg.width());
		var timer=setInterval(playNext,5000);//定时器循环
			$bimg.mouseover(function(){//鼠标移入
				clearInterval(timer);
				timer=null;
			})
		$bimg.mouseout(function(){//鼠标移除
			timer=setInterval(playNext,5000);
		})
		console.log($lastImg.width());
		function playNext(){ //显示下一张
			if(isAnimate) return;
			isAnimate=true;
			$bimg.animate({
				left:"-="+$lastImg.width()
			},function(){
				imgIndex++;
				if(imgIndex==imgLength){
					$bimg.css("left",-$lastImg.width());
					imgIndex=0;
				}
				//setInds();
				isAnimate=false;
			})
		}



	},
	error:function(){
		console.log("网络故障");
	}
})
})


$(".theme ul>li").each(function(){
	var i=$(this).index();
	$(this).hover(function(e){
		e.preventDefault();
		console.log(i);
		$(".theme_img ul").find("li").removeClass("img_show").eq(i).addClass("img_show");
	})
})

