function StringBuffer() {
    this._strings = new Array();
}
StringBuffer.prototype.append = function (str) {
    this._strings.push(str);
}
StringBuffer.prototype.toString = function () {
    return this._strings.join("");
}
function subStringEx(str, len, more) {
    var strResult = new StringBuffer();
    var contentText = str;
    var totalLen = 0;
    var charCode;
    for (var i = 0; i < contentText.length; i++) {
        charCode = contentText.charCodeAt(i);
        if (charCode < 0x007f) {
            totalLen += 1;
        }
        else {
            totalLen += 2;
        }
        strResult.append(contentText.charAt(i));
        if (totalLen >= len) {
            if (i < contentText.length) {
                strResult.append(more);
            }
            return strResult.toString();
        }
    }
    return strResult.toString();
}

var lotourLoginState = function () {
    var ini = arguments[0];
    ini.onClickLogin = null; //点击登录事件
    ini.onClickLoginOut = null; //点击退出事件
    //登录成功事件
    for (var o in ini) {
        this[o] = ini[o];
    }
    this.init();
}
lotourLoginState.prototype = {
    init: function () {
        var curobj = this;
        var strHtml = new StringBuffer();
        $.getJSON('http://my.lotour.com/i/u/msg/GetIsReadMsgCount?isRecord=false&random=' + (new Date()) + '&callback=?', function (data) {
            var dataMsg = data.Result.Data;
            if (parseInt(dataMsg.memberid) > 0) {//已登陆
                strHtml.append('<ul class="lgd">\r\n');
                strHtml.append('    <li class="t1"><a href="http://my.lotour.com/lvtu2/Picture/Add"  target="_blank" class="a" onclick="return FocusCount(\'login\',\'301\');">写游记</a><div class="ly"><em></em></div></li>');
                var footmsgcount = "", privatemsgcount = "", systemmsgcount = "", fanscount = "", messagecount = 0 + dataMsg.wantgocount + dataMsg.essaymsgcount + dataMsg.helpmsgcount + dataMsg.footmsgcount;
                if (dataMsg.systemmsgcount > 0) {
                    systemmsgcount = "<i>" + (dataMsg.systemmsgcount < 99 ? dataMsg.systemmsgcount : "99+") + "</i>";
                    messagecount += dataMsg.systemmsgcount;
                }
                if (dataMsg.fanscount > 0) {
                    fanscount = "<i>" + (dataMsg.fanscount < 99 ? dataMsg.fanscount : "99+") + "</i>";
                    messagecount += dataMsg.fanscount;
                }
                if (dataMsg.privatecount > 0) {
                    privatemsgcount = "<i>" + (dataMsg.privatecount < 99 ? dataMsg.privatecount : "99+") + "</i>";
                    messagecount += dataMsg.privatecount;
                }
                footmsgcount = messagecount - dataMsg.fanscount - dataMsg.privatecount - dataMsg.systemmsgcount;
                if (footmsgcount > 0) {
                    footmsgcount = "<i>" + (footmsgcount < 99 ? footmsgcount : "99+") + "</i>";
                }
                else {
                    footmsgcount = "";
                }
                strHtml.append('    <li class="t2"><a href="http://my.lotour.com/i/footmsg/0" title="" target="_blank" class="a" onclick="return FocusCount(\'login\',\'201\');">消息<i>' + (messagecount > 0 ? (messagecount > 99 ? "99+" : +messagecount) : "") + '</i></a><div class="ly"><em></em><a href="http://my.lotour.com/i/footmsg/0" title="" target="_blank" class="tpbr" onclick="return FocusCount(\'login\',\'202\');">我的消息' + footmsgcount + '</a><a href="http://my.lotour.com/i/FriendsAttention/' + dataMsg.memberid + '/1" title="" target="_blank" onclick="return FocusCount(\'login\',\'203\');">查看粉丝' + fanscount + '</a><a href="http://my.lotour.com/i/privatemsg/0" title="" target="_blank" onclick="return FocusCount(\'login\',\'204\');">我的私信' + privatemsgcount + '</a><a href="http://my.lotour.com/i/sys/0" title="" target="_blank" class="edbr" onclick="return FocusCount(\'login\',\'205\');">系统信息' + systemmsgcount + '</a></div></li>');
                strHtml.append('    <li class="t3"><a href="http://my.lotour.com/i/' + dataMsg.memberid + '" title="' + dataMsg.nickName + '" target="_blank" class="a" onclick="return FocusCount(\'login\',\'101\');">' + subStringEx(dataMsg.nickName, 8, "") + '</a><div class="ly"><em></em><a href="http://my.lotour.com/i/' + dataMsg.memberid + '" target="_blank" onclick="return FocusCount(\'login\',\'102\');">我的主页</a><a href="http://my.lotour.com/i/profile" target="_blank" onclick="return FocusCount(\'login\',\'103\');">个人设置</a><a href="http://my.lotour.com/i/FriendsInvite/0" target="_blank" onclick="return FocusCount(\'login\',\'104\');">邀请好友</a><a href="http://my.lotour.com/i/U/Goods/OrderList/0" target="_blank" onclick="return FocusCount(\'login\',\'105\');">订单管理</a><a style="cursor:pointer" id="gloLogQuit" class="edbr">退　　出</a></div></li>');
                strHtml.append('</ul>\r\n');
                $('#rheader').prepend(strHtml.toString());
                $("#gloLogQuit").unbind("click").click(function () {
                    FocusCount('login', '106');
                    if (curobj.onClickLoginOut == null) {
                        logout();
                    }
                    else {
                        curobj.onClickLoginOut();
                    }
                });
            }
            else {//未登陆
                strHtml.append('<div class="login"><a id="ltLogMod" style="cursor:pointer">登录</a> | <a href="http://passport.lotour.com/regist.html" target="_blank" onclick="return FocusCount(\'register\',\'\');">注册</a></div>\r\n');
                strHtml.append('<div class="third-lg"><a href="http://passport.lotour.com/weixinLogin" class="weixin" target="_blank" onclick="return FocusCount(\'login\',\'wechat\');"></a><a href="http://passport.lotour.com/weiboLogin" class="weibo" target="_blank" onclick="return FocusCount(\'login\',\'sina\');"></a><a href="http://passport.lotour.com/QQLogin" class="qq" target="_blank" onclick="return FocusCount(\'login\',\'qq\');"></a></div>');
                $('#rheader').prepend(strHtml.toString());
                $("#ltLogMod").unbind("click").click(function () {
                    FocusCount('login', '');

                    if (curobj.onClickLogin == null) {
                        $.getScript("http://js.lotour.net/login/floatlogin_v3_utf8.js", function () {
                            var loginReg = new LoginRegV3();
                            loginReg.init();
                            loginReg.showLogin();
                            loginReg.regCallBack = function () {
                                window.location.reload();
                            }
                            loginReg.loginCallBack = function () {
                                window.location.reload();
                            }
                        });
                    }
                    else {
                        curobj.onClickLogin();
                    }
                });
            }
        });
    }
}
function logout() {
    $.getJSON('http://my.lotour.com/Login/Login/Loginout?callback=?&rn=' + Math.random(), function (data) {
        if (parseInt(data.uid) > 0) {
            alert('退出失败，请稍后再试！');
        }
        else {
            location.reload();
        }
    });
}

