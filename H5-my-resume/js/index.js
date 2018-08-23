window.onload = function () {

    initPageSite();
    
    var menuDom = document.querySelector("#menu");
    var menuItems = document.querySelectorAll("#menu a");
    var currentIndex = 0;
    menuDom.onclick = function(event) {
        // console.log(currentIndex);
        //第一次点击currentindex的值为0，也就是为初始值，如果点击了page1后，在点击page2，这里的currentindex为1
        menuItems[currentIndex].classList.remove("active");
        if(event.target.href) {

        //这里的currentIndex表示从event.target.href获取，也就是从a标签里的href得到的
        currentIndex = event.target.href.substring(event.target.href.length - 1);
        menuItems[currentIndex].classList.add("active");
        }
        
        page0Animation();
        page1Animation();
    }

    // var lastWheelTime = Date.now();
    window.onmousewheel = function(event) {
        // var currentWheelTime = Date.now();
        // var intervalTime = currentWheelTime - lastWheelTime;
        // console.log(intervalTime);
        menuItems[currentIndex].classList.remove("active");

        if(event.wheelDelta < 0 && currentIndex < 2){
            
            ++currentIndex;
            
        }
        if(event.wheelDelta > 0 && currentIndex > 0){
            --currentIndex;
            
        }
        menuItems[currentIndex].click();
        menuItems[currentIndex].classList.add("active");

        lastWheelTime = Date.now();

        page0Animation();
        page1Animation();
    }


    page0Animation();

    function page0Animation() {
        var page0Dom = document.querySelectorAll("#page0 div");
        if(currentIndex == 0){
            page0Dom.forEach(function(pageDom){
                pageDom.classList.add("page0-show")
            });
        }else{
            // 当页面不在page0时要去掉page0-show，
            // 否则下一次点击page0时，page0-show在上次点击时已经添加到样式了，这时也就没有动画效果了
            page0Dom.forEach(function(pageDom){
                pageDom.classList.remove("page0-show")
            });
        }
    }

    

    function page1Animation() {
        var page1Dom = document.querySelectorAll("#page1 .box");

        if(currentIndex == 1) {
            page1Dom.forEach(function(pageDom) {
                pageDom.classList.add("page1-show")
            });
        }else { 
            // 当页面不在page1时要去掉page1-show，
            // 否则下一次点击page1时，page1-show在上次点击时已经添加到样式了，这时也就没有动画效果了
            page1Dom.forEach(function(pageDom) {
                pageDom.classList.remove("page1-show")
            });
        }
    } 

    activeItem();

    function activeItem(){
        if(location.href.indexOf("#page") > 0) {
            currentIndex = location.href.substring(location.href.length - 1);
        }
        menuItems[currentIndex].classList.add("active");
        page1Animation();//当刷新page1时能够实现动画效果
    }

    function initPageSite() {
        var pageList = document.querySelectorAll("#pages li");
        pageList.forEach(function(pageDom){
            pageDom.style.height = innerHeight + "px";
        })
    }
}