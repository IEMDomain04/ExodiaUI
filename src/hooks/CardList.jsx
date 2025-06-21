import { useState, useEffect } from "react";

const API_URL = "";

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
    <section className="cards-list grid grid-cols-2 px-30 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      {cards.map((card) => (
        <div className="bg-black border border-white rounded-xl m-2 flex flex-col justify-center items-center text-center p-5">
          <img src={card.card_images[0].image_url} alt={card.name} width={120} />
          <h1 className="mt-3 text-yellow-200">{card.name}</h1>
          <a className="mt-3 text-amber-300" href="" target="_blank">SELECT</a>
        </div>
      ))}

    </section>
  );
}

export default CardList;
