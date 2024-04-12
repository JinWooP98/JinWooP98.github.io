// 카드 뒤집기 전역변수
let flipCardCount = 0; // 카드 클릭시마다 뒤집힌 횟수 증가
let firstFlipCard; // 첫번째 뒤집은 카드
let secondFlipCard; // 두번째 뒤집은 카드
let exit = true; // 카드 뒤집을 수 있는 여부 확인
let isClear = 0; // 두 짝 맞추기 성공 횟수 증가

document.querySelector(".startBtn").addEventListener('click', e => {
  isClear = 0;
});
// 클릭시 카드 뒤집기, 뒤집은 카드 일치 불일치 확인
document.getElementById('main-contents').addEventListener( 'click', e => {

  // 2개의 카드가 불일치 할 경우 다시 뒤집히는 효과가 나기 전까지 클릭 이벤트 발생 X
  if(!exit) return;
  if(!e.target.matches('.front')) return;

  // 첫번째와 두번째 뒤집히는 카드 변수에 저장.
  if(flipCardCount === 0) firstFlipCard = e.target.nextElementSibling;
  if(flipCardCount === 1) secondFlipCard = e.target.nextElementSibling;

  // 뒤집히는 효과는 이벤트 타겟의 부모에게 주어야 함.
  const $test = e.target.parentElement;

  // 뒤집히는 효과 주기
  $test.style.transform = 'rotateY(180deg)';

  // 이벤트 발생때마다 뒤집힌 횟수 카운트 증가
  ++flipCardCount;

  // 뒤집힌 횟수가 2회가 되었을때 뒤집힌 두 카드가 일치한지 불일치 한지 확인
  if(flipCardCount === 2) {
    if(firstFlipCard.dataset.id !== secondFlipCard.dataset.id) {
      // 불일치 할 경우
      // 불일치 했을 때 클릭 이벤트가 실행되지 않게 exit를 false로 둠.
      exit = false;
      // 불일치 할 경우 0.9초 뒤에 카드가 다시 뒤집힘.
      setTimeout(() => {firstFlipCard.parentElement.style.transform = 'rotateY(0deg)'}, 900);
      setTimeout(() => {secondFlipCard.parentElement.style.transform = 'rotateY(0deg)'}, 900);
      // 카드가 다시 뒤집힌 후 이벤트가 다시 실행되게 true로 변환.
      setTimeout(() => {exit = true}, 900);
    } else {
      isClear += 2;
      if(isClear === [...document.querySelectorAll(".main-imgbox")].length) {
        // 성공 모달창 뜨게 만들기
        $GoodModal.style.zIndex = 1600; // 창 위치 초기화
        $GoodModal.style.display = 'block'; // 창 위치 초기화
      }
    }
    // 뒤집기 카운트 초기화
    flipCardCount = 0;
 }
});
 
 