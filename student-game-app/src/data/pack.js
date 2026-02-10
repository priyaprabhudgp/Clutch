// Each pack contains multiple spreads/items
export const PACKS = {
  jamPack: {
    id: "jamPack",
    name: "Jam Pack",
    price: 4000,
    img: packImage,
    items: ["banana", "blueberry", "cherry", "grape", "raspberry", "strawberry"]
  },
  meatPack: {
    id: "meatPack",
    name: "Meat Pack",
    price: 3000,
    img: packImage,
    items: [/* items */]
  },
  // ... etc for all 6 packs
};

// Map item IDs to their images
export const ITEM_IMAGES = {
  banana: "student-game-app/gacha-bank/JamPack/banana.png",
  blueberry: "student-game-app/gacha-bank/JamPack/blueberry.png",
  cherry: "student-game-app/gacha-bank/JamPack/cherry.png",
  grape: "student-game-app/gacha-bank/JamPack/grape.png",
  raspberry: "student-game-app/gacha-bank/JamPack/raspberry.png",
  strawberry: "student-game-app/gacha-bank/JamPack/strawberry.png",
  
  // ... etc
};