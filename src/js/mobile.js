
var count=0;
var timer=null;
var timer1=null;
var bigBangCount=0;
function startCarousel(){
	/*var classSet=["carousel-one","carousel-two"];
	var num=count%2;
	var select=classSet[num];*/
	//$(".head-carousel-wrap-inner").toggleClass("carousel-one");
	var num=count%2;
	if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8."){
		if(num==0){
			$(".head-bg2").fadeIn(100);
			$(".head-one-mobile").hide();
			$(".head-two-computer").show();
			$(".head-one-text").hide();
			$(".head-two-text").show();
			$(".head-carousel-one").removeClass("head-carousel-selected");
			$(".head-carousel-two").addClass("head-carousel-selected");
		}else if(num==1){
			$(".head-bg2").fadeOut(100);
			$(".head-one-mobile").show();
			$(".head-two-computer").hide();
			$(".head-one-text").show();
			$(".head-two-text").hide();
			$(".head-carousel-two").removeClass("head-carousel-selected");
			$(".head-carousel-one").addClass("head-carousel-selected");
		}
	} else{
			if(num==0){
			$(".head-bg2").fadeIn(500);
			$(".head-one-mobile").fadeOut(500);
			$(".head-two-computer").fadeIn(500);
			$(".head-one-text").fadeOut(1500);
			$(".head-two-text").fadeIn(1500);
			$(".head-carousel-one").removeClass("head-carousel-selected");
			$(".head-carousel-two").addClass("head-carousel-selected");
		}else if(num==1){
			$(".head-bg2").fadeOut(500);
			$(".head-one-mobile").fadeIn(500);
			$(".head-two-computer").fadeOut(500);
			$(".head-one-text").fadeIn(1500);
			$(".head-two-text").fadeOut(600);
			$(".head-carousel-two").removeClass("head-carousel-selected");
			$(".head-carousel-one").addClass("head-carousel-selected");
		}}

	count=count+1;

}

