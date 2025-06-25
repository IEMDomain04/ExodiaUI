import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CardList({ searchCard, sortType, sortRace, sortAttribute }) {
  const [allCards, setAllCards] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0); 
  const navigate = useNavigate();
  const CARDS_PER_PAGE = 20;

  // Go to other page
  const goToCreateDeck = () => navigate("/createDeck");

  // Fetch all cards once
  useEffect(() => {
    setLoading(true);
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
      .then((resp) => resp.json())
      .then((data) => {
        setAllCards(data.data || []);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("FETCHING CARDS ERROR: ", error);
      });
  }, []);

  // Filtered and sorted cards from ALL cards
  const filteredCards = allCards.filter((card) => {
    const matchesSearch = card.name.toLowerCase().includes(searchCard.toLowerCase().trim());
    const matchesType = sortType ? card.type === sortType : true;
    const matchesRace = sortRace ? card.race === sortRace : true;
    const matchesAttribute = sortAttribute ? card.attribute === sortAttribute : true;
    return matchesSearch && matchesType && matchesRace && matchesAttribute;
  });

  const totalPages = Math.ceil(filteredCards.length / CARDS_PER_PAGE);

  // Paginated view of filtered cards
  const paginatedCards = filteredCards.slice(page * CARDS_PER_PAGE, (page + 1) * CARDS_PER_PAGE);

  // Loading cards
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center my-30 gap-4 text-white animate-pulse md:my-50">
        <img
          src="/assets/logo.png" // replace with your logo or an animated loader
          alt="Loading Yu-Gi-Oh Cards"
          className="w-50 opacity-80 md:w-[400px]"
        />
        <p className="text-xl font-semibold">Summoning cards...</p>
      </div>
    );
  }

  return (
    <main>
      {/* Create Deck Button Navigation */}
      <div className="flex flex-col items-center my-5 gap-5 md:flex-row-reverse md:justify-start md:mr-20">
        <h1 className="text-h4 text-center">Build and Save your own Deck!</h1>
        <Button onClick={goToCreateDeck} className="btn bg-purple-950 shadow shadow-white">Make your deck</Button>
      </div>
      {/* List of Cards */}
      <section className="cards-list grid grid-cols-2 px-3 gap-x-2 md:grid-cols-2 lg:px-14 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {paginatedCards.map((card) => (
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
      {/* Pagination Controls */}
      {filteredCards.length > CARDS_PER_PAGE && (
        <div className="flex justify-center items-center gap-4 my-10">
          <Button
            className="btn2" variant="secondary"
            disabled={page === 0}
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          >
            Previous
          </Button>
          <span className="text-white">Page {page + 1} of {totalPages}</span>
          <Button
            className="btn2" variant="secondary"
            disabled={page >= totalPages - 1}
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
          >
            Next
          </Button>
        </div>
      )}
    </main>
  );
}

export default CardList;
