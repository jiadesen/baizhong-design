// 获得当前设备屏幕宽度(px)
var width = $(window).width();

// TODO:根据屏幕宽度，重载页面

// 手机端下拉菜单点击特效
$(
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
}

// 首页全屏展示
$(
    function () {
        if (width >= 768) {
            $('#main').fullpage({
                // sectionsColor: ['#F6F6F6', '#f90', '#7BAABE', '#f90'], //背景颜色
                // loopBottom: true, // 自动返回顶部
                'navigation': true, // 侧边导航
                'navigationColor': '#5a5a5a', // 侧边导航颜色
                'slidesNavigation': true, // 首页轮播底部控制导航
                // 'easing': 'easeInExpo', // 翻页速度效果
                // fullpage回调函数页面加载动效
                afterLoad: function (anchorLink, index) {
                    if (index == 2) {
                        $('.section2').find('div.box1').delay(150).animate({
                            bottom: '0',
                            opacity: '1'
                        }, 800, 'easeOutExpo');
                        $('.section2').find('div.box2').delay(200).animate({
                            bottom: '0',
                            opacity: '1'
                        }, 800, 'easeOutExpo');
                        $('.section2').find('div.box3').delay(250).animate({
                            bottom: '0',
                            opacity: '1'
                        }, 800, 'easeOutExpo');
                        $('.section2').find('div.box4').delay(300).animate({
                            bottom: '0',
                            opacity: '1'
                        }, 800, 'easeOutExpo');
                        $('.section2').find('div.box5').delay(350).animate({
                            bottom: '0',
                            opacity: '1'
                        }, 800, 'easeOutExpo');
                        $('.section2').find('div.box6').delay(400).animate({
                            bottom: '0',
                            opacity: '1'
                        }, 800, 'easeOutExpo');
                        $('.section2').find('div.box7').delay(450).animate({
                            bottom: '0',
                            opacity: '1'
                        }, 800, 'easeOutExpo');
                        $('.section2').find('div.box8').delay(500).animate({
                            bottom: '0',
                            opacity: '1'
                        }, 800, 'easeOutExpo');
                        $('.section2').find('ul.slick-dots').delay(550).animate({
                            bottom: '0',
                            opacity: '1'
                        }, 1000, 'easeOutExpo')
                    }
                    if (index == 3) {
                        $('.section3').find('.box1').delay(10).animate({
                            left: '0',
                            opacity: '1'
                        }, 1000, 'linear');
                        $('.section3').find('.box2').delay(10).animate({
                            left: '0',
                            opacity: '1'
                        }, 1000, 'linear');
                        $('.section3').find('.box3').delay(10).animate({
                            left: '0',
                            opacity: '1'
                        }, 1000, 'linear');
                        $('.section3').find('.box4').delay(10).animate({
                            left: '0',
                            opacity: '1'
                        }, 1000, 'linear');
                    }
                }
                // onLeave: function (index, direction) {
                //     if (index == 2) {
                //         $('.section2').find('div.box1').delay(150).animate({
                //             bottom: '-600px'
                //         }, 100, 'easeOutExpo');
                //         $('.section2').find('div.box2').delay(200).animate({
                //             bottom: '-600px'
                //         }, 100, 'easeOutExpo');
                //         $('.section2').find('div.box3').delay(250).animate({
                //             bottom: '-600px'
                //         }, 100, 'easeOutExpo');
                //         $('.section2').find('div.box4').delay(300).animate({
                //             bottom: '-600px'
                //         }, 100, 'easeOutExpo');
                //         $('.section2').find('div.box5').delay(350).animate({
                //             bottom: '-600px'
                //         }, 100, 'easeOutExpo');
                //         $('.section2').find('div.box6').delay(400).animate({
                //             bottom: '-600px'
                //         }, 100, 'easeOutExpo');
                //         $('.section2').find('div.box7').delay(450).animate({
                //             bottom: '-600px'
                //         }, 100, 'easeOutExpo');
                //         $('.section2').find('div.box8').delay(500).animate({
                //             bottom: '-600px'
                //         }, 100, 'easeOutExpo');
                //         $('.section2').find('ul.slick-dots').delay(550).animate({
                //             bottom: '-1000px'
                //         }, 100, 'easeOutExpo')
                //     }
                // }
            });
            $(window).resize(function () {
                autoScrolling();
            });
            function autoScrolling() {
                var $ww = $(window).width();
                if ($ww < 768) {
                    $.fn.fullpage.setAutoScrolling(false);
                } else {
                    $.fn.fullpage.setAutoScrolling(true);
                }
            }

            // 首页banner控制器
            setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 4000);

            autoScrolling();
        } else {
            $('#main').fullpage({
                // loopBottom: true, // 自动返回顶部
                'navigation': false, // 侧边导航
                'controlArrows': false, // 箭头导航
                'slidesNavigation': true, // 首页轮播底部控制导航
                'fitToSection': false, // 手机端阻止某个过长的section自动滚动到底部
                afterLoad: function (anchorLink, index) {
                    if (index == 1) {
                        $('.section2').find('div.box1').delay(150).animate({
                            bottom: '0'
                        }, 800, 'easeOutExpo');
                        $('.section2').find('div.box2').delay(200).animate({
                            bottom: '0'
                        }, 800, 'easeOutExpo')
                    }
                    if (index == 2) {
                        $('.section2').find('div.box3').delay(250).animate({
                            bottom: '0'
                        }, 800, 'easeOutExpo');
                        $('.section2').find('div.box4').delay(300).animate({
                            bottom: '0'
                        }, 800, 'easeOutExpo');
                        $('.section2').find('div.box5').delay(350).animate({
                            bottom: '0'
                        }, 800, 'easeOutExpo');
                        $('.section2').find('div.box6').delay(400).animate({
                            bottom: '0'
                        }, 800, 'easeOutExpo');
                        $('.section2').find('div.box7').delay(450).animate({
                            bottom: '0'
                        }, 800, 'easeOutExpo');
                        $('.section2').find('div.box8').delay(500).animate({
                            bottom: '0'
                        }, 800, 'easeOutExpo');
                        $('.section2').find('ul.slick-dots').delay(550).animate({
                            bottom: '0'
                        }, 800, 'easeOutExpo')
                    }
                    if (index == 3) {
                        $('.section3').find('.box1').delay(50).animate({
                            top: '0'
                        }, 1100, 'easeOutExpo');
                        $('.section3').find('.box2').delay(50).animate({
                            top: '0'
                        }, 1500, 'easeOutExpo');
                        $('.section3').find('.box3').delay(50).animate({
                            top: '0'
                        }, 1900, 'easeOutExpo');
                        $('.section3').find('.box4').delay(50).animate({
                            top: '0'
                        }, 2300, 'easeOutExpo');
                    }

                }
            });
            $.fn.fullpage.setAutoScrolling(false);
            setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 4000);
        }
    }
);

