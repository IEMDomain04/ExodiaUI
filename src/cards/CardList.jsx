import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

function CardList({ searchCard, sortType, sortRace, sortAttribute }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cards from the API
  useEffect(() => {
    fetch(API_URL)
      .then((resp) => resp.json())
      .then((data) => {
        setCards(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("FETCHING CARDS ERROR: ", error);
      });
  });

  // Searching Function
  const searchCards = cards.filter((card) => {
  const matchesSearch = card.name.toLowerCase().includes(searchCard.toLowerCase().trim());
  const matchesType = sortType ? card.type === sortType : true;
  const matchesRace = sortRace ? card.race === sortRace : true;
  const matchesAttribute = sortAttribute ? card.attribute === sortAttribute : true;

  return matchesSearch && matchesType && matchesRace && matchesAttribute;
});

  if (loading) return <p>LOADING!!</p>;

  return (
    <section className="cards-list grid grid-cols-2 px-3 my-20 gap-x-2 md:grid-cols-2 lg:px-14 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {searchCards.map((card) => (
        <div key={card.id} className="bg-darkColor border border-white rounded-xl p-3 m-3 flex flex-col justify-center items-center text-center">
          {/* Image of the Cards */}
          <img className="card-image w-30 md:w-50 xl:w-70" src={card.card_images[0].image_url} alt={card.name} />
          <div className="text-white mt-3 space-y-8">
            <div className="space-y-2">
              {/* Name of the Cards */}
              <h1 className="text-h4 font-bold">{card.name}</h1>
              {/* Tags of the Cards */}
              <div className="text-tag flex flex-wrap justify-center gap-1">
                <p className="bg-typeTag rounded-full border border-white w-fit px-5 py-1">{card.type}</p>
                {card.attribute && (
                  <p className="bg-attributeTag rounded-full border border-white w-fit px-5 py-1">{card.attribute}</p>
                )}
                <p className="bg-raceTag rounded-full border border-white w-fit px-5 py-1">{card.race}</p>
              </div>
            </div>
            <Link to={`/card/${card.id}`} className="know-more text-amber-300"> KNOW MORE </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CardList;
