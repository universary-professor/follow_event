function key_press(number){
    var rcdnumElement = document.querySelector(".input");
    if (rcdnumElement !== null) {
        rcdnumElement.value += number;
    } else {
        console.error("ERROR");
    }
}

function reset_num(){
    var rcdnumElement = document.querySelector(".input");
    if (rcdnumElement !== null) {
        rcdnumElement.value = "";
    } else {
        console.error("ERROR");
    }
}
// 엑셀사용시
// function checkAndSend() {
//     // 입력된 값을 가져오기
//     var sendthing = document.getElementById("rcdnum").value;

//     // 조건 검사 예시: 입력값이 숫자이고 길이가 4인 경우에만 처리
//     if (!isNaN(sendthing) && sendthing.length ==4 && sendthing/1000 >= 1 && sendthing/1000 <= 3) {
//         // 조건을 만족하는 경우, 엑셀 파일로 변환하고 다운로드
//         var csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(sendthing);
//         var encodedUri = encodeURI(csvContent);
//         var link = document.createElement("a");
//         link.setAttribute("href", encodedUri);
//         link.setAttribute("download", "data.csv");
//         document.body.appendChild(link);
//         link.click();
//     } else {
//         // 조건을 만족하지 않는 경우, 메시지 출력
//         alert("입력값을 확인하세요.");
//     }
//     var rcdnumElement = document.querySelector(".input");
//     if (rcdnumElement !== null) {
//         rcdnumElement.value = "";
//     }
// }

function checkAndSend() {
    var userInput = document.getElementById("rcdnum").value;
    if(!isNaN(userInput) && userInput.length == 4 && userInput/1000 >= 1 && userInput/1000 < 4){
        document.getElementById("rcdnum").value = userInput;
    }
    else{
        alert("입력값을 확인하세요.");
    }
    var rcdnumElement = document.querySelector(".input");
    if (rcdnumElement !== null) {
        rcdnumElement.value = "";
    }
}

// function setExistingInput() {
//     var fixedValue = "고정된 값";
//     var existingForm = document.getElementById("existingForm");
//     existingForm.innerText = "기존 폼의 입력: " + fixedValue;
// }
// window.onload = setExistingInput;