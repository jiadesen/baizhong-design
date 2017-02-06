// 获得当前设备屏幕宽度(px)
var width = $(window).width();
$(
    // 手机端下拉菜单点击特效
    function () {
        $('.icon-btn').click(function () {
            // console.log($('#menu').attr('aria-expanded'));
            if ($('#menu').attr('aria-expanded') == undefined || $('#menu').attr('aria-expanded') == 'false') {
                $('.icon-btn').addClass('menu-active')
            } else {
                $('.icon-btn').removeClass('menu-active')
            }
        })
    }
);

// 为手机端添加滚动事件监听，在菜单栏打开的状态下滑动屏幕自动关闭菜单栏
if (width < 768) {
    $(window).scroll(function () {
        var open = $('.navbar-toggle').attr('aria-expanded');
        if (open == 'true') {
            $('.navbar-toggle').click()
        }
    });
    // console.log($('#menu ul li a'));
    $(document).ready(function () {
        $('#menu ul li a').addClass('animated');
        $('#menu ul li a').addClass('flipInX')
    })
}

//设计案例页分类点击事件
$('.design-nav a').click(function () {
    // console.log($(this).attr('rel'));
    // console.log($(this).siblings('a'));
    switch ($(this).attr('rel')) {
        case 'all':
            $(this).addClass('active');
            $(this).siblings('a').removeClass('active');
            $('.work1 ul li').show();
            break;
        case 'part-1':
            $(this).addClass('active');
            $(this).siblings('a').removeClass('active');
            $('.work1 ul li').hide();
            $('.work1 ul .part-1').show();
            break;
        case 'part-2':
            $(this).addClass('active');
            $(this).siblings('a').removeClass('active');
            $('.work1 ul li').hide();
            $('.work1 ul .part-2').show();
            break;
        case 'part-3':
            $(this).addClass('active');
            $(this).siblings('a').removeClass('active');
            $('.work1 ul li').hide();
            $('.work1 ul .part-3').show();
            break;
        case 'part-4':
            $(this).addClass('active');
            $(this).siblings('a').removeClass('active');
            $('.work1 ul li').hide();
            $('.work1 ul .part-4').show();
            break;
        case 'part-5':
            $(this).addClass('active');
            $(this).siblings('a').removeClass('active');
            $('.work1 ul li').hide();
            $('.work1 ul .part-5').show();
            break;
        case 'part-6':
            $(this).addClass('active');
            $(this).siblings('a').removeClass('active');
            $('.work1 ul li').hide();
            $('.work1 ul .part-6').show();
            break;
        case 'part-7':
            $(this).addClass('active');
            $(this).siblings('a').removeClass('active');
            $('.work1 ul li').hide();
            $('.work1 ul .part-7').show();
            break;
        // case 'part-8':
        //     $(this).addClass('active');
        //     $(this).siblings('a').removeClass('active');
        //     $('.work1 ul .part-1').hide();
        //     $('.work1 ul .part-2').hide();
        //     $('.work1 ul .part-3').hide();
        //     $('.work1 ul .part-4').hide();
        //     $('.work1 ul .part-5').hide();
        //     $('.work1 ul .part-6').hide();
        //     $('.work1 ul .part-7').hide();
        // $('.work1 ul .part-8').show();
        // $('.work1 ul .part-9').hide();
        //     break;
        // case 'part-9':
        //     $(this).addClass('active');
        //     $(this).siblings('a').removeClass('active');
        //     $('.work1 ul .part-1').hide();
        //     $('.work1 ul .part-2').hide();
        //     $('.work1 ul .part-3').hide();
        //     $('.work1 ul .part-4').hide();
        //     $('.work1 ul .part-5').hide();
        //     $('.work1 ul .part-6').hide();
        //     $('.work1 ul .part-7').hide();
        //     $('.work1 ul .part-8').hide();
        //     $('.work1 ul .part-9').show();
        //     break;
    }
});

//联系页导航点击事件
// console.log($('.panel-title'));
// console.log($('.tab-content'));
// console.log($('.tab-content')[1]);
$(document).ready(
    function () {
        $('.zl').siblings().hide()
    }
);

$(
    $('.panel-title').click(function () {
        // console.log($(this).parent().siblings().find('.act'));
        // console.log($(this).attr('rel'))
        var str = $(this).attr('rel');
        // var door = $(this).attr('aria-expanded'); //false为开
        // var option = str + door;
        console.log(str);
        // console.log(door);
        // console.log(option);
        // console.log($('.zl'));
        // console.log($('.zl').siblings());
        switch (str) {
            case 'zl':
                $('.zl').show();
                $('.zl').siblings().hide();
                break;
            case 'sj':
                $('.sj').show();
                $('.sj').siblings().hide();
                break;
            case 'yx':
                $('.yx').show();
                $('.yx').siblings().hide();
                break;
            case 'gl':
                $('.gl').show();
                $('.gl').siblings().hide();
                break;
            case 'yw':
                $('.yw').show();
                $('.yw').siblings().hide();
                break;
            case 'tz':
                $('.tz').show();
                $('.tz').siblings().hide();
                break;
            case 'hhr':
                $('.hhr').show();
                $('.hhr').siblings().hide();
                break
        }
    })
);

//我们的服务点击跳转
$('.submenu li a').click(function () {
    var local_ser = window.location.search;
    var rel = $(this).attr('rel');
    if (local_ser == '' || local_ser.indexOf('pack') != -1) {
        window.location.href = 'design.html?' + rel
    } else {
        $(".design-nav a")[rel].click()
    }
});


