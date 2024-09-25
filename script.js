// 在文档加载完成后执行
$(document).ready(function() {
    // 显示或隐藏回到顶部按钮
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });

    // 点击按钮时回到顶部
    $('#btn-back-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    $("#contact-submit-button").click(function () {
        if (validateForm()) {            
            var mail = $("#mail").val();
            var author = $("#author").val();
            document.getElementById("reply").textContent = "感谢" + author + "( " + mail + " )的留言" ;
            $('#contact-response').modal();
        }
    });

});

function validateForm() {
    // 获取表单字段的值
    var authorValue = document.getElementById("author").value;
    var mailValue = document.getElementById("mail").value;

    // 检查字段是否为空
    if (authorValue === "" || mailValue === "") {
        // alert("请填写所有字段！");
        return false;
    }

    // 表单验证通过，允许提交
    return true;
}

function handleSubmit(event) {
    event.preventDefault();
}
