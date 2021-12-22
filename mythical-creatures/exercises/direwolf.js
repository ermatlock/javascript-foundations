class Direwolf {
  constructor(name, location, size) {
    this.name = name;
    this.home = location || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    this.huntsWhiteWalkers = false;
    if (this.starksToProtect.length === 2) {
      return;
    }
    if (this.home === stark.location) {
      stark.safe = true;
      this.starksToProtect.push(stark);
    }
  }

  leave(stark) {
    var i = this.starksToProtect.indexOf(stark);
    var leftStark = this.starksToProtect.splice(i, 1);
    leftStark[0].safe = false;
    return leftStark[0];
  }

};

module.exports = Direwolf;
