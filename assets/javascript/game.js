


window.onload = function() {

  var wins = document.querySelector('.wins'),
      losses = document.querySelector('.losses'),
      remainingGuesses = document.querySelector('.remaining-guesses'),
      word = document.querySelector('.word');

  game.setCurrentGameWord();
  console.log(game.currentGameWord);
  game.setUnsolvedGameWordState();
  game.setInitialHTML(wins, losses, remainingGuesses, word);
}

document.onkeyup = function(event) {

  //var word = document.querySelector('.word');
  game.setCurrentGuessedLetter(event.key);
  game.registerLetterGuess();
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
    console.log(this.currentGuessedLetter);
    if (this.currentGameWord.indexOf(this.currentGuessedLetter) > -1) {
      
      var index = this.currentGameWord.indexOf(this.currentGuessedLetter);
      console.log('match', 'index: ', index);
    } else {
      console.log('no match');
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
    winsEl.innerHTML += this.wins;
    lossesEl.innerHTML += this.losses;
    remainingGuessesEl.innerHTML += this.remainingGuesses;
    this.unsolvedGameWordState.forEach(function(item) {
      letterSpacesEl.innerHTML += '<span class="letter-space">-</span>';
    });
  }
}

