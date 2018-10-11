define(function(){
	// 划过显示,改变样式
	function a(node,node2,class1,class2){
		$(node).hover(function () {
	    	$(this).addClass(class2);
	    	$(this).removeClass(class1);
	    	$(node2).css("display","block");
			}, function () {
	    		$(this).addClass(class1);
	    		$(this).removeClass(class2);
		});
	$(node2).mouseleave(function(){
   		$(node2).css("display","none");
	})
	}

	// 阻止默认行为
	 function stop(e){
	 	if(e.preventDefault){
				e.preventDefault();
			}else{
				e.returnValue = false;
			}
	 } 
	return {
		a:a,
		stop:stop
	}
})