
var count=0;
var timer=null;
var timer1=null;
var bigBangCount=0;
var latesetNewCount=0;
var startDate = new Date("Thu Dec 31 2015 16:41:43 GMT+0800 (CST)");

$(document).ready(function(){
	testIE();
	turnOn();
	initListener();
	submitForm();

	kkk=setInterval(getScroll,100);
});

//IE环境下placeholder无效，使用value属性
function testIE(){
	if(navigator.appName == "Microsoft Internet Explorer"){
		$(".footer-contact-us-input1").bind("focus",function(){
			if($(this).val()=="请输入名字"){
				$(this).val("");
			}
		});
		$(".footer-contact-us-input1").bind("focusout",function(){
			if($(this).val()==""){
				$(this).val("请输入名字");
			}
		});
		$(".footer-contact-us-input2").bind("focus",function(){
			if($(this).val()=="请输入邮箱"){
				$(this).val("");
			}
		});
		$(".footer-contact-us-input2").bind("focusout",function(){
			if($(this).val()==""){
				$(this).val("请输入邮箱");
			}
		});
		$(".footer-contact-us-input3").bind("focus",function(){
			if($(this).val()=="请输入主题"){
				$(this).val("");
			}
		});
		$(".footer-contact-us-input3").bind("focusout",function(){
			if($(this).val()==""){
				$(this).val("请输入主题");
			}
		});
		$(".footer-contact-us-input4").bind("focus",function(){
			if($(this).val()=="留言"){
				$(this).val("");
			}
		});
		$(".footer-contact-us-input4").bind("focusout",function(){
			if($(this).val()==""){
				$(this).val("留言");
			}
		});
	}
}

//开始产品大banner轮播
function turnOn(){
	timer=setInterval(startCarousel,4000);
}

function startCarousel(){
	if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8."){
		if(count==0){
			$(".head-bg2").fadeIn(500);
			$(".head-bg1").fadeOut(500);
			$(".head-shuaya-mobile").show();
			$(".head-bengjiujie-mobile").hide();
			$(".head-shuaya-text").show();
			$(".head-bengjiujie-text").hide();
			$(".head-carousel-bengjiujie").removeClass("head-carousel-selected");
			$(".head-carousel-shuaya").addClass("head-carousel-selected");
		}else if(count==1){
			$(".head-bg2").fadeIn(100);
			$(".head-shuaya-mobile").hide();
			$(".head-search-computer").show();
			$(".head-shuaya-text").hide();
			$(".head-search-text").show();
			$(".head-carousel-shuaya").removeClass("head-carousel-selected");
			$(".head-carousel-search").addClass("head-carousel-selected");
		}else if(count==2){
			$(".head-bg3").fadeOut(500);
			$(".head-bg1").fadeIn(500);
			$(".head-bengjiujie-mobile").show();
			$(".head-search-computer").hide();
			$(".head-bengjiujie-text").show();
			$(".head-search-text").hide();
			$(".head-carousel-search").removeClass("head-carousel-selected");
			$(".head-carousel-bengjiujie").addClass("head-carousel-selected");
		}
	} else{
		if(count==0){
			$(".head-bg2").fadeIn(500);
			$(".head-bg1").fadeOut(500);
			$(".head-shuaya-mobile").fadeIn(500);
			$(".head-bengjiujie-mobile").fadeOut(500);
			$(".head-shuaya-text").fadeIn(1500);
			$(".head-bengjiujie-text").fadeOut(600);
			$(".head-carousel-bengjiujie").removeClass("head-carousel-selected");
			$(".head-carousel-shuaya").addClass("head-carousel-selected");
		}else if(count==1){
			$(".head-bg3").fadeIn(500);
			$(".head-bg2").fadeOut(500);
			$(".head-shuaya-mobile").fadeOut(500);
			$(".head-search-computer").fadeIn(500);
			$(".head-shuaya-text").fadeOut(1500);
			$(".head-search-text").fadeIn(1500);
			$(".head-carousel-shuaya").removeClass("head-carousel-selected");
			$(".head-carousel-search").addClass("head-carousel-selected");
		}else if(count==2){
			$(".head-bg3").fadeOut(500);
			$(".head-bg1").fadeIn(500);
			$(".head-bengjiujie-mobile").fadeIn(500);
			$(".head-search-computer").fadeOut(500);
			$(".head-bengjiujie-text").fadeIn(1500);
			$(".head-search-text").hide();
			$(".head-carousel-search").removeClass("head-carousel-selected");
			$(".head-carousel-bengjiujie").addClass("head-carousel-selected");
		}
	}
	count++;
	count %= 3;
}

