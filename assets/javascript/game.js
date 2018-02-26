


window.onload = function() {

  var wins = document.querySelector('.wins'),
      losses = document.querySelector('.losses'),
      remainingGuesses = document.querySelector('.num-of-guesses'),
      word = document.querySelector('.word');

  game.setCurrentGameWord();
  console.log(game.currentGameWord);
  game.setUnsolvedGameWordState();
  game.setInitialHTML(wins, losses, remainingGuesses, word);
}

document.onkeyup = function(event) {

  if (game.lettersGuessed.indexOf(event.key) > -1) {
    console.log(this.lettersGuessed, 'you already guessed that letter, don\'t waste a turn');
  } else {
    game.setCurrentGuessedLetter(event.key);
    game.registerLetterGuess();
  }

  
}

var game = {
  gameWords: [
    'cardinals',
    'falcons',
    'ravens',
    'bills',
    'panthers',
    'bears',
    'bengals',
    'browns',
    'cowboys',
    'broncos',
    'lions',
    'packers',
    'texans',
    'colts',
    'jaguars',
    'chiefs',
    'chargers',
    'rams',
    'dolphins',
    'vikings',
    'patriots',
    'saints',
    'giants',
    'jets',
    'raiders',
    'eagles',
    'steelers',
    'fortyniners',
    'seahawks',
    'buccaneers',
    'titans',
    'redskins'
  ],
  currentGameWord: 'cowboys',
  unsolvedGameWordState: '',
  currentGuessedLetter: '',
  remainingGuesses: 15,
  wins: 0,
  losses: 0,
  lettersGuessed: [],
  wordsGuessed: [],
  setCurrentGameWord: function() {
    this.currentGameWord = this.gameWords[Math.floor(Math.random() * this.gameWords.length)];
  },
  setCurrentGuessedLetter: function(guess) {
    this.currentGuessedLetter = guess;
    this.lettersGuessed.push(guess);
    console.log(this.lettersGuessed);
  },
  registerLetterGuess: function() {

    var letterSpaces = document.querySelectorAll('.letter-space'),
        guessedLetter = document.querySelector('.letters-guessed'),
        numGuessesLeft = document.querySelector('.num-of-guesses');

    
    console.log('match', 'index: ', index);
    console.log(letterSpaces);
    if (this.currentGameWord.indexOf(this.currentGuessedLetter) !== -1) {
      for (var i in this.currentGameWord) {
        if (this.currentGameWord[i] === this.currentGuessedLetter) {
          letterSpaces[+i].innerHTML = this.currentGuessedLetter;
        }
      }  
    } else {
      console.log('no match');
    }
      

   

    guessedLetter.innerHTML += this.currentGuessedLetter + ', ';
    numGuessesLeft.innerHTML = --this.remainingGuesses;
    console.log(this.remainingGuesses)
  },
  setUnsolvedGameWordState: function() {
    this.unsolvedGameWordState = this.currentGameWord.split('')
                                                      .map(function(letter) {
                                                        return '-';
                                                      });

    console.log('unsolved', this.unsolvedGameWordState);
  },
  setInitialHTML: function(winsEl, lossesEl, remainingGuessesEl, letterSpacesEl) {
    winsEl.innerHTML += this.wins;
    lossesEl.innerHTML += this.losses;
    remainingGuessesEl.innerHTML += this.remainingGuesses;
    this.unsolvedGameWordState.forEach(function(item) {
      letterSpacesEl.innerHTML += '<span class="letter-space">-</span>';
    });
  }
}

