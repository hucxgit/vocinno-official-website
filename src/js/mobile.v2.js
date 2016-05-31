
var GLOBAL={
	HAS_TOUCHED:false,
	BIG_BANG:false,
	LATEST_NEWS:false,
	TOUCH_START:0,
	TOUCHEND:0
};

$(document).ready(function(){
	initeLisetner();
	saveForm();
	$("#myCarousel").carousel('cycle');
});

function initeLisetner(){
	$(".head-menu").bind("click",function(){
		if(!GLOBAL.HAS_TOUCHED){
			$(".head-menu-panel").slideDown();
			GLOBAL.HAS_TOUCHED=true;
		}else if(GLOBAL.HAS_TOUCHED){
			$(".head-menu-panel").slideUp();
			GLOBAL.HAS_TOUCHED=false;
		}
	});

	$(".head-menu-panel-line1").bind("click",function(){
		$(".head-menu-panel").hide();
		GLOBAL.HAS_TOUCHED=false;
		var as=document.getElementById("aboutUs").offsetTop;
		$("html,body").animate({scrollTop:as},500);

	});
	$(".head-menu-panel-line2").bind("click",function(){
		$(".head-menu-panel").hide();
		GLOBAL.HAS_TOUCHED=false;
		var as=document.getElementById("big_Bang").offsetTop;
		$("html,body").animate({scrollTop:as},800);

	});
	$(".head-menu-panel-line3").bind("click",function(){
		$(".head-menu-panel").hide();
		GLOBAL.HAS_TOUCHED=false;
		var as=document.getElementById("ourTeam").offsetTop;
		$("html,body").animate({scrollTop:as},1000);

	});
	$(".head-menu-panel-line4").bind("click",function(){
		$(".head-menu-panel").hide();
		GLOBAL.HAS_TOUCHED=false;
		var as=document.getElementById("latest_News").offsetTop;
		$("html,body").animate({scrollTop:as},1300);

	});
	$(".head-menu-panel-line5").bind("click",function(){
		$(".head-menu-panel").hide();
		GLOBAL.HAS_TOUCHED=false;
		var as=document.getElementById("contactUs").offsetTop;
		$("html,body").animate({scrollTop:as},1800);

	});

	$(".big-bang-more-button").bind("click",function(){
		if(!GLOBAL.BIG_BANG){
			$(".big-bang-timeline-wrap").addClass("big-bang-timeline-wrap-more");
			$(this).html("收起");
			GLOBAL.BIG_BANG=true;
			$(".big-bang-more-button").removeClass("big-bang-more-button-down").addClass("big-bang-more-button-up");
		}else if(GLOBAL.BIG_BANG){
			$(".big-bang-timeline-wrap").removeClass("big-bang-timeline-wrap-more");
			$(this).html("查看更多");
			GLOBAL.BIG_BANG=false;
			$(".big-bang-more-button").removeClass("big-bang-more-button-up").addClass("big-bang-more-button-down");
		}
	});

	$(".latest-news-more").bind("click",function(){
		if(!GLOBAL.LATEST_NEWS){
			$(".latest-news-ul").addClass("latest-news-ul-more");
			$(this).html("收起");
			GLOBAL.LATEST_NEWS=true;
			$(".latest-news-more").addClass("latest-news-more-up").removeClass("latest-news-more-down");
		}else if(GLOBAL.LATEST_NEWS){
			$(".latest-news-ul").removeClass("latest-news-ul-more");
			$(this).html("查看更多");
			GLOBAL.LATEST_NEWS=false;
			$(".latest-news-more").removeClass("latest-news-more-up").addClass("latest-news-more-down");
		}
	});

	var ele=document.getElementById("vocinnoTag");
	ele.addEventListener("touchstart",function(e){
		//$("#myCarousel").carousel('next');
		//console.log(e.changedTouches[0].clientX);
		GLOBAL.TOUCH_START=e.changedTouches[0].clientX;
	});

	ele.addEventListener("touchend",function(e){
		GLOBAL.TOUCH_END=e.changedTouches[0].clientX;
		var dire=GLOBAL.TOUCH_END-GLOBAL.TOUCH_START;
		console.log(dire);
		if(dire>=0){
			$("#myCarousel").carousel('prev');
		}else if(dire<0){
			$("#myCarousel").carousel('next');
		}
	});
}

function saveForm(){
	$(".footer-contact-us-input5").bind("click",function(){
		var n1=$(".footer-contact-us-input1").val();
		var n2=$(".footer-contact-us-input2").val();
		var n3=$(".footer-contact-us-input3").val();
		var n4=$(".footer-contact-us-input4").val();
		var Regex = /^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/;
		if(!n1||n1=="请输入名字"){
			$(".footer-message-error").html("请输入名字").show().fadeOut(3000);
		}else if(!n2||n2=="请输入邮箱"){
			$(".footer-message-error").html("请输入邮箱").show().fadeOut(3000);
		}else if(!Regex.test(n2)){
			$(".footer-message-error").html("请输入正确邮箱地址").show().fadeOut(3000);
		}else if(!n3||n3=="请输入主题"){
			$(".footer-message-error").html("请输入主题").show().fadeOut(3000);
		}else if(!n4||n4=="留言"){
			$(".footer-message-error").html("请留言").show().fadeOut(3000);
		}else{
			$.post("http://api.vocinno.com/vocinno/nosession/user/contact/insert",{token:"dabb674fa3fbdfb073f46ac17338970a",name:n1,email:n2,subject:n3,message:n4},function(data){
				$(".footer-message-show").show().fadeOut(3000);
			});
		}
	});
}
