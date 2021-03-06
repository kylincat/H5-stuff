/*
 * 360全景图片
 * 	功能：根据鼠标拖动的不同方向去切换不同的图片
 * 	步骤：
 * 		1.当鼠标按下时，开始功能 onmousedown
 * 		2.当鼠标移动时，切换图片 onmousemove
 * 		3.当鼠标松开时，功能停止 onmouseup
 */

//创建一个数组来保存所有的预加载的图片
var imgArr = [];


/*
 * 处理图片的预加载，在页面一加载时，就要将60张图片全都加载
 */
for(var i=0 ; i<60 ; i++){
	//创建一个新的img标签
	var newImg = new Image();
	//修改标签src属性
	newImg.src = "img/car/"+i+".jpg";
	//将加载的图片添加到数组中
	imgArr.push(newImg);
	
	//document.createElement("span");
}



//获取img对象
var carImg = document.getElementById("carImg");

//创建一个变量，用来保存当前的显示的图片
var currentImgIndex = 0;

//为document绑定一个鼠标按下的事件
document.onmousedown = function(event){
	//当鼠标按下时，开始功能
	//获取到鼠标的移动距离
	var dis = 0;
	//获取鼠标的水平坐标
	var begin = event.clientX;
	//console.log("begin = "+begin);
	
	//为document绑定一个鼠标移动的事件
	document.onmousemove = function(event){
		//console.log("hello");
		//获取鼠标当前的水平坐标
		var current = event.clientX;
		
		//console.log("begin = "+begin + " , current = "+current);
		
		//获取鼠标移动的距离
		dis = currentImgIndex + Math.floor((begin - current)/30);
		//dis的值不能超过59
		/*
		 * 1
		 * 10
		 * 59
		 * 60 --> 0
		 * 61 --> 1
		 * 62 --> 2
		 */
		dis = dis % 60;
		
		/*
		 * dis的值不能为负
		 * 0  0.jpg
		 * -1 59.jpg 60
		 * -2 58.jpg
		 * -3 57.jpg
		 */
		if(dis < 0){
			dis += 60;
		}
		
		//console.log("dis = "+dis);
		
		//修改img标签中显示的图片
		carImg.src = "img/car/"+dis+".jpg";
		
	};
	
	//为document绑定一个鼠标松开的事件
	document.onmouseup = function(){
		
		//清除document上的onmousemove和onmouseup事件
		document.onmousemove = null;
		document.onmouseup = null;
		
		//当鼠标松开更新图片的索引
		currentImgIndex = dis;
		
	};
	
	
	
	//取消默认行为
	return false;
};