(function ($, undefined) {
    if (window.searchbox) return false;
    $.fn.searchbox = function (options) {
        this.each(function () {
            if (options === false) { }
            else {
                var editor = new searchbox(this, options);
                if (editor.init())
                    this.searchbox = editor;
                else
                    editor = null;
            }
        });
    }
    var hid = "", tips = "";
    var searchbox = function (text, options) {
        var _this = this, _text = text, _obj = $(_text);
        var settings = _this.settings = $.extend({}, searchbox.settings, options);
        if (typeof (settings.Hid) == "undefined") settings.Hid = hid;
        if (typeof (settings.tips) == "undefined") settings.tips = tips;
        var _form = _obj.parents("form"), btn = _form.find(":submit"), _hobj = _form.find(":hidden");
        this.initValue = function () {
            _hobj.attr("value", settings.Hid);
            _obj.attr("value", settings.tips);
        }
        this.init = function () {
            var _t = this;
            $(".len>a").live("mouseenter", function () {
                var a = $(this);
                $(".hover").removeClass("hover");
                a.addClass("hover");
                _hobj.attr("value", a.attr("href"));
            })
            btn.unbind().click(function () {
                return true;
            });
            _form.unbind().submit(function () {
                return btn.trigger("click");
            });
            _obj.focusin(function () {
                $('.src-ly').show();
                $(".len").hide();
            }).click(function () {
                return false;
            }).focusout(function () {
                setTimeout(function () {
                    if ($.trim(_obj.val()) == '') {
                        _t.initValue();
                    }
                    $('.src-ly').hide();
                }, 250);
            }).keydown(function (event) {
                if (event.keyCode == 13 || event.keyCode == 108) {
                    if (!$('.len').is(':hidden') && $(".hover").length == 1) {
                        $(".hover").trigger("click");
                    }
                }
                else {
                    var strValue = $.trim(_obj.val());
                    if (settings.tips == strValue) {
                        _obj.val("");
                    }
                }
            }).keyup(function (event) {
                $('.src-ly').hide();
                var strValue = $.trim(_obj.val());
                var num = $('.len>a').length; //存在联想内容的数量
                if (strValue != "") {
                    if (!$('.len').is(':hidden') && num > 0) {
                        var hotobj = $('.len>a.hover'), index = $('.len>a').index(hotobj);
                        var next = event.keyCode == 40 ? (index + 1) % num : (event.keyCode == 38 ? (index + num - 1) % num : index);
                        if ((event.keyCode == 40 || event.keyCode == 38) && num > 1) {
                            $(".len>a:eq(" + next + ")").trigger("mouseenter");
                            return false;
                        }
                    }
                    if (settings.tips != strValue) {
                        $.getJSON("http://api.lotour.com/lotoursearch/handler/AssociateAll.ashx?key=" + encodeURIComponent(strValue) + "&callback=?", function (data) {
                            if (data.status) {
                                $(".len").empty();
                                var rCount = 0;
                                $.each(data.indexs, function (i, val) {
                                    if (val.source == 1) {
                                        rCount++;
                                        $("<a class=\"l1\" href=\"" + val.url + "\">" + val.name + "</a>").appendTo(".len");
                                    }
                                    else if (val.source == 2) {
                                        $("<a class=\"l3\" href=\"" + val.url + "\">" + val.name + "</a>").appendTo(".len");
                                    }
                                    else if (val.source == 3) {
                                        $("<a class=\"l4\" href=\"" + val.url + "\">进入“" + val.name + "”专栏页</a>").appendTo(".len");
                                    }
                                });
                                $("<a class=\"l3\" href=\"http://api.lotour.com/lotoursearch/#keyWord=" + strValue + "\">搜\"" + strValue + "\"相关用户</a>").appendTo(".len");
                                if (rCount == 0) {
                                    $("<a id=\"mddtj\" href=\"#\" class=\"l1 hover\">未搜索到此目的地，请提交</a><input type=\"hidden\" id=\"txtmddtj\" value=\"" + strValue + "\" />").appendTo(".len");
                                }
                                $(".len>a:eq(0)").trigger("mouseenter");
                                $(".len").show();
                                return false;
                            }
                        });
                    }
                }
            }).trigger("focusout");
        }
    }
})(jQuery);

