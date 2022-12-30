
This is an evolving project. started as a drinking game I learned at a bar. Thought it was fun so decided to code it. Over time I've developed random AI that will need to be improved. Three people sit at a bar with drinks. Each player can throw a 0 (closed fist) or 5 (open fist). The players throw their fists simultaneously. The guesser's goal is to guess the total number of fingers thrown. If the guesser is correct, he is eliminated and safe from drinking. The remaining players continue until the last man standing. The last player is the loser, and drinks their drink.

Ex. Fred sits with shots of tequila and two good friends George and Joanne. 
Fred goes first. 
Fred guesses 10 and throws 5 simultaneously. 
George throws 5 simultaneously. 
Joanne throws 0 simultaneously. 
The total is 10 and Fred is correct! 
Fred is safe from drinking. 
George guesses 5 and throws 5 simultaneously. 
Joanne throws 5 simultaneously. 
The total is 10 and George is incorrect... 
No winner so play continues. 
Joanne guesses 5 and throw 0 simultaneously. 
George throws 5 simultaneously. 
The total is 5 and Joanne is correct! 
Joanne is safe from drinking. 
George is the last man standing and takes a shot.

Bugs:
-AI logic sometimes guesses 0 then throws 5... 
-No ability to quit during play
-spacing formatting issues "playerX wins the round!"


Recent improvements/updates: 
-added third player 
-added instructions 
-added player creation
-player scores are reinvented during "play again"
-play again feature returns the entire program, not just the game
-play again recreates player profile
-round1 player2 guessing says 'undefined' instead of user name.
-round1 player3 guessing says 'undefined' instead of user name.
-player2 wins round1 then skips to scorecard
-play again "no" has no exit message