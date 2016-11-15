window.onload = function () {
        var img = document.getElementsByTagName("img")[0];
        window.onscroll = function () {
            if(scroll().top>100){
                img.style.display = "block";
            }else{
                img.style.display = "none";
            }
            leader = scroll().top;
        }
        var timer = null;
        var target = 0;
        var leader = 0;
        img.onclick = function () {
            clearInterval(timer);
            timer = setInterval(function () {
                var step = (target-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader +step;
                window.scrollTo(0,leader);
                if(leader === 0){
                    clearInterval(timer);
                }
            },25);
        }
    }
