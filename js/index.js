$(function(){   //网页加载完后执行的代码
	$("#alogin").click(function(){  //添加点击事件
		layer.open({
			type:1,
			title: "登录",
			area:["340px","260px"],
			content:$(".dcon")
		});
	});
	
	$("#login").click(function(){
	 	var uname = $.trim($("#uname").val());	
	 	if(uname == ""){
	 		layer.tips("请输入用户！",$("#uname"),{
	 			tips:[1,"#0ff"],
	 			time:2000
	 		});
	 		$("#uname").val("");
	 		$("#uname").focus();
	 	}
	});
	$("#register").click(function(){  //添加点击事件
		layer.open({
			type:1,
			title: "注册",
			area:["340px","450px"],
			content:$(".dregist")
		});
	});
	
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		console.log($(document).scrollTop());
		if($(document).scrollTop() >= 947){
			$(".topnav").css("position","fixed");
			$(".topnav").css("top","0");
			$(".topnav").css("left","0");
			$(".topnav").css("z-index","100");
		}else{
			$(".topnav").css("position","");
		}
	});
	
});
