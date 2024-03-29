// function Login(){
//     var nickname = document.getElementById("nickname").value; // 입력된 값 가져오기
//     var password = document.getEle0mentById("password").value; // 입력된 값 가져오기
//     if (nickname === 'hightech' && password === 'hitecsht') { // 비교 연산자 수정
//         document.location.href = 'storge.html';
//     } else {
//         alert("아이디 또는 비밀번호가 잘못되었습니다.");
//     }
// }

// const savedValueElement = document.getElementById("datas");
// window.onload = function(){
//   let savedValue = localStorage.getItem("user_input");
//   if (savedValue !== null) {
//     savedValueElement.textContent = savedValue;
//   } else {
//     alert("값을 가져오지 못했습니다.");
//   }
// }

// window.onload = function(){
//   var storedValue = localStorage.getItem("storedValue");
//   var storageValueElement = document.getElementById("datas");
//   if (storedValue !== null) {
//     storageValueElement.innerText += storedValue;
//     lst += storedValue
//   }
//   else{
//     alert("값을 가져오지 못했습니다.");
//   }
// }

// window.onload = function () {
//   var storedValue = localStorage.getItem("storedValue");
//   var storageValueElement = document.getElementById("datas");
//   if (storedValue !== null) {
//     // 각 값 사이에 띄어쓰기를 추가하여 분리되도록 함
//     storageValueElement.innerText += storedValue + " ";
//   } else {
//     alert("값을 가져오지 못했습니다.");
//   }
// };

window.onload = function () {
  var storedValue = localStorage.getItem("storedValue");
  var storageValueElement = document.getElementById("datas");
  if (storedValue !== null) {
    // 새로운 요소를 생성하여 값을 추가
    var newValueElement = document.createElement("span");
    newValueElement.textContent = storedValue + " ";
    storageValueElement.appendChild(newValueElement);
  } else {
    alert("값을 가져오지 못했습니다.");
  }
};