require.config({
	paths: {
		"jqueryCookie":"jquery.cookie",
		"jquery": "jquery-1.11.3",
		"action":"action"
	}
})



define(["jquery","jqueryCookie","action"], function($,JCK,action){

	function main(){
		$.get("../json/site.json",function(data){
			// alert(data[0]);
			for(var i = 0; i<data.length; i++){
				// alert(data[i]);
				var site=$('<a href="" class="site_a"></a>').text(data[i]);
				$("#SZ_site").append(site); 
			}
		});
	// 划过显示
	action.a("#SZ","#SZ_site","SZ_class1","SZ_class2");
	action.a("#myDd","#myDd_nav","topBtn","topBtn2")
	// 事件委托
			$("#SZ_site").click (function(ev){
					var e = ev || window.event;
					var target = e.target || window.event.srcElement;
					if(target.nodeName == "A"){
						$(".SZ_city").text(target.innerHTML);
					}
					action.stop(e);
				}) 
	}
	
	return {
		main: main
	}
})