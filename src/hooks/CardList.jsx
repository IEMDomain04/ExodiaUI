import { useState, useEffect } from "react";

const API_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

function CardList() {
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

  if (loading) return <p>LOADING!!</p>;

  return (
    <section className="cards-list grid grid-cols-2 px-3 mb-20 gap-x-2 md:grid-cols-2 lg:px-14 lg:grid-cols-3 xl:grid-cols-4">
      
      {cards.map((card) => (
        <div className="bg-darkColor border border-white rounded-xl p-3 m-3 flex flex-col">
          <img className="w-30 md:w-50 xl:w-80" src={card.card_images[0].image_url} alt={card.name} />

          <div className="px-5 space-y-10">
            <div className="space-y-3">
              <h3 className="text-xl mt-5 text-yellow-200">{card.name}</h3>

              <div className="flex gap-2">
                <div className="text-xs text-white bg-typeTag rounded-full px-5 py-2 mt-2">
                  <p>{card.type}</p>
                </div>
                <div className="text-xs text-white bg-attributeTag rounded-full px-5 py-2 mt-2">
                  <p>{card.attribute}</p>
                </div>
              </div>
            </div>

            <a className="text-amber-400 mt-10" href="">Know more..</a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CardList;
