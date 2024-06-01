export const attackDefence = {
  Bowman: [25, 25],
  Swordsman: [40, 10],
  Magician: [10, 40],
  Undead: [25, 25],
  Zombie: [40, 10],
  Daemon: [10, 40],
};

class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Incorrect name");
    }

    // Этот код не нужен, ибо проверка проводится в методе createCharacter
    // if (
    //   ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"].indexOf(
    //     type
    //   ) === -1
    // ) {
    //   throw new Error("Incorrect type");
    // }

    const attack = attackDefence[type][0];
    const defence = attackDefence[type][1];

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
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

class Bowerman extends Character {
  constructor(name) {
    super(name, "Bowman");
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, "Magician");
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, "Undead");
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");
  }
}

export function createCharacter(name, type) {
  switch (type) {
    case "Bowman":
      return new Bowerman(name);
    case "Swordsman":
      return new Swordsman(name);
    case "Magician":
      return new Magician(name);
    case "Daemon":
      return new Daemon(name);
    case "Undead":
      return new Undead(name);
    case "Zombie":
      return new Zombie(name);
    default:
      throw new Error("Invalid type");
  }
}
