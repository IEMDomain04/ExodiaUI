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
    <section className="grid grid-cols-2 p-3">
      {cards.map((card) => (
        <div className="border border-black rounded-xl m-2 flex flex-col justify-center text-center items-center p-5">
          <img
            src={card.card_images[0].image_url}
            alt={card.name}
          />
          <h1>{card.name}</h1>
        </div>
      ))}
    </section>
  );
}

export default CardList;
