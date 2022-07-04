class Media {
    constructor(title) {
      this._title = title
      this._isCheckedOut = false
      this._ratings = []
    }
    get title() {
      return this._title
    }
    get isCheckedOut() {
      return this._isCheckedOut
    }
    set isCheckedOut(status) {
      this._isCheckedOut = status
    }
    get ratings() {
      return this._ratings
    }
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut
    }
    getAverageRating() {
      return (this._ratings.reduce( (acc, cur) => acc + cur, 0) / this._ratings.length).toFixed(2)
    }
    addRating(rating) {
      if(typeof rating === 'number' && rating >= 1 && rating <=5) {
        this._ratings.push(rating)
      } else {
        console.log(`Rating must be number between 1 and 5`)
      }
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title)
      this._author = author
      this._pages = pages
    }
    get author() {
      return this._author
    }
    get pages() {
      return this._pages
    }
  }
  class Movie extends Media {
    constructor(director, title, runTime, movieCast) {
      super(title)
      this._director = director
      this._runTime = runTime
      this._movieCast = movieCast
    }
    get director() {
      return this._director
    }
    get runTime() {
      return this._runTime
    }
    get movieCast() {
      return this._movieCast
    }
  }
  class CD extends Media {
    constructor(title, artist, song) {
      super(title)
      this._artist = artist
      this._song = song // Array
    }
    get artist() {
        return this._artist
    }
    get song() {
        return this._song
    }
    shuffle() {
      let currentIndex = this._song.length, randomIndex
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        [this._song[currentIndex], this._song[randomIndex]] = [this._song[randomIndex], this._song[currentIndex]]
      }
      return this._song
    }
  }
  class Catalog {
    constructor(...args) {
      this._media =  args
    }
    get media() {
      return this._media
    }
  }
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
  console.log(historyOfEverything)
  historyOfEverything.toggleCheckOutStatus()
  console.log(historyOfEverything)
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  console.log(historyOfEverything.getAverageRating())
  const speed = new Movie('Jan de Bont', 'Speed', 116)
  console.log(speed)
  speed.toggleCheckOutStatus()
  console.log(speed)
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  console.log(speed.getAverageRating())
  
  const cd = new CD('cd-title', 'cd-artist', ['song1', 'song2', 'song3', 'song4', 'song5'])
  console.log(cd)
  console.log(cd.shuffle())
  const newCatalog = new Catalog(historyOfEverything, speed, cd)
  console.log(newCatalog.media)