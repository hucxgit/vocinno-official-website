var count=0;
var timer=null;
var timer1=null;
$(document).ready(function(){
	//kkk=setInterval(getScroll,100);
	readerChart();
    $(".head-menu").bind("click",function(){
      
        $(".head-menu-panel").slideDown();

        $(".head-close").show();
   
        //console.log("134444");

    });
    $(".head-close").bind("click",function(){
        
        $(".head-menu-panel").slideUp();
        $(".head-close").hide();

        
        //console.log("134444");

    });
    $(".head-button").bind("click",function(){
        
        alert("Sorry,你还没有注册！");

    });
});





function readerChart() {
    $('#chartContainer1').highcharts({
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
               	{name:'发型', y: 55.5,color:"#8f90db"},
                {name:'帅么美么',y: 22.1,color:"#aca2c5"},
                {name:'美容减肥',y: 10.7,color:"#b3c579"},
                {name:'衣服搭配',y: 6.0,color:"#e7cca8"},
                {name:'其他',y: 5.7,color:"#8fc5d7"}

            ]
        }]
    });



     $('#chartContainer2').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: '数据比例',
                data: [
                    {name:'发型', y: 55.5,color:"#8f90db", sliced: true,
                        selected: true},
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
	if(top>100){	
		//setTimeout(dataJump,1000);
		//console.log(top);
		readerChart(); 
		clearInterval(kkk);

	}
}