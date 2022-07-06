class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    set name(newName) {
      this._name = setName;
    }
    get level() {
      return this._level;
    }
    set level(newLevel) {
      this._level = setLevel;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents === "number") {
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log("Invalid input: numberOfStudents must be set to a Number.");
      } // use value.isNaN() method
    }
    quickFacts() {
      console.log(
        `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
      );
    }
    static pickSubstituteTeacher(substituteTeachers) {
      let i = Math.floor(Math.random() * substituteTeachers.length)
      return substituteTeachers[i]
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, level, numberOfStudents, pickupPolicy) {
      super(name, level, numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
    set pickupPolicy(setPickupPolicy) {
      this._pickupPolicy = setPickupPolicy;
    }
  }
  
  class Middle extends School {
    constructor(name, level, numberOfStudents) {
      super(name, level, numberOfStudents);
    }
  }
  
  class HighSchool extends School {
    constructor(name, level, numberOfStudents, sportsTeams) {
      super(name, level, numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      return this._sportsTeams;
    }
    set sportsTeams(setSportsTeams) {
      this._sportsTeams = setSportsTeams;
    }
  }
  
  class SchoolCatalog {
    constructor(schools) {
      this._schools = schools
    }
    get schools() {
      return this._schools
    }
    set schools(newSchools) {
      this._schools = newSchools
    }
    addSchool(schoolToAdd) {
      this._schools.push(schoolToAdd)
    }
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 'primary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
  lorraineHansbury.quickFacts()
  
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))
  
  const alSmith = new HighSchool('Al E. Smith', 'high', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
  console.log(alSmith.sportsTeams)
  
  schoolList = new SchoolCatalog([lorraineHansbury, alSmith])
  console.log(schoolList)
  