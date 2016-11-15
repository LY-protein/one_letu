$(function () {
    $("<link>")
    .attr({
        rel: "stylesheet",
        type: "text/css",
        href: "http://css.lotour.net/ltFeedback2.css"
    })
    .appendTo("head");
    $("<a href=\"javascript:void(0)\" class=\"ltFeedback\"><span></span></a><div class=\"ltFeedbackLayer\"><div class=\"ltFeedbackBg\"></div><div class=\"ltFeedbackIn\"><a class=\"cls\" href=\"javascript:void(0)\"></a><h5>意见反馈</h5><div class=\"con\"><textarea tips=\"亮出你的毒舌，晒晒你的想法，叨叨你的建议 ，让乐途为你更完美！\">亮出你的毒舌，晒晒你的想法，叨叨你的建议 ，让乐途为你更完美！</textarea><a href=\"javascript:void(0)\" class=\"send\">提交</a><p class=\"tip\" style=\"display:none\">嗨，写点什么吧</p></div></div></div><div class=\"ltFeedbackLayer2\"><div class=\"ltFeedbackIn2\"><a class=\"cls\" href=\"javascript:void(0)\"></a><p>发送成功，谢谢！</p></div></div><div class=\"ltFeedbackShade\"></div>")
    .appendTo("body");
    $('.ltFeedback').click(function () {
        $('.ltFeedbackLayer,.ltFeedbackShade').show(); $('.ltFeedbackShade').css('height', $(document).height());
        $('.ltFeedbackLayer .con textarea').val($(this).attr("tips").toString());
    })
    $('.ltFeedbackLayer .cls,.ltFeedbackLayer2 .cls').click(function () {
        $('.ltFeedbackLayer,.ltFeedbackShade,.ltFeedbackLayer2').hide();
    });
    $('.ltFeedbackLayer .send').click(function () {
        var content = $.trim($('.ltFeedbackLayer .con textarea').val());
        if (content == '' || content == '亮出你的毒舌，晒晒你的想法，叨叨你的建议 ，让乐途为你更完美！') {
            $('.ltFeedbackLayer .con p.tip').html('嗨，写点什么吧').show();
            $('.ltFeedbackLayer .con textarea').focus();
            return false;
        }
        content = content.substring(0,200);
        $.ajax({
            url: 'http://api.lotour.com/adwebservice/FeedbackService.asmx/SetFeedback?callback=?',
            data: { content: content, name: "", tel: "", fromUrl: window.location.href },
            dataType: 'jsonp',
            success: function (data) {
                $('.ltFeedbackLayer').hide();
                $('.ltFeedbackLayer2').show();
            }
        });
    })
    $('.ltFeedbackLayer .con textarea,.ltFeedbackLayer .con input').focusin(function () {
        var _this = $(this);
        if (_this.val() == _this.attr("tips")) {
            _this.val('').addClass('rt')
        }
    }).focusout(function () {
        var _this = $(this);
        if (_this.val() == '') {
            _this.val(_this.attr("tips")).removeClass('rt')
        }
    });
});