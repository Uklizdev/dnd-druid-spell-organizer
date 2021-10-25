const spellsLVL1 = [
  {
    index: "animal-friendship",
    name: "Animal Friendship",
    url: "/api/spells/animal-friendship",
    shortdesc:
      "Makes one animal your friend. (Doesn’t work if they have an intelligence of 4 or higher!)",
    desc: [
      "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spells ends.",
    ],
    range: "30 feet",
    components: ["V", "S", "M"],
    material: "A morsel of food.",
    ritual: false,
    duration: "24 hours",
    concentration: false,
    casting_time: "1 action",
    level: 1,
    dc: {
      dc_type: {
        index: "wis",
        name: "WIS",
        url: "/api/ability-scores/wis",
      },
      dc_success: "none",
    },
  },
  {
    index: "charm-person",
    name: "Charm Person",
    url: "/api/spells/charm-person",
    shortdesc: "Makes one person your friend",
    desc: [
      "You attempt to charm a humanoid you can see within range. It must make a wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.",
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
    ],
    range: "30 feet",
    components: ["V", "S"],
    ritual: false,
    duration: "1 hour",
    concentration: false,
    casting_time: "1 action",
    level: 1,
    dc: {
      dc_type: {
        index: "wis",
        name: "WIS",
        url: "/api/ability-scores/wis",
      },
      dc_success: "none",
    },
  },
  {
    index: "create-or-destroy-water",
    name: "Create or Destroy Water",
    url: "/api/spells/create-or-destroy-water",
    shortdesc: "Create or destroy up to 10 gallons of water.",
    desc: [
      "You either create or destroy water.",
      "Create Water.",
      "You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range.",
      "Destroy Water.",
      "You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range.",
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st.",
    ],
    range: "30 feet",
    components: ["V", "S", "M"],
    material:
      "A drop of water if creating water, or a few grains of sand if destroying it.",
    ritual: false,
    duration: "Instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 1,
  },
  {
    index: "cure-wounds",
    name: "Cure Wounds",
    url: "/api/spells/cure-wounds",
    shortdesc: "Heals a target by 1d8+your Wis modifier.",
    desc: [
      "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.",
    ],
    range: "Touch",
    components: ["V", "S"],
    ritual: false,
    duration: "Instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 1,
    heal_at_slot_level: {
      1: "1d8 + MOD",
      2: "2d8 + MOD",
      3: "3d8 + MOD",
      4: "4d8 + MOD",
      5: "5d8 + MOD",
      6: "6d8 + MOD",
      7: "7d8 + MOD",
      8: "8d8 + MOD",
      9: "9d8 + MOD",
    },
  },
  {
    index: "detect-magic",
    name: "Detect Magic",
    url: "/api/spells/detect-magic",
    shortdesc: "Detects spells and magic items within 60 ft.",
    desc: [
      "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.",
      "The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
    ],
    range: "Self",
    components: ["V", "S"],
    ritual: true,
    duration: "Up to 10 minutes",
    concentration: true,
    casting_time: "1 action",
    level: 1,
    area_of_effect: {
      type: "sphere",
      size: 30,
    },
  },
  {
    index: "detect-poison-and-disease",
    name: "Detect Poison and Disease",
    url: "/api/spells/detect-poison-and-disease",
    shortdesc:
      "Detect and identify poisons and diseases 30 ft from you for up to 10 minutes",
    desc: [
      "For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case.",
      "The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
    ],
    range: "Self",
    components: ["V", "S", "M"],
    material: "A yew leaf.",
    ritual: true,
    duration: "Up to 10 minutes",
    concentration: true,
    casting_time: "1 action",
    level: 1,
    area_of_effect: {
      type: "sphere",
      size: 30,
    },
  },
  {
    index: "entangle",
    name: "Entangle",
    url: "/api/spells/entangle",
    shortdesc:
      "A 20 ft square of weeds and vines restrain any creature that fails a Str save",
    desc: [
      "Grasping weeds and vines sprout from the ground in a 20-foot square starting form a point within range. For the duration, these plants turn the ground in the area into difficult terrain.",
      "A creature in the area when you cast the spell must succeed on a strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself.",
      "When the spell ends, the conjured plants wilt away.",
    ],
    range: "90 feet",
    components: ["V", "S"],
    ritual: false,
    duration: "Up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: 1,
    dc: {
      dc_type: {
        index: "str",
        name: "STR",
        url: "/api/ability-scores/str",
      },
      dc_success: "none",
    },
    area_of_effect: {
      type: "cube",
      size: 20,
    },
  },
  {
    index: "faerie-fire",
    name: "Faerie Fire",
    url: "/api/spells/faerie-fire",
    shortdesc:
      "Outlines targets in a 20 ft cube in colored light. Attacks against outlined creatures have advantage.",
    desc: [
      "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius.",
      "Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.",
    ],
    range: "60 feet",
    components: ["V"],
    ritual: false,
    duration: "Up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: 1,
    dc: {
      dc_type: {
        index: "dex",
        name: "DEX",
        url: "/api/ability-scores/dex",
      },
      dc_success: "none",
    },
    area_of_effect: {
      type: "cube",
      size: 20,
    },
  },
  {
    index: "fog-cloud",
    name: "Fog Cloud",
    url: "/api/spells/fog-cloud",
    shortdesc: "Create a 20 foot radius sphere of fog.",
    desc: [
      "You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.",
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.",
    ],
    range: "120 feet",
    components: ["V", "S"],
    ritual: false,
    duration: "Up to 1 hour",
    concentration: true,
    casting_time: "1 action",
    level: 1,
    area_of_effect: {
      type: "sphere",
      size: 20,
    },
  },
  {
    index: "goodberry",
    name: "Goodberry",
    url: "/api/spells/goodberry",
    shortdesc:
      "Creates up to 10 berries that heal 1 HP and can nourish a creature for 1 day.",
    desc: [
      "Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for a day.",
      "The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell.",
    ],
    range: "Touch",
    components: ["V", "S", "M"],
    material: "A sprig of mistletoe.",
    ritual: false,
    duration: "Instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 1,
  },
  {
    index: "healing-word",
    name: "Healing Word",
    url: "/api/spells/healing-word",
    shortdesc:
      "A creature of your choice within range regains hit points equal to 1d4 + Wis.",
    desc: [
      "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.",
    ],
    range: "60 feet",
    components: ["V"],
    ritual: false,
    duration: "Instantaneous",
    concentration: false,
    casting_time: "1 bonus action",
    level: 1,
    heal_at_slot_level: {
      1: "1d4 + MOD",
      2: "2d4 + MOD",
      3: "3d4 + MOD",
      4: "4d4 + MOD",
      5: "5d4 + MOD",
      6: "6d4 + MOD",
      7: "7d4 + MOD",
      8: "8d4 + MOD",
      9: "9d4 + MOD",
    },
  },
  {
    index: "jump",
    name: "Jump",
    url: "/api/spells/jump",
    shortdesc: "A target’s jump distance triples.",
    desc: [
      "You touch a creature. The creature's jump distance is tripled until the spell ends.",
    ],
    range: "Touch",
    components: ["V", "S", "M"],
    material: "A grasshopper's hind leg.",
    ritual: false,
    duration: "1 minute",
    concentration: false,
    casting_time: "1 action",
    level: 1,
  },
  {
    index: "longstrider",
    name: "Longstrider",
    url: "/api/spells/longstrider",
    shortdesc: "A target’s speed increases by 10 ft",
    desc: [
      "You touch a creature. The target's speed increases by 10 feet until the spell ends.",
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each spell slot above 1st.",
    ],
    range: "Touch",
    components: ["V", "S", "M"],
    material: "A pinch of dirt.",
    ritual: false,
    duration: "1 hour",
    concentration: false,
    casting_time: "1 action",
    level: 1,
  },
  {
    index: "purify-food-and-drink",
    name: "Purify Food and Drink",
    url: "/api/spells/purify-food-and-drink",
    shortdesc: "Purifies any nonmagical food and drink in a 5 ft sphere.",
    desc: [
      "All nonmagical food and drink within a 5-foot radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease.",
    ],
    range: "10 feet",
    components: ["V", "S"],
    ritual: true,
    duration: "Instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 1,
  },
  {
    index: "speak-with-animals",
    name: "Speak with Animals",
    url: "/api/spells/speak-with-animals",
    shortdesc: "Allows you to temporarily speak with animals",
    desc: [
      "You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at a minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM's discretion.",
    ],
    range: "Self",
    components: ["V", "S"],
    ritual: true,
    duration: "10 minutes",
    concentration: false,
    casting_time: "1 action",
    level: 1,
  },
  {
    index: "thunderwave",
    name: "Thunderwave",
    url: "/api/spells/thunderwave",
    shortdesc:
      "15 ft cube of thunder, targets make a Con save to take 2d8 thunder damage or half.",
    desc: [
      "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.",
      "In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.",
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
    ],
    range: "Self",
    components: ["V", "S"],
    ritual: false,
    duration: "Instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 1,
    damage: {
      damage_type: {
        index: "thunder",
        name: "Thunder",
        url: "/api/damage-types/thunder",
      },
      damage_at_slot_level: {
        1: "2d8",
        2: "3d8",
        3: "4d8",
        4: "5d8",
        5: "6d8",
        6: "7d8",
        7: "8d8",
        8: "9d8",
        9: "10d8",
      },
    },
    dc: {
      dc_type: {
        index: "con",
        name: "CON",
        url: "/api/ability-scores/con",
      },
      dc_success: "half",
    },
    area_of_effect: {
      type: "cube",
      size: 15,
    },
  },
];

export default spellsLVL1;
