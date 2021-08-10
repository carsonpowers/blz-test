// Card Data

const cardData = {
  cards: [
    {
      id: 49972,
      collectible: 1,
      slug: "49972-spirit-of-the-shark",
      classId: 7,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 3,
      artistName: "Ivan Fomin",
      health: 3,
      attack: 0,
      manaCost: 4,
      name: "Spirit of the Shark",
      text:
        "<b>Stealth</b> for 1 turn. Your minions' <b>Battlecries</b> and <b>Combos</b> trigger twice.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a09b1c76143f9cbee3838f1b57d5d4060b1f130cd0e4cf12d9d420fd4f7b51b2.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/ce305d2f85bde0f376baaa22b1ebb5300f97c3c57df0c638b082cd5272f6548d.png",
      flavorText:
        "It has Stealth, but its ominous theme music keeps giving it away.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/5c445f0a5fe7e7e6ee2e5f5b8e14848188f3da30dd8841266b0ee6b510991ca5.png",
      keywordIds: [6]
    },
    {
      id: 50031,
      collectible: 1,
      slug: "50031-spirit-of-the-tiger",
      classId: 5,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 3,
      artistName: "Arthur Gimaldinov",
      health: 3,
      attack: 0,
      manaCost: 4,
      name: "Spirit of the Tiger",
      text:
        "<b>Stealth</b> for 1 turn. After you cast a spell, summon a Tiger with stats equal to its Cost.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/d77b85a92c9287b8359f2d56126b6053eea992327b6932121f69b7689c024847.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/99035af33abb3c473c38870ded82958132deacc405cab1b35694f476de63cc6c.png",
      flavorText: "Less of a cantrip and more of a cat-nip.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/8d4bc13dfdece6aab1fa6f3e2cb92ee75b5d89c09fd36b9ba1398b26ad52247d.png",
      childIds: [50033],
      keywordIds: [6]
    },
    {
      id: 50411,
      collectible: 1,
      slug: "50411-arena-treasure-chest",
      classId: 12,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "James Ryman",
      health: 4,
      attack: 0,
      manaCost: 4,
      name: "Arena Treasure Chest",
      text: "<b>Deathrattle:</b> Draw 2 cards.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/599ecc44768894b8edfa415122f824c2eb72113e43f8d1b9680a5ec52628972b.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/d1ffb412c939a062a4dd23d602a279cc44301c446cccbb57670d7453da378130.png",
      flavorText: "Yeah it's great, but did you see the Arena Treasure Arms?!",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/ab7be37b57510738f11c75d1ab42db36566f5dea71d7b704769d2d747c04bcc7.png",
      keywordIds: [12]
    },
    {
      id: 49804,
      collectible: 1,
      slug: "49804-spirit-of-the-frog",
      classId: 8,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 3,
      artistName: "Konstantin Turovec",
      health: 3,
      attack: 0,
      manaCost: 3,
      name: "Spirit of the Frog",
      text:
        "<b>Stealth</b> for 1 turn. Whenever you cast a spell, draw a spell from your deck that costs (1) more.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/8bc50ae65650d9f4a52d1911b833a4088257ecc43f5a8333df6716750bf2af10.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7d425230bacf3f12bed22328ef4a58c11ff79add8029e981b6c65554baa054c4.png",
      flavorText: "It is Wednesday, my dudes.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/5f1d92396de5481884ea044a3ffa6859eff67246d01750d176c8ddcb50cc0fda.png",
      keywordIds: [6]
    },
    {
      id: 50660,
      collectible: 1,
      slug: "50660-spirit-of-the-lynx",
      classId: 3,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 3,
      artistName: "Arthur Bozonnet",
      health: 3,
      attack: 0,
      manaCost: 3,
      name: "Spirit of the Lynx",
      text:
        "<b>Stealth</b> for 1 turn. Whenever you summon a Beast, give it +1/+1.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7fe0db2bac1a3dd5454cd86a682fe1e1fb05b9d2a210558496d928fad0870ae0.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1435fae8b53f559f2ea029c519f2a6fd2aee791f29e38c63476682cc6c691b9e.png",
      flavorText:
        "Much of this shrine’s power lies in the can-opener noise it makes.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/706a7222f4eb67d286db6e5b667482b2b9da5b06caedf912ba6f896bd2522add.png",
      keywordIds: [6]
    },
    {
      id: 49800,
      collectible: 1,
      slug: "49800-serpent-ward",
      classId: 12,
      multiClassIds: [],
      minionTypeId: 21,
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 3,
      artistName: "Cicily He",
      health: 2,
      attack: 0,
      manaCost: 2,
      name: "Serpent Ward",
      text: "At the end of your turn, deal 2 damage to the enemy hero.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f5e196926c2b19e2d76d7d493655eba4c0ff988d197fe0d77c3b9df01b3e4903.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1043f0bbbccae94df9b205ddc1c1d4c1491088dcdca5eebb5cdbe6f3c6e46c4f.png",
      flavorText: "When snakes get sick, they get sent to the Serpent Ward.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b391a2cbf2629db48a5eee4f211ff806aebae2b28397cd47b9d5d18310ebfd19.png"
    },
    {
      id: 50025,
      collectible: 1,
      slug: "50025-spirit-of-the-bat",
      classId: 9,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 3,
      artistName: "Slawomir Maniak",
      health: 3,
      attack: 0,
      manaCost: 2,
      name: "Spirit of the Bat",
      text:
        "<b>Stealth</b> for 1 turn. After a friendly minion dies, give a minion in your hand +1/+1.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0917e663cee0a49b4c00bb58245c2a4e0f2769d118d0c8eb7e5d50abbc2a7dd1.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0ef9b288027c86bfed7089f487bade79c5fc240344d8f865377f799751602f75.png",
      flavorText:
        "Nah nah nah nah, nah nah nah nah, nah nah nah nah, nah nah nah nah",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/300004524fbff8d169f8b28d52f97f6d97161569e21e23603d9accb6a217d624.png",
      keywordIds: [6]
    },
    {
      id: 50093,
      collectible: 1,
      slug: "50093-spirit-of-the-dragonhawk",
      classId: 4,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 3,
      artistName: "Jakub Kasper",
      health: 3,
      attack: 0,
      manaCost: 2,
      name: "Spirit of the Dragonhawk",
      text:
        "<b>Stealth</b> for 1 turn. Your Hero Power also targets adjacent minions.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/eb46bb68be6f28386512bcf67f98bf83277d822e31e47655c6917a7ff339a467.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/33f321b90ab299a667627983ff4afe2c11cedc2d76175338ca075cb511285aff.png",
      flavorText: "Dragonhawks aren’t known for their accuracy.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/977acc4f71a183786cc02ef6bc1e98404a0bb4a44a66a749e2cfe23bf7f9a41e.png",
      keywordIds: [6]
    },
    {
      id: 50372,
      collectible: 1,
      slug: "50372-scarab-egg",
      classId: 12,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Jim Nelson",
      health: 2,
      attack: 0,
      manaCost: 2,
      name: "Scarab Egg",
      text: "<b>Deathrattle:</b> Summon three 1/1 Scarabs.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f101a9e6b710edd309321f85e841d036e5baf994decdca73fa0d9369d2508244.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e277771c991899f5dbed8c62d12c219be386a2565edbd1719d08c92daddff577.png",
      flavorText:
        "They say you can’t make an omelet without AHHH THEY’RE EATING MY FACE!",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/2514f79e2c23a175d3fc449b5fc5e9cdd15bbc9f70dbabfb7f9d797ed44d205c.png",
      childIds: [50373],
      keywordIds: [12]
    },
    {
      id: 50493,
      collectible: 1,
      slug: "50493-dozing-marksman",
      classId: 12,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Sean McNally",
      health: 4,
      attack: 0,
      manaCost: 2,
      name: "Dozing Marksman",
      text: "Has +4 Attack while damaged.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/30c2795eca111ffbebb5a41fa522fd3b617bd7e665b215da2c3981f1ff0bb2d5.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/9b753d0484fe56d20efb487e90bf9474123676bcd3de3c1db919cf78d22b1705.png",
      flavorText: "It's the sleeper of the set.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cc44971d75dcd7d7efdd404c3a9d3b75e153b838b7ba4b5ec45ebd7c854c4bef.png"
    },
    {
      id: 49944,
      collectible: 1,
      slug: "49944-spirit-of-the-raptor",
      classId: 2,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 3,
      artistName: "Christopher Hayes",
      health: 3,
      attack: 0,
      manaCost: 1,
      name: "Spirit of the Raptor",
      text:
        "<b>Stealth</b> for 1 turn. After your hero attacks and kills a minion, draw a card.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0ea3001f060a014725fd53b4de6ce5c8ac7c345d5dfbc46c38ffebcd340350c3.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/795b4467ee746b10cc562cb671a37865a6fd5711f00006d001b8b2fe0f7d0764.png",
      flavorText: "“Loti! LOTI! Drop it. Drop it Loti! Down! Down Loti!”",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/df36b4ea4dbfc1eed3069174a28ee15c18c6d6f643782962b8e5e0aa9dda1e49.png",
      keywordIds: [6]
    },
    {
      id: 50352,
      collectible: 1,
      slug: "50352-spirit-of-the-dead",
      classId: 6,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 3,
      artistName: "James Ryman",
      health: 3,
      attack: 0,
      manaCost: 1,
      name: "Spirit of the Dead",
      text:
        "<b>Stealth</b> for 1 turn. After a friendly minion dies, shuffle a 1-Cost copy of it into your deck.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4d1dbad9ce71e75a3f026629c927ee28f6269b25bc24aa5df8a98e5aefbdcec3.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/735acae243c959f0b877240875bdced69065694a8d79196b8baf2427b2786610.png",
      flavorText: "Just because you’re dead doesn’t mean you’re off the team.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/8ba41563452aadbbb3beaa7b3e431fc1ecaa74a313f9fd1497b1d828166655db.png",
      keywordIds: [6]
    },
    {
      id: 50396,
      collectible: 1,
      slug: "50396-gurubashi-offering",
      classId: 12,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 4,
      artistName: "Izzy Hoover",
      health: 2,
      attack: 0,
      manaCost: 1,
      name: "Gurubashi Offering",
      text: "At the start of your turn, destroy this and gain 8 Armor.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e03a25b816c783d7ff7418f41969128694b09355b0fd6b5993e44258d8bcb7d1.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/6314437801e57d86580c4a51cc6185a99457af71e776de0c10e23d1a4049d8a8.png",
      flavorText:
        "For a limited time, loa blessings are on a pray-one-get-two deal (on selected sacrifices only).",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/03d1f40c73cc1f0ee338e40c80343d2ad10f59c25a41bc54c936e8550978fcbd.png"
    },
    {
      id: 52242,
      collectible: 1,
      slug: "52242-spirit-of-the-rhino",
      classId: 10,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 3,
      artistName: "Jim Nelson",
      health: 3,
      attack: 0,
      manaCost: 1,
      name: "Spirit of the Rhino",
      text:
        "<b>Stealth</b> for 1 turn. Your <b>Rush</b> minions are <b>Immune</b> the turn they're summoned.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/544231c1f90178d65d1c5192edcc9aba69cad3912e52c370723bd520d583ef90.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/895b1076a1e4bcc7e1bfba285957847ae3a779cee5cecc66d8a85479d146756b.png",
      flavorText: "Where did they get this preposterous hypothesis?",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/234657546143a8fe696e83df9a94fc78698e7b3a23e7c3da327bf422be01f3d1.png",
      keywordIds: [6, 17, 53]
    },
    {
      id: 50034,
      collectible: 1,
      slug: "50034-hireek-the-bat",
      classId: 9,
      multiClassIds: [],
      minionTypeId: 20,
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 5,
      artistName: "Slawomir Maniak",
      health: 1,
      attack: 1,
      manaCost: 8,
      name: "Hir'eek, the Bat",
      text: "<b>Battlecry:</b> Fill your board with copies of this minion.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/d3851420a70dbedcf71c5fd2132e8ce764d2fd491053805d6ff085bd19147482.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/2ad265e7326453ecf7390e19f086e4075060fad22456e7a95b3a5d8992a53a01.png",
      flavorText: "REPEL’S EFFECT WORE OFF.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/33d27f4d855c518a42eea86d097033d4325e17e574875ed5c8f0ef71bf0f3a49.png",
      keywordIds: [8]
    },
    {
      id: 50731,
      collectible: 1,
      slug: "50731-former-champ",
      classId: 12,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Peter Stapleton",
      health: 1,
      attack: 1,
      manaCost: 5,
      name: "Former Champ",
      text: "<b>Battlecry:</b> Summon a 5/5 Hotshot.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0617bf82c6154e449f1330d6254dd59d6d1adf65ca1285fd66439e6c79d57417.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e47dcca237a322daa433c64f0d1ab071428c0781f96ddb38c7b2856a4b1cceac.png",
      flavorText: "The last time he saw action, Undertaker ruled the meta.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b17bf06d3d4ff63bd0ad3c5897ab6963b40073df401dbf82cf818ee019d6131b.png",
      childIds: [50738],
      keywordIds: [8]
    },
    {
      id: 43310,
      collectible: 1,
      slug: "43310-wardruid-loti",
      classId: 2,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 5,
      artistName: "Zoltan Boros",
      health: 2,
      attack: 1,
      manaCost: 3,
      name: "Wardruid Loti",
      text:
        "<b>Choose One - </b>Transform into one of Loti's four dinosaur forms.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3dddf2e4d0801bd0f50642e4a54ad15b9718518c8b081c7e86b1f919979cd275.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e58b693e27b9a6a71d3e7b61f5bb33501123955b76b3520250b0aab642456280.png",
      flavorText:
        "“Ravasaur!” “Pretty scary” “…Blammodax!” “Is that a thing?” “SMAXODON!” “….now you’re just making those up.”",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/dde83db1d4970c5587ebc80f909146627463e8a3149be1f39a4abb9f6fe3e921.png",
      childIds: [43306, 43311, 43314, 43307, 54599, 54601, 54602, 54600, 43315]
    },
    {
      id: 49867,
      collectible: 1,
      slug: "49867-zentimo",
      classId: 8,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 5,
      artistName: "Evgeniy Zagumyennyy",
      health: 3,
      attack: 1,
      manaCost: 3,
      name: "Zentimo",
      text:
        "Whenever you target a minion with a spell, cast it again on its neighbors.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b730710d51e39e9b300604912af5d6ad9087810b8d8c7ea5447544f492758bbf.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cd5fd4080284097d026f6d34b4ec276b9b4c9d336ab919e776051036e85c5b29.png",
      flavorText: "Serenity. Peace. Many frogs.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/938a5c1005fbc65ada72f178f3ea11d0f961878301a8d56ae54a0e8fe3c5d330.png"
    },
    {
      id: 49838,
      collectible: 1,
      slug: "49838-bloodsail-howler",
      classId: 7,
      multiClassIds: [],
      minionTypeId: 23,
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 3,
      artistName: "Patrik Bjorkstrom",
      health: 1,
      attack: 1,
      manaCost: 2,
      durability: 0,
      name: "Bloodsail Howler",
      text:
        "<b>Rush</b> <b>Battlecry:</b> Gain +1/+1 for each other Pirate you control.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/9b70dc0627caa5949ef6a17736b111c3ed9d0796917c8aaca2d943b5522fecfc.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/fc41d7e13efb2f894ec3c72b3eb95ddbd1b80e95586b4c23b5331755f9d715cc.png",
      flavorText:
        "They saw their fate a closin' Aboard a pirate ship On deck: The Howlin' Hozen About to let one rip.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/2d172e7f7f635327f1430b9534c695685531073c5957a27fd0996d4f9cd3dd86.png",
      keywordIds: [8, 53]
    },
    {
      id: 50022,
      collectible: 1,
      slug: "50022-immortal-prelate",
      classId: 5,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 4,
      artistName: "Maria Trepalina",
      health: 3,
      attack: 1,
      manaCost: 2,
      name: "Immortal Prelate",
      text:
        "<b>Deathrattle:</b> Shuffle this into your deck. It keeps any enchantments.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4839018f8a553965ba289382ab0f226c623f7475680f9b5f3b0023d8d7d14229.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/d0c6b27ed89e8a5a17508e4abee28bcfd51e95ef72e7de413ccfb1e4f2412de8.png",
      flavorText: "She protec. She attac. But most importantly, she come bac.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1885f83d2becbd7b9be27d1511d612d7ca6fa67c0d0b6bcc429a878991c55448.png",
      keywordIds: [12]
    },
    {
      id: 50393,
      collectible: 1,
      slug: "50393-belligerent-gnome",
      classId: 12,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 3,
      artistName: "Brian Despain",
      health: 4,
      attack: 1,
      manaCost: 2,
      name: "Belligerent Gnome",
      text:
        "<b>Taunt</b> <b>Battlecry:</b> If your opponent has 2 or more minions, gain +1 Attack.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/53be00e951e14481c528fa02aff46cb1cfb519a4829e6b58fd36cd25b6237245.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a73b602448b01d48bd4a48e94fd781a534dd326492a440d78f5c541ad3e97789.png",
      flavorText: "Maybe don't put this one in your garden.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1b15a292721306836ee1f28d06639b8e4fd35b331046eb61225b6c7294df0878.png",
      keywordIds: [1, 8]
    },
    {
      id: 50550,
      collectible: 1,
      slug: "50550-likkim",
      classId: 8,
      multiClassIds: [],
      cardTypeId: 7,
      cardSetId: 1129,
      rarityId: 3,
      artistName: "Jakub Kasper",
      attack: 1,
      manaCost: 2,
      durability: 3,
      name: "Likkim",
      text: "Has +2 Attack while you have <b>Overloaded</b> Mana Crystals.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/bb50e44339be3a77ac56c7576b974aa34e38f52e91fb69ca85b12d175c3bf7e1.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/31c39fe456a9a6bf42bd1989497dd4ccb92457f114d70480f7e94d75a495e095.png",
      flavorText: "I double frog dare you!",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cd18774e05c6d9c4b2f2bc3a8ec458598c1be21800eab7c9b7468a6b589f2015.png",
      keywordIds: [14]
    },
    {
      id: 52931,
      collectible: 1,
      slug: "52931-soup-vendor",
      classId: 12,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 3,
      artistName: "Sean McNally",
      health: 4,
      attack: 1,
      manaCost: 2,
      name: "Soup Vendor",
      text: "Whenever you restore 3 or more Health to your hero, draw a card.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3158e1a365b6ab4eb1feb3f6c74b57429fb4aeb9ee1f33e9423373d4386278da.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/d9ce508cffe3326811ab007cf82aacb49cafab4a8ef08ede0b161215a48354d8.png",
      flavorText: "Fresh from the floor of the arena!",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4ef513cc1cd3c45c334646e1dbf67f88691c6a7475b4c86d883beba746045f3c.png"
    },
    {
      id: 49824,
      collectible: 1,
      slug: "49824-springpaw",
      classId: 3,
      multiClassIds: [],
      minionTypeId: 20,
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Vladimir Kafanov",
      health: 1,
      attack: 1,
      manaCost: 1,
      name: "Springpaw",
      text:
        "<b>Rush</b> <b>Battlecry:</b> Add a 1/1 Lynx with <b>Rush</b> to your hand.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/39e65495f0e6229011918da74fbf6882827d07b59091707b9fe05157233a1d94.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1187a141479d8d552fd26d0e0936fabf6c1062b7ba7de8ad51127b577d9a35c3.png",
      flavorText:
        "The terrible thing about lynxes is lynxes are terrible things. Their teeth are made out of biting, their paws are made out of springs!",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e12d51d894dae1c16166654a1ea300c7f26950e6b64d200a6a70bce3771ae295.png",
      childIds: [50213],
      keywordIds: [8, 53]
    },
    {
      id: 49843,
      collectible: 1,
      slug: "49843-serrated-tooth",
      classId: 7,
      multiClassIds: [],
      cardTypeId: 7,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Grace Liu",
      attack: 1,
      manaCost: 1,
      durability: 3,
      name: "Serrated Tooth",
      text: "<b>Deathrattle:</b> Give your minions <b>Rush</b>.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0b3496a7ac2b72141c3d1ba0c21377877f12a4be31a8775fd2e1eace3e46f589.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3a76352e17119eec285911e226bcc7f81f7590445fc201ef549528d166e10010.png",
      flavorText: "The tooth hurts, don’t it?",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/6efd16d6bd43b3323ff80ceae3d25a03311892776771f897358fce80197e9476.png",
      keywordIds: [12]
    },
    {
      id: 50377,
      collectible: 1,
      slug: "50377-helpless-hatchling",
      classId: 12,
      multiClassIds: [],
      minionTypeId: 20,
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Matt Dixon",
      health: 1,
      attack: 1,
      manaCost: 1,
      name: "Helpless Hatchling",
      text:
        "<b>Deathrattle:</b> Reduce the Cost of a Beast in your hand by (1).",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/33d34127048d8c77bfbc7df2642f695ec4a877812aa3384548956ef99385d10d.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/15b38a8882083935a4dd57532f4739d8b07638aea5e396aed4cf1d6d66b5897f.png",
      flavorText: "It can’t be all that helpful. Not wif dose widdle wings!",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7e203e60502a3bec1b2b6681271ab519d28ce18ece47695d821baee013e33821.png",
      keywordIds: [12]
    },
    {
      id: 50380,
      collectible: 1,
      slug: "50380-gurubashi-chicken",
      classId: 12,
      multiClassIds: [],
      minionTypeId: 20,
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Ivan Fomin",
      health: 1,
      attack: 1,
      manaCost: 1,
      name: "Gurubashi Chicken",
      text: "<b>Overkill:</b> Gain +5 Attack.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/abb35dcd6a13964101773e00894f1426b1acfe626050c133b38feeda4f21d2f3.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b17c48386009886356862a5bdd8e98babb993aa7581c2bb978a35799a20d9ac8.png",
      flavorText: "“Ya hold it by da feet, mon. Den ya THROW.”",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/017d62ea8bbccd5b78f26199653af842c4bcf256130bb5aca4c51322b2dd29cd.png",
      keywordIds: [61]
    },
    {
      id: 50381,
      collectible: 1,
      slug: "50381-daring-fire-eater",
      classId: 4,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Jesper Ejsing",
      health: 1,
      attack: 1,
      manaCost: 1,
      name: "Daring Fire-Eater",
      text:
        "<b>Battlecry:</b> Your next Hero Power this turn deals 2 more damage.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cdbc185224e9e7ba4bd9ede19a4148bca89e0776b6237866abba2cc7ff7fb7fe.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1126f7ae0bde0a5692c1f542e3a869b9fe159fe43ab34fe336e7c329e45a105b.png",
      flavorText: "A few hours later he DESTROYED the arena bathrooms.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/5b3d89a9bb86cc81fd64dcb0ffcb5c00d7ad5a0ecce4d77cb8bbacf51c85d00a.png",
      keywordIds: [8]
    },
    {
      id: 50392,
      collectible: 1,
      slug: "50392-moshogg-enforcer",
      classId: 12,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Dan Scott",
      health: 14,
      attack: 2,
      manaCost: 8,
      name: "Mosh'Ogg Enforcer",
      text: "<b>Taunt</b> <b>Divine Shield</b>",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/72c182840d3343a9d06332d68e4f87e21bd990e0629f23a77b3c5342f4cbc513.png",
      imageGold: "",
      flavorText: "Can’t break the rules if you can’t read ‘em.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/2f4e499babfe377ac764d4e8e46100df742ceac4d1d27a2ca33d4c0309f15911.png",
      keywordIds: [1, 3]
    },
    {
      id: 50395,
      collectible: 1,
      slug: "50395-rabble-bouncer",
      classId: 12,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Paul Mafayon",
      health: 7,
      attack: 2,
      manaCost: 7,
      name: "Rabble Bouncer",
      text: "<b>Taunt</b> Costs (1) less for each enemy minion.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4ce581c6b35d8b49d1c9ab2cafd202a68c71ea0c793fb4e9eb4afd24fbd44916.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/acf46a86b59be58af5ca0008850f4c8943a7cceb8b34d5b547c89facbfe8b367.png",
      flavorText: "Shirt? Shoes!? No service!",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/c686511c598895f81b559228a535153d0c39d6283c4e6a4c4212bb668b4119e3.png",
      keywordIds: [1]
    },
    {
      id: 50775,
      collectible: 1,
      slug: "50775-gral-the-shark",
      classId: 7,
      multiClassIds: [],
      minionTypeId: 20,
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 5,
      artistName: "Anton Zemskov",
      health: 2,
      attack: 2,
      manaCost: 5,
      name: "Gral, the Shark",
      text:
        "<b>Battlecry:</b> Eat a minion in your deck and gain its stats. <b>Deathrattle:</b> Add it to your hand.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7f652a6a462fd0e5d68258729fa5d23db6182e14187292e7bd1fff08e09e0f5f.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0ee511251715b9d9823bb7c1b273de6a761df844aec39d5bcdb3badf0302f9ca.png",
      flavorText: "“… We’re gonna need a bigger board.”",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b923b9076815a014643881e1797bbaf797e57c94d0c6aaf384d71d82a247dc2a.png",
      keywordIds: [8, 12]
    },
    {
      id: 50397,
      collectible: 1,
      slug: "50397-arena-fanatic",
      classId: 12,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Matt Dixon",
      health: 3,
      attack: 2,
      manaCost: 4,
      name: "Arena Fanatic",
      text: "<b>Battlecry:</b> Give all minions in your hand +1/+1.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1725124f43cc852e9364f25670986c696b4ff42343ce1b348183f06074f07d54.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/31b401db3af78304b93b9d79cca3cbfc0703d85d34a7688c5240e0d69bcefb1c.png",
      flavorText:
        "Her fantasy Rumble league gives double points for dismemberment.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/499341c38763f3726b4d62a97598a75dd6c9dbcb3f717c316865eeb47bc57f06.png",
      keywordIds: [8]
    },
    {
      id: 50386,
      collectible: 1,
      slug: "50386-banana-buffoon",
      classId: 12,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Jim Nelson",
      health: 2,
      attack: 2,
      manaCost: 3,
      name: "Banana Buffoon",
      text: "<b>Battlecry:</b> Add 2 Bananas to your hand.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/302848e779a33858faea1ef73a329d6ecfd32bf05aa7aafc3c04a953a8a69f73.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/464bf2f82f9a9f0d17d457e2bb26ce98c522fdc5130e8b7090dc1d71f89355a9.png",
      flavorText: "You could say he has a certain appeal.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/836421b7ef0c9d414f84559503b7b8353f77d8b9d8f2d3df629c0a2f098e9ccd.png",
      childIds: [53215],
      keywordIds: [8]
    },
    {
      id: 50421,
      collectible: 1,
      slug: "50421-masked-contender",
      classId: 12,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 4,
      artistName: "Alex Horley Ormandelli",
      health: 4,
      attack: 2,
      manaCost: 3,
      name: "Masked Contender",
      text:
        "<b>Battlecry:</b> If you control a <b>Secret</b>, cast a <b>Secret</b> from your deck.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/80b69f719f8cc87929dcc14f7ffb65990ef2a5947b7a00a07643b6da8b99d6b3.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/efa4cb0b414a22d4b41d5168c22e01aac19550b5a279cff3aa920d8f5b72a0a9.png",
      flavorText:
        "Knew Mysterious Challenger back when he was a Mysterious Squire.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/33f51f079a2927b770c6a495d78b5ec4705fdfbfe1a5381cc9efb36f2be7e2f4.png",
      keywordIds: [5, 8]
    },
    {
      id: 50471,
      collectible: 1,
      slug: "50471-bloodscalp-strategist",
      classId: 3,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 3,
      artistName: "Gonzalo Ordonez",
      health: 4,
      attack: 2,
      manaCost: 3,
      name: "Bloodscalp Strategist",
      text:
        "<b>Battlecry:</b> If you have a weapon equipped, <b>Discover</b> a spell.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f7a734775b3f888641c3f7b1324aaef6c0a8bfdeebc3baae8ee57ff8c2d2e2a1.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/76f11590914523465f112ed891b1b9e7e3fb29147e8fd0ff15db2f16fdf2e5b4.png",
      flavorText:
        "“Shoot them in the face” is more of a <i>tactic</i> than a <i>strategy</i>.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f694beebceb8345e18e3c93dd6c96cc0d0a2070603966438060468a8253d080b.png",
      keywordIds: [8, 21]
    },
    {
      id: 50595,
      collectible: 1,
      slug: "50595-overlords-whip",
      classId: 10,
      multiClassIds: [],
      cardTypeId: 7,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Akkapoj T.",
      attack: 2,
      manaCost: 3,
      durability: 4,
      name: "Overlord's Whip",
      text: "After you play a minion, deal 1 damage to it.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/9fda768aa0b326600e1411e916052022c9ca85d63ab883f8be9443ce814f55f1.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/31920ad8bd6b22de714bc881dc4e83265ed06efd98b653e3a1d9f2039afdf2f4.png",
      flavorText:
        "This merit badge is for cruelty. This one's for whipping. And this one is for embroidery...",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/d305cbd1214f75dcc58223ff8c943b71d68de4c9dcceca26098d0a57e23a9891.png"
    },
    {
      id: 50863,
      collectible: 1,
      slug: "50863-reckless-diretroll",
      classId: 9,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Konstantin Turovec",
      health: 6,
      attack: 2,
      manaCost: 3,
      name: "Reckless Diretroll",
      text: "<b>Taunt</b> <b>Battlecry:</b> Discard your lowest Cost card.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/082353315d7e3faae872ecd570c7aee1debce8e7594eaf7c6c5f18c6cc5a6b02.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/60794ec7b6485f68d01c3440d26cfe8705512214a9fd0071915b349f3eecea3a.png",
      flavorText: "Reck less!? ME WRECK MOAR!",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cac94b2e555b74d5f86fe78aa4e4bff074df9822677be5b0e85cb6e01fee9960.png",
      keywordIds: [1, 8]
    },
    {
      id: 49984,
      collectible: 1,
      slug: "49984-savage-striker",
      classId: 2,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Jesper Ejsing",
      health: 3,
      attack: 2,
      manaCost: 2,
      name: "Savage Striker",
      text:
        "<b>Battlecry:</b> Deal damage to an enemy minion equal to your hero's Attack.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/599a72011e71642eda8e531212860d6bcaea1f61a86a7b92bc25229846ab5321.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/6aea16926d25a264f84fced71c85260ad73bb62135a17816a5500e85d7d6e221.png",
      flavorText: "Ruthless at tribal roasts.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/91ddd71a1fcffa727c4f64180c01822df7d26a70772ce7635fb22b79cad876cc.png",
      keywordIds: [8]
    },
    {
      id: 50083,
      collectible: 1,
      slug: "50083-spellzerker",
      classId: 12,
      multiClassIds: [],
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Arthur Bozonnet",
      health: 3,
      attack: 2,
      manaCost: 2,
      name: "Spellzerker",
      text: "Has <b>Spell Damage +2</b> while damaged.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f15658d08be8f03ffc6327519318c6282608cbfab269eff5f421dbc37f6969f0.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cc6ad742478deb12e5f531579b74dcaeca0600b1420a84595a176fd70a384663.png",
      flavorText: "But don’t ask her to use it in a sentence.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a0cbbde2d5f66fe50291601fe3b8d4a529dc605a7c4b1070cb21094c2b05468d.png",
      keywordIds: [2]
    },
    {
      id: 50383,
      collectible: 1,
      slug: "50383-sharkfin-fan",
      classId: 12,
      multiClassIds: [],
      minionTypeId: 23,
      cardTypeId: 4,
      cardSetId: 1129,
      rarityId: 1,
      artistName: "Peter Stapleton",
      health: 2,
      attack: 2,
      manaCost: 2,
      name: "Sharkfin Fan",
      text: "After your hero attacks, summon a 1/1 Pirate.",
      image:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0e9ecc19881a6d56ef11b2f55351b46355ecc033d83f6a0371a80d483271d347.png",
      imageGold:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/6858bc07f68e386781d7408e5fd2e5bfe4e070522572a9f2c57e93a12dea7e96.png",
      flavorText: "His taste in soup is criminal.",
      cropImage:
        "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/16341995d425953ffc1fc5b3876416ef26f6fd6e5df800500dc194c0ea0fd6ee.png",
      childIds: [50833]
    }
  ]
};

const getCardData = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(cardData);
    }, 500);
  });

export default getCardData;
