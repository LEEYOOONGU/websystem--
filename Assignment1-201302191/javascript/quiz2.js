count =5;
answernum =0;
section1 = document.getElementById("article1");
section2 = document.querySelector("#article2");
section1.innerHTML= "You have only 5 chances<br><br><br>";
const imgArray = ["./image/bee.svg","./image/beetle.svg","./image/butterfly.svg","./image/dragonfly.svg","./image/fly.svg","./image/slug.svg","./image/snail.svg","./image/worm.svg"];
const txtArray = ["bee","beetle","butterfly","dragonfly","fly","slug","snail","worm"];
answer = [];
for(var i = 0 ; i<=2; i++){
    answer[i] = Math.floor(Math.random()*8);
    for(var j = 0; j<i;j++){
        if(answer[i] == answer[j])
        {
            i--;
            break;
        }
    }
}
//======================================APPNED RANDOM IMAGE=================================================================================
function AppendImage(x,y) {
    var img = document.createElement("img");
    img.setAttribute('id',y);
    img.style.width = "150px";
    img.style.height = "150px";
    img.style.margin = "30px";
    img.style.padding = "30px";
    var newSrc = imgArray[y];
    img.src = newSrc;
     x.appendChild(img);
}
for(let o =0 ; o<=2; o++) {
    AppendImage(section2, answer[o]);
}
lineb = document.getElementById(answer[2]);
lineb.insertAdjacentHTML("afterend", "<br>"); // 사진과 버튼사이 공백
//===================================================================================================================
function AppnedButton(x,y,z){
    var btn = document.createElement("Button");
    btn.innerText = y;
    btn.style.margin = "15px";
    btn.setAttribute("id",z);
    btn.setAttribute("size","15px");
    if(z !== answer[0] && z !== answer[1] && z !== answer[2]){
        btn.addEventListener("click",function(){
        submit(z);
        });
    }
    else{
        btn.addEventListener("click",function(){
            btn.disabled = true;
            submit(z);
        });
    }
    x.appendChild(btn);
}
for(let l =0; l<=7; l++) {
    AppnedButton(section2,txtArray[l],l);
}

//======================================정답확인======================================
function submit(x){
    var ans = [answer[0],answer[1],answer[2]];//정답과 제출된
    function check(){
        if (x !== ans[0] && x !== ans[1] && x !== ans[2])
        {
            count--;

            section1.innerHTML= "You have only "+ count +" chances<br><br><br>";
            if(count == 0) {
                location.href = "./fail.html";
            }
        }
        else
        {
            answernum++;
        }
    }
    return check();
}
function success(){
    if(answernum ==3) {
        location.href = "./success.html";
    }
}
timerID = setInterval(success,3000);