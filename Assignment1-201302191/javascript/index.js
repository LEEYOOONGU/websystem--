//=============================================변수설정==============================================================
section2 = document.getElementById("section2");
section3 = document.getElementById("section3");
submitbutton = document.querySelector("#uploadtext");
input = document.getElementById("inputext");
var answer = Math.floor(Math.random()*20)+1;
section3.style.display = "none";
//==========================================텍스트박스 클리어=========================================================
function clear(){
        input.value = "";
}
//=========================================엔터로 값제출==============================================================
function pressEnter(){
    if(event.keyCode ==13){
        calculate(input.value);
    }
}
//==========================================입력값계산_closure========================================================
function calculate(x){
    section3.style.display = "block";
    function decision() {
        if (x < answer) {
            section3.style.backgroundColor = 'skyblue';
            section3.innerHTML = "The answer is higher than " + x + "!";
            clear();
        } else if (x > answer) {
            section3.style.backgroundColor = 'skyblue';
            section3.innerHTML = "The answer is smaller than " + x + "!";
            clear();
        } else if (x == answer) {
            section3.style.backgroundColor = 'skyblue';
            section3.innerHTML = "correct!";
            location.href = "./quiz2.html";
        } else {
            section3.style.backgroundColor = 'red';
            section3.innerHTML = "You entered non-numeric value!";
            clear();
        }
    }
    return decision();
}
//=================================================countdown========================================================
add =(function (){
    var counter = 30;
    return function () { return counter -=1;
    }
})();
function myfunction(){
    section2.innerHTML = "Countdown<br><br>"+add();
}
//==================================================================================================================
//=======================================함수실행===================================================================
function Start(){
    myfunction();
    var timerID =setInterval(myfunction,1000);
    function failed(){
        function failure(){
            section2.innerHTML= "failed!";
            clearInterval(timerID);
            location.href = "./fail.html";
        }
        setTimeout(failure,30000);
    }
    failed();
}
Start();

