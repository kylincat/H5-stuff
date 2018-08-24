window.onload = function() {
    var btnRefresh = document.getElementById("btnRefresh");
    var iconRefresh = document.querySelector(".iconRefresh");
    var clickTimes = 1;
    var items = document.querySelectorAll(".items");
    // console.log(items);
    var len = items.length;
    var lineCount = 6;

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