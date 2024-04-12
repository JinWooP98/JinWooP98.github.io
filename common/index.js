let $gameBtn = document.querySelector('.signBoard').firstElementChild;
let $gameSeletBtn = document.querySelector('.show_game_img1');
let $lankBtn = document.querySelector('.signBoard').lastElementChild;
// 게임 버튼 클릭시 게임 목록 모달창 나타나는 이벤트 핸들러
$gameBtn.addEventListener('click', e => {
  let $selectGame = document.querySelector('.show_wrap1');
  $selectGame.style.display = 'block';
})

// 게임 이미지 외 다른 배경 클릭시 게임 목록 모달창이 사라지는 이벤트 핸드러
document.querySelector('.show_wrap1').addEventListener('click', e => {
  let $selectGame = document.querySelector('.show_wrap1');
  $selectGame.style.display = 'none';
})


// 게임 선택 이미지에 마우스 오버, 아웃시 이벤트 핸들러
// 마우스 오버시 border 빨간색, 크기 커지게
// 마우스 아웃시 원래 스타일로 돌아오기
$gameSeletBtn.addEventListener('mouseover', e => {
  let $img1 = document.querySelector('.game_img1 img');
  let $img2 = document.querySelector('.game_img2 img');
  if(e.target.matches('.game_img1 img')) {
    $img1.style.scale = '1.1';
    $img2.style.scale = '0.9';
    $img1.style.transition = '1s';
    $img1.style.border = '5px solid  red'
  } else if (e.target.matches('.game_img2 img')) {
    $img2.style.scale = '1.1';
    $img1.style.scale = '0.9';
    $img2.style.transition = '1s';
    $img2.style.border = '5px solid  red'
  }
})

$gameSeletBtn.addEventListener('mouseout', e => {
  let $img1 = document.querySelector('.game_img1 img');
  let $img2 = document.querySelector('.game_img2 img');
  if(e.target.matches('.game_img1 img')) {
    $img1.style.scale = '1.0';
    $img2.style.scale = '1.0';
    $img1.style.transition = '1s';
    $img1.style.border = '3px solid  #fff'
  } else if (e.target.matches('.game_img2 img')) {
    $img1.style.scale = '1.0';
    $img2.style.scale = '1.0';
    $img2.style.transition = '1s';
    $img2.style.border = '3px solid  #fff'
  }
})
// 랭킹버튼 클릭시 랭킹 모달창 보이게하는 이벤트 핸들러
$lankBtn.addEventListener('click', e => {
  document.querySelector('.show_wrap2').style.display = 'block';
})

// 랭킹표시 페이지 외 다른 부분 클릭시 랭킹 모달창 안보이게 하는 이벤트 핸들러
document.querySelector('.show_wrap2').addEventListener('click', e => {
  let $lank = document.querySelector('.show_wrap2');
  if(e.target.matches('.game_imgs div')) return;
  $lank.style.display = 'none';
})