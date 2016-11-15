/**
 * Created by Administrator on 2016/9/18.
 */
window.onload = function () {

    var ul = document.getElementsByClassName("inspire-btn")[0].children[0];
    var liArr = ul.children;
    var arrow = document.getElementsByClassName("arrow1")[0];
    var aArr = arrow.getElementsByTagName("a");
    var timer1 = null;
    var target = 0;
    var leader = 0;
    for (var i = 0; i < liArr.length; i++) {
        aArr[i].index = i;
        aArr[i].onclick = function () {
            for (var j = 0; j < aArr.length; j++) {
                aArr[j].className = "";
            }
            this.className = "current";
            target = liArr[this.index].offsetTop;
            clearInterval(timer1);
            timer1 = setInterval(function () {
                //获取步长
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //赋值
                leader = leader + step;
                window.scrollTo(0, leader);
                if (Math.abs(target - leader) <= 1) {
                    clearInterval(timer1);
                    window.scrollTo(0, target);
                }
            }, 25);
        }
    }

    var img = document.getElementsByClassName("img-l")[0];
    img.onclick = function () {
        window.scrollTo(0,0);
    }

    window.onscroll = function () {
        leader = scroll().top;
        for (var j = 0; j < aArr.length; j++) {
            aArr[j].className = "";
        }
        var s = leader / liArr[0].offsetHeight;
        if (s < 1) {
            s = 0;
        }
        var k = Math.ceil(s);
        if (k > 4) {
            k = 4;
        }
        aArr[k].className = "current";
        var arrow2 = document.getElementsByClassName("arrow1")[0];
        if(scroll().top < 5000) {
            arrow2.className += " arrow";
        }else {
            arrow2.className = "arrow1";
        }
    }
    function scroll() {
        return {
            "top": window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
            "left": window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
        }
    }

    addEvent("inp1", function () {
        var p = document.getElementById("sh-p");
        var reg = /^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/;
        if(reg.test(this.value)) {
            p.innerHTML = "";
//                     p.className += " right";
        }else {
            p.className += " wrong";
            p.innerHTML = "输入格式有误，请重新输入！";
        }
    });

    addEvent("inp2", function () {
        var p = document.getElementById("sh-p");
        var reg = /^[\w-]{3,16}$/;
        if(reg.test(this.value)) {
            p.innerHTML = "";
//                     p.className += " right";
        }else {
            p.className += " wrong";
            p.innerHTML = "输入格式有误，请重新输入！";
        }
    });
    addEvent("inp3", function () {
        var p = document.getElementById("sh-p");
        var reg = /^[a-zA-Z0-9_-]{6,18}/;
        if(reg.test(this.value)) {
            p.innerHTML = "";
//                     p.className += " right";
        }else {
            p.className += " wrong";
            p.innerHTML = "输入格式有误，请重新输入！";
        }
    });
    function addEvent(str,fn) {
        document.getElementById(str).onblur = fn;
    }

    var box = document.getElementsByClassName("footer-top-r")[0];
    var span = box.children[0];
    var ul2 = box.children[1];
    var liArr2 = ul2.children;
    var liWidth = liArr2[0].offsetWidth;
    var count = 0;
    for(var i = 0; i < liArr2.length; i++) {
        liArr2[i].index = i;
        liArr2[i].onmouseover = function () {
            animate(span,this.index * liWidth);
        }
        liArr2[i].onmouseout = function () {
            animate(span,count * liWidth);
        }
        liArr2[i].onclick = function () {
            count = this.index;
//                    animate(span,count * liWidth);
        }
    }
    function animate(ele,target) {
        clearInterval(ele.timer);
        ele.timer = setInterval(function() {
            var step = (target - ele.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            ele.style.left = ele.offsetLeft + step + "px";
            if(Math.abs(target - ele.offsetLeft) < Math.abs(step)) {
                ele.offsetLeft = target + "px";
                clearInterval(ele.timer);
            }
        },30);
    }
}


