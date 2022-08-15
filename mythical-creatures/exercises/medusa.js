var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  };

  gazeAtVictim(victim) {
    if (this.statues.length === 3) {
      var person = this.statues.shift();
      person = new Person(person.name);
      person.mood = 'relieved';
    };
    this.statues.push(new Statue(victim.name));
    return person;
  };

};

module.exports = Medusa;
