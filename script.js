$(document).ready(function(){

  var boxes = $('td');
  var turnText = $('.playerTurn')
  var turnCounter = 0;
  var oMoves = [];
  var xMoves = [];
  var winningCombo = [
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
        turnText.text('It is O\'s turn')
      } else {
        console.log('O\'s Turn')
        $(this).text('O');
        $(this).attr('class', 'oMarker');
        oMoves.push($(this).data('num'));
        turnCounter++;
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

  var findWinner = function(){
    for (var i = 0; i<winningCombo.length; i++) {
      if (xMoves.includes(winningCombo[i])){
        alert('X wins!');
      } else if (oMoves.includes(winningCombo[i])) {
        alert('O wins!');
      } else {
        return;
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
