export class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = Number(type);
  }

  attack() {
    const heroes = [
      { type: 'guerreiro', weapon: 'espada'}, 
      { type: 'mago', weapon: 'magia'}, 
      { type: 'monge', weapon: 'artes marciais'}, 
      { type: 'ninja', weapon: 'shuriken'}
    ]

    const hero = heroes[this.type].type
    const weapon = heroes[this.type].weapon

    document.getElementById('hero-attack').innerHTML = `O ${hero} ${this.name} atacou usando ${weapon}`
  }
}