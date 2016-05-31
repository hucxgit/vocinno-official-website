var count=0;
var timer=null;
var timer1=null;
$(document).ready(function(){
	$("#myCarousel").carousel('cycle');
	$("#headCarousel").carousel('cycle');
	//timer=setInterval(turnDisplay,4000);
	initLisrtener();
	kkk=setInterval(getScroll,100);
});

function turnDisplay(){
	var index1=count%2;
	var index2=(count+1)%2;
	var i=index1+1;
	var j=index2+1;
	var selected1=".page-display-li"+i;
	var selected2=".page-display-li"+j;
	var control1=".pd-control"+i;
	var control2=".pd-control"+j;

	$(selected1).fadeOut(1000);
	$(selected2).fadeIn(1000);
	$(control1).removeClass("pd-control-selected");
	$(control2).addClass("pd-control-selected");
	count=count+1;
}

function initLisrtener(){
	// $(".page-display-ul").bind("mouseover",function(){
	// 	clearInterval(timer);
	// });
	// $(".page-display-ul").bind("mouseout",function(){
	// 	timer=setInterval(turnDisplay,4000);
	// });
	// $(".pd-control1").bind("click",function(){
	// 	clearInterval(timer);
	// 	clearTimeout(timer1);
	// 	timer1=setTimeout(rebegain,6000);
	// 	count=0;
		
	// 	$(".pd-control").removeClass("pd-control-selected");
	// 	$(this).addClass("pd-control-selected");
	// 	$(".page-display-li").css("display","none");
	// 	$(".page-display-li1").fadeIn(1000);
	// });
	// $(".pd-control2").bind("click",function(){
	// 	clearInterval(timer);
	// 	clearTimeout(timer1);
	// 	timer1=setTimeout(rebegain,6000);
	// 	count=1;
	// 	$(".pd-control").removeClass("pd-control-selected");
	// 	$(this).addClass("pd-control-selected");
	// 	$(".page-display-li").css("display","none");
	// 	$(".page-display-li2").fadeIn(1000);
	// });
	// $(".pd-control3").bind("click",function(){
	// 	clearInterval(timer);
	// 	count=2;
	// 	clearTimeout(timer1);
	// 	timer1=setTimeout(rebegain,6000);
	// 	$(".pd-control").removeClass("pd-control-selected");
	// 	$(this).addClass("pd-control-selected");
	// 	$(".page-display-li").css("display","none");
	// 	$(".page-display-li3").fadeIn(1000);
	// });
	// $(".pd-control4").bind("click",function(){
	// 	clearInterval(timer);
	// 	count=3;
	// 	clearTimeout(timer1);
	// 	timer1=setTimeout(rebegain,6000);
	// 	$(".pd-control").removeClass("pd-control-selected");
	// 	$(this).addClass("pd-control-selected");
	// 	$(".page-display-li").css("display","none");
	// 	$(".page-display-li4").fadeIn(1000);
	// });
	$(".cc-left").bind("mouseover",function(){
		$(".cc-left img").attr("src","img/survey/left_hover.png");
	});
	$(".cc-left").bind("mouseout",function(){
		$(".cc-left img").attr("src","img/survey/left.png");
	});
	$(".cc-right").bind("mouseover",function(){
		$(".cc-right img").attr("src","img/survey/right_hover.png");
	});
	$(".cc-right").bind("mouseout",function(){
		$(".cc-right img").attr("src","img/survey/right.png");
	});
	$(".pd-control1").bind("click",function(){
		$(".page-display-li2").fadeOut(500);
		$(".page-display-li3").fadeOut(500);
		$(".page-display-li1").fadeIn(500);
		$(".pd-control").removeClass("pd-control-selected");
		$(this).addClass("pd-control-selected");
	});
	$(".pd-control2").bind("click",function(){
		$(".page-display-li1").fadeOut(500);
		$(".page-display-li3").fadeOut(500);
		$(".page-display-li2").fadeIn(500);
		$(".pd-control").removeClass("pd-control-selected");
		$(this).addClass("pd-control-selected");
	});
	$(".pd-control3").bind("click",function(){
		$(".page-display-li1").fadeOut(500);
		$(".page-display-li2").fadeOut(500);
		$(".page-display-li3").fadeIn(500);
		$(".pd-control").removeClass("pd-control-selected");
		$(this).addClass("pd-control-selected");
	});

	$(".gurdline-up").bind("click",function(){
		$("html,body").animate({scrollTop:0},2000);
	});
	$(".gurdline-message").bind("click",function(){
		$("html,body").animate({scrollTop:3357},2000);
	});

	$(".head-input1").bind("focus",function(){
		if($(this).val()=="请输入邮箱"){
			$(this).val("");
		}
	});
	$(".head-input1").bind("focusout",function(){
		if($(this).val()==""){
			$(this).val("请输入邮箱");
		}
	});
	$(".head-input2").bind("focus",function(){
		if($(this).val()=="请输入密码"){
			$(this).val("");
		}
	});
	$(".head-input2").bind("focusout",function(){
		if($(this).val()==""){
			$(this).val("请输入密码");
		}
	});
	$(".head-buttonA").bind("click",function(){
		alert("Sorry,你还没有注册！");
	});

}
function rebegain(){
	timer=setInterval(turnDisplay,4000);
}




function readerChart() {
    $('#chartContainer').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
     	title:{
     		text:''
     	},
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '{point.name}: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '数据比例',
            data: [
               	{name:'发型',url:'<img src="img/survey/right_hover.png">',  y: 55.5,color:"#8f90db"},
                {name:'帅么美么',y: 22.1,color:"#aca2c5"},
                {name:'美容减肥',y: 10.7,color:"#b3c579"},
                {name:'衣服搭配',y: 6.0,color:"#e7cca8"},
                {name:'其他',y: 5.7,color:"#8fc5d7"}

            ]
        }]
    });
}				
var kkk=null;
function getScroll(){
	var top = $(document).scrollTop();
	//console.log("getScroll");
	if(top>900){	
		//setTimeout(dataJump,1000);
		//console.log(top);
		readerChart(); 
		clearInterval(kkk);

	}
}