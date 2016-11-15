/**
 * Created by protein on 2016/9/16.
 */

$(window).ready(function () {
    $(".pic").mouseenter(function () {
        $(this).children("div").fadeIn().show(1000);
    });
    $(".pic").mouseleave(function () {
        $(this).children("div").fadeOut().hide(2000);
    });
    $(".disp").children("a").mouseenter(function () {
        $(this).css({"background-color":"#ff860d","border":"1px solid #ff860d"});
    })
    $(".disp").children("a").mouseleave(function () {
        $(this).css({"background-color":"","border":"1px solid #eee"});
    })

    $(".bannerGo").mouseover(function () {
        //$(this).animate({"backgroundColor":"#ff860d","border":"1px solid #ff860d","opacity":0.6},1000);
        $(this).css({"backgroundColor":"#ff860d","border":"1px solid #ff860d","opacity":0.6});
    });
    $(".bannerGo").mouseout(function () {
        $(this).css({"backgroundColor":"","border":"","opacity":0.75});
    })

    /*手风琴*/
    var arr1 = ["十二星座旅游达人 发现雪兰莪之美 雪兰莪旅游局","藏西秘境 天上阿里 西藏阿里地区旅游局","苗族文化文化 苗族的妹子美美哒"];
    var arr2 = ["蓝的深邃...蓝的让你想入非非","丑小鸭终有一天会变成魅力的天鹅","徒步旅行 享受生活的美好"];
    var oUl = document.getElementsByClassName("scroll");
    var oLi1 = oUl[0].children;
    var oLi2 = oUl[1].children;
    var oListIntro1 = document.getElementsByClassName("listIntro1")[0];
    var oListIntro2 = document.getElementsByClassName("listIntro2")[0];
    var index = 0;
    /*初始化*/
    function fnTab(){
        oListIntro1.innerHTML = arr1[1];
        oListIntro2.innerHTML = arr2[1];
    }
    fnTab();
    for(var i=0;i<oLi1.length;i++){
        oLi1[i].index = i;
        oLi1[i].style.background = "url(images/ly"+(i+11)+".jpg) no-repeat";
        /*排他思想*/
        oLi1[i].onmouseenter = function () {
            for(var j=0;j<oLi1.length;j++){
                animate(oLi1[j],{"width":151});
            }
            animate(this,{"width":295});
            oListIntro1.innerHTML = arr1[this.index];
            $(this).css({"opacity":0.9}).siblings("li").css({"opacity":0.7});
        }
    }
    oUl[0].onmouseleave = function () {
        for(var j=0;j<oLi1.length;j++){
            animate(oLi1[j],{"width":199});
            $(oLi1[j]).css({"opacity":0.9});
        }
        fnTab();
    }
    for(var i=0;i<oLi2.length;i++){
        oLi2[i].index = i;
        oLi2[i].style.background = "url(images/ly"+(i+44)+".jpg) no-repeat";
        oLi2[i].onmouseenter = function () {
            /*利用排他思想*/
            for(var j=0;j<oLi2.length;j++){
                animate(oLi2[j],{"width":151});
            }
            animate(this,{"width":295});
            oListIntro2.innerHTML = arr2[this.index];
            $(this).css({"opacity":0.9}).siblings("li").css({"opacity":0.6});
        }
    }
    oUl[1].onmouseleave = function () {
        for(var j=0;j<oLi2.length;j++){
            animate(oLi2[j],{"width":199});
            $(oLi2[j]).css({"opacity":0.9});
        }
        fnTab();
    }

    /*返回顶部小火箭*/
    var oSword = document.getElementById("sword");
    window.onscroll = function () {
        if(scroll().top>400){
            oSword.style.display = "block";
        }else{
            oSword.style.display = "none";
        }
        leaderly = scroll().top;
    }
    var timer = null;
    var target = 0;
    var leaderly = 0;
    oSword.onclick = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            var speedly = (target-leaderly)/10;
            speedly = speedly>0?Math.ceil(speedly):Math.floor(speedly);
            leaderly = leaderly + speedly;
            window.scrollTo(0,leaderly);
            if(leaderly === 0){
                clearInterval(timer);
            }
        },33);
    }

    function scroll() {
        if (window.pageYOffset !== undefined) {
            return {
                "top": window.pageYOffset,
                "left": window.pageXOffset
            };
        } else if (document.compatMode === "CSS1Compat") {
            return {
                "top": document.documentElement.scrollTop,
                "left": document.documentElement.scrollLeft
            };
        } else {
            return {
                "top": document.body.scrollTop,
                "left": document.body.scrollLeft
            };
        }
    }

    /*定时器的无缝轮播*/
    var oInsContent = document.getElementsByClassName("insContent")[0];
    var moveWidth = oInsContent.offsetWidth; /*移动的宽度*/
    var oInsCon = oInsContent.children[0];
    var oInsLi = oInsCon.children;
    var oInsArr = oInsContent.children[1];
    var oSpan = oInsArr.children; /*左右移动*/
    //1.复制前4个li,添加到ul的最后面。
    for(var i=0;i<4;i++){
        var oInsNewUl = oInsCon.children[i].cloneNode(true);  /*所有的内容*/
        oInsCon.appendChild(oInsNewUl);
    }
    ////2.添加定时器
    var timer = setInterval(autoPlay,800);
    var key1 = 0;
    var key2 = 0;
    function autoPlay(){
        key1++;
        if(key1>oInsCon.children.length-4){
            oInsCon.style.left = 0;
            key1 = 1;
        }
        animate1(oInsCon,-moveWidth/4*key1);
    }
    oInsContent.onmouseover = function () {
        key1 = 4*key2
        oInsArr.style.display = "block";
        clearInterval(timer);
    }
    oInsContent.onmouseout = function () {
        key1 = 4*key2;
        oInsArr.style.display = "none";
        timer = setInterval(autoPlay,800);
    }

    $(".insContent").children("ul").children("li").mouseenter(function () {
        $(this).children(".insMask").stop().slideDown(1000).parent("li").siblings("li").children(".insMask").stop().slideUp(1000);
    });
    $(".insContent").children("ul").children("li").mouseleave(function () {
        $(this).children(".insMask").stop().fadeOut(1000);
    });

    ////3.左右切换图片（鼠标放上去显示，移开隐藏）
    oSpan[1].onclick = function () {
        key2++;
        if(key2>(oInsCon.children.length/4)-1){
            oInsCon.style.left = 0;
            key2 = 1;
        }
        animate1(oInsCon,-moveWidth*key2);
    }
    oSpan[0].onclick = function () {
        key2--;
        if(key2<0){
            oInsCon.style.left = -moveWidth*((oInsCon.children.length/4)-1)+"px";
            key2 = ((oInsCon.children.length)/4)-2;
        }
        animate1(oInsCon,-moveWidth*key2);
    }

    function animate1(ele,target){
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var speed = target>ele.offsetLeft?10:-10;
            var nav = target - ele.offsetLeft;
            ele.style.left = ele.offsetLeft + speed + "px";
            if(Math.abs(nav)<=Math.abs(speed)){
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        },10);
    }

    /*缓动框架*/
    function animate(ele,json1,fn){
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var bool = true;
            for(k in json1){
                /*获取当前位置对应的属性值，如果有内容parseInt将px去掉,否则取0*/
                var current = parseInt(getStyle(ele,k)) || 0;
                var step = (json1[k]-current)/10;
                step = step>0?Math.ceil(step):Math.floor(step);/*步长*/
                current = current + step;
                ele.style[k] = current + "px";
                /*判断：如果目标位置-当前位置>步长 则不能清除定时器*/
                if(json1[k] !== current){
                    bool = false;
                }
            }
            /*只有所有的属性都实现才清除定时器,此时bool才会变为true*/
            if(bool === true){
                clearInterval(ele.timer);
                if(fn){
                    fn();
                }
            }
        },1);
    }
    function getStyle(ele,attr){
        if(window.getComputedStyle){
            return window.getComputedStyle(ele,null)[attr];
        }
        return ele.currentStyle[attr];
    }
})