	$(function(){
		//轮播每1秒轮播图片一次
      	var i=0;
		var img = new Array("img/首页轮播/img01.jpg","img/首页轮播/img02.jpg","img/首页轮播/img03.jpg","img/首页轮播/img04.jpg","img/首页轮播/img05.jpg","img/首页轮播/img06.jpg","img/首页轮播/img07.jpg","img/首页轮播/img08.jpg","img/首页轮播/img09.jpg");
		 if(i==0) $(".main").css("background-image","url('"+img[i]+"')");
		 setInterval(function () {
                i++;//
                if(i>img.length){
                	i=1;
                }
               $(".main").css("background-image","url('"+img[i-1]+"')");
            }, 2000)
           //鼠标悬浮出现内容
           $("[id=top_dh]").each(function(i){
		$(this).mouseenter(function(){
			$("#snav_bottombacc").hide();
			$("[id=top_dh]").attr("class","snav_bottoma1");
			$(this).attr("class","snav_bottoma1_yes");
			$("[id^=snav_bottomb_]").hide();
			$("#snav_bottomb_"+(i+1)).show();
		}).mouseleave(function(){
			$("#snav_bottombacc").show();
			$("[id^=snav_bottomb_]").hide();
			$("[id=top_dh]").attr("class","snav_bottoma1");
		})
		
	})
          	var offset=$(".snav_top24").offset();
           $(".snav_top24").mouseenter(function(){
           		$(".snav_top3").css({"top":offset.top+35,"left":offset.left-100}).show();
           		$(".snav_top24").css({"background-color":"#ffffff"});
           		
           }).mouseleave(function(){
           	$(".snav_top3").hide();
           	$(".snav_top24").css({"background-color":"#f4f4f4"});
           })
           
           $(".xnav_topft1").mouseenter(function(){
           		
           })
           
	})
	
	
