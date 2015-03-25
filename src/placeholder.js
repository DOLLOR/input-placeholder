//placeholder
//by DOLLOR
~(function($,w){
	var placeholderPolyfill=function($ele,css_style){
		$ele=$ele || $("[placeholder]");
		css_style=css_style || {};
		//删除旧的
		$ele.next(".ph-polyfill").remove();
		~(function($el){
			//为input元素添加placeholder元素
			$el.each(function(i,e){
				//获取input元素的样式
				var $el=$(e);
				var txt=$el.attr("placeholder");
				var pos=$el.offset();
				var hei=$el.height();
				var wid=$el.width();
				var pad_left=$el.css("padding-left");
				var pad_top=$el.css("padding-top");
				var color=$el.css("color");
				var font_size=$el.css("font-size");
				//创建placeholder元素
				var ph=$($.parseHTML("<div class='ph-polyfill' >"+txt+"</div>"));
				//input元素聚焦与失焦事件
				$el
				.after(ph)
				.on("blur",function(ev){
					if($(this).val()){
						ph.hide();//有值则显
					}
					else{
						ph.show();//无值则隐
					}
				})
				.on("focus",function(ev){
					ph.hide();//聚焦时隐
				});
				//placeholder元素样式与点击事件
				ph
				.css({
					"position":"absolute",//必要
					"height":hei,//必要
					"width":wid,//必要
					//"line-height":hei+"px",//必要
					"cursor":"text",
					"color":color,
					"padding-left":pad_left,
					"padding-top":pad_top,
					"font-size":font_size,
					"overflow": "hidden"
				})
				.css(css_style)
				.offset(pos)
				.on("click",function(ev){
					$el.trigger("focus");//把点击事件传递给input元素
				});
				$el.triggerHandler("blur");
			});
		})($ele);
	};
	w.placeholderPolyfill = w.placeholderPolyfill || placeholderPolyfill;
})(jQuery,window);
