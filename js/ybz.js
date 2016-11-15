/**
 * Created by Administrator on 2016-09-16.
 */
$(function () {
    $(".imgborli").mouseenter(function () {
        $(this).children("img").stop().animate({"width":300,"marignLeft":-10});
        $(this).stop().animate({"borderTopRightRadius":100,"borderTopLeftRadius":100,"borderBottomRightRadius":100})
    })
    $("#imgborli1").mouseenter(function () {
        $(this).children("img").stop().animate({"width":300,"marignLeft":-10});
        $(this).stop().animate({"borderTopRightRadius":5,"borderTopLeftRadius":5,"borderBottomRightRadius":5})
    })
    $("#imgborli2").mouseenter(function () {
        $(this).children("img").stop().animate({"width":300,"marignLeft":-10});
        $(this).stop().animate({"borderTopRightRadius":5,"borderTopLeftRadius":5,"borderBottomRightRadius":5})
    })
    $(".imgborli").mouseleave(function () {
        $(this).children("img").stop().animate({"width":290,"marignLeft":0});
        $(this).stop().animate({"borderTopRightRadius":5,"borderTopLeftRadius":5,"borderBottomRightRadius":5,"borderBottomLeftRadius":5})
    })
    $("#imgborli2").mouseleave(function () {
        $(this).children("img").stop().animate({"width":290,"marignLeft":0});
        $(this).stop().animate({"borderTopRightRadius":100,"borderTopLeftRadius":100,"borderBottomRightRadius":100,"borderBottomLeftRadius":5})
    })
    $("#imgborli1").mouseleave(function () {
        $(this).children("img").stop().animate({"width":290,"marignLeft":0});
        $(this).stop().animate({"borderTopRightRadius":100,"borderTopLeftRadius":100,"borderBottomRightRadius":100,"borderBottomLeftRadius":5})
    })
})

function ybzs(a,b){
    a.on("mouseenter mouseleave", function (e) {
        var w = $(this).width();
        var h = $(this).height();
        var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
        var dirNum = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        /*
         dirNum:0,1,2,3 ---> t r b l
         以上代码是网友分享
         以下代码是模仿拉勾网首页的一个小效果做的
         */
        var eventType = e.type;
        var aPos = [{left: 0, top: -300}, {left: 303, top: 0}, {left: 0, top: 300}, {left: -303, top: 0}];
        if (eventType == 'mouseenter') {
            $(this).children(b).css(aPos[dirNum]).stop(true, true).animate({left: 0, top: 0}, 300);
        } else {
            $(this).children(b).stop(true, true).animate(aPos[dirNum], 300);
        }
    });
}