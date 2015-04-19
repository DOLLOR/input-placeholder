# input-placeholder
placeholder for older browser | 为旧浏览器添加placeholder

## How to | 使用

Basic usage | 基本用法

Include jQuery and placeholder.js then:<br>
载入jQuery和placeholder.js然后：

```js
	placeholderPolyfill($(selector),{"color":"#f00"});
```
  
Any argument can be omitted. | 任何参数都可省略。

```js
	placeholderPolyfill($(selector));
	//or
	placeholderPolyfill(null,{"color":"#f00"});
	//Even all can be omitted
	placeholderPolyfill();
```

## Tips | 提示

You neet to detect the IE version by yourself. And the demo show as examples how to do it.

需要自行判断IE版本。可参考例子。

```js
	if(typeof document.createElement("input").placeholder !== "string"){
		placeholderPolyfill();
	}
```
