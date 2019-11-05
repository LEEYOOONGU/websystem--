var article = document.getElementById("article");
article.style.font = "bold 40px italic";
article.style.color = "red";
article.innerHTML = "<br>YOU FAILED<Br>";
isfalse = true;
count = 0;
postop = [];
posleft = [];
function randomps(x) {
    for (var i = 0; i <= 4; i++) {
        x[i] = Math.floor(Math.random()*700); //전체크기가 700px*700px 인 화면이라 가정
        for (var j = 0; j < i; j++) {
            if (x[i] == x[j]) {
               // 완전히 겹치지 않게 생성
                i--;
                break;
            }

        }
    }
    var px = "px";
    for(var k = 0; k<=4;k++){
        x[k] = x[k]+px;
    }

}
randomps(postop);
randomps(posleft);
//무작위로 정해진 위치
function AppendImage() {
    if(count>=5) {
        isfalse = false;
    }
    if(isfalse == true) {
    var img = document.createElement("img");
    img.style.position = "absolute";
    img.style.width = "150px";
    img.style.height = "150px";
    img.style.margin = "30px";
    img.style.padding = "30px";
    img.style.left = posleft[count];
    img.style.top= postop[count];
    img.src = "./image/explosion.svg";
    document.body.appendChild(img);

    function clear() {
        img.style.display = 'none';
    }

    setTimeout(clear, 5000);
    count++;
}
}
timerID = setInterval(AppendImage,350);