function initListener(){
	$(".head-carousel-search").bind("click",function(){
		$(".head-bg3").fadeIn(500);
		$(".head-bg2").fadeOut(500);
		$(".head-bg1").fadeOut(500);
		$(".head-bengjiujie-mobile").hide();
		$(".head-shuaya-mobile").hide();
		$(".head-search-computer").show();
		$(".head-bengjiujie-text").hide();
		$(".head-shuaya-text").hide();
		$(".head-search-text").show();
		$(".head-carousel-bengjiujie").removeClass("head-carousel-selected");
		$(".head-carousel-shuaya").removeClass("head-carousel-selected");
		$(".head-carousel-search").addClass("head-carousel-selected");
		//console.log("teo1");
		count=2;
		clearInterval(timer);
		clearTimeout(timer1);
		timer1=setTimeout(turnOn,0);
	});
	$(".head-carousel-bengjiujie").bind("click",function(){
		$(".head-bg1").fadeIn(500);
		$(".head-bg2").fadeOut(500);
		$(".head-bg3").fadeOut(500);
		$(".head-bengjiujie-mobile").show();
		$(".head-shuaya-mobile").hide();
		$(".head-search-computer").hide();
		$(".head-bengjiujie-text").show();
		$(".head-search-text").hide();
		$(".head-shuaya-text").hide();
		$(".head-carousel-search").removeClass("head-carousel-selected");
		$(".head-carousel-shuaya").removeClass("head-carousel-selected");
		$(".head-carousel-bengjiujie").addClass("head-carousel-selected");
		//console.log("teo2");
		count=0;
		clearInterval(timer);
		clearTimeout(timer1);
		timer1=setTimeout(turnOn,0);
	});
	$(".head-carousel-shuaya").bind("click",function(){
		$(".head-bg2").fadeIn(500);
		$(".head-bg3").fadeOut(500);
		$(".head-bg1").fadeOut(500);
		$(".head-shuaya-mobile").show();
		$(".head-search-computer").hide();
		$(".head-bengjiujie-mobile").hide();
		$(".head-shuaya-text").show();
		$(".head-search-text").hide();
		$(".head-bengjiujie-text").hide();
		$(".head-carousel-search").removeClass("head-carousel-selected");
		$(".head-carousel-bengjiujie").removeClass("head-carousel-selected");
		$(".head-carousel-shuaya").addClass("head-carousel-selected");
		//console.log("teo2");
		count=1;
		clearInterval(timer);
		clearTimeout(timer1);
		timer1=setTimeout(turnOn,0);
	});
	$(".head-shuaya-app-download").hover(
			function(){
				$(".head-shuaya-app-download1-img").attr("src","img/appleiconh.png")
			},
			function(){
				$(".head-shuaya-app-download1-img").attr("src","img/appleicon.png")
			}
	);
	$(".ot-movedR").live("click",function(){
		$(".our-team-ul").animate({left:"-930px"},800);
		$(".our-team-main-left").addClass("nav-1-selected").addClass("ot-movedL");
		$(".our-team-main-right").removeClass("ot-movedR").removeClass("nav-1-selected");
	});
	$(".ot-movedL").live("click",function(){
		$(".our-team-ul").animate({left:"0px"},800);
		$(".our-team-main-right").addClass("nav-1-selected").addClass("ot-movedR");
		$(".our-team-main-left").removeClass("ot-movedL").removeClass("nav-1-selected");
	});
	$(".bgt-movedR").live("click",function(){
		if(bigBangCount==0){
			$(".big-bang-timeline-inner").animate({left:"-1024px"},1000);
			$(".big-bang-timeline-left").addClass("nav-1-selected").addClass("bgt-movedL");
			bigBangCount=bigBangCount+1;
		}else if(bigBangCount==1){
			$(".big-bang-timeline-inner").animate({left:"-2048px"},1000);
			// $(".big-bang-timeline-right").removeClass("bgt-movedR").removeClass("nav-1-selected");
			bigBangCount=bigBangCount+1;
		}else if(bigBangCount==2){
			$(".big-bang-timeline-inner").animate({left:"-3072px"},1000);
			$(".big-bang-timeline-right").removeClass("bgt-movedR").removeClass("nav-1-selected");
			bigBangCount=bigBangCount+1;
		}
	});
	$(".bgt-movedL").live("click",function(){
		if(bigBangCount==3){
			$(".big-bang-timeline-inner").animate({left:"-2048px"},1000);
			$(".big-bang-timeline-right").addClass("nav-1-selected").addClass("bgt-movedR");
			bigBangCount=bigBangCount-1;
		}else if(bigBangCount==2){
			$(".big-bang-timeline-inner").animate({left:"-1024px"},1000);
			// $(".big-bang-timeline-left").removeClass("bgt-movedL").removeClass("nav-1-selected");
			bigBangCount=bigBangCount-1;
		}else if(bigBangCount==1){
			$(".big-bang-timeline-inner").animate({left:"0px"},1000);
			$(".big-bang-timeline-left").removeClass("bgt-movedL").removeClass("nav-1-selected");
			bigBangCount=bigBangCount-1;
		}
	});
	$(".ln-movedR").live("click",function(){
		if(latesetNewCount==0){
			$(".latest-news-ul").animate({left:"-1024px"},1000);
			$(".latest-news-nav-left").addClass("nav-1-selected").addClass("ln-movedL");
			latesetNewCount ++;
		}else if(latesetNewCount==1){
			$(".latest-news-ul").animate({left:"-2048px"},1000);
			// $(".latest-news-nav-right").removeClass("ln-movedR").removeClass("nav-1-selected");
			latesetNewCount ++;
		} else if (latesetNewCount == 2) {
			$(".latest-news-ul").animate({left:"-3072px"},1000);
			$(".latest-news-nav-right").removeClass("ln-movedR").removeClass("nav-1-selected");
			latesetNewCount ++;
		}
	});
	$(".ln-movedL").live("click",function(){
		if(latesetNewCount==3){
			$(".latest-news-ul").animate({left:"-2048px"},1000);
			$(".latest-news-nav-right").addClass("nav-1-selected").addClass("ln-movedR");
			latesetNewCount--;
		}else if(latesetNewCount==2){
			$(".latest-news-ul").animate({left:"-1024px"},1000);
			latesetNewCount--;
		}else if(latesetNewCount==1){
			$(".latest-news-ul").animate({left:"0px"},1000);
			$(".latest-news-nav-left").removeClass("ln-movedL").removeClass("nav-1-selected");
			latesetNewCount--;
		}
	});

	$(".bb-intro-text").bind("mouseover",function(e){
		var _target = $(e.currentTarget);
		_target.parents("li").addClass("selected");
		// $(s1).addClass("big-bang-circle-selected");
		// $(s2).addClass("big-bang-month-p-selected");
		// $(s3).addClass("big-bang-intro-text-selected");
		// $(s4).addClass("big-bang-intro-tra-selected");
	});
	$(".bb-intro-text").bind("mouseout",function(e){
		var _target = $(e.currentTarget);
		_target.parents("li").removeClass("selected");
		// $(s1).removeClass("big-bang-circle-selected");
		// $(s2).removeClass("big-bang-month-p-selected");
		// $(s3).removeClass("big-bang-intro-text-selected");
		// $(s4).removeClass("big-bang-intro-tra-selected");
	});

	/*$(".our-team-ul li").each(function(i){
		var j=i+1;
		//console.log(j);
		var s1=".our-team-li-img"+j;
		var s2=".our-team-li-word"+j;
		$(s1).bind("mouseover",function(){
			$(s1).addClass("our-team-li-ani our-team-li-tra");
			setTimeout(function(){
				$(s2).fadeIn("slow");
				$(s1).fadeOut();
			},500);
			$(s1).on('transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd', function() {
	        	$(s1).removeClass();
	     	 });
		});
		$(s2).bind("mouseout",function(){
			$(s1).removeClass("our-team-li-ani our-team-li-tra");
			$(s2).addClass("our-team-li-ani our-team-li-tra");
			setTimeout(function(){
				//$(s1).fadeIn("slow");
				$(s1).fadeIn("slow");
				$(s2).fadeOut();
				$(s2).removeClass("our-team-li-ani our-team-li-tra");
			},500);
			$(s2).on('transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd', function() {
	        	$(s2).removeClass();
	      	});
		});

	});*/

	$(".gurdline-up").bind("click",function(){
		$("html,body").animate({scrollTop:0},2000);
	});
	$(".gurdline-message").bind("click",function(){
		$("html,body").animate({scrollTop:3357},2000);
	});

	/*for(var i=1;i<5;i++){
		var s1=".latest-news-ul li:nth-child("+i+")";
		var s2=".lnupc"+i;
		var s3=".lnutta"+i;
		var s4=".lnuttx"+i;
		console.log(s1);
		$(s1).bind("mouseover",function(){
			$(s2).addClass("ln-pc");
			$(s4).addClass("latest-news-ul-text-text-selected");
			console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx");
			console.log(s1);
		});
		$(s1).bind("mouseout",function(){
			$(s2).removeClass("ln-pc");
			$(s4).removeClass("latest-news-ul-text-text-selected");
			console.log("11111111111111xxxxxxxxxxxxxxxxxxxxxxxxxxx");
		});
	}*/

	/*$(".our-team-li").bind("mouseover",function(){
		$(".tedst").delay(200).fadeOut();
		console.log("123");
	});
	$(".our-team-li").bind("mouseout",function(){
		$(".tedst").delay(200).fadeIn();
		console.log("12");
	});*/
}

