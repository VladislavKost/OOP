import { createCharacter, attackDefence } from "../characters";

const getCharacterInfo = (name, type) => ({
  name: name,
  type: type,
  health: 100,
  level: 1,
  attack: attackDefence[type][0],
  defence: attackDefence[type][1],
});

test("error short name", () => {
  expect(() => createCharacter("J", "Daemon")).toThrow("Incorrect name");
});

test("error invalid character type", () => {
  expect(() => createCharacter("John", "God")).toThrow("Invalid type");
});

test("error levelUp died", () => {
  const daemon = createCharacter("John", "Daemon");
  daemon.damage(500);
  expect(() => daemon.levelUp()).toThrow(
    "Impossible to level up a died character"
  );
});

test("error damage died", () => {
  const daemon = createCharacter("John", "Daemon");
  daemon.damage(500);
  expect(() => daemon.damage(10)).toThrow(
    "Impossible to damage a died character"
  );
});

test("create Bowman", () => {
  const bowman = createCharacter("John", "Bowman");

  expect(bowman).toMatchObject(getCharacterInfo("John", "Bowman"));
});

test("create Swordsman", () => {
  const swordsman = createCharacter("John", "Swordsman");

  expect(swordsman).toMatchObject(getCharacterInfo("John", "Swordsman"));
});

test("create Magician", () => {
  const magician = createCharacter("John", "Magician");

  expect(magician).toMatchObject(getCharacterInfo("John", "Magician"));
});

test("create Undead", () => {
  const undead = createCharacter("John", "Undead");

  expect(undead).toMatchObject(getCharacterInfo("John", "Undead"));
});

test("create Zombie", () => {
  const zombie = createCharacter("John", "Zombie");

  expect(zombie).toMatchObject(getCharacterInfo("John", "Zombie"));
});

test("create Daemon", () => {
  const daemon = createCharacter("John", "Daemon");

  expect(daemon).toMatchObject(getCharacterInfo("John", "Daemon"));
});

test("check damage live", () => {
  const daemon = createCharacter("John", "Daemon");
  daemon.damage(10);
  expect(daemon).toMatchObject({
    name: "John",
    type: "Daemon",
    health: 90.4,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test("check damage fatal", () => {
  const daemon = createCharacter("John", "Daemon");
  daemon.damage(500);
  expect(daemon).toMatchObject({
    name: "John",
    type: "Daemon",
    health: 0,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test("check levelUP", () => {
  const daemon = createCharacter("John", "Daemon");
  daemon.levelUp();

  expect(daemon).toMatchObject({
    name: "John",
    type: "Daemon",
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});
