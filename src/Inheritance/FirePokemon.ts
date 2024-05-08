import Pokemon from './Pokemon';

class FirePokemon extends Pokemon {
  constructor(name: string) {
    super(name);
  }

  attack(): void {
    console.log(this.name + ' used Ember!');
  }
}

export default FirePokemon;