// 根据浏览器宽度，width >= 768px 时使用slick
$(
    function () {
        if (width >= 768) {
            // 案例
            $('.slick-row').addClass('slick-responsive');
            // 案例图片鼠标拖动
            $('.case-slick').slick({
                arrows: false, //箭头导航
                dots: true, // 底部导航
                infinite: false, //循环播放
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                            // infinite: true, // 循环滚动
                            // dots: true // 指示点
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            unslick: true
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });

            // 服务
            // $('.slick-row').addClass('slick-responsive');
            // 服务图片鼠标拖动
            $('.service-slick').slick({
                arrows: true, // 箭头导航(默认true)
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                            // infinite: true, // 循环滚动
                            // dots: true // 指示点
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                            // infinite: true, // 循环滚动
                            // dots: true // 指示点
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            unslick: true
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });

            // 添加animate动画
            $(document).ready(function () {
                $('.fp-controlArrow').addClass('animated');
                $('.fp-slidesNav').addClass('animated');
                $('#fp-nav').addClass('animated');
                $('.fp-prev').addClass('bounceInLeft');
                $('.fp-next').addClass('bounceInRight');
                $('.fp-slidesNav').addClass('bounceInUp');
                $('#fp-nav').addClass('rotateInDownRight')
            });
        } else {
            $(document).ready(function () {
                $('#menu ul li a').addClass('animated');
                $('#menu ul li a').addClass('flipInX')
            })
        }
    }
);

// 我们的服务菜单点击跳转
$('.submenu li a').click(function () {
    var local_ser = window.location.search;
    // console.log(local_ser != '');
    var rel = $(this).attr('rel');
    // console.log(rel);
    if (local_ser != '') {
        // console.log($('.design-nav a')[rel]);
        $(".design-nav a")[rel].click()
    } else {
        window.location.href = 'design.html?' + rel
    }
});