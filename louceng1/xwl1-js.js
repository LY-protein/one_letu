/**
 * Created by IceWolf on 2016/9/18.
 */
window.onload= function () {
    //楼层跳跃
    var ul=document.getElementsByClassName("tzdtt-ul")[0];
    var uliArr=ul.children;//图片组
    var Height=ul.offsetHeight;
    //动态图片
    var picArr=document.getElementsByClassName("picteam0")[0];
    var picArr1=document.getElementsByClassName("picteam1")[0];
    var picArr2=document.getElementsByClassName("picteam2")[0];
    var picArr3=document.getElementsByClassName("picteam3")[0];
    var picArr4=document.getElementsByClassName("picteam4")[0];
    var titleArr=document.getElementsByClassName("titlexwl");
    var bgImg=document.getElementsByClassName("tzdtt-bg")[0]
    var oliA=document.getElementsByClassName("oli-a")[0];
    //oliA.onmouseenter= function () {
    //    this.children[1].style.display="block";
    //    this.children[1].style.backgroundColor="";
    //    this.children[1].children[0].style.backgroundColor="#ec6909";
    //    this.children[1].children[1].style.backgroundColor="#ec6909";
    //    this.children[1].children[2].style.backgroundColor="#ec6909";
    //    this.children[1].children[3].style.backgroundColor="#ec6909";
    //    this.children[1].children[0].innerHTML='发现';
    //    //this.style.backgroundColor="orange";
    //}
    window.onscroll= function () {
        if(scroll().top<60||scroll().top>3560){
            bgImg.children[0].className="";
        }else{
            bgImg.children[0].className="fixed";
        }
    }
    uliArr[0].onmouseenter= function () {
        $(picArr.children[0]).stop().show(1000);
        $(picArr.children[1]).stop().show(1000);
        $(titleArr[0]).stop().show(1000);
    }
    uliArr[0].onmouseleave= function () {
        $(picArr.children[0]).stop().hide(1000);
        $(picArr.children[1]).stop().hide(1000);
        $(titleArr[0]).stop().hide(1000);
    }
    uliArr[1].onmouseenter= function () {
        $(picArr1.children[0]).stop().animate({"left":80},1000);
        $(picArr1.children[1]).stop().animate({"right":80},1000);
        $(titleArr[1]).stop().show(1000);
    }
    uliArr[1].onmouseleave= function () {
        $(picArr1.children[0]).stop().animate({"left":-500},1000);
        $(picArr1.children[1]).stop().animate({"right":-500},1000);
        $(titleArr[1]).stop().hide(1000);
    }
    uliArr[2].onmouseenter= function () {
        $(picArr2.children[0]).stop().animate({"top":0},1000);
        $(picArr2.children[1]).stop().animate({"top":0},1000);
        $(titleArr[2]).stop().show(1000);
    }
    uliArr[2].onmouseleave= function () {
        $(picArr2.children[0]).stop().animate({"top":-520},1000);
        $(picArr2.children[1]).stop().animate({"top":-520},1000);
        $(titleArr[2]).stop().hide(1000);
    }
    uliArr[3].onmouseenter= function () {
        $(picArr3.children[0]).stop().animate({"bottom":100},1000);
        $(picArr3.children[1]).stop().animate({"bottom":100},1000);
        $(titleArr[3]).stop().show(1000);
    }
    uliArr[3].onmouseleave= function () {
        $(picArr3.children[0]).stop().animate({"bottom":-520},1000);
        $(picArr3.children[1]).stop().animate({"bottom":-520},1000);
        $(titleArr[3]).stop().hide(1000);
    }
    uliArr[4].onmouseenter= function () {
        $(picArr4.children[0]).animate({"bottom":100,"left":80},1000);
        $(picArr4.children[1]).animate({"bottom":100,"right":80},1000);
        $(titleArr[4]).show(1000);
    }
    uliArr[4].onmouseleave= function () {
        $(picArr4.children[0]).stop().animate({"bottom":-520,"left":-500},1000);
        $(picArr4.children[1]).stop().animate({"bottom":-520,"right":-500},1000);
        $(titleArr[4]).stop().hide(1000);
    }
    function scroll() {
        return {
            "top": window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
            "left": window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
        }
    }
    function animateXwl(ele,json,fn){
        clearInterval(ele.timer);
        ele.timer=setInterval(function () {
            var bool=true;
            var leader;
            for(var k in json){
                if(k==="opacity"){
                    leader=getStyle(ele,k)*100||100;
                }else{
                    leader=parseInt(getStyle(ele,k))||0;
                }
                var step=(json[k]-leader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                leader+=step;
                if(k==="opacity"){
                    ele.style[k]=leader/100;
                    ele.style.filter="alpha(opacity="+leader+")";
                }else if(k==="zIndex"){
                    ele.style[k]=json[k];
                }else{
                    ele.style[k]=leader+"px";
                }
                if(Math.abs(json[k]-leader)>Math.abs(step)){
                    bool=false;
                }
            }
            if(bool){
                for(var k in json){
                    if(k==="opacity"){
                        ele.style[k]=json[k]/100;
                    }else if(k==="zIndex"){
                        ele.style[k]=json[k];
                    }else{
                        ele.style[k]=json[k]+"px";
                    }
                }
                clearInterval(ele.timer);
                if(fn){
                    fn();
                }
            }
        },25)
    }
}