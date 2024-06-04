import { Character } from "./Character";

export class Bowerman extends Character {
  constructor(name) {
    super(name, "Bowerman");
    this.attack = 25;
    this.defence = 25;
  }
}
