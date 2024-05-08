abstract class Pokemon {
  protected name: string;
  protected level: number;

  constructor(name: string) {
    this.name = name;
    this.level = 5;
  }

  levelUp() {
    this.level++;
  }

  attack() {}
}

export default Pokemon;
