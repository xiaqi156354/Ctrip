$(function(){
	 //点击后3秒跳转
      $(".aa").click(function(){
       setTimeout("javascript:location.href='index.html'", 3000);
    })
      total();
      function total(){
      	var aa=$("#zong span").html();
      	var bb=$("#zong1 span").html();
      		var cc=parseFloat(bb)+parseFloat(aa);
      		$(".ge span").html(cc)
      }
      $(".xnav5 .del").click(function(){
      	var aa=confirm("是否删除这个商品?");
		if(aa==true){
			$(this).parent().parent().parent().remove();
		}
		
      })
     $("#jian").click(function(){
     	var i=$("[name=price]").val();
		i--;
		if(i>0){
			$("#price").val(i);
		}else {
			alert("不能再减了，再减就没有了");
		}
		var jiage=parseFloat($("#price").val())*parseFloat($("#danjia span").html());
		$(this).parent().next().children("span").html(jiage);
		total();
     })
      $("#jia").click(function(){
     	var i=$("[name=price]").val();
		i++;
		if(i<99){
			$("#price").val(i);
		}else {
			alert("不能再加了，再加就多了");
		}
		var jiage=parseFloat($("#price").val())*parseFloat($("#danjia span").html());
		$(this).parent().next().children("span").html(jiage);
		total();
     })
       $("#jian1").click(function(){
     	var aa=$("[name=price1]").val();
		aa=aa-1;
		
		if(aa>0){
			$("#price1").val(aa);
		}else {
			alert("不能再减了，再减就没有了");
		}
		var jiage=parseFloat($("#price").val())*parseFloat($("#danjia span").html());
		$(this).parent().next().children("span").html(jiage);
		total();
     })
      $("#jia1").click(function(){
     	var bb=$("[name=price1]").val();
		parseInt(bb++);
		
		if(bb<99){
			$("#price1").val(bb);
		}else {
			alert("不能再加了，再加就多了");
		}
		var jiage=parseFloat($("#price1").val())*parseFloat($("#danjia1 span").html());
		$(this).parent().next().children("span").html(jiage);
		total();
     })
      
        //登录使用ajax跳转
           $("form").submit(function(){
           		var names=$("#names").val();
           		var pass=$("#pass").val();
           		$.ajax({
           			type:"post",
           			url:"ccc.html",
           			async:true,
           			dataType:"json",
           			data: {"names":names,"pass":pass},
           			success:function(){
           				
           			}
           		});
           })
      
})
	//注册点击下一步事件
	function chen(){
		$(".main3").hide();
		$(".snav").show();
		var aa=document.getElementById("second");
		var bb=document.createElement("img");
		aa.setAttribute("src","img/bj_80.jpg")
		bb.parentNode.replaceChild(aa,bb);
	}
	//注册点击完成事件
	function chen1(){
		$(".snav").hide();
		$(".snav_wan").show();
		var aa=document.getElementById("imgs");
		var bb=document.createElement("img");
		aa.setAttribute("src","img/bj_80.jpg")
		bb.parentNode.replaceChild(aa,bb);
	}
	
	