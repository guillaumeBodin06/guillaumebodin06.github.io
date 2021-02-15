let diceNumberOne = false;

function iconPone() {
  document.getElementById("iconTwo").innerHTML = "PLAYER TWO<ion-icon color=\"danger\" class=\"radioPlayer\" name=\"radio-button-on-outline\"></ion-icon>";
  document.getElementById("icon").innerHTML = "PLAYER ONE";
}

function iconPtwo() {
  document.getElementById("icon").innerHTML = "PLAYER ONE<ion-icon color=\"danger\" class=\"radioPlayer\" name=\"radio-button-on-outline\"></ion-icon>";
  document.getElementById("iconTwo").innerHTML = "PLAYER TWO"; 
}

function playerTurn() {
  if (diceNumberOne === false) {
    dice();
  } else {
    dicePlayerTwo();
  }
}

 $(() => {
  $('#rollDice').data('timer', 1000);
    $('#rollDice').click(function () {
      setTimeout(() => {
        $('#dice').fadeIn(1000);
        playerTurn()
      }, $('#rollDice').data('timer'));
    });
  });

function dice(p) {
  const roll = Math.floor(Math.random() * 6);
  if (roll === 1) {
    document.getElementById("dice").src = "pictures/dice.png";
    p = 1;
    diceNumberOne = true;
    document.getElementById('pointPone').innerHTML = 0 - p;
    iconPone()
  } else if (roll === 2) {
    document.getElementById("dice").src = "pictures/diceTwo.png";
    p = 2;
    var diceOne = document.getElementById('pointPone') + p;
  } else if (roll === 3) {
    document.getElementById("dice").src = "pictures/diceThree.png";
    p = 3;
    var diceOne = document.getElementById('pointPone') + p;
  } else if (roll === 4) {
    document.getElementById("dice").src = "pictures/diceFour.png";
    p = 4;
    var diceOne = document.getElementById('pointPone') + p;
  } else if (roll === 5) {
    document.getElementById("dice").src = "picturesPdiceFive.png";
    p = 5;
    var diceOne = document.getElementById('pointPone') + p;
  } else {
    document.getElementById("dice").src = "pictures/diceSix.png";
    p = 6;
  }
    var myPoint = document.getElementById('pointPone').innerHTML;
    var myPointInt = parseInt(myPoint);
    var total = myPointInt + p;
    document.getElementById('pointPone').innerHTML = total;
    } 


function dicePlayerTwo(p) {
  const roll = Math.floor(Math.random() * 6);
  if (roll === 1) {
    document.getElementById("dice").src = "dice.png";
    p = 1;
    diceNumberOne = false;
    document.getElementById('pointPtwo').innerHTML = 0 - p;
    iconPtwo()
  } else if (roll === 2) {
    document.getElementById("dice").src = "diceTwo.png";
    p = 2;
    var diceOne = document.getElementById('pointPone') + p;
  } else if (roll === 3) {
    document.getElementById("dice").src = "diceThree.png";
    p = 3;
    var diceOne = document.getElementById('pointPone') + p;
  } else if (roll === 4) {
    document.getElementById("dice").src = "diceFour.png";
    p = 4;
    var diceOne = document.getElementById('pointPone') + p;
  } else if (roll === 5) {
    document.getElementById("dice").src = "diceFive.png";
    p = 5;
    var diceOne = document.getElementById('pointPone') + p;
  } else {
    document.getElementById("dice").src = "diceSix.png";
    p = 6;
  }
    var myPoint = document.getElementById('pointPtwo').innerHTML;
    var myPointInt = parseInt(myPoint);
    var total = myPointInt + p;
    document.getElementById('pointPtwo').innerHTML = total;
    } 





function hold() {
  if (diceNumberOne === false) {
    var myPoint = document.getElementById('pointPone').innerHTML;
    var myPointInt = parseInt(myPoint);
    var cumulatePoint = document.getElementById('cumulatePone').innerHTML;
    var cumulatePointParsInt = parseInt(cumulatePoint);
    var totalCumulate = myPointInt + cumulatePointParsInt;
    document.getElementById('cumulatePone').innerHTML = totalCumulate;
    document.getElementById('pointPone').innerHTML = 0;
    if (totalCumulate >= 100) {
      alert("Player 1 win the game !")
        }
        iconPone()
        diceNumberOne = true;
      } else {
        var myPoint = document.getElementById('pointPtwo').innerHTML;
    var myPointInt = parseInt(myPoint);
    var cumulatePoint = document.getElementById('cumulatePtwo').innerHTML;
    var cumulatePointParsInt = parseInt(cumulatePoint);
    var totalCumulate = myPointInt + cumulatePointParsInt;
    document.getElementById('cumulatePtwo').innerHTML = totalCumulate;
    document.getElementById('pointPtwo').innerHTML = 0;
    if (totalCumulate >= 100) {
      alert("Player 2 win the game !")
        }
        iconPtwo()
        diceNumberOne = false;
    }   
  }

function newGame() {
  diceNumberOne = false;
  document.getElementById('pointPone').innerHTML = 0;
  document.getElementById('cumulatePone').innerHTML = 0;
  document.getElementById('pointPtwo').innerHTML = 0;
  document.getElementById('cumulatePtwo').innerHTML = 0;
}



$(() => {
  $('#rollDice').click(function () {
    $('#dice').fadeOut(1000);  
    $('#dice').fadeIn(1000); 
  
  });
});



  $(() => {
    $('#getPoint').click(function () {
      hold()
    });
  });

  $(() => {
    $('#happyNewGame').click(function () {
      newGame();
      alert("Nouvelle partie commencée!!")
    });
  });