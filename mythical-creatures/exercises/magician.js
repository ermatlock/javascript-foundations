class Magician {
  constructor(magician) {
    this.name = `The Great ${magician.name}`;
    this.assistant = magician.assistant;
    this.favoriteAccessory = magician.clothing || 'top hat';
    this.confidencePercentage = 10;
  }
  performIncantation(incantation) {
    return `${incantation.toUpperCase()}!`;
  }
  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory !== 'top hat') {
      return `PULL DOVE FROM SLEEVE`;
    }
    return `PULL RABBIT FROM TOP HAT`;
  }
  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant) {
      return `WOW! The magician totally just sawed that person in half!`;
    }
    return `Oh no, this trick is not ready!`;
  }
};

module.exports = Magician;
