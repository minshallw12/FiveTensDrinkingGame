document.querySelector('#instructionsbtn').addEventListener('click', HowToPlay);
document.querySelector('.play').addEventListener('click', play);

function HowToPlay() {
  const prompt = '--Five Tens Drinking Game-- \n\n- The goal is to guess the total of all players.\n- Round starts with player1. \n- The goal is to guess the total of all players. \n- Each player throws a 0 (closed fist) or 5 (open fist). \n- If player1 guesses correctly, he or she is eliminated. \n- If the guess is incorrect, the turn passes to the next player.\n- The last player standing takes a shot! \n</div>';
  console.log(prompt);

  document.querySelector('#cpuHand2').innerHTML = `${prompt}/n<button id="play">Play!</button>`;

}

function play() {
  document.querySelector('#prompt').innerHTML = 'What is your guess?';
  document.querySelector('#playerHand1').innerHTML = 'test';
  document.querySelector('#cpuHand2').innerHTML = 'CPU 1 is thinking...';
  document.querySelector('#cpuHand3').innerHTML = 'CPU 2 is thinking...'
}

