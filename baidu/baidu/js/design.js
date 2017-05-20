$(document).ready(function() {
    var status = {
        menu_befor: $("#intro"),
        click_befor: $("#s_contents_intro")
    };
    var constVar={
    	menu:$("#s_mine"),
    	color_original:"#e9e9e9",
    	color_coral : "#ff7f50",
    	color_yellowgreen : "#9acd32"
    }
    function entity(menu,content){
    	this.menu=menu;
    	this.content=content;
    }
    entity.prototype.clickEvent=function(){
		throw new Error("this is a entity class");
	};
	// 右侧产品类
	function proClass(menu,content){
		entity.apply(this,[menu,content]);
	}
	proClass.prototype=new entity();
	proClass.prototype.constructor=proClass;
	proClass.prototype.clickEvent=function(para){
		this.menu.mouseover(function() {
	        para.content.css({
	            display: "block",
	            opacity: 1,
	            height: window.innerHeight
	        });
	    });
	    this.content.mouseover(function() {
	        para.content.css({
	            display: "block",
	            opacity: 1,
	            height: window.innerHeight
	        });
	    });
	    this.content.mouseout(function() {
	        para.content.css({
	            display: "none",
	            opacity: 0
	        });
	    });
	};
    function tabClass(menu,content){
    	entity.apply(this,[menu,content]);
    	this.icon=$(".s_menu_user_icon");
    }
    tabClass.prototype=new entity();
    tabClass.prototype.constructor=tabClass;
    tabClass.prototype.index_menu=function(){
		this.menu.addClass("active_menu");
        if (this.menu == constVar.menu) {
            this.icon.css("background-position", "-144px 0");
        } else {
            if (status.menu_befor == constVar.menu) {
                this.icon.css("background-position", "-15px 0");
            }
        }
        status.menu_befor.removeClass("active_menu");
        status.menu_befor = this.menu;
	};
	tabClass.prototype.index_content=function(){
		this.content.css("display", "block");
        status.click_befor.css("display", "none");
        status.click_befor = this.content;
	};
	tabClass.prototype.clickEvent=function(para){
		this.menu.on("click",function(){
			if(para.content.css("display")=="block"){
				return;
			}
			para.index_menu();
			para.index_content();
		});
	}
	function changeBtn(menu1,content,menu2){
		entity.apply(this,[menu1,content]);
		this.menu2=menu2;
	}
	changeBtn.prototype=new entity();
	changeBtn.prototype.constructor=changeBtn;
	changeBtn.prototype.clickEvent=function(para){
		this.menu.on("click",function(){
			para.content.animate({
	            top: 0,
	            opacity: 1
	        }), 2000;
		});
		this.menu2.on("click",function(){
			para.content.animate({
	            top: "-300px",
	            opacity: 0
	        });
		});
	};
	function changeSkin(menu,content1,content2){
		entity.apply(this,[menu,content1]);
		this.content2=content2;
	}
	changeSkin.prototype=new entity();
	changeSkin.prototype.constructor=changeSkin;
	changeSkin.prototype.setColor=function(color){
    	this.content.css("border-color",color);
    	this.content2.css("border-color",color);
    };
    
    changeSkin.prototype.clickEvent=function(para,color){
    	this.menu.on("click",function(){
    		addCookie("borderColor",color,1);
    		para.setColor(color);
    	});
    };

	var pro=new proClass($(".morePro"),$(".right-col-pro"));
	pro.clickEvent(pro);
	pro=null;
    var mine=new tabClass(constVar.menu,$("#s_contents_care"));
    mine.clickEvent(mine);
    mine=null;
    var intro=new tabClass($("#intro"),$("#s_contents_intro"));
    intro.clickEvent(intro);
    intro=null;
    var nav=new tabClass($("#nav"),$("#s_contents_nav"));
    nav.clickEvent(nav);
    nav=null;
    var shopping=new tabClass($("#shopping"),$("#s_contents_shopping"));
    shopping.clickEvent(shopping);
    shopping=null;
    var changeBtn=new changeBtn($("#changeSkin_btn"),$("#changeSkin"),$("#slide_on"));
    changeBtn.clickEvent(changeBtn);
    changeBtn=null;
    var skin1=new changeSkin($(".coral"),$(".s_menus"),$(".s_contents"));
    var color=getCookie("borderColor");
    if (color) {
    	skin1.setColor(color);
    }
    skin1.clickEvent(skin1,constVar.color_coral);
    skin1=null;
    var skin2=new changeSkin($(".yellowgreen"),$(".s_menus"),$(".s_contents"));
    skin2.clickEvent(skin2,constVar.color_yellowgreen);
    skin2=null;
    var skin3=new changeSkin($(".delete_skin"),$(".s_menus"),$(".s_contents"));
    skin3.clickEvent(skin3,constVar.color_original);
    skin3=null;
    function addCookie(objName, objValue, objHours) {
        var str = objName + "=" + escape(objValue);
        if (objHours > 0) {
            var date = new Date();
            var ms = objHours * 3600 * 1000;
            date.setTime(date.getTime() + ms);
            str += "; expires=" + date.toGMTString();
        }
        document.cookie = str;
    }

    function getCookie(objName) {
        var arrStr = document.cookie.split("; ");
        for (var i = 0; i < arrStr.length; i++) {
            var temp = arrStr[i].split("=");
            if (temp[0] == objName)
                return unescape(temp[1]);
        }
    }
});
