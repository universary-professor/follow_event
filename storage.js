function selecting() {
  document.location.href = "selecting.html";
}

// function Login(){
//     var nickname = document.getElementById("nickname").value; // 입력된 값 가져오기
//     var password = document.getEle0mentById("password").value; // 입력된 값 가져오기
//     if (nickname === 'hightech' && password === 'hitecsht') { // 비교 연산자 수정
//         document.location.href = 'storge.html';
//     } else {
//         alert("아이디 또는 비밀번호가 잘못되었습니다.");
//     }
// }

window.onload = function () {
  var maxItems = 500;
  var storedInputs = JSON.parse(localStorage.getItem("storedInputs")) || [];
  var displayList = document.getElementById("displayList");
  while (storedInputs.length > maxItems) {
    storedInputs.shift();
  }
  if (storedInputs.length > 0) {
    storedInputs.forEach(function (input) {
      var listItem = document.createElement("li");
      listItem.textContent = input;
      displayList.appendChild(listItem);
    });
  } else {
    alert("값을 가져오지 못했습니다.");
  }
  var num_data = document.getElementById("num_data");
  var num_datas = storedInputs.length;
  num_data.innerText = "저장된 인원수 : " + num_datas; 
};

function reset() {
  localStorage.removeItem("storedInputs");
  var displayList = document.getElementById("displayList");
  displayList.innerHTML = ""; // 리스트 초기화
  alert("리스트가 초기화되었습니다.");
}