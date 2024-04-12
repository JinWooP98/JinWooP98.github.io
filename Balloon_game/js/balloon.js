// ======================== 전역 변수 영역 ==========================
//스타트 버튼
const $readyBtn = document.querySelector(".ready_btn");
// 풍선 나타는 공간
let $gameReadyWrap = document.querySelector(".game_ready_wrap");
//풍선 이미지 공간
let $balloon_wrapYj = document.querySelector(".balloon_wrap");
// 게임 하단 클릭 풍선갯수 및 타이머 부분
let $balloonFooter = document.querySelector(".balloon_footer");
//풍선 이미지 공간2
const $balloonWrap = document.querySelector(".balloon_wrap");
//승리 모달창
let $gameWinModal = document.querySelector(".game_win_modal");
//메인 레벨 버튼
let $readyLevel = document.querySelector(".ready_level");
//레벨 버튼 상중하
let $levelModal = document.querySelector(".level_modal");
//재시작 버튼 
let $retry = document.querySelector(".retry");

//풍선 레벨 기준
let balloonAmount = 10;
let num = balloonAmount;


// ======================== 함수 정의 영역 ==========================
const $text = document.querySelector(".typing .text");

// 글자 모음
const letters = [
  "!",
  "BALLOON POP!!", 
  "BALLOON POP!!"
];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
const typing = async () => {  
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift(); 
  }
  
  // 잠시 대기
  await wait(800);
  
  // 지우는 효과
  remove();
}

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    
    letter.pop();
    $text.innerHTML = letter.join(""); 
  }
  
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i+1] ? 0 : i + 1;
  typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);
//텍스트 타이핑
// const content = "BALLOON POP!!";
// const text = document.querySelector(".text");
// let i = 0;

// function typing(){
//     if (i < content.length) {
//     let txt = content.charAt(i);
//     text.innerHTML += txt;
//     i++;
//     }
// }
// setInterval(typing, 200)


//게임화면 나타내기
function startGame() {
  $gameReadyWrap.classList.add("hidden");
  $balloon_wrapYj.classList.remove("hidden");
  $balloonFooter.classList.remove("hidden");
  gameTimer();
}

//게임 타이머 멈추기
function stopTimer() {
  clearInterval(timerInterval); 
}
//게임이 이겼으면 타이머 멈추기 호출
function gameWin() {
  stopTimer(); 
}


//게임 타이머
function gameTimer() {
  let gameTime = 20;
  let timeLeft = gameTime;
  let $timer = document.querySelector(".timer");

  function updateTimer() {
    $timer.innerHTML = `${timeLeft}`;
  }

  updateTimer();
  timeLeft--;

  timerInterval = setInterval(function () {
    updateTimer();
    timeLeft--;
    if (timeLeft === -1) {
      clearInterval(timerInterval);
      gameWinModal();
      timeLeft--;
    }
  }, 1000);
}


//풍선 생성
function makeBalloon() {
  for (let j = 1; j <= num; j++) {
    const top = Math.floor(Math.random() * 600);
    const left = Math.floor(Math.random() * 700);
    const $newDiv = document.createElement("div");
    $newDiv.classList.add("balloon");
    let randomColor = Math.floor(Math.random() * 5) + 1;
    $newDiv.innerHTML = `
          <div class="balloon" style="outline: 3px solid transparent; z-index: ${
            num - j
          }; top: ${top}px; left: ${left}px;">
            <img src="img/balloon_${randomColor}.png" alt="balloon" class="balloon_img">
            <span class="balloon_number">${j}</span>
          </div>
    `;
    $balloonWrap.appendChild($newDiv);
  }
}

//풍선 랜덤 위치
function balloonRandomArea(){
  let balloons = document.querySelectorAll(".balloon");
  for (let i = 0; i < balloons.length; i++) {
    balloons[i].style.top = `${top}px`;
  }
}


function gameWinModal() {
  $gameWinModal.classList.remove("hidden");
  const $score = document.querySelector(".click_number");
  if ($score.textContent < balloonAmount) {
    $gameWinModal.firstElementChild.textContent = "졌네??ㅋ";
    $gameWinModal.style.backgroundImage = "url('img/failure.jpg')";
    $gameWinModal.style.backgroundRepeat = "no-repeat";
    $gameWinModal.style.backgroundPosition = "center/cover";
  }
  else{
    $gameWinModal.style.backgroundImage = "url('img/win.jpg')";
    $gameWinModal.style.backgroundRepeat = "no-repeat";
    $gameWinModal.style.backgroundPosition = "center/cover";
  }
  $gameWinModal.addEventListener("click", (e) => {
    if (!e.target.matches(".retry")) return;
    location.reload();
  });
}


//풍선 클릭하면 사라지게 하고 클릭 카운트 저장
function balloonClickHide(){
  //1부터 클릭하면 풍선 사라지게 하는 코드
  let ballonRealCount = 1;
  $balloon_wrapYj.addEventListener("click", function (e) {
    if (!e.target.parentElement.matches(".balloon")) return;
    const userTarget = +e.target.parentElement.lastElementChild.textContent;
    if (ballonRealCount !== userTarget) return;
    ballonRealCount++;
    const $balloon = e.target.closest(".balloon");
    $balloon.classList.add("hidden");
    let score = +document.querySelector(".click_number").textContent;
    document.querySelector(".click_number").textContent = ++score;

    if (score === num) {
      setTimeout(() => {
        gameWinModal()
        gameWin();
      }, 100);
      return;
    }
  });
}

//레벨버튼을 클릭하면 레벨 모당창이 나오고 레벨 선택 
function levelModalShow(){
  $levelModal.classList.remove("hidden");
  levelSeletStart();
}

//레벨모달창에서 상중하 클릭
function levelSeletStart(){
  //레벨 모달 창 안에 있는 상 중 하 버튼을 클릭하면 
  //메인화면에 있는 상중하가 텍스트에 출력됨
  document.querySelector(".level_modal").onclick = (e) => {
    // 클릭한 버튼이 포함된 button를 탐색
    const $levelBtn = e.target.closest(".level_btn");
    //상중하 버튼 클릭했을 때 텍스트에 뿌려주는 부분
    let $levelText = document.querySelector(".level_text");
    if ($levelBtn.matches(".EASY")) {
      $levelText.textContent = "EASY";
      $levelModal.classList.add("hidden");
      balloonAmount = 10;
    } 
    else if ($levelBtn.matches(".NORMAL")) {
      $levelText.textContent = "NORMAL";
      $levelModal.classList.add("hidden");
      balloonAmount = 20;
    } 
    else if ($levelBtn.matches(".HARD")) {
      $levelText.textContent = "HARD";
      $levelModal.classList.add("hidden");
      balloonAmount = 30;
    }
    num = balloonAmount;

  };
}

// ============================  함수호출영역 ============================

//스타트 버튼 누루면 게임 시작
$readyBtn.addEventListener("click", function (e) {
  startGame();
  makeBalloon();
  balloonRandomArea();
  balloonClickHide();
  
});


//메인화면에 레벨버튼 클릭하면 상중하 모달창 나오는 부분 
$readyLevel.addEventListener("click", function (e) {
  levelModalShow();
});
