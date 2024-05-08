import Pokemon from './Pokemon';

class WaterPokemon extends Pokemon {
  constructor(name: string) {
    super(name);
  }

  attack(): void {
    console.log(this.name + ' used Bubble!');
  }
}

export default WaterPokemon;
