$(document).ready(function(){

  var boxes = $('td');
  var turnText = $('.playerTurn')
  var turnCounter = 0;
  var oMoves = [];
  var xMoves = [];
  var winCombo = [
  [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ];

  var addPiece = function(){

    // Can use a variable to replace $(this)

    if(!$(this).text()) {
      if (turnCounter % 2 === 0) {
        $(this).text('X');
        $(this).attr('class', 'xMarker');
        xMoves.push($(this).data('num'));
        turnCounter++;
        (turnCounter>4) ? findWinner(xMoves, 'X') : null;
        turnText.text('It is O\'s turn')
      } else {
        console.log('O\'s Turn')
        $(this).text('O');
        $(this).attr('class', 'oMarker');
        oMoves.push($(this).data('num'));
        turnCounter++;
        (turnCounter>5) ? findWinner(oMoves, 'O') : null;
        turnText.text('It is X\'s turn')
      }
      findWinner();
    }

    if (turnCounter >= 9) {
      turnText.text('Game Over!');
      var conf = confirm('It\'s a draw.  Would you like to play again?')
      resetGame();
    }
  }

  var resetGame = function(){
    boxes.removeClass('xMarker oMarker');
    boxes.empty();
    oMoves = [];
    xMoves = [];
    turnCounter = 0;
    turnText.text('It is X\'s turn');
  }

  var findWinner = function(movesArray, name){
    for (var i = 0; i<winCombo.length; i++) {
      var winCount = 0;
      for (var j = 0; j<winCombo[i].length; j++) {
        if (movesArray.indexOf(winCombo[i][j]) !== -1){
          winCount++;
        }
        if (winCount===3) {
          alert('Game Over! '+name+' wins!');
          resetGame();
        }
      }
    }
  }

  var addPieceCall = function(){
    boxes.on('click', addPiece);
    // {
    //   if(!(boxes.is(':empty')){
    //     return;
    //   } else {
    //     return addPiece();
    //   }
    // });
  }

  var resetGameCall = function(){
    console.log()
    $('reset').on('click', resetGame);
  }

  var playRound = function(){
    addPieceCall();
    resetGameCall();
  }

playRound();

});
