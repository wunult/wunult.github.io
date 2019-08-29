function jump() {
    //键盘输入导航栏变化
    document.getElementsByClassName('jumpnext')[0].className += ' navbar-fixed-top searchfixed';
    document.getElementsByClassName('navtopbar')[0].className += ' topbar';
    //
    document.getElementsByClassName('copyright')[0].style.display = "none";
    document.getElementsByClassName('Divform_Ul')[0].className += ' content';
    document.getElementsByClassName('main_center')[0].style.display = "none";
    document.getElementById('container').style.display = 'block'

    //判断回车
    document.onkeydown = function (event) {

        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 13) { // enter 键
            //要做的事情
            window.open("./jquery/瀑布流/index.html")
        }
    };
}
//监听到达底部出现footer
$(function () {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();

        if (scrollTop + windowHeight == scrollHeight) {
            document.getElementById('footer').style.display = 'block'
        }
    })
})