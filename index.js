function login_html() {
  document.location.href = "storage.html";
}

function key_press(number) {
  var rcdnumElement = document.querySelector(".input");
  if (rcdnumElement !== null) {
    rcdnumElement.value += number;
  } else {
    alert("ERROR");
  }
}

function reset_num() {
  var rcdnumElement = document.querySelector(".input");
  if (rcdnumElement !== null) {
    rcdnumElement.value = "";
  } else {
    alert("ERROR");
  }
}

function checkAndSend() {
  var userInput = document.getElementById("rcdnum").value;
  if (
    !isNaN(userInput) &&
    userInput.length == 4 &&
    userInput / 1000 >= 1 &&
    userInput / 1000 < 4
  ) {
    var storedInputs = JSON.parse(localStorage.getItem("storedInputs")) || [];
    storedInputs.push(userInput);
    localStorage.setItem("storedInputs", JSON.stringify(storedInputs));
  } else {
    alert("입력값을 확인하세요.");
  }
  var rcdnumElement = document.getElementById("rcdnum");
  if (rcdnumElement !== null) {
    rcdnumElement.value = "";
  }
}

// 엑셀사용시
// function checkAndSend() {
//     var sendthing = document.getElementById("rcdnum").value;

//     if (!isNaN(sendthing) && sendthing.length ==4 && sendthing/1000 >= 1 && sendthing/1000 <= 3) {
//         var csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(sendthing);
//         var encodedUri = encodeURI(csvContent);
//         var link = document.createElement("a");
//         link.setAttribute("href", encodedUri);
//         link.setAttribute("download", "data.csv");
//         document.body.appendChild(link);
//         link.click();
//     } else {
//         alert("입력값을 확인하세요.");
//     }
//     var rcdnumElement = document.querySelector(".input");
//     if (rcdnumElement !== null) {
//         rcdnumElement.value = "";
//     }
// }
