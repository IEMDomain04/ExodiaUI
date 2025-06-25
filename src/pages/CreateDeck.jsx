import { useState } from "react";
import DeckCreate from "../cards/DeckCreate";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function CreateDeck() {
  const [sortType, setSortType] = useState("");
  const [sortRace, setSortRace] = useState("");
  const [searchCard, setSearchCard] = useState("");
  const [sortAttribute, setSortAttribute] = useState("");
  return (
    <>
      <NavBar 
        setSearchCard={setSearchCard} 
        setSortType={setSortType}
        setSortRace={setSortRace}
        setSortAttribute={setSortAttribute}
      />
      <DeckCreate 
        searchCard={searchCard}
        sortType={sortType}
        sortRace={sortRace}
        sortAttribute={sortAttribute}
      />
      <Footer />
    </>
  );
}

export default CreateDeck;
