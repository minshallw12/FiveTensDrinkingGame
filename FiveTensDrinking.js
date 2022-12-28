
const prompt=require("prompt-sync")({sigint:true}); 

// Player instructions 
function HowToPlay() {
    console.log('--Five Tens Drinking Game-- \n\n- The goal is to guess the total of all players.\n- Round starts with player1. \n- The goal is to guess the total of all players. \n- Each player throws a 0 (closed fist) or 5 (open fist). \n- If player1 guesses correctly, he or she is eliminated. \n- If the guess is incorrect, the turn passes to the next player.\n- The last player standing takes a shot! \n')
  
  let answer = prompt('Do you understand? <y/n>');
  if (answer === 'n') {
    console.log(' \nCall Will for practice. \n');
    return HowToPlay();
  } else {
    return 'Start';
  }}

//Add player name and win/loss record
function playerSetUp() {

  function nameScript() {
  let name = prompt("What is your name? ")
  let answer = prompt("Your name is " + name + "? <y/n> ");
  if (answer === "Y" || answer === "y") {
    return name;
  } else {
    return nameScript();
  }
};

let playerName = nameScript();
let player = {
  "Name":playerName,
  "Wins":0,
  "Losses":0
}
return player;
};

//Player's move during play
function playersMove() {
    let move = prompt('Throw 0 or 5?');
    if (move == 0 || move == 5) {
      return move
    } else {
      console.log("Not a valid move!")
      return playersMove();
    }
  };

//Player's move during turn
function playerTurn() {
    let guess = prompt('What\'s your guess?');
    if (guess % 5 == 0) {
      return guess;
    } else {
      console.log('Not a multiple of 5');
      return playerTurn();
    }
  };

//Computer's  AI move during play
function computerMove() {
    let random = Math.round(Math.random());
    if (random === 1) {
      return 5;
    } else {
      return 0;
    }
  };

//Computer's AI move during guess
function computerTurn(numOfPlayers) {
    if (numOfPlayers === 3) {
      let random = Math.floor(Math.random()*4)+1;
      if (random === 1) {
        return 0;
        }
      if (random === 2) {
        return 5;
        }
      if (random === 3) {
        return 10;
        }
      if (random === 4) {
        return 15;
        }
      }
    if (numOfPlayers === 2) {
      let random = Math.floor(Math.random()*3)+1;
      if (random === 1) {
        return 0;
        }
      if (random === 2) {
        return 5;
        }
      if (random === 3) {
        return 10;
        }
      }
  };

//first round with 3 players
function round1(whosfirst, playerName) {
    let players = [playerName, 'player2', 'player3'];
    let winner = '';
    
    if (whosfirst === playerName) {
        let guess = playerTurn();
      console.log('You guess ' + guess + '.');
        let player1 = playersMove();
      console.log(`${playerName} throws ${player1}.`);
        let player2 = computerMove();
      console.log('Player2 throws ' + player2 + '.');
        let player3 = computerMove();
      console.log('Player3 throws ' + player3 + '.');
        let sum = parseInt(player1)+parseInt(player2)+parseInt(player3);
      console.log('The total is ' + sum + '.');
        if (sum == guess) {
          console.log(whosfirst+' wins the round!\n');
          winner = whosfirst;
          players.splice(players.indexOf(winner),1)
            //console.log(players)
          let human = 'n';
          return [players[0], human];
        } else {
          console.log('No winner... \n');
          return round1('player2');
        }
    }
    if (whosfirst === 'player2') {
      console.log('Player2 is guessing... ')
        let player1 = playersMove();
          console.log(`${playerName} throws ${player1}.`);
        let guess = computerTurn(3);
          console.log('Player2 guesses ' + guess + '.');
        let player2 = computerMove();
          console.log('Player2 throws ' + player2 + '.');
        let player3 = computerMove();
          console.log('Player3 throws ' + player3 + '.');
        let sum = parseInt(player1)+parseInt(player2)+parseInt(player3);
          console.log('The total is ' + sum + '.');
        if (sum == guess) {
          console.log(whosfirst+' wins the round!\n');
          winner = whosfirst;
          players.splice(players.indexOf(winner), 1);
            //console.log(players);
          let human = 'y';
          return [players[0], human];
        } else {
          console.log('No winner... \n');
          return round1('player3');
          }
    };
    if (whosfirst === 'player3') {
      console.log('Player3 is guessing... ')
        let player1 = playersMove();
          console.log(`${playerName} throws ${player1}.`)
        let guess = computerTurn(3);
          console.log('Player3 guesses ' + guess + '.')
        let player2 = computerMove();
          console.log('Player2 throws ' + player2 + '.')
        let player3 = computerMove();
          console.log('Player3 throws ' + player3 + '.')
        let sum = parseInt(player1)+parseInt(player2)+parseInt(player3);
         console.log('The total is ' + sum + '.')
        if (sum == guess) {
          console.log(whosfirst+' wins the round!');
          winner = whosfirst;
          players.splice(players.indexOf(winner),1);
            // console.log(players);
          let human = 'y';
          return [players[0], human];
        } else {
          console.log('No winner... \n')
          return round1(playerName);
          }
        };
  };

