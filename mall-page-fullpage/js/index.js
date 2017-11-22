$(function () {
	$('#fullpage').fullpage({
		// 设置内容是否居中显示 true （居中显示）
		verticalCentered: false,
		//设置背景颜色
		sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#fed", "#d04759", "#84d9ed", "#8ac060"],
		// 显示导航
		navigation: true,
		// 当进入到当前屏幕的时候，触发该事件
		afterLoad: function (anchorLink, index) {
			$(this).addClass("select");
		},
		//从当前屏进入到下一屏
		onLeave: function (index, nextindex, direction) {
			if (index ==2 && nextindex == 3) {
				$('.sofa-hide').addClass('animate').on('animationend',function(){
					// 当该动画执行完后触发该事件
					$('.screen03 .size img:last-child').show();
					$('.screen03 .btns img:last-child').show();
				})
			} else if (index == 3 && nextindex == 4) {
				$(".screen04 .cloud").addClass('animate');
				// 第三屏进入第四屏 动画
				$('.screen03 .hide-sofa').addClass('animate').on('animationend',function(){
					$('.screen04 .cart img:first-child').show();
					$('.screen04 .cart').addClass('animate').on('transitionend', function () {
						$(".screen04 .text img:last-child").fadeIn(500, function () {
							$(".screen04 .address").fadeIn(500, function () {
								$(".screen04 .address img:last-child").fadeIn();
							});
						});
					})
				})
				
			}
		},
		// 页面结构加载完成后触发该事件
		afterRender: function () {}
	});
});