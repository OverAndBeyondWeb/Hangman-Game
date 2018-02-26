
var wins = document.querySelector('.wins span'),
    losses = document.querySelector('.losses span'),
    remainingGuesses = document.querySelector('.num-of-guesses'),
    word = document.querySelector('.word');

window.onload = function() {

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
  wrongGuessPhrases: [
    'Terrible',
    'Come on!',
    'You serious',
    'That\'s not even a letter, dude'
  ],
  rightGuessPrases: [
    'Nice job!',
    'You rock!',
    'You really know your NFL teams',
    'And another one!'
  ],
  currentGameWord: '',
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

    var letterSpaces = [].slice.call(document.querySelectorAll('.letter-space')),
        guessedLetter = document.querySelector('.letters-guessed span'),
        numGuessesLeft = document.querySelector('.num-of-guesses'),
        message = document.querySelector('.message');

    
    if (this.currentGameWord.indexOf(this.currentGuessedLetter) !== -1) {
      for (var i in this.currentGameWord) {
        if (this.currentGameWord[i] === this.currentGuessedLetter) {
          letterSpaces[+i].innerHTML = this.currentGuessedLetter;
          this.unsolvedGameWordState[+i] = this.currentGuessedLetter;
          message.textContent = this.rightGuessPrases[Math.floor(Math.random() * this.rightGuessPrases.length)];
        }
      }  
    } else {
      message.textContent = this.wrongGuessPhrases[Math.floor(Math.random() * this.wrongGuessPhrases.length)];
    }
      
    guessedLetter.innerHTML += this.currentGuessedLetter + ', ';
    numGuessesLeft.innerHTML = --this.remainingGuesses;

    if (this.unsolvedGameWordState.indexOf('-') === -1) {
      message.textContent = 'You Win!'
      this.declareWin();
    }

    if (this.remainingGuesses === 0) {
      message.textContent = 'You Lose!'
      this.declareLoss();
    }
  },
  setUnsolvedGameWordState: function() {
    this.unsolvedGameWordState = this.currentGameWord.split('')
                                                      .map(function(letter) {
                                                        return '-';
                                                      });

    console.log('unsolved', this.unsolvedGameWordState);
  },
  setInitialHTML: function(winsEl, lossesEl, remainingGuessesEl, letterSpacesEl) {
    winsEl.innerHTML = this.wins;
    lossesEl.innerHTML = this.losses;
    remainingGuessesEl.innerHTML = this.remainingGuesses;
    this.unsolvedGameWordState.forEach(function(item) {
      letterSpacesEl.innerHTML += '<span class="letter-space">-</span>';
    });
  },
  declareWin: function() {
    wins.textContent = ++this.wins;
    alert('you win');
    this.resetGame();
  },
  declareLoss: function() {
    ++this.losses;
    losses.textContent = this.losses;

    var that = this;
    window.setTimeout(function() {
      alert('you lose');
      that.resetGame();
    }, 1);
  },
  resetGame: function() {
    console.log('reset');
    this.currentGameWord = '';
    this.unsolvedGameWordState = '';
    this.currentGuessedLetter = '';
    document.querySelector('.letters-guessed span').textContent = '';
    this.remainingGuesses = 15;
    this.lettersGuessed = [];
    this.wordsGuessed = [];
    this.setCurrentGameWord();
    this.setUnsolvedGameWordState();
    word.textContent = '';
    this.setInitialHTML(wins, losses, remainingGuesses, word);
  }
}

