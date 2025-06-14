// The list of cards will be presented first with name and id, when it is pressed it will display the des 

import { useEffect, useState } from "react";

function App() {
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("PLACE API HERE")
      .then((res) => res.json())
      .then((data) => {
        setCardData(data.data[0]); // Access first card result
        setLoading(false);
      })
      .catch((err) => {
        console.error("API error:", err);
        setLoading(false);
      });
  }, []);

  console.log()

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{cardData.name}</h1>
      <p>{cardData.desc}</p>
      <p>{cardData.type}</p>
      <p>{cardData.attribute}</p>
      <img src={cardData.card_images[0].image_url} alt={cardData.name} />
    </div>
  );
}

export default App;
