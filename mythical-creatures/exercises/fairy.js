class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.disposition = 'Good natured';
    this.clothes = {
      dresses: ['Iris']
    }
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust+=10;
  }

  makeDresses(dresses) {
    for(var i = 0; i < dresses.length; i++) {
      this.clothes.dresses.push(dresses[i]);
    }
  }

  becomeProvoked() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      this.humanWards.push(infant);
      infant.disposition = 'Malicious';
    }
    if (this.humanWards.length === 3) {
      this.disposition = 'Good natured';
    }
    return infant;
  }

};

module.exports = Fairy;
