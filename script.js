let RandomNumber = Math.floor(Math.random() * 100);
let InputBox = document.getElementsByClassName("GuessBox")[0];
let GuessBtn = document.getElementsByClassName("GuessBtn")[0];
let Hint = document.getElementsByClassName("Hint")[0];
let GetPoints = document.getElementsByClassName("pointsNumber")[0];
let GetResult = document.getElementsByClassName("Result")[0];
let GetGame = document.getElementsByClassName("MainGame")[0];
let Points = Number.parseInt(GetPoints.innerHTML);
let valueEntered = [];

GuessBtn.addEventListener("click", function () {
  let InputNumber = Number.parseInt(InputBox.value);

  if (InputBox.value !== "") {
    valueEntered.push(InputNumber);
    Points = Points - 10;
    GetPoints.innerHTML = Points;
    if (InputNumber < RandomNumber) {
      Hint.innerHTML = `The System's Number is greater than ${InputNumber}`;
    } else if (InputNumber > RandomNumber) {
      Hint.innerHTML = `The System's Number is less than ${InputNumber}`;
    } else if (InputNumber == RandomNumber) {
      Hint.innerHTML = "";
      GetPoints.innerHTML = Points + 10;
      InputBox.disabled = true;
      GuessBtn.disabled = true;

      const restartSector = document.createElement("div");
      restartSector.className = "restartSector";

      const restartBtn = document.createElement("button");
      restartBtn.textContent = "Restart Game";
      restartBtn.className = "restartBtn";

      GetGame.appendChild(restartSector);
      restartSector.appendChild(restartBtn);

      restartBtn.addEventListener("click", function () {
        location.reload();
      });
      if (GetPoints.innerHTML > 80) {
        GetResult.innerHTML =
          "Congratulations, your Luck is exceptionally good!!";
      } else if (GetPoints.innerHTML > 60 && GetPoints.innerHTML < 80) {
        GetResult.innerHTML = "Congratulations, your Luck is good!!";
      } else if (GetPoints.innerHTML > 40 && GetPoints.innerHTML < 60) {
        GetResult.innerHTML = "Congratulations, your Luck is not bad!!";
      } else if (GetPoints.innerHTML > 20 && GetPoints.innerHTML < 40) {
        GetResult.innerHTML = "Your Luck is a little bad!!";
      } else if (GetPoints.innerHTML > 0 && GetPoints.innerHTML < 20) {
        GetResult.innerHTML = "You are in need of some Luck !";
      }
    }
  }
  if (InputBox.value === "") {
    alert("Input a number first");
  }
  InputBox.value = "";
  if (Points == 0) {
    Hint.innerHTML = "";
    GetResult.innerHTML = "No more attemps left! Please Restart";
    InputBox.disabled = true;
    GuessBtn.disabled = true;

    const restartSector = document.createElement("div");
    restartSector.className = "restartSector";

    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Game";
    restartBtn.className = "restartBtn";

    GetGame.appendChild(restartSector);
    restartSector.appendChild(restartBtn);

    restartBtn.addEventListener("click", function () {
      location.reload();
    });
  }
});
