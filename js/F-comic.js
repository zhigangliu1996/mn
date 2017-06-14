window.onload = function () {
    //开始动画
    //左侧人物动画
    $(".left-figure5").animate({left:"-458px",top:"288px",width:"340px"}, function () {
        $(".left-figure2").animate({left:"-458px",top:"288px",width:"340px"}, function () {
            $(".left-figure3").animate({left:"-458px",top:"288px",width:"340px"}, function () {
                $(".left-figure4").animate({left:"-458px",top:"288px",width:"340px"}).animate({opacity:0});
            }).animate({opacity:0});
        }).animate({opacity:0})
    }).animate({opacity:0});
    //右侧人物动画
    $(".right-figure5").animate({right:"-428px",top:"286px",width:"340px"}, function () {
        $(".right-figure2").animate({right:"-428px",top:"286px",width:"340px"}, function () {
            $(".right-figure3").animate({right:"-428",top:"286px",width:"340px"},function () {
                $(".right-figure4").animate({right:"-428px",top:"286px",width:"340px"}).animate({opacity:0}, function () {
                    $(".logo").animate({opacity:0}, function () {
                        $(".animation").fadeOut();
                        $(".item1").show();
                    })
                });
            }).animate({opacity:0})
        }).animate({opacity:0})
    }).animate({opacity:0});
    //////////////////////////////////////////////////////////////////////////
    var up = $(".up");
    up.on("mouseover",function(){
        $(".left-figure").fadeTo("fast", 1, function(){});//人物显示
        $(".left-arrows").stop().animate({left:'-160px'},"normal");//三角移出
    });
    up.on("mouseout",function(){
       $(".left-figure").fadeOut("fast",function(){});//人物隐藏
        $(".left-arrows").stop().animate({left:'-120px'},"normal");//三角恢复
    });
    up.click( function () {alert("已经是第一页啦")});
    var dowm = $(".dowm");
    dowm.on("mouseover",function(){
        $(".right-figure").fadeTo("fast", 1, function(){});//人物显示
        $(".right-arrows").stop().animate({right:'-160'},"normal");//三角移出
    });
    dowm.on("mouseout",function(){
        $(".right-figure").fadeOut("fast",function(){});//人物隐藏
        $(".right-arrows").stop().animate({right:'-120px'},"normal");//三角恢复
    });
    dowm.click( function () {alert("敬请期待")});
    //鼠标放入图片变大加边框变色
    $(function () {
        $(".items-i").hover(function () {
            $(this).first().children().eq(0).css({width:240,height:230,left:-20,top:-25,zIndex:5,boxShadow:"rgba(160,127,142,.8) 0 0 3px 5px"});
            $(this).first().children().eq(0).addClass("border");
            $(this).first().last().css({zIndex:0})

        }, function () {
            $(this).first().last().css({zIndex:2});
            $(this).first().children().eq(0).css({width:200,height:158,left:0,top:0,zIndex:1,boxShadow:""});
            $(this).first().children().eq(0).removeClass("border");
        })
    });

    //九宫格点击事件
    $(".items-i").click(function () {
        alert("其实我偷懒了.没漫画看啦~");
    })
}