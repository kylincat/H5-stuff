window.onload = function() {
    var btnRefresh = document.getElementById("btnRefresh");
    var iconRefresh = document.querySelector(".iconRefresh");
    var clickTimes = 1;
    var items = document.querySelectorAll(".items");
    // console.log(items);
    var len = items.length;
    var lineCount = 6;

    var wrapper = document.querySelector(".wrapper");
    var back = document.querySelectorAll(".back");
    var front = document.querySelectorAll(".front");

    //添加所有.front div下的img
    for(var i=1; i<=23; i++) {

        //创建一个新的img标签
        var newImgBack = new Image();
        var newImgFront = new Image();
        //修改标签src属性
        newImgFront.src = "img/icon"+i+".jpg";
        // console.log(newImgBack);
        front[i-1].appendChild(newImgFront); 
        back[i-1].appendChild(newImgBack);  
    }
    //当鼠标hover wrapper div标签是异步添加.back下的图片
    wrapper.onmouseenter = function() {
        
        for(var i=0; i<=23; i++) {
            var num = i + 24;
            var img = document.querySelectorAll(".back img");
            img[i].src = "img/icon"+num+".jpg";
        }

    }

    btnRefresh.onclick = function() {
        iconRefresh.style.transition = ".3s linear";
        iconRefresh.style.transform = "rotate("+360*clickTimes+"deg)";

        for(var i=0; i<len; i++) {
            var colNum = parseInt(i / lineCount);
            var rowNum = i % lineCount;
            var delayTime = (colNum + rowNum) * 100;

            items[i].style.transition = ".3s "+delayTime+"ms linear";
            items[i].style.transform = "rotateY("+180*clickTimes+"deg)"
        }
        clickTimes++;
    }
}