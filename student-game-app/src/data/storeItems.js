// src/data/storeItems.js
import toasterSeafood from "../assets/toaster_seafood.png";
import toasterJam from "../assets/toaster_jam.png";
import toasterVeggie from "../assets/toaster_veggie.png";
import toasterButter from "../assets/toaster_butter.png";
import toasterMold from "../assets/toaster_mold.png";
import toasterMystery from "../assets/toaster_mystery.png";


export const STORE_ITEMS = [
  { id: "seafood", name: "Seafood Toast", price: 3000, img: toasterSeafood },
  { id: "jam", name: "Jam Toast", price: 4000, img: toasterJam },
  { id: "veggie", name: "Veggie Toast", price: 5000, img: toasterVeggie },
  { id: "butter", name: "Butter Toast", price: 5000, img: toasterButter },
  { id: "mold", name: "Moldy Toast", price: 30000, img: toasterMold },
  { id: "mystery", name: "Mystery Toast", price: 10000, img: toasterMystery },
];
