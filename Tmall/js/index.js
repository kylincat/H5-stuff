window.onload = function () {
    var btnRefresh = document.getElementById("btnRefresh");
    var iconRefresh = document.querySelector(".iconRefresh");
    var clickTimes = 1;
    var img3DList = document.querySelectorAll(".img-3d");
    var len = img3DList.length;
    var lineCount = 6;  

    btnRefresh.onclick = function() {
        iconRefresh.style.transition = ".3s linear";
        iconRefresh.style.transform = "rotate("+360*clickTimes+"deg)";

        for(var i = 0; i<len; i++) {
            var colNum = parseInt(i / lineCount);
            var rowNum = i % lineCount;
            var delayTime = (colNum + rowNum) * 100;

            img3DList[i].style.transition = ".3s "+delayTime+"ms linear";
            img3DList[i].style.transform = "rotateY("+180*clickTimes+"deg)";
        }

        clickTimes++;
    }
}