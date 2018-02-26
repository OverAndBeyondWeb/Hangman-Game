window.onload = function() {
  game.setCurrentGameWord();
  console.log(game.currentGameWord);
  game.setUnsolvedGameWordState();
}

document.onkeyup = function(event) {

  //var word = document.querySelector('.word');
  game.setCurrentGuessedLetter(event.key);
  game.compareGuessedLetterToGameWordLetters();
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
  guesses: 15,
  score: 0,
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
  compareGuessedLetterToGameWordLetters: function() {
    console.log(this.currentGuessedLetter);
    if (this.currentGameWord.indexOf(this.currentGuessedLetter) > -1) {
      console.log('match');
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
  } 
}

