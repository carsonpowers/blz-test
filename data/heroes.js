// Hero Data

const heroData = {
  heroes: [
    {
      slug: "demonhunter",
      id: 14,
      name: "Demon Hunter",
      cardId: 56550,
      heroPowerCardId: 60224,
      alternateHeroCardIds: [60238, 62491, 64697, 71077, 71078, 71079]
    },
    {
      slug: "druid",
      id: 2,
      name: "Druid",
      cardId: 274,
      heroPowerCardId: 1123,
      alternateHeroCardIds: [50484, 56358, 57761, 60375]
    },
    {
      slug: "hunter",
      id: 3,
      name: "Hunter",
      cardId: 31,
      heroPowerCardId: 229,
      alternateHeroCardIds: [2826, 57759, 60335, 61597]
    },
    {
      slug: "mage",
      id: 4,
      name: "Mage",
      cardId: 637,
      heroPowerCardId: 807,
      alternateHeroCardIds: [2829, 39117, 57765, 61598, 62772]
    },
    {
      slug: "paladin",
      id: 5,
      name: "Paladin",
      cardId: 671,
      heroPowerCardId: 472,
      alternateHeroCardIds: [2827, 46116, 53187, 57757, 61886]
    },
    {
      slug: "priest",
      id: 6,
      name: "Priest",
      cardId: 813,
      heroPowerCardId: 479,
      alternateHeroCardIds: [41887, 54816, 57767]
    },
    {
      slug: "rogue",
      id: 7,
      name: "Rogue",
      cardId: 930,
      heroPowerCardId: 730,
      alternateHeroCardIds: [40195, 57755]
    },
    {
      slug: "shaman",
      id: 8,
      name: "Shaman",
      cardId: 1066,
      heroPowerCardId: 687,
      alternateHeroCardIds: [40183, 53237, 55963, 57753, 60673, 64848]
    },
    {
      slug: "warlock",
      id: 9,
      name: "Warlock",
      cardId: 893,
      heroPowerCardId: 300,
      alternateHeroCardIds: [51834, 57763, 64685]
    },
    {
      slug: "warrior",
      id: 10,
      name: "Warrior",
      cardId: 7,
      heroPowerCardId: 725,
      alternateHeroCardIds: [2828, 57751, 58787]
    },
    {
      slug: "neutral",
      id: 12,
      name: "Neutral"
    }
  ]
};

const getHeroData = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(heroData);
    }, 501)
  );

export default getHeroData;
