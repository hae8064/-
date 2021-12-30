//가위바위보 스코어 점수
let yourscore = document.getElementById("yourscore");
let comscore = document.getElementById("comscore");

//reset 버튼
const reset = document.querySelector("#reset");

//가위바위보 결과 이미지
let you_img = document.getElementById("rounded float-left1");
let com_img = document.getElementById("rounded float-right2");

//묵찌빠 결과 출력 (Text)
const result_you = document.querySelector("#result_you");
const result_com = document.querySelector("#result_com");

const btnRock = document.getElementsByClassName("rock");
const btnSci = document.getElementsByClassName("scissors");
const btnPap = document.getElementsByClassName("paper");

//이미지 전체 배열
const images = ["./images/paper.png", "./images/rock.jpg", "./images/scissors.jpg"];

btnRock[0].addEventListener("click", clickRock);
btnSci[0].addEventListener("click", clickSci);
btnPap[0].addEventListener("click", clickPap);
reset.addEventListener("click", clickReset);

//묵버튼 눌렀을 때 
function clickRock(){
    const randNum = Math.floor(Math.random() * 3);
    //컴퓨터가 빠를 낼 때
    if(randNum === 0){
        comscore.innerText++;
        result_com.innerText = "보"
        alert("패배 하였습니다.");
    }
    else if(randNum === 1){
        alert("비겼습니다.");
        result_com.innerText = "바위"
    }
    else{
        yourscore.innerText++;
        alert("승리 하였습니다.");
        result_com.innerText = "가위"
    }
    result_you.innerText = "바위";
    you_img.src = "./images/rock.jpg";
    com_img.src = images[randNum];
    console.log("묵으로변경!");
}

//가위 버튼을 눌렀을 때
function clickSci(){
    const randNum = Math.floor(Math.random() * 3);
    if(randNum === 0){
        yourscore.innerText++;
        alert("승리 하였습니다.");
        result_com.innerText = "보"
    }
    else if(randNum === 1){
        comscore.innerText++;
        alert("패배 하였습니다.");
        result_com.innerText = "바위"
    }
    else{
        alert("비겼습니다.");
        result_com.innerText = "가위"
    }

    result_you.innerText = "가위";
    you_img.src = "./images/scissors.jpg";
    com_img.src = images[randNum];
    console.log("찌!!!");
}

//보 버튼을 눌렀을 때
function clickPap(){
    const randNum = Math.floor(Math.random() * 3);
    if(randNum === 0){
        alert("비겼습니다.");
        result_com.innerText = "보"
    }
    else if(randNum === 1){
        yourscore.innerText++;
        alert("승리 하였습니다.");
        result_com.innerText = "바위"
    }
    else{
        comscore.innerText++;
        alert("패배 하였습니다.");
        result_com.innerText = "가위"
    }

    result_you.innerText = "보";
    you_img.src = "./images/paper.png";
    com_img.src = images[randNum];
    console.log("빠!!!");
}

//reset버튼을 눌렀을 때
function clickReset(){
    history.go(0);
}