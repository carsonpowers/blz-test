import "./styles.css";
import React, { useEffect, useState } from "react";
import getCardData from "../data/cards";
import getHerodata from "../data/heroes";

// Tasks:

// Main Objective: Build a sortable card explorer application.

// getCardData: <Promise> : Returns card data
// getHerodata: <Promise> : Returns hero images and ID mapping.

// 1. Get the data from data/cards.js
// 2. Display a list of card <img> sorted alphabetically by card name.
// 3. Create a button that sorts the cards by lowest mana cost to highest mana cost.
// 4. Create a button that returns the data to be sorted alphabetically.
// 5. Obtain hero data from getHeroData
// 6. Add Hero names to top of application.
// 7. Clicking a hero name should make the font weight bold and filter the card list to only show those heroes.
// 8. Clicking the same hero name again removes the bold weight and the data filter.

const App = () => {
  const [cardData, updateCardData] = useState();
  const [heroData, updateHeroData] = useState();

  useEffect(() => {
    (async () => {
      const { cards } = await getCardData();
      const { heroes } = await getHerodata();
      updateCardData(cards);
      updateHeroData(heroData);
    })();
  }, []);

  if (!cardData) return null;
  console.log(heroData);

  const Cards = () => cardData.map(({ image }) => <img src={image} />);

  return (
    <div className="App">
      <Cards />
    </div>
  );
};

export default App;