//second round with 2 players
function round2(array, playerName) {
    let whosfirst = array[0];
    let human = array[1];
    if(human === 'y') {
      let players = [playerName, 'player2'];
    
      if (whosfirst === playerName) {
        let guess = playerTurn();
          console.log('You guessed ' + guess + '.')
        let player1 = playersMove();
          console.log(`${playerName} throws ${player1}.`)
        let player2 = computerMove();
          console.log('Player2 throws ' + player2 + '.')
        let sum = parseInt(player1)+parseInt(player2);
          console.log('The total is ' + sum + '. \n')
        if (sum == guess) {
          console.log(`${playerName} wins the round!`);
          console.log('Player2 drinks!')
          let loser = 'player2';
          return loser;
        } else {
          console.log('No winner... \n');
          return round2(['player2', 'y']);
        }
      };
        
      if (whosfirst === 'player2') {
        let player1 = playersMove();
          console.log(`${playerName} throws ${player1}.`)
        let guess = computerTurn(2);
          console.log('Player2 guesses ' + guess + '.')
        let player2 = computerMove();
          console.log('Player2 throws ' + player2 + '.')
        let sum = parseInt(player1)+parseInt(player2);
          console.log('The total is ' + sum + '. /n')
        if (sum == guess) {
          console.log('Player2 wins the round!');
          console.log(`${playerName} drinks!`);
          let loser = playerName;
          return loser;
        } else {
          console.log('No winner... \n');
          return round2([playerName, 'y']);
      }
  };
    }
    if (human === 'n') {
      let players = ['player2', 'player3'];
      
      if (whosfirst === 'player2') {
        console.log('Player2 is guessing...');
        let guess = computerTurn(2);
          console.log('Player2 guessed ' + guess + '.');
        let player2 = computerMove();
          console.log('Player2 throws ' + player2 + '.');
        let player3 = computerMove();
          console.log('Player3 throws ' + player3 + '.');
        let sum = parseInt(player2)+parseInt(player3);
          console.log('The total is ' + sum + '. \n');
        if (sum == guess) {
          console.log('Player2 wins the round!');
          console.log('Player3 drinks!');
          let loser = 'player3'
          return loser;
        } else {
          console.log('No winner... \n');
          return round2(['player3', 'n']);
        }
      };
      
      if (whosfirst === 'player3') {
        console.log('Player3 is guessing... ');
        let guess = computerTurn(2);
          console.log('Player3 guesses ' + guess + '.');
        let player2 = computerMove();
          console.log('Player2 throws ' + player2 + '.');
        let player3 = computerMove();
          console.log('Player3 throws ' + player3 + '.');
        let sum = parseInt(player2)+parseInt(player3);
          console.log('The total is ' + sum + '. \n');
        if (sum == guess) {
          console.log('Player3 wins the round!');
          console.log('Player2 drinks!');
          let loser = 'player2';
          return loser;
        } else {
          console.log('No winner... \n');
          return round2(['player2', 'n']);
          }
        }
      }
    };

//Game control flow
function FiveTensDrinking() {
  let x = prompt('Do you know how to play? <y/n>');
  //play instruction
  if (x === 'n') {
    start = HowToPlay();
  } else {
    start = 'Start';
  };
  //Create player profile
  let player = playerSetUp();
  //start game
  if (start === 'Start') {
    // Round 1
    console.log('Round 1')
    console.log('You go first. \n');
    let players = round1(player.Name, player.Name);
    // Round 2
    console.log('Round 2');
    let loser = round2(players, player.Name);
    // Play again?
    if (loser === player.Name) {
      player.Losses++;
    } else {
      player.Wins++;
    }
    console.log(`${player.Name}`)
    console.log(`Wins: ${player.Wins}`);
    console.log(`Losses: ${player.Losses}\n`)

    let again = prompt('Play again? <y/n>');
    if (again === 'y') {
      return FiveTensDrinking();
    } else {
      return 'Thanks for playing!';
    }    
  }
};

console.log(FiveTensDrinking());