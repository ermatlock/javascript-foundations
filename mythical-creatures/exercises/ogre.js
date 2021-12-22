class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    this.home = ogre.abode || 'Swamp';
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter++;
    if (human.encounterCounter === 3 || human.encounterCounter === 6) {
      this.swingAt(human);
    }
  }

  swingAt(human) {
    this.swings++
    if (this.swings === 2) {
      human.knockedOut = true;
    }
  }

  apologize(human) {
    human.knockedOut = false;
  }

}

module.exports = Ogre;
