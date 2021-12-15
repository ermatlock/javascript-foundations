class Stark {
  constructor(stark) {
    this.name = stark.name;
    this.location = stark.area || 'Winterfell';
    this.safe = false;
  }

  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers';
    } else if (!this.safe) {
      return 'Winter is Coming';
    }
  }

  callDirewolf(name, location) {
    var Direwolf = require('./direwolf');
    const direwolf = new Direwolf(name, location);
    direwolf.home = this.location;
    direwolf.protect(this);
    return direwolf;
  }

};

module.exports = Stark;
