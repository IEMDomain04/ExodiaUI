import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

function CardInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    fetch(`${API_URL}?id=${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCard(data.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching card:", error);
        setLoading(false);
      });
  }, [id]);

  // Loading and Card not Found
  if (loading) return <p className="text-white">Loading...</p>;
  if (!card) return <p className="text-red-500">Card not found.</p>;

  return (
    <section className="my-10">
      <button
        onClick={() => navigate(-1)} // ✅ Go back to the previous page
        className="btn2 bg-amber-400 text-black block mx-auto px-4 py-2 rounded-md mb-10 cursor-pointer"
      >
        ← Back
      </button>

      <div className="flex flex-col gap-10">
        {/* Image of the cards */}
        <img
          className="mx-auto border border-white rounded-xl w-70 xl:w-70"
          src={card.card_images[0].image_url}
          alt={card.name}
        />
        <div className="bg-darkColor border border-white h-fit w-fit rounded-xl p-5 mx-10 text-white">
          {/* Text, Tags, Description */}
          <div className="space-y-10">
            <div className="space-y-3">
              <div className="flex flex-col text-center gap-8 mb-10">
                <h1 className="text-h1 font-bold tracking-widest">{card.name}</h1>
                <h2 className="text-h3 text-blue-300 tracking-wide">{card.type}</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-5">
                {card.atk && (
                  <p className="bg-attackTag rounded-full border border-white w-fit px-5 py-1">
                    ATK: {card.atk}
                  </p>
                )}
                {card.def && (
                  <p className="bg-defenseTag rounded-full border border-white w-fit px-5 py-1">
                    DEF: {card.def}
                  </p>
                )}
                {card.level && (
                  <p className="bg-levelTag rounded-full border border-white w-fit px-5 py-1">
                    LVL: {card.level}
                  </p>
                )}
                {card.attribute && (
                  <p className="bg-attributeTag rounded-full border border-white w-fit px-5 py-1">
                    {card.attribute}
                  </p>
                )}
                {card.race && (
                  <p className="bg-raceTag rounded-full border border-white w-fit px-5 py-1">
                    {card.race}
                  </p>
                )}
              </div>
            </div>
            <p className="text-h3 tracking-wide">{card.desc}</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate(-1)} // ✅ Go back to the previous page
        className="btn2 bg-amber-400 text-black block mx-auto px-4 py-2 rounded-md my-10 cursor-pointer"
      >
        ← Back
      </button>
    </section>
  );
}

export default CardInfo;
