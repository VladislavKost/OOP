export class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Incorrect name");
    }
    if (
      ["Bowerman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"].indexOf(
        type
      ) === -1
    ) {
      throw new Error("Invalid type");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
      return this;
    } else {
      throw new Error("Impossible to level up a died character");
    }
  }

  damage(points) {
    if (this.health > 0) {
      const newHealth = this.health - points * (1 - this.defence / 1000);
      this.health = newHealth < 0 ? 0 : newHealth;
    } else {
      throw new Error("Impossible to damage a died character");
    }
  }
}
