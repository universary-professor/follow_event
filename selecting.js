function re_turn(){
    document.location.href = "index.html";
}

function selecting() {
  var numberOfWinners = document.getElementById("numberOfWinners").value;
  var storedInputs = JSON.parse(localStorage.getItem("storedInputs")) || [];
  var winners = [];
  var availableInputs = storedInputs.slice(); 

  if (storedInputs.length === 0) {
    alert("저장된 데이터가 없습니다.");
    return;
  }

  if (availableInputs.length < numberOfWinners) {
    numberOfWinners = availableInputs.length;
  }

  for (var i = 0; i < numberOfWinners; i++) {
    var randomIndex = Math.floor(Math.random() * availableInputs.length);
    winners.push(availableInputs[randomIndex]);
    availableInputs.splice(randomIndex, 1); // 이미 추첨된 값은 배열에서 제거
  }

  // 당첨자 목록 표시
  var winnersContainer = document.getElementById("winners");
  winnersContainer.innerHTML = "<h3>당첨자 목록:</h3>";
  winners.forEach(function (winner, index) {
    var winnerElement = document.createElement("p");
    winnerElement.textContent = index + 1 + ". " + winner;
    winnersContainer.appendChild(winnerElement);
  });

  // 추첨 후 남은 데이터를 다시 localStorage에 저장
  localStorage.setItem("storedInputs", JSON.stringify(storedInputs));
}

