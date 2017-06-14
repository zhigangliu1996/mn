
window.onload = function(){

    //文本左滑+透明
    $("#top-animation").animate({left:'50px',opacity:'1'},"slow");
    //官方漫画滑动
    window.onscroll = function(){
      if(window.pageYOffset > 450){
          $("#bottom-animation").animate({left:'+50px',opacity:'1'},"slow");
      }
    };
    //鼠标移入与移出时边框样式
    var lis = document.getElementById("nav-ul").getElementsByTagName("a");
    var close = document.getElementById("close");
    var download = document.getElementById("download");
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        //鼠标移入导航栏边框变色
        lis[i].onmouseover = function(){
            for (var j = 0; j < lis.length; j++) {
                lis[j].style.border = "2px solid #00c3ff";
            }
            lis[this.index].style.border = "2px solid #ffc300";
        };
        //鼠标移出导航栏边框恢复
        lis[i].onmouseout = function(){
            for (var j = 0; j < lis.length; j++) {
                lis[j].style.border = "2px solid #00c3ff";
            }
        }
    }
    //    外链敬请期待
    var await = document.getElementsByClassName("await");
    for(var j = 0 ; j<await.length; j++){
        await[j].onclick = function(){
            alert("老王最帅敬请期待");
        };
    }
    //官网漫画弹框
    $("#Comic").click(function () {
        alert("飞鸿才是最屌的");
        window.location.href="F-comic.html";

    })
};