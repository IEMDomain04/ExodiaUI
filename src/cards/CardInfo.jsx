import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const API_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

function CardInfo() {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ Initialize navigate
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p className="text-white">Loading...</p>;
  if (!card) return <p className="text-red-500">Card not found.</p>;

  return (
    <section className="my-10">
        <button onClick={() => navigate(-1)} // ✅ Go back to the previous page
        className="bg-amber-400 text-black mx-10 px-4 py-2 rounded-md mb-10"
      >
        ← Back
        </button>
      
    <section className="bg-darkColor border border-white p-5 rounded-xl m-5 text-white">  
      {/* Whole Contents */}
      <div className="max-w-5xl mx-auto flex items-center">
        {/* Image of the Card */}
        <img className="w-30 md:w-50 xl:w-70 border border-white rounded-xl" src={card.card_images[0].image_url} alt={card.name} />
        {/* Text, Tags, Description */}
        <div className="mx-10 space-y-10">
            <div className="space-y-3">
                <div className="flex items-end gap-5">
                    <h1 className="text-h1 font-bold tracking-widest">{card.name}</h1>
                    <h2 className="text-h3 text-blue-300 tracking-wide">{card.type}</h2>
                </div>
                <div className="flex gap-5">
                    <p className="bg-attackTag rounded-full border border-white w-fit px-5 py-1">ATK: {card.atk}</p>
                    <p className="bg-defenseTag rounded-full border border-white w-fit px-5 py-1">DEF: {card.def}</p>
                    <p className="bg-levelTag rounded-full border border-white w-fit px-5 py-1">LVL: {card.level}</p>
                    <p className="bg-attributeTag rounded-full border border-white w-fit px-5 py-1">{card.attribute}</p>
                    <p className="bg-raceTag rounded-full border border-white w-fit px-5 py-1">{card.race}</p>
                </div>
            </div>
            <p className="text-h3 tracking-wide">{card.desc}</p>
        </div>
      
      </div>
    </section>
    </section>
  );
}

export default CardInfo;
