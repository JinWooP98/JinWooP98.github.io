// ===== 제한시간 2분 설정하기 ===== //
// 제한시간 안에 게임 클리어시
// 시간 초과 or 다 뒤집었을 경우 성공 여부에 따른 (성공, 실패)모달창 생성
// 기본시간 02:00분, 00:00분이 될 때까지 매 초당 1초 줄어들게 하기


//제한시간 태그 위치 전역변수
const $headerContents = document.getElementById("header-contents");

const $timeText = document.querySelector("#header-contents .time-text");

const $time = document.querySelector("#header-contents .time");

let gameStart; // 초기화시 시간초기화해줄 변수


// 2분(120초에서 0초)까지 시간이 줄어드는 함수
function timer () {
    let time = 120000; //1초 1000, 120초 120000
    let min = 2; // 분 기본시간 2분
    let sec = 60; // 초 기본시간 60초
    $time.textContent = `0${min} : 00`; // 기본시작시간 입력하기

    gameStart = setInterval (()=> {
        time = time - 1000; // 시간 (매 초당 1000씩 줄어듬)
        
        min = time / 60000; // 분 (총 time 2분 120000) / (1분 60000)
        
        // sec = time / 2000; // 초 (총 time 2분 120000) / 1초 (2000)
        if (min > 0 && sec === 0) { sec = 60;}
        if (sec > 0) { // 초가 0보다 클 경우 -1씩 줄어든다
            sec = sec -1;
            $time.textContent = `0${Math.floor(min)} : ${Math.floor(sec)}`;
            if (sec < 10 && min > 0 ) $time.textContent = `0${Math.floor(min)} : 0${Math.floor(sec)}`;
            if (min < 1 && sec < 11) { // 0분이면서 초가 0-9사이일때 앞에 0붙여서 자리수맞추기 조건
                    $time.style.color = 'red';
                    $timeText.style.color = 'red';
                    $time.classList.toggle("scale");
                }
            }
        if (Math.floor(min) === 0 && sec === 0) { // 0분이면서 0초일때 초기화 조건
            sec = 60;
            min = 2;
            $time.textContent = `0${min} : 00`; // 타이머 텍스트 초기화
            $time.style.color = 'rgb(241, 194, 91)';
            $time.classList.remove("scale");
            $timeText.style.color = 'rgb(241, 194, 91)';
            $BadModal.style.zIndex = 1500; // 창 위치 초기화
            $BadModal.style.display = 'block';
            clearInterval(gameStart); // 0초일때 타이머 종료
        } 
    }, 1000); // 1초마다 타이머 실행
}


// ===== 시작버튼 누르면 타이머 시작 이벤트 ===== //
// 시작버튼 태그 위치 전역변수
const $startBtn = document.querySelector(".startBtn");


// 시작 버튼 눌렀을 때 게임페이지 타이머 이벤트효과
$startBtn.addEventListener ("click",()=> {
    clearInterval(gameStart); // 0초일때 타이머 종료
    $time.textContent = `02 : 00`; // 기본시작시간 입력하기
    setTimeout(() => {timer()}, 3000);
  
});


// ===== 타이머 시간초과시 결과모달창 이벤트 ===== //
// 잘했을 때 불러올 게임결과 태그위치 전역변수
const $GoodModal = document.querySelector("#modal .good"); // 잘했을때

// 못했을 때 불러올 게임결과 태그위치 전역변수
const $BadModal = document.querySelector("#modal .bad"); // 못했을때


// ===== 나가기 버튼 누르면 메인페이지로 이동 ===== //
// 나가기버튼 태그 위치 전역변수
const $close = document.querySelector(".close");

//메인페이지 태그 위치 전역변수
const $StartContainer = document.querySelector(".container"); // 메인 페이지
const $modalNamdAndDifficulity = document.querySelector(".container .modal"); // 닉네임, 난이도선택 페이지
const $GameContainer = document.getElementById("container"); // 게임 페이지

// $GoodModal // 잘했을때 페이지
// $BadModal // 못했을때 페이지


// 시작페이지로 갈수있는 인덱스값 원상복구 함수
const closeAndStart = () => {
    $StartContainer.style.zIndex = 1500;
    $StartContainer.style.display = 'block';

    $modalNamdAndDifficulity.style.zIndex = 1400;
    $modalNamdAndDifficulity.style.display = 'none';

    $GameContainer.style.zIndex = 1300;

    $GoodModal.style.zIndex = 1200;
    $GoodModal.style.display = 'none';

    $BadModal.style.zIndex = 1100;
    $BadModal.style.display = 'none';
};


// 나가기 버튼 눌렀을 때 시작페이지로 이동하는 이벤트효과
cclose = $close.addEventListener('click', () => { // 나가기 버튼 눌렀을 때
    closeAndStart(); // 시작페이지로 나가기
    clearInterval(gameStart); // 타이머 초기화
    let $cards = [...document.querySelectorAll(".main-imgbox")];
    for (i = 0; i < $cards.length; i++) {
    $cards[i].style.transform = "rotateY(0deg)";
    }
});


// ===== 다시하기 버튼 누르면 닉네임페이지로 이동 ===== //
// 다시하기버튼 태그 위치 전역변수
const $replayG = document.querySelector(".replayG");

const $replayB = document.querySelector(".replayB");

//닉네임입력 태그 위치 전역변수
// const $modalNamdAndDifficulity // 닉네임, 난이도선택 페이지
// const $GameContainer // 게임 페이지
// $GoodModal // 잘했을때 페이지
// $BadModal // 못했을때 페이지
// const $StartContainer // 메인 페이지


// 닉네임 입력창으로 갈수있는 인덱스값 원상복구 함수
const closeAndName = () => {
    $StartContainer.style.zIndex = 1400;
    $StartContainer.style.display = 'block';

    $modalNamdAndDifficulity.style.zIndex = 1500;
    $modalNamdAndDifficulity.style.display = 'block';

    $GameContainer.style.zIndex = 1300;

    $GoodModal.style.zIndex = 1200;
    $GoodModal.style.display = 'none';

    $BadModal.style.zIndex = 1100;
    $BadModal.style.display = 'none';
};


// 다시하기 버튼 눌렀을 때 닉네임입력페이지로 이동하는 이벤트효과
// 잘했을때
$replayG.addEventListener('click', () => {
    clearInterval(gameStart); // 타이머 초기화
    closeAndName();
    let $cards = [...document.querySelectorAll(".main-imgbox")];
    for (i = 0; i < $cards.length; i++) {
    $cards[i].style.transform = "rotateY(0deg)";
    }
 });

// 못했을때
$replayB.addEventListener('click', () => {
    clearInterval(gameStart); // 타이머 초기화
    closeAndName();
    let $cards = [...document.querySelectorAll(".main-imgbox")];
    for (i = 0; i < $cards.length; i++) {
    $cards[i].style.transform = "rotateY(0deg)";
    }
 });