function toDoSomething(t, l, id, async) {
    var ref = '';  
    if (document.referrer.length > 0) {  
     ref = document.referrer;  
    }  
    try {  
     if (ref.length == 0 && opener.location.href.length > 0) {  
      ref = opener.location.href;  
     }  
    } catch (e) {} 
	    var zw = typeof (newsData) != "undefined" ? newsData.id : 0;
	    var param1 = "";
	     if($("#param1").length>0)
	    	 param1 =$("#param1").val();
	    $.ajax({
	        url: "http://analytics.lotour.com/OriginalData/Index", type: "GET", dataType: 'jsonp',
	        data: {u:escape(window.location.href), t: t, r: escape(ref), s: window.screen.width + '*' + window.screen.height, l: l, i: zw, id: id,pre:new Date() ,p:escape(param1)},
	        timeout: 10000, contentType: "application/json;utf-8",
	        jsonp: "callback",
	        success: function (result) {
	            if (l == 0)
	            {
	                $.cookie('LotourGlobalCookie', result);
	            }
	        },
	        error: function (jqXHR, textStatus, errorThrown) {   
	        	console.log(textStatus+errorThrown);
	        }
	    });
}
try{
	toDoSomething(escape(document.title), 0, 0, true);
}catch (e) {} 
function toCloseWindow() {
    var account = $.cookie('LotourGlobalCookie');
    if (account != null) {
    	toDoSomething("close", 2, account, false);
    };
}
$(function () {
    $(window).bind("mousemove", function () {
    	var n=new Date().getTime();
    	checkToClose(n);
    });
    $(window).scroll(function(){
    	 var n=new Date().getTime();
    	 checkToClose(n);
    })
})
var cTime = new Date().getTime();
function checkToClose(n){
	    if (n - cTime > 5000) {
	    	cTime = n;
	        toCloseWindow();
	    }
}
function clickDataCount(block,position){
	var cookie="";
	$.ajax({
        url: "http://analytics.lotour.com/OriginalData/Click", type: "GET",dataType: 'jsonp',
        data: {u:escape(window.location.href), b: block, p: position, c: cookie},
        timeout: 10000, contentType: "application/json;utf-8",
        jsonp: "callback",
        success: function () {
            
        },
        error: function (jqXHR, textStatus, errorThrown) {   
        	console.log(textStatus+errorThrown);
        }
    });
}
