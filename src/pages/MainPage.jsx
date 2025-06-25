import { useState } from "react";
import NavBar from "../components/NavBar";
import CardList from "../cards/CardList";
import Footer from "../components/Footer";

function MainPage() {
  const [sortType, setSortType] = useState("");
  const [sortRace, setSortRace] = useState("");
  const [searchCard, setSearchCard] = useState("");
  const [sortAttribute, setSortAttribute] = useState("");

  return (
    <main>
      <NavBar
        setSearchCard={setSearchCard}
        setSortType={setSortType}
        setSortRace={setSortRace}
        setSortAttribute={setSortAttribute}
      />
      <CardList
        searchCard={searchCard}
        sortType={sortType}
        sortRace={sortRace}
        sortAttribute={sortAttribute}
      />
      <Footer />
    </main>
  );
}

export default MainPage;