function submitForm(){
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

function getScroll(){
	var top = $(document).scrollTop();
	if(top>2200){
		dataJump();
		clearInterval(kkk);
		agingTimer=setInterval(getNewScroll,200);
	}
}

function getNewScroll(){
	var top = $(document).scrollTop();
	if(top<1600){
		kkk=setInterval(getScroll,100);
		clearInterval(agingTimer);
		asd=0;w1=0;w2=0;w3=0;w4=0;w5=null;
	}
}

var asd=0,w1=0,w2=0,w3=0,w4=0,w5=null,ttt123=null,kkk=null,agingTimer=null;

var detla = (new Date()).valueOf()-startDate.valueOf();
var s1 = Math.round(detla/10000)+53146
		,s2 = Math.round(detla/173.6)+3060998
		,s3 = Math.round(0.552 * detla/10000)+29337
		,s4 = 0.552 * 100;
function dataJump(){
    ttt123=setInterval(dataPlus,100);
}

function dataPlus(){
	w1=w1+5314;
	w2=w2+306091;
	w3=w3+27345;
	w4=w4+5;
	w5=w4+"%";


	$(".data-jump-li-data1").html(w1);
	$(".data-jump-li-data2").html(w2);
	$(".data-jump-li-data3").html(w3);
	$(".data-jump-li-data4").html(w5);
	asd=asd+1;
	if(asd>=10){
		clearInterval(ttt123);
		$(".data-jump-li-data1").html(s1);
		$(".data-jump-li-data2").html(s2);
		$(".data-jump-li-data3").html(s3);
		$(".data-jump-li-data4").html(s4+"%");
	}
}
