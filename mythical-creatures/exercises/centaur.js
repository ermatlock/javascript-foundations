class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.crankyCount = 0
  }

  shootBow() {
    this.crankyCount++
    if (this.crankyCount >= 3 || this.layingDown) {
      this.cranky = true;
      return 'NO!';
    }
    return 'Twang!!!';

  }
  run() {
    this.crankyCount++
    if (this.crankyCount >= 3 || this.layingDown) {
      this.cranky = true;
      return 'NO!';
    }
    return 'Clop clop clop clop!!!';
  }

  sleep() {
    if (this.standing) {
      return 'NO!';
    }
    this.cranky = false;
    this.crankyCount = 0;
    return 'ZZZZ';
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.layingDown) {
      return 'Not while I\'m laying down!';
    }
    this.cranky = false;
    this.crankyCount = 0;
  }

};

module.exports = Centaur;
