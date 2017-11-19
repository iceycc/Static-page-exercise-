			$(function(){
		    $('#fullpage').fullpage({

		    	// 设置内容是否居中显示 true （居中显示）
		    	verticalCentered:false,
		    	//设置背景颜色
		    	// sectionsColor:["red","green"],
		    	
		    	// 显示导航
		    	navigation: true,

		    	// 当进入到当前屏幕的时候，触发该事件
		    	afterLoad:function(anchorLink,index){


		    	},

		    	//从当前屏进入到下一屏
		    	onLeave:function(index,nextindex,direction){
		    		

		    	},
		    	// 页面结构加载完成后触发该事件
		    	afterRender:function(){
		    			
		    	}
		    });
		});