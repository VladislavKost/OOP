// import { createCharacter } from "../app";
import { Bowerman } from "../characters/Bowerman";
import { Daemon } from "../characters/Daemon";
import { Magician } from "../characters/Magician";
import { Swordsman } from "../characters/Swordsman";
import { Undead } from "../characters/Undead";
import { Zombie } from "../characters/Zombie";
import { Character } from "../characters/Character";

const attackDefence = {
  Bowerman: [25, 25],
  Swordsman: [40, 10],
  Magician: [10, 40],
  Undead: [25, 25],
  Zombie: [40, 10],
  Daemon: [10, 40],
};

const getCharacterInfo = (name, type) => ({
  name: name,
  type: type,
  health: 100,
  level: 1,
  attack: attackDefence[type][0],
  defence: attackDefence[type][1],
});

test("error short name", () => {
  expect(() => new Bowerman("B")).toThrow("Incorrect name");
});

test("error invalid character type", () => {
  expect(() => new Character("John", "God")).toThrow("Invalid type");
});

test("error levelUp died", () => {
  const daemon = new Daemon("John");
  daemon.damage(500);
  expect(() => daemon.levelUp()).toThrow(
    "Impossible to level up a died character"
  );
});

test("error damage died", () => {
  const daemon = new Daemon("John", "Daemon");
  daemon.damage(500);
  expect(() => daemon.damage(10)).toThrow(
    "Impossible to damage a died character"
  );
});

test("create Bowerman", () => {
  const bowerman = new Bowerman("John", "Bowerman");

  expect(bowerman).toEqual(getCharacterInfo("John", "Bowerman"));
});

test("create Swordsman", () => {
  const swordsman = new Swordsman("John");

  expect(swordsman).toEqual(getCharacterInfo("John", "Swordsman"));
});

test("create Magician", () => {
  const magician = new Magician("John", "Magician");

  expect(magician).toEqual(getCharacterInfo("John", "Magician"));
});

test("create Undead", () => {
  const undead = new Undead("John", "Undead");

  expect(undead).toEqual(getCharacterInfo("John", "Undead"));
});

test("create Zombie", () => {
  const zombie = new Zombie("John", "Zombie");

  expect(zombie).toEqual(getCharacterInfo("John", "Zombie"));
});

test("create Daemon", () => {
  const daemon = new Daemon("John", "Daemon");

  expect(daemon).toEqual(getCharacterInfo("John", "Daemon"));
});

test("check damage live", () => {
  const daemon = new Daemon("John", "Daemon");
  daemon.damage(10);
  expect(daemon).toEqual({
    name: "John",
    type: "Daemon",
    health: 90.4,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test("check damage fatal", () => {
  const daemon = new Daemon("John", "Daemon");
  daemon.damage(500);
  expect(daemon).toEqual({
    name: "John",
    type: "Daemon",
    health: 0,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test("check levelUP", () => {
  const daemon = new Daemon("John", "Daemon");
  daemon.levelUp();

  expect(daemon).toEqual({
    name: "John",
    type: "Daemon",
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});
