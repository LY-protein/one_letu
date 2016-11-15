/**
 * Created by Administrator on 2016/9/18.
 */
window.onload=function() {
    var div1 = document.getElementsByClassName("qzq-inp")[0];
    var input = div1.getElementsByTagName("input")[0];
    var mdd = div1.getElementsByClassName("qzq-mdd")[0];
    var imggb = div1.getElementsByClassName("qzq-gb")[0];
    var val = input.value
    input.onfocus = function () {
        this.value = "";
        mdd.style.display = "block";
        mdd.style.zIndex = 3;
    };

    imggb.onclick = function () {
        mdd.style.display = "none";
    }

    input.onblur = function () {
        this.value = val;
        mdd.style.display = "none";

    }
}
//    var left = document.getElementsByClassName("qzq-left")[0];
//    var right = document.getElementsByClassName("qzq-right")[0];
//    var lbtt = document.getElementsByClassName("qzq-lbt")[0]
//    var lbt = document.getElementsByClassName("qzq-lbt-1")[0];
//    var ulArr = lbt.children[0].children;
//    var liWidth = ulArr[0].offsetWidth + 6;
//    var an = document.getElementsByClassName("qzq-an")[0];
//    var timer = null;
//    var key = 0;
//    lbtt.onmouseenter = function () {
//        an.style.display = "block";
//
//
//    }
//    lbtt.onmouseleave = function () {
//        an.style.display = "none";
//
//    }
//    var newLi=ulArr[0].cloneNode(true);
//    ulArr.appendChild(newLi);
//
//    left.onmouseenter = function () {
//        timer = setInterval(autoPlay, 1000);
//        function autoPlay() {
//            key++;
//            if (key > 7) {
//                clearInterval(timer);
//                key = 7;
//            }
//            animate(lbt, -key * liWidth);
//        }
//    }
//    left.onmouseleave = function () {
//        clearInterval(timer);
//    }
//
//    right.onmouseenter = function () {
//        timer = setInterval(autoPlay, 1000);
//        function autoPlay() {
//            key++;
//            if (key > 7) {
//                clearInterval(timer);
//                key = 7;
//            }
//            animate(lbt, key * liWidth);
//        }
//    }
//    right.onmouseleave = function () {
//        clearInterval(timer);
//    }
//
//
//    function animate(ele, target) {
//        clearInterval(ele.timer);
//        var speed = ele.offsetLeft < target ? 10 : -10;
//        ele.timer = setInterval(function () {
//            var val = target - ele.offsetLeft;
//            ele.style.left = ele.offsetLeft + speed + "px";
//            if (Math.abs(val) <= Math.abs(speed)) {
//                ele.style.left = target + "px";
//                clearInterval(ele.timer);
//
//            }
//        }, 10)
//    }
//}