function color1(e){$("#container").css("background-color",e),localStorage.setItem("bgColor",e)}$(document).ready(function(){var e=0,s=0,n=0;$("#s-msg").click(function(){$(".s-msg-control").toggle(500)}),$(".s-skin").click(function(){$(".skin-wrapper").toggle(500)}),$(".user").mouseenter(function(){$(".user-name-menu").css("display","block")}),$(".user-name-menu").mouseenter(function(){$(".user-name-menu").css("display","block"),e=1}),$(".user-name-menu").mouseleave(function(){e=0,$(".user-name-menu").css("display","none")}),$(".user").mouseleave(function(){1==e?$(".user-name-menu").css("display","block"):$(".user-name-menu").css("display","none")}),$("#setting-text").mouseenter(function(){$(".setting-menu").css("display","block")}),$(".setting-menu").mouseenter(function(){$(".setting-menu").css("display","block"),s=1}),$(".setting-menu").mouseleave(function(){$(".setting-menu").css("display","none"),e=0}),$("#setting-text").mouseleave(function(){1==e?$(".setting-menu").css("display","block"):$(".setting-menu").css("display","none")}),$("#more").mouseenter(function(){$("#more-sidebar").css("display","block")}),$("#more-sidebar").mouseenter(function(){$("#more-sidebar").css("display","block"),n=1}),$("#more-sidebar").mouseleave(function(){$("#more-sidebar").css("display","none"),n=0}),$("#more").mouseleave(function(){1==e?$("#more-sidebar").css("display","block"):$("#more-sidebar").css("display","none")});var a=1;$("#menu-item1").click(function(){2==a?($("#menu-item2").removeClass("current"),$("#menu-item1").addClass("current"),$(".news-content-wrapper").css("display","block"),$(".daohang").css("display","none"),a=1):3==a?($("#menu-item3").removeClass("current"),$("#menu-item1").addClass("current"),$(".news-content-wrapper").css("display","block"),$(".vedio1").css("display","none"),a=1):4==a?($("#menu-item4").removeClass("current"),$("#menu-item1").addClass("current"),$(".news-content-wrapper").css("display","block"),$(".shopping").css("display","none"),a=1):5==a&&($("#menu-item5").removeClass("current"),$("#menu-item1").addClass("current"),$(".news-content-wrapper").css("display","block"),$(".guanzhu").css("display","none"),a=1)}),$("#menu-item2").click(function(){1==a?($("#menu-item1").removeClass("current"),$("#menu-item2").addClass("current"),$(".daohang").css("display","block"),$(".news-content-wrapper").css("display","none"),a=2):3==a?($("#menu-item3").removeClass("current"),$("#menu-item2").addClass("current"),$(".daohang").css("display","block"),$(".vedio1").css("display","none"),a=2):4==a?($("#menu-item4").removeClass("current"),$("#menu-item2").addClass("current"),$(".daohang").css("display","block"),$(".shopping").css("display","none"),a=2):5==a&&($("#menu-item5").removeClass("current"),$("#menu-item2").addClass("current"),$(".daohang").css("display","block"),$(".guanzhu").css("display","none"),a=2)}),$("#menu-item3").click(function(){2==a?($("#menu-item2").removeClass("current"),$("#menu-item3").addClass("current"),$(".vedio1").css("display","block"),$(".daohang").css("display","none"),a=3):1==a?($("#menu-item1").removeClass("current"),$("#menu-item3").addClass("current"),$(".vedio1").css("display","block"),$(".news-content-wrapper").css("display","none"),a=3):4==a?($("#menu-item4").removeClass("current"),$("#menu-item3").addClass("current"),$(".vedio1").css("display","block"),$(".shopping").css("display","none"),a=3):5==a&&($("#menu-item5").removeClass("current"),$("#menu-item3").addClass("current"),$(".vedio1").css("display","block"),$(".guanzhu").css("display","none"),a=3)}),$("#menu-item4").click(function(){2==a?($("#menu-item2").removeClass("current"),$("#menu-item4").addClass("current"),$(".shopping").css("display","block"),$(".daohang").css("display","none"),a=4):3==a?($("#menu-item3").removeClass("current"),$("#menu-item4").addClass("current"),$(".shopping").css("display","block"),$(".vedio1").css("display","none"),a=4):1==a?($("#menu-item1").removeClass("current"),$("#menu-item4").addClass("current"),$(".shopping").css("display","block"),$(".news-content-wrapper").css("display","none"),a=4):5==a&&($("#menu-item5").removeClass("current"),$("#menu-item4").addClass("current"),$(".shopping").css("display","block"),$(".guanzhu").css("display","none"),a=4)}),$("#menu-item5").click(function(){2==a?($("#menu-item2").removeClass("current"),$("#menu-item5").addClass("current"),$(".guanzhu").css("display","block"),$(".daohang").css("display","none"),a=5):3==a?($("#menu-item3").removeClass("current"),$("#menu-item5").addClass("current"),$(".guanzhu").css("display","block"),$(".vedio1").css("display","none"),a=5):1==a?($("#menu-item1").removeClass("current"),$("#menu-item5").addClass("current"),$(".guanzhu").css("display","block"),$(".news-content-wrapper").css("display","none"),a=5):4==a&&($("#menu-item4").removeClass("current"),$("#menu-item5").addClass("current"),$(".guanzhu").css("display","block"),$(".shopping").css("display","none"),a=5)})});var bgColor=localStorage.getItem("bgColor");bgColor&&$("#container").css("background-color",bgColor);