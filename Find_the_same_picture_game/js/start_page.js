const cards = [
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="1" class="back" style="background-image: url(./img/0001.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="2" class="back" style="background-image: url(./img/0002.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="3" class="back" style="background-image: url(./img/0003.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="4" class="back" style="background-image: url(./img/0004.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="5" class="back" style="background-image: url(./img/0005.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="6" class="back" style="background-image: url(./img/0006.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="7" class="back" style="background-image: url(./img/0007.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="8" class="back" style="background-image: url(./img/0008.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="9" class="back" style="background-image: url(./img/0009.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="10" class="back" style="background-image: url(./img/0010.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="11" class="back" style="background-image: url(./img/0011.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="12" class="back" style="background-image: url(./img/0012.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="13" class="back" style="background-image: url(./img/0013.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="14" class="back" style="background-image: url(./img/0014.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="15" class="back" style="background-image: url(./img/0015.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div data-id="16" class="back" style="background-image: url(./img/0016.jpg);"></div>',
];

const HTMLLIST = ['<div class="box box1"><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div></div><div class="box box2"><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div></div><div class="box box3"><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div></div><div class="box box4"><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div></div><div class="box box5"><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div></div><div class="box box6"><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div></div><div class="box box7"><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div></div><div class="box box8"><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div><div class="flipBox"><div class="main-imgbox"></div></div></div>'];

let gameLevel = '';

// 난이도 버튼 선택시 강조효과 클래스 만들기!!
// html에 자바스크립트 연결하기!!!!
// 카드 생성을 어떻게 할지 결정!

// 메인페이지 Start! 버튼 클릭 이벤트 핸들러
document.getElementById("openModal").addEventListener("click", (e) => {
  const $modal = document.querySelector(".container .modal");
  // 클릭 시 모달창의 display를 block으로!
  $modal.style.display = "block";
});

// 모달창의 X 버튼 클릭 이벤트 핸들러
document.getElementById("closeModal").addEventListener("click", (e) => {
  const $modal = document.querySelector(".container .modal");
  // 클릭 시 모달창의 display를 none으로!
  $modal.style.display = "none";
});
const level = { level: high };
// 난이도 선택 버튼 클릭시 강조 효과
document.querySelector(".levelBtn").addEventListener("click", (e) => {
  // 버블링효과로 인해 버튼 옆의 공간을 클릭해도 이벤트 발생 X
  if (!e.target.matches(".levelBtn button")) return;

  // 1. 버튼 클릭시 모든 버튼의 강조 효과 제거
  for (let $level of [...document.querySelector(".levelBtn").children]) {
    $level.classList.remove("test");
  }
  // 2. 클릭한 버튼만 강조 효과 주기 (클래스 이름과 효과는 다시 설정)
  e.target.classList.add("test");

  // 레벨에 따른 카드 갯수 설정
  choice = selectLevel(e.target);
  gameLevel = e.target.id;
});

// 레벨에 따른 카드 갯수 설정
// 난이도에 따른 게임페이지에 카드 갯수 표시
// 카드를 어떻게 추가, 제거 할지 정하면 다시 만들기로
const $mainContents = document.getElementById("main-contents");


function selectLevel(level) {
  $mainContents.innerHTML = HTMLLIST[0];
  const $box1 = document.querySelector(".box1");
const $box2 = document.querySelector(".box2");
const $box3 = document.querySelector(".box3");
const $box4 = document.querySelector(".box4");
  const $totalCardNum =
    document.getElementById("header-contents").lastElementChild
      .lastElementChild;

  if (level.id === "high") {
    
    // console.log('상 난이도 선택');
    $totalCardNum.textContent = 32;
  } else if (level.id === "mid") {
    
    // console.log('중 난이도 선택');
    $totalCardNum.textContent = 24;
    $mainContents.removeChild($box1);
    $mainContents.removeChild($box2);
  } else {
    
    // console.log('하 난이도 선택');
    $totalCardNum.textContent = 16;
    $mainContents.removeChild($box1);
    $mainContents.removeChild($box2);
    $mainContents.removeChild($box3);
    $mainContents.removeChild($box4);
  }
}

// 시작 버튼 클릭 이벤트 핸들러
document.querySelector(".startBtn").addEventListener("click", (e) => {
  const $nickNameInput = document.getElementById("nickName");
  const $levelBtn = [...document.querySelector(".levelBtn").children];
  //  닉네임 미입력 or 10글자 초과시 경고창 표시
  if ($nickNameInput.value.trim() === "") {
    return alert("닉네임을 입력해 주세요.");
  } else if ($nickNameInput.value.trim().length > 10) {
    return alert("닉네임을 10글자 이하로 입력해 주세요.");
  } else {
    for (let $level of $levelBtn) {
      // 난이도를 선택 안하면 경고창 표시
      if ($level.classList.contains("test")) {
        // 닉네임 조건 만족 and 난이도 선택 시
        // 게임페이지가 나타나도록, 닉네임을 게임페이지에 표시
        document.querySelector(".container").style.display = "none";
        document.getElementById(
          "header-contents"
        ).firstElementChild.lastElementChild.textContent = $nickNameInput.value;
        $nickNameInput.value = "";
        // 카드 랜덤 배치 함수
        randomCards(gameLevel);
        // 게임 시작 시 카드 전체를 뒤집어 보여주고 다시 뒤집음
        filpCardAll();
        return;
      }
    }
    alert("난이도를 선택해 주세요.");
  }
});

// 게임 시작 버튼 클릭시, 0.5초뒤 카드 뒤집기 이후 2초뒤 다시 뒤집기
function filpCardAll() {
  let $cards = [...document.querySelectorAll(".main-imgbox")];
  setTimeout((e) => {
    for (i = 0; i < $cards.length; i++) {
      $cards[i].style.transform = "rotateY(180deg)";
    }
  }, 500);
  setTimeout((e) => {
    for (i = 0; i < $cards.length; i++) {
      $cards[i].style.transform = "rotateY(0deg)";
    }
  }, 2500);
}
// 카드 랜덤 배치 함수 모음
function randomCards() {
  let temp = [], num = [], originalCards = [];
  temp = cardNumber(gameLevel);

  num = cardIndex(gameLevel);

  originalCards = shuffleCard(temp, num);

  random(originalCards);
}

//상, 중, 하 난이도에 따른 카드 개수 설정 후 배열에 담기
function cardNumber() {
  // 난이도에 따른 카드 개수 설정 상 = 32개 중 = 24개 하 = 16개 및 그에 따른 카드를 2개씩 배열에 저장
  if (gameLevel === "high") {
    // 상
    return  [...cards.slice(), ...cards.slice()];
  } else if (gameLevel === "mid") {
    // 중
    return [...cards.slice(0, 12), ...cards.slice(0, 12)];
  } else if (gameLevel === "low") {
    // 하
    return [...cards.slice(0, 8), ...cards.slice(0, 8)];
  }
}
// 카드 랜덤 배치를 위한 인덱스 번호 랜덤으로 뽑아 배열에 담기
function cardIndex(gameLevel) {
  let total = [];
  let num = [];
  let i = 0;
  // 난이도 선택에 따라 인덱스 번호 범위 설정
  // 상 = 32개 중 = 24개 하 = 16개
  // 난이도에 따른 번호를 배열에 담고 랜덤으로 배열에서 가져와 다른 배열에 뽑은 순서로 배치
  if (gameLevel === "high") {
    for (let i = 0; i < 32; i++) {
      total[i] = i;
    }
    while (i < 32) {
      let random = Math.floor(Math.random() * total.length);
      if (!num.includes(total[random])) {
        // 중복카드 배열에 넣지않기
        num.push(total[random]);
        i++;
      }
    }
    return num;
  } else if (gameLevel === "mid") {
    for (let i = 0; i < 24; i++) {
      total[i] = i;
    }
    
    while (i < 24) {
      let random = Math.floor(Math.random() * total.length);
      if (!num.includes(total[random])) {
        // 중복카드 배열에 넣지않기
        num.push(total[random]);
        i++;
      }
    }
    return num;
  } else if (gameLevel === "low") {
    for (let i = 0; i < 16; i++) {
      total[i] = i;
    }
    while (i < 16) {
      let random = Math.floor(Math.random() * total.length);
      if (!num.includes(total[random])) {
        // 중복카드 배열에 넣지않기
        num.push(total[random]);
        i++;
      }
    }
    return num;
  }
}



// 카드를 배열에 랜덤 배치
function shuffleCard(temp, num) {
  let cardsList = temp.slice();
  for (i = 0; i < temp.length; i++) {
    cardsList[parseInt(num[i])] = temp[i];
  }
  return cardsList;
}

// 랜덤 배치된 카드들을 html에 채워넣는 함수.
function random(originalCards) {
  const $cardsBox = [...document.querySelectorAll(".main-imgbox")];
  for (i = 0; i < originalCards.length; i++) {
    $cardsBox[i].innerHTML = originalCards[i];
  }
}

