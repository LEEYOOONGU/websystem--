//------------------------초기화-----------------------------------------
textcount =  0;
imagecount = 0;
ispause = true;
timer = 0;
sec = 0;
min = 0;
hr = 0;
var aside1 = document.getElementById(elementId = "aside1");
var aside2 = document.getElementById(elementId = "aside2");
var footer = document.getElementById(elementId="footer1");
var AppendTextbtn = document.querySelector("#uploadtext");
var uploadimgbtn = document.querySelector(selectors= "#uploadfile");
aside2.innerHTML = "Number of Text memo<br>" + textcount;
aside1.innerHTML = "Number of image memo<br>" + imagecount;
function counter(){
     if(ispause == true) {
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
        }
        if (min == 60) {
            min = 0;
            hr++;
        }
        if (hr == 24) {
            hr = 0;
        }
        if (hr == 0 && min == 0) {
            footer.innerHTML = "마지막 메모 :" + sec + "초 전<br>" + "Implemented by LeeYoonGu, 201320191"
        } else if (hr == 0) {
            footer.innerHTML = "마지막 메모 :" + min + "분 " + sec + "초 전<br>" + "Implemented by LeeYoonGu, 201320191"
        } else {
            footer.innerHTML = "마지막 메모 :" + hr + "시 " + min + "분 " + sec + "초 전<br>" + "Implemented by LeeYoonGu, 201320191"
        }
    }
}
function clear(){
    sec = 0;
    min = 0;
    hr = 0;
}

//---------------------- 파일 업로드 및 타이머 함수 ----------------------------------
AppendTextbtn.addEventListener("click",AppendText);
uploadimgbtn.addEventListener("change",AppendImage);
function AppendText() {
    ispause = true;
    var parentSec = document.querySelector("#parentSec");
    var text = document.createElement("text");
    text.setAttribute("id","txt");
    text.classList.add("margin-bottom");
    text.innerHTML = document.getElementById(elementId = "inputext").value;
    parentSec.appendChild(text);
    textcount++;
    aside2.innerHTML = "Number of Text memo<br>" + textcount;
    clear();
    if(timer !=0)
        clearInterval(timer);
    timer = setInterval(counter,1000);
}
function AppendImage() {
    ispause = true;
    var fr = new FileReader();
    var img = document.createElement("img");
        img.setAttribute('id', 'margin');
        var parentSec = document.querySelector("#parentSec");
        fr.onload = function () {
            img.src = fr.result;
            img.classList.add("margin-bottom");
        parentSec.appendChild(img);
    };
    fr.readAsDataURL(event.target.files[0]);
    imagecount++;
    aside1.innerHTML = "Number of Image memo<br>" + imagecount;
    clear();
    if(timer !=0)
        clearInterval(timer);
    timer = setInterval(counter, 1000);

}
//-------------------------------------------------------------------------

//------------------------ aside 및 footer delete 함수 ---------------------------------

document.querySelector("#deleteall").addEventListener("click",delete_all);
function delete_all(){
    timecounter =0;
    while(true) {
        var ig = document.getElementById(id = "margin");
        if(ig==null)
            break;
        else
            ig.remove();
    }
    while(true) {
        var tx = document.getElementById(id = "txt");
        if(tx==null)
            break;
        else
            tx.remove();
    }

    var timer = setInterval(counter, 1000);
    clearInterval(timer);
    ispause = false;
    imagecount = 0;
    textcount = 0;
    aside2.innerHTML = "Number of Text memo<br>" + textcount;
    aside1.innerHTML= "Number of Image memo<br>" + imagecount;
    footer.innerText = "Implemented by LeeYoonGu, 201320191";
}
//--------------------------------------------------------------------------------

