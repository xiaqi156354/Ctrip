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
		
	})		//鼠标放上根据相对位置偏移
           $(".snav_top24").mouseenter(function(){
           	var offset=$(this).offset();
           		$(".snav_top24").css({"background-color":"#FFFFFF","position":"relative","z-index":"2"});
           		$(".snav_top3").css({"top":offset.top+35,"left":offset.left-100}).show();
           }).mouseleave(function(){
           	 	$(".snav_top24").css("background","#f4f4f4");
           		$(".snav_top3").hide();
           })
           //鼠标放上事件
           $(".main1_right3_s21_img").mouseenter(function(){
           		$(this).children(".main1_right3_s21_img0").css({"height":"50px","margin-top":"30px","transition-duration":"0.3s"})
           }).mouseleave(function(){
           		$(this).children(".main1_right3_s21_img0").css({"height":"30px","margin-top":"50px"})
           })
           //鼠标放上的二级菜单
           var offset=$(".main1_left").offset();
         //  $(".main1_left>ul").each(function(i){
           		/*$(this).mouseenter(function(){
           			$(".xnav_"+(i+1)).css({"top":offset.top,"left":offset.left+270}).show();
           		}).mouseleave(function(){
           			$("[class^=xnav_]").hide();
           		})
           })*/
        	$("[class^=main1_left_]").hover(
           			function(){
           				$(this).children(".xnav").css({"top":offset.top,"left":offset.left+269}).show();
           				//$(".main1_left").css({"border-right":"0"})
           			},function(){
           				$(this).children(".xnav").hide();
           		})
        	$.ajax({
        		type:"get",
        		url:"ajax/ajax城市列表json数据.html",
        		dataType: 'json',
        		success:function(aa){
        			$.each(aa, function(i) {
        				$("#bar").append("<a>"+aa[i].tag_name+"</a>");
        			});
        		},error:function(event){
        			alert(event);
        		}
        	});
           
	})
	
	
