/**
 * Created by hx on 2016/9/17.
 */
//site-nav
    $(window).ready(function () {
        //site-nav 部分
        //鼠标放到a 标签 site-nav-left-a上，让对应标签有site-nav-current类名
        $(".site-nav-left-a").mouseenter(function () {
            $(this).addClass("site-nav-current").siblings().removeClass("site-nav-current");
        })
        $(".site-nav-left-a").mouseleave(function () {
            $(this).removeClass("site-nav-current");
        })
        //鼠标放到site-nav-find上，让对应的盒子显示
        $(".site-nav-find").mouseenter(function () {
            $(this).addClass("site-nav-current").children("div").show();
        })
         $(".site-nav-find").mouseleave(function () {
             $(this).removeClass("site-nav-current").children("div").hide();
        })
        $(".site-nav-find span").mouseenter(function () {
            $(this).css("background-color", "rgba(0,0,0,0.5)");
        })
        $(".site-nav-find span").mouseleave(function () {
            $(this).css("background-color", "rgba(0,0,0,0.3");
        })
        $(".site-nav-right a").mouseenter(function () {
            $(this).css("opacity", 1);
        })
        $(".site-nav-right a").mouseleave(function () {
            $(this).css("opacity", 0.7);
        })
        //固定导航栏

        window.onscroll= function () {
            if($(window).scrollTop()>0 ) {
                //$(".site-nav").css({"position":"fixed", "height": 60})
                $(".site-nav").css({"position":"fixed"})
            }else{
                $(".site-nav").css({"position":"absolute"})

            }
        }

        //轮播图部分
        var newLi = $(".jhxscreen ul li:eq(0)").clone();
        $(".jhxscreen ul").append(newLi);
        var timer = setInterval(function () {
        },1000)

        //4.鼠标放到ol的li上切换图片
        var topLiWidth = $(".jhxscreen>ul>li")[0].offsetWidth;
        $(".jhxscreen>ol>li").mouseenter(function () {
            $(this).addClass("topLiCurrent").siblings().removeClass("topLiCurrent").children().stop().css("width",0);
            $(this).children().stop().animate({"width":$(".jhxscreen>ol>li").css("width")}, 2900);
            $(".jhxscreen>ul").animate({"left": -topLiWidth*$(this).index()},500);
            k=squ=$(this).index();
        })
        //5.添加定时器
        var topTimer = null;
        topTimer = setInterval(autoPlay,3000)
        //6.左右切换图片（鼠标放上去隐藏，移开显示）
        var k = 0;
        var squ = 0;
        function autoPlay() {
            k++;
            if(k>$(".jhxscreen>ul>li").length-1){
                k=1;
                $(".jhxscreen>ul").css("left", 0)
            }
            $(".jhxscreen>ul").animate({"left": -topLiWidth*k},500);
            squ++;
            if(squ > $(".jhxscreen>ol>li").length-1){
                squ = 0;
            }
            $(".jhxscreen>ol>li").eq(squ).addClass("topLiCurrent").siblings().removeClass("topLiCurrent").children().stop().css("width",0);
            $(".jhxscreen>ol>li").eq(squ).children().stop().animate({"width":$(".jhxscreen>ol>li").css("width")}, 2900).sop;
        }
        //鼠标放入，箭头显示
        $(".jhxscreen").mouseenter(function () {
            $(".arrow").fadeIn(200);
            clearInterval(topTimer);
        })
        //鼠标移除，箭头隐藏
        $(".jhxscreen").mouseleave(function () {
            $(".arrow").fadeOut(200);
            topTimer = setInterval(autoPlay,3000);
        })
        //鼠标放到箭头上切换图片

        $(".arrow-l").click(function () {
            autoPlay();
        })
        $(".arrow-r").click(function () {
            k--;
            if(k<0) {
                k=$(".jhxscreen>ol>li").length-1;
                $(".jhxscreen>ul").css("left", -topLiWidth*$(".jhxscreen>ol>li").length)
            }
            $(".jhxscreen>ul").animate({"left": -topLiWidth*k},1000);
            squ--;
            if(squ < 0){
                squ = $(".jhxscreen>ol>li").length-1;
            }
            $(".jhxscreen>ol>li").eq(squ).addClass("topLiCurrent").siblings().removeClass("topLiCurrent").children().stop().css("width",0);
            $(".jhxscreen>ol>li").eq(squ).children().animate({"width":$(".jhxscreen>ol>li").css("width")}, 3000);

        })

        /*显示遮罩层和意见栏*/
        $("#tu").click(function () {
            $(".mask").show();
            $(".opinion").show();
        })
        /*隐藏遮罩层和意见栏*/
        $("#guan").click(function () {
            $(".opinion").hide();
            $(".mask").hide();
        })
        /*提交隐藏遮罩层和意见栏*/
        $(".mask button").click(function () {
            $(".opinion").hide();
            $(".mask").hide();
        })



    })