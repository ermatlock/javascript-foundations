var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    var statue = new Statue(victim.name);
    if (this.statues.length === 3) {
      var person = this.statues.shift();
      person = new Person(person.name);
      person.mood = 'relieved';
      this.statues.push(statue);
      return person
    } else {
      this.statues.push(statue);
    }
  };
};

module.exports = Medusa;