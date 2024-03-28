function Login(){
    var nickname = document.getElementById("nickname").value; // 입력된 값 가져오기
    var password = document.getEle0mentById("password").value; // 입력된 값 가져오기
    if (nickname === 'hightech' && password === 'hitecsht') { // 비교 연산자 수정
        document.location.href = 'storge.html';
    } else {
        alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
}

const savedValueElement = document.getElementById("savedatas");
const savedValue = localStorage.getItem("savedatas");

if (savedValue) {
  savedValueElement.textContent = savedValue;
} else {
  savedValueElement.textContent = "No value saved.";
}