function initListener(){
	/*$(".head-one-wrap").bind("mouseover",function(){
		clearInterval(timer);
	});
	$(".head-one-wrap").bind("mouseout",function(){
		setInterval(startCarousel,6000);
	});
	$(".head-two-wrap").bind("mouseover",function(){
		clearInterval(timer);
	});
	$(".head-two-wrap").bind("mouseout",function(){
		setInterval(startCarousel,6000);
	});*/
	$(".head-carousel-two").bind("click",function(){
		$(".head-bg2").fadeIn(500);
		$(".head-one-mobile").hide();
		$(".head-two-computer").show();
		$(".head-one-text").hide();
		$(".head-two-text").show();
		$(".head-carousel-one").removeClass("head-carousel-selected");
		$(".head-carousel-two").addClass("head-carousel-selected");
		//console.log("teo1");
		clearInterval(timer);
		clearTimeout(timer1);
		timer1=setTimeout(turnOn,0);
	});
	$(".head-carousel-one").bind("click",function(){
		$(".head-bg2").fadeOut(500);
		$(".head-one-mobile").show();
		$(".head-two-computer").hide();
		$(".head-one-text").show();
		$(".head-two-text").hide();
		$(".head-carousel-two").removeClass("head-carousel-selected");
		$(".head-carousel-one").addClass("head-carousel-selected");
		//console.log("teo2");
		clearInterval(timer);
		clearTimeout(timer1);
		timer1=setTimeout(turnOn,0);
	});
	$(".ot-movedR").live("click",function(){

		$(".our-team-ul").animate({left:"-930px"},1000);
		$(".our-team-main-left").addClass("nav-1-selected").addClass("ot-movedL");
		$(".our-team-main-right").removeClass("ot-movedR").removeClass("nav-1-selected");
		//console.log("right12334454");
	});
	$(".ot-movedL").live("click",function(){
		$(".our-team-ul").animate({left:"0px"},1000);
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
			$(".big-bang-timeline-right").removeClass("bgt-movedR").removeClass("nav-1-selected");
			bigBangCount=bigBangCount+1;
		}
	});
	$(".bgt-movedL").live("click",function(){
		if(bigBangCount==2){
			$(".big-bang-timeline-inner").animate({left:"-1024px"},1000);
			$(".big-bang-timeline-right").addClass("nav-1-selected").addClass("bgt-movedR");
			bigBangCount=bigBangCount-1;
		}else if(bigBangCount==1){
			$(".big-bang-timeline-inner").animate({left:"0px"},1000);
			$(".big-bang-timeline-left").removeClass("bgt-movedL").removeClass("nav-1-selected");
			bigBangCount=bigBangCount-1;
		}
	});
	$(".ln-movedR").live("click",function(){

		$(".latest-news-ul").animate({left:"-1024px"},1000);
		$(".latest-news-nav-left").addClass("nav-1-selected").addClass("ln-movedL");
		$(".latest-news-nav-right").removeClass("ln-movedR").removeClass("nav-1-selected");
		//console.log("right12334454");
	});
	$(".ln-movedL").live("click",function(){
		$(".latest-news-ul").animate({left:"0px"},1000);
		$(".latest-news-nav-right").addClass("nav-1-selected").addClass("ln-movedR");
		$(".latest-news-nav-left").removeClass("ln-movedL").removeClass("nav-1-selected");
	});
	$(".latest-news-ul li").each(function(i){
		var j=i+1;
		//console.log(j);
		var s2=".lnupc"+j;
		var s3=".lnutta"+j;
		var s4=".lnuttx"+j;
		var s5=".lnuttx"+j+" p:first-child";
		if(j%2==1){
			$(this).bind("mouseover",function(){
				$(s2).addClass("ln-pc");
				$(s3).addClass("latest-news-ul-text-tra-selected");
				$(s4).addClass("latest-news-ul-text-text-selected ln-bg");
				$(s5).removeClass("p-selected");
				//console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx");
			});
			$(this).bind("mouseout",function(){
				$(s2).removeClass("ln-pc");
				$(s3).removeClass("latest-news-ul-text-tra-selected");
				$(s4).removeClass("latest-news-ul-text-text-selected ln-bg");
				$(s5).addClass("p-selected");
				//console.log("11111111111111xxxxxxxxxxxxxxxxxxxxxxxxxxx");
			});
		}else{
			$(this).bind("mouseover",function(){
				$(s2).addClass("ln-pc");
				$(s3).addClass("latest-news-ul-text-tra1-selected");
				$(s4).addClass("latest-news-ul-text-text1-selected ln-bg");
				$(s5).removeClass("p-selected");
				//console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx");
			});
			$(this).bind("mouseout",function(){
				$(s2).removeClass("ln-pc");
				$(s3).removeClass("latest-news-ul-text-tra1-selected");
				$(s4).removeClass("latest-news-ul-text-text1-selected ln-bg");
				$(s5).addClass("p-selected");
				//console.log("11111111111111xxxxxxxxxxxxxxxxxxxxxxxxxxx");
			});
		}

	});
	$(".introduce-of-month li").each(function(i){
		var j=i+1;
		//console.log(j);
		var s1=".bbc"+j;
		var s2=".bamp"+j;
		var s3=".bbit"+j;
		var s4=".bbita"+j;
		if(j%2==1){
			$(s3).bind("mouseover",function(){
				$(s1).addClass("big-bang-circle-selected");
				$(s2).addClass("big-bang-month-p-selected");
				$(s3).addClass("big-bang-intro-text-selected");
				$(s4).addClass("big-bang-intro-tra-selected");
			});
			$(s3).bind("mouseout",function(){
				$(s1).removeClass("big-bang-circle-selected");
				$(s2).removeClass("big-bang-month-p-selected");
				$(s3).removeClass("big-bang-intro-text-selected");
				$(s4).removeClass("big-bang-intro-tra-selected");
			});
		}else{
			$(s3).bind("mouseover",function(){
				$(s1).addClass("big-bang-circle-selected");
				$(s2).addClass("big-bang-month-p-selected");
				$(s3).addClass("big-bang-intro-text-selected");
				$(s4).addClass("big-bang-intro-tra1-selected");
			});
			$(s3).bind("mouseout",function(){
				$(s1).removeClass("big-bang-circle-selected");
				$(s2).removeClass("big-bang-month-p-selected");
				$(s3).removeClass("big-bang-intro-text-selected");
				$(s4).removeClass("big-bang-intro-tra1-selected");
			});
		}

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
function turnOn(){
	timer=setInterval(startCarousel,4000);
	//console.log("teo3");
}

function testIE(){
	/*//alert(navigator.appName );
	if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/6./i)=="6."){
	alert("IE 6");
	}
	else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i)=="7."){
	alert("IE 7");
	}
	else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8."){
	alert("IE 8");
	}
	else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i)=="9."){
	alert("IE 9");
	} */
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
$(document).ready(function(){
	testIE();
	turnOn();
	initListener();
	saveForm();


	kkk=setInterval(getScroll,100);


});
function getScroll(){
	var top = $(document).scrollTop();
	console.log("getScroll");
	if(top>2200){
		//setTimeout(dataJump,1000);
		//console.log(top);
		dataJump();
		clearInterval(kkk);
		agingTimer=setInterval(getNewScroll,200);

	}
}
function getNewScroll(){
	var top = $(document).scrollTop();
	//console.log("nihao");
	if(top<1600){
		//setTimeout(dataJump,1000);
		//console.log(top);
		kkk=setInterval(getScroll,100);
		clearInterval(agingTimer);
		asd=0;w1=0;w2=0;w3=0;w4=0;w5=null;
		console.log("1234eweg");

	}
}
var asd=0,w1=0,w2=0,w3=0,w4=0,w5=null,ttt123=null,kkk=null,agingTimer=null;

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
		$(".data-jump-li-data1").html("53146");
		$(".data-jump-li-data2").html("3060998");
		$(".data-jump-li-data3").html("29337");
		$(".data-jump-li-data4").html("55.2%");
		//console.log(asd);
		//var a=$(".data-jump-wrap").offset();

		//console.log(top);
	}
}