function FdClk() {
    if ($(window).width() > 768) {
        $('.idx-friend h6').unbind('click').siblings('ul,.button').removeAttr('style');
    } else {
        $('.idx-friend .fl .bb .button').hide();
        $('.idx-friend h6').unbind('click').click(function () {
            $(this).toggleClass('open');
            $(this).siblings('ul').toggle();
            $(this).siblings('.button').toggle();
        });
    }
}

$(function () {
    if ($.cookie("CityID") == null || $.cookie("ChName") == null) {
        $.getScript("http://ip.lotour.com", function () {
            $.cookie("CityID", result.regionid, { expires: 30, path: '/', domain: 'lotour.com' });
            $.cookie("ChName", result.Chname, { expires: 30, path: '/', domain: 'lotour.com' });
            $.cookie("CityName", result.regionname, { expires: 30, path: '/', domain: 'lotour.com' });
            $("#dujiaxianlu").attr("href", "http://d.lotour.com/dujiaxianlu/" + $.cookie("ChName") + "/");
        });
    }
    else {
        $("#dujiaxianlu").attr("href", "http://d.lotour.com/dujiaxianlu/" + $.cookie("ChName") + "/");
    }
    if (typeof islogin == "undefined") {
        var loginState = new lotourLoginState({});
    }

    $('header .header .hl nav ul li.put,#rheader .lgd li').live({
        mouseenter: function () {
            $(this).addClass('show');
        },
        mouseleave: function () {
            $(this).removeClass('show');
        }
    });

    FdClk();
    $(window).resize(function () {
        FdClk();
    });
    if ($("#ilist").length == 1) {
        var ids = $("#ilist").attr("deffer");
        $.getJSON("http://api.lotour.net/pv/SelectPvs?ids=" + ids + "&callback=?", function (data) {
            $.each(data, function (i, val) {
                var pv = val.pageview;
                if (pv >= 10000) {
                    pv = Math.round(pv / 10000 * 10) / 10 + "万";
                }
                $("span.sn[deffer=" + val.id + "]").html(pv);
            });
        });
    }
    //if(location.href.indexOf("www.lotour.com")>=0&&location.href.replace("#","").length<23){
    //    $("#keyword").searchbox({ "tips": "飞度潮玩季，赢迪拜潮玩之旅", "Hid": "http://adclient.lotour.com/Forms/comment/adurl.aspx?id=6483" });
    //}
    //else{
    var index = Math.floor(Math.random() * (mudiditips.length));
    $("#keyword").searchbox({ "tips": mudiditips[index].name, "Hid": mudiditips[index].id });
    //}
    $(".search").find("a[href^='http://']").live("click", function () {
        var v = $(this).attr("href"), u = location.href, t = 2, s1 = $(this).html();
        if (v.indexOf("http://api.lotour.com/lotoursearch/") == -1) {
            FocusCount("search", s1);
            if ($(this).parents(".src-ly").length == 1) {
                t = 0;
            }
            else if ($(this).parents(".len").length == 1) {
                t = 1;
            }
            $.getJSON("http://api.lotour.net/brandhome/Region/UpdateRegionSearch?url=" + v + "&purl=" + u + "&type=" + t + "&callback=?", function (data) {
                location.href = v;
            });
            return false;
        }
    });
    if ($("#mytijiao").length == 0) {
        $(".len").after('<div style="display:none;" id="mytijiao">提交成功</div>');
    }
    $("#mddtj").live("click", function () {
        jQuery.ajax({
            cache: false,
            type: "GET",
            url: "http://api.lotour.net/brandhome/Region/SubSosRegion",
            dataType: "jsonp",
            data: { sosName: escape($("#txtmddtj").val()) },
            success: function (data) {

            }
        });
        $(".len").hide();
        $("#mytijiao").show();
        setTimeout(function () {
            $("#mytijiao").hide();
            var index = Math.floor(Math.random() * (mudiditips.length));
            $("#keys").attr("value", mudiditips[index].id);
            $("#keyword").attr("value", mudiditips[index].name);
        }, 3000);
        //setTimeout('$("#mytijiao").hide()', 3000);
        return false;
    });
});