$(function() {
	//兴趣
  var bb;
	$(".xingqu").hover(
		function () {
			clearTimeout(bb);
			$(".xingqubox").show();
			$(".timebox").hide();
			$(".quyubox").hide();
			$(".zijiabox").hide();
			$(".xingqu").addClass("on");
			$(".time").removeClass("on");
			$(".quyu").removeClass("on");
			$(".zijia .sp02").removeClass("on");
		},function () {
			bb = setTimeout(function(){
			$(".xingqubox").hide();
			$(".xingqu").removeClass("on");
			
			},200);
	
  });
	$(".xingqubox").hover(
		function () {
			clearTimeout(bb);
			$(".xingqubox").show();
			$(".xingqu").addClass("on");
		},function () {
			bb = setTimeout(function(){
			$(".xingqubox").hide();
			$(".xingqu").removeClass("on");
			
			},0);
	
  });
	//时间
	var aa;
	$(".time").hover(
		function () {
			clearTimeout(aa);
			$(".timebox").show();
			$(".xingqubox").hide();
			$(".quyubox").hide();
			$(".zijiabox").hide();
			$(".time").addClass("on");
			$(".xingqu").removeClass("on");
			$(".quyu").removeClass("on");
			$(".zijia .sp02").removeClass("on");
			},function () {
				aa = setTimeout(function(){
				$(".timebox").hide();
				$(".time").removeClass("on");
				
				},200);
	
  });
	$(".timebox").hover(
		function () {
			clearTimeout(aa);
			$(".timebox").show();
		$(".time").addClass("on");
		},function () {
			aa = setTimeout(function(){
			$(".timebox").hide();
			$(".time").removeClass("on");
			
			},0);
	
  });
  
  //区域
  	var cc;
	$(".quyu").hover(
		function () {
			clearTimeout(aa);
			$(".quyubox").show();
			$(".xingqubox").hide();
			$(".timebox").hide();
			$(".zijiabox").hide();
			$(".quyu").addClass("on");
			$(".xingqu").removeClass("on");
			$(".time").removeClass("on");
			$(".zijia .sp02").removeClass("on");
		},function () {
			aa = setTimeout(function(){
			$(".quyubox").hide();
			$(".quyu").removeClass("on");
			
			},200);
	
  });
$(".quyubox").hover(
  function () {
	  clearTimeout(aa);
    $(".quyubox").show();
	$(".quyu").addClass("on");
  },function () {
    aa = setTimeout(function(){
		$(".quyubox").hide();
		$(".quyu").removeClass("on");
		
		},0);
	
  });
		//不限
		$(".xuan01").click(function(){
			$(".xuan01").toggleClass("on");
	 });
	 $(".xuan02").click(function(){
			$(".xuan02").toggleClass("on");
	 });
	  $(".xuan03").click(function(){
			$(".xuan03").toggleClass("on");
	 });
	//自驾
	 $(".zijiaxuanze").click(function(){
			$(".zijiaxuanze").toggleClass("on");
			$(this).parent().find(".sp02").addClass("ona");
	 });
	 //
	 var dd
	$(".zijia .sp02").hover(
		function () {
                  if($(".zijiaxuanze").hasClass("on")){
			clearTimeout(aa);
			$(".zijiabox").show();
			$(".quyubox").hide();
			$(".xingqubox").hide();
			$(".timebox").hide();
			$(this).addClass("on");
			$(".quyu").removeClass("on");
			$(".xingqu").removeClass("on");
			$(".time").removeClass("on");
                  }
		},function () {
			aa = setTimeout(function(){
			$(".zijiabox").hide();
			$(this).removeClass("on");
			
			},200);
	
  });
$(".zijiabox").hover(
  function () {
	  clearTimeout(aa);
    $(".zijiabox").show();
	$(".zijia .sp02").addClass("on");
  },function () {
    aa = setTimeout(function(){
		$(".zijiabox").hide();
		$(".zijia .sp02").removeClass("on");
		
		},0);
	
  });	
	//关闭 
	$(".guanbi").live("click", function (){
		$(this).parent().toggle();	
	});	
	//分享	
	 $(".toCode").live("hover", function () {
        $(this).siblings(".code-con").toggle();
    });	
	//页码
	var ee
	$(".yema").hover(
		function () {
			clearTimeout(aa);
                        var p=(Math.ceil(curpage/10)-1)*10-1;
                        $(".pagelist>div>a").hide();
                        if(p>=0) {
                            $(".pagelist>div>a:gt("+p+"):lt(10)").show();
                        }
                        else {
                            $(".pagelist>div>a:lt(10)").show();
                        }
			$(".pagelist").show();
			$(this).addClass("on");
		},function () {
			aa = setTimeout(function(){
			$(".pagelist").hide();
			$(".yema").removeClass("on");
			
			},200);
	
        });
        $(".shangyiye").click(function(){
            var p = $(".pagelist>div>a").not(":hidden").eq(0).index()-11;
            $(".pagelist>div>a").hide();
            if(p>=0){
                $(".pagelist>div>a:gt("+p+"):lt(10)").show();
            }
            else{
                $(".pagelist>div>a:lt(10)").show();
            }
            return false;
        });
        $(".xiayiye").click(function(){
            var p = $(".pagelist>div>a").not(":hidden").eq(0).index()+9;
            if(p<$(".pagelist>div>a").length-1) {
                $(".pagelist>div>a").hide();
                $(".pagelist>div>a:gt("+p+"):lt(10)").show();
            }
            return false;
        });
	$(".pagelist").hover(
		function () {
			clearTimeout(aa);
			$(".pagelist").show();
		$(".yema").addClass("on");
		},function () {
			aa = setTimeout(function(){
			$(".pagelist").hide();
			$(".yema").removeClass("on");
			
			},0);
		
		});
	
	

	//鼠标划过内容上移
	$('.box').live('mouseenter',function(){
		$(this).find('.bgbg').show();
        	$(this).find('.wenzi').stop().animate({'bottom': 0},300);
    	}).live('mouseleave',function(){
		$(this).find('.bgbg').hide();
        	$(this).find('.wenzi').stop().animate({'bottom': -101},500);
        });   

	
	//share 
	$(".lgshare").live("hover", function (){
		$(this).toggleClass("am-modal-active");	
	});	
	
	//检索固定
	var prevTop = 0,
  		currTop = 0,
  		navH = $(".indexesbox").offset().top;
	$(window).scroll(function(){
		currTop = $(window).scrollTop();
		if(currTop>=navH){
			$(".indexesbox").addClass("indexesfixed");
			$(".jstiaojian").hide();
			$(".indexesbar").hide();

			if (currTop < prevTop) { //判断小于则为向上滚动
				$(".jstiaojian").show();
				$(".indexesbar").show();
				//$(".bot-sx-fx").show().addClass("fadeInUp");
			} 
			prevTop = currTop;
		}else {
			$(".indexesbox").removeClass("indexesfixed");
			$(".jstiaojian").show();
			$(".indexesbar").show();
		}
	});
	$("#tuzi").live("hover", function (){
		$(".pcshare1").fadeToggle();	
	});

	// 单选
		$('.quyubox>ul>li label').click(function(){
			var radioId = $(this).attr('name');
			$('.quyubox>ul>li label').removeAttr('class') && $(this).attr('class', 'checked');
			$('.quyubox>ul>li input[type="radio"]"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
		});
		//切换标签
	$('#shengcx a').hover(function () {
			$(this).addClass('on').siblings().removeClass('on');
			$('.taba01').eq($(this).index()).addClass('disblock').siblings('.taba01').removeClass('disblock');
	});
	$('#zhoucx a').hover(function () {
			$(this).addClass('on').siblings().removeClass('on');
			$('.taba02').eq($(this).index()).addClass('disblock').siblings('.taba02').removeClass('disblock');
	});
	//
	
});

//返回顶部
function gotoTop(acceleration,stime) {
   acceleration = acceleration || 0.1;
   stime = stime || 10;
   var x1 = 0;
   var y1 = 0;
   var x2 = 0;
   var y2 = 0;
   var x3 = 0;
   var y3 = 0; 
   if (document.documentElement) {
       x1 = document.documentElement.scrollLeft || 0;
       y1 = document.documentElement.scrollTop || 0;
   }
   if (document.body) {
       x2 = document.body.scrollLeft || 0;
       y2 = document.body.scrollTop || 0;
   }
   var x3 = window.scrollX || 0;
   var y3 = window.scrollY || 0;
 
   // 滚动条到页面顶部的水平距离
   var x = Math.max(x1, Math.max(x2, x3));
   // 滚动条到页面顶部的垂直距离
   var y = Math.max(y1, Math.max(y2, y3));
 
   // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
   var speeding = 1 + acceleration;
   window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));
 
   // 如果距离不为零, 继续调用函数
   if(x > 0 || y > 0) {
       var run = "gotoTop(" + acceleration + ", " + stime + ")";
       window.setTimeout(run, stime);
   }
}