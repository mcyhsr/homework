$(document).ready(function () {
    // 头部动态
    var flag=0;
    var flag1=0;
    var flag2=0;
    $("#s-msg").click(function () {
        $(".s-msg-control").toggle(500);
    });
    $(".s-skin").click(function () {
        $(".skin-wrapper").toggle(500)
    })
    $(".user").mouseenter(function () {
        $(".user-name-menu").css("display","block");
    });
    $(".user-name-menu").mouseenter(function () {
        $(".user-name-menu").css("display","block");
        flag=1;
    });
    $(".user-name-menu").mouseleave(function () {
        flag=0;
        $(".user-name-menu").css("display","none")
    });
    $(".user").mouseleave(function () {
        if(flag==1){
            $(".user-name-menu").css("display","block");
        }
        else {
            $(".user-name-menu").css("display","none");
        }
    });
    $("#setting-text").mouseenter(function () {
        $(".setting-menu").css("display","block");
    });
    $(".setting-menu").mouseenter(function () {
        $(".setting-menu").css("display","block");
        flag1=1;
    });
    $(".setting-menu").mouseleave(function () {
        $(".setting-menu").css("display","none");
        flag=0;
    });
    $("#setting-text").mouseleave(function () {
        if(flag==1){
            $(".setting-menu").css("display","block");
        }
        else {
            $(".setting-menu").css("display","none");
        }
    });
    $("#more").mouseenter(function () {
        $("#more-sidebar").css("display","block");
    });
    $("#more-sidebar").mouseenter(function () {
        $("#more-sidebar").css("display","block");
        flag2=1;
    });
    $("#more-sidebar").mouseleave(function () {
        $("#more-sidebar").css("display","none");
        flag2=0;
    });
    $("#more").mouseleave(function () {
        if(flag==1){
            $("#more-sidebar").css("display","block");
        }
        else {
            $("#more-sidebar").css("display","none");
        }
    });
    // 底部菜单栏动态
    var flag3=1;
    $("#menu-item1").click(function () {
        if(flag3==2){
            $("#menu-item2").removeClass("current");
            $("#menu-item1").addClass("current");
            $(".news-content-wrapper").css("display","block");
            $(".daohang").css("display","none");
            flag3=1;
        }
        else if(flag3==3){
            $("#menu-item3").removeClass("current");
            $("#menu-item1").addClass("current");
            $(".news-content-wrapper").css("display","block");
            $(".vedio1").css("display","none");
            flag3=1;
        }
        else if(flag3==4){
            $("#menu-item4").removeClass("current");
            $("#menu-item1").addClass("current");
            $(".news-content-wrapper").css("display","block");
            $(".shopping").css("display","none");
            flag3=1;
        }
        else if(flag3==5){
            $("#menu-item5").removeClass("current");
            $("#menu-item1").addClass("current");
            $(".news-content-wrapper").css("display","block");
            $(".guanzhu").css("display","none");
            flag3=1;
        }
    });
    $("#menu-item2").click(function () {
        if(flag3==1){
            $("#menu-item1").removeClass("current");
            $("#menu-item2").addClass("current");
            $(".daohang").css("display","block")
            $(".news-content-wrapper").css("display","none");
            flag3=2;
        }
        else if(flag3==3){
            $("#menu-item3").removeClass("current");
            $("#menu-item2").addClass("current");
            $(".daohang").css("display","block")
            $(".vedio1").css("display","none");
            flag3=2;
        }
        else if(flag3==4){
            $("#menu-item4").removeClass("current");
            $("#menu-item2").addClass("current");
            $(".daohang").css("display","block")
            $(".shopping").css("display","none");
            flag3=2;
        }
        else if(flag3==5){
            $("#menu-item5").removeClass("current");
            $("#menu-item2").addClass("current");
            $(".daohang").css("display","block")
            $(".guanzhu").css("display","none");
            flag3=2;
        }
    });
    $("#menu-item3").click(function () {
        if(flag3==2){
            $("#menu-item2").removeClass("current");
            $("#menu-item3").addClass("current");
            $(".vedio1").css("display","block")
            $(".daohang").css("display","none");
            flag3=3;
        }
        else if(flag3==1){
            $("#menu-item1").removeClass("current");
            $("#menu-item3").addClass("current");
            $(".vedio1").css("display","block")
            $(".news-content-wrapper").css("display","none");
            flag3=3;
        }
        else if(flag3==4){
            $("#menu-item4").removeClass("current");
            $("#menu-item3").addClass("current");
            $(".vedio1").css("display","block")
            $(".shopping").css("display","none");
            flag3=3;
        }
        else if(flag3==5){
            $("#menu-item5").removeClass("current");
            $("#menu-item3").addClass("current");
            $(".vedio1").css("display","block")
            $(".guanzhu").css("display","none");
            flag3=3;
        }
    });
    $("#menu-item4").click(function () {
        if(flag3==2){
            $("#menu-item2").removeClass("current");
            $("#menu-item4").addClass("current");
            $(".shopping").css("display","block");
            $(".daohang").css("display","none");
            flag3=4;
        }
        else if(flag3==3){
            $("#menu-item3").removeClass("current");
            $("#menu-item4").addClass("current");
            $(".shopping").css("display","block");
            $(".vedio1").css("display","none");
            flag3=4;
        }
        else if(flag3==1){
            $("#menu-item1").removeClass("current");
            $("#menu-item4").addClass("current");
            $(".shopping").css("display","block")
            $(".news-content-wrapper").css("display","none");
            flag3=4;
        }
        else if(flag3==5){
            $("#menu-item5").removeClass("current");
            $("#menu-item4").addClass("current");
            $(".shopping").css("display","block");
            $(".guanzhu").css("display","none");
            flag3=4;
        }
    });
    $("#menu-item5").click(function () {
        if(flag3==2){
            $("#menu-item2").removeClass("current");
            $("#menu-item5").addClass("current");
            $(".guanzhu").css("display","block");
            $(".daohang").css("display","none");
            flag3=5;
        }
        else if(flag3==3){
            $("#menu-item3").removeClass("current");
            $("#menu-item5").addClass("current");
            $(".guanzhu").css("display","block");
            $(".vedio1").css("display","none");
            flag3=5;
        }
        else if(flag3==1){
            $("#menu-item1").removeClass("current");
            $("#menu-item5").addClass("current");
            $(".guanzhu").css("display","block");
            $(".news-content-wrapper").css("display","none");
            flag3=5;
        }
        else if(flag3==4){
            $("#menu-item4").removeClass("current");
            $("#menu-item5").addClass("current");
            $(".guanzhu").css("display","block");
            $(".shopping").css("display","none");
            flag3=5;
        }
    });
});
var bgColor=localStorage.getItem('bgColor');
if(bgColor){
    $("#container").css("background-color",bgColor);
}
function color1(backgroundColor) {
    $("#container").css("background-color",backgroundColor);
    localStorage.setItem('bgColor',backgroundColor);
}