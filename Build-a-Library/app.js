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
      this._ratings.push(rating)
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
    constructor(director, title, runTime) {
      super(title)
      this._director = director
      this._runTime = runTime
    }
    get director() {
      return this._director
    }
    get runTime() {
      return this._runTime
    }
  }
  class CD extends Media {
    constructor(title, artist) {
      super(title)
      this._artist = artist
    }
    get artist() {
        return this._artist
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
  
  