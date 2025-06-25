import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function DeckCreate({ searchCard, sortType, sortRace, sortAttribute }) {
  const [allCards, setAllCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [deck, setDeck] = useState([]);
  const CARDS_PER_PAGE = 20;
  const deckRef = useRef(null); // for printing

  // Fetch all cards
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

  const filteredCards = allCards.filter((card) => {
    const matchesSearch = card.name.toLowerCase().includes(searchCard.toLowerCase().trim());
    const matchesType = sortType ? card.type === sortType : true;
    const matchesRace = sortRace ? card.race === sortRace : true;
    const matchesAttribute = sortAttribute ? card.attribute === sortAttribute : true;
    return matchesSearch && matchesType && matchesRace && matchesAttribute;
  });

  const totalPages = Math.ceil(filteredCards.length / CARDS_PER_PAGE);
  const paginatedCards = filteredCards.slice(page * CARDS_PER_PAGE, (page + 1) * CARDS_PER_PAGE);

  const addToDeck = (card) => {
    setDeck((prev) => [...prev, card]);
  };

  const handlePrint = () => {
    if (deckRef.current) {
      const originalContents = document.body.innerHTML;
      const printContents = deckRef.current.innerHTML;

      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload(); // refresh to recover app
    }
  };

  if (loading) return <p>LOADING!!</p>;

  return (
    <main className="px-4 pb-20">
      {/* Deck Preview Section */}
      <section className="my-10 text-white" ref={deckRef}>
        <h2 className="text-h3 font-bold mb-4">Your Deck ({deck.length} cards)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {deck.map((card, index) => (
            <div key={`${card.id}-${index}`} className="bg-darkColor border p-2 rounded">
              <img src={card.card_images[0].image_url_small} alt={card.name} />
              <p className="text-xs mt-1">{card.name}</p>
            </div>
          ))}
        </div>
      </section>

      {deck.length > 0 && (
        <div className="flex justify-end mb-10">
          <Button onClick={handlePrint} variant="secondary">
            Print / Save Deck as PDF
          </Button>
        </div>
      )}

      {/* List of Cards */}
      <section className="cards-list grid grid-cols-2 px-1 gap-x-2 md:grid-cols-2 lg:px-10 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5">
        {paginatedCards.map((card) => (
          <div
            key={card.id}
            className="bg-darkColor border border-white rounded-xl p-3 m-3 flex flex-col justify-center items-center text-center"
          >
            <img className="card-image w-10 md:w-20 xl:w-30" src={card.card_images[0].image_url} alt={card.name} />
            <div className="text-white mt-3 space-y-4">
              <div className="space-y-2">
                <h1 className="text-h4 font-bold">{card.name}</h1>
                <div className="text-tag flex flex-wrap justify-center gap-1">
                  <p className="bg-typeTag rounded-full border border-white w-fit px-5 py-1">{card.type}</p>
                  {card.attribute && (
                    <p className="bg-attributeTag rounded-full border border-white w-fit px-5 py-1">{card.attribute}</p>
                  )}
                  <p className="bg-raceTag rounded-full border border-white w-fit px-5 py-1">{card.race}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Link to={`/card/${card.id}`} className="know-more text-amber-300">
                  KNOW MORE
                </Link>
                <Button onClick={() => addToDeck(card)} className="w-full" variant="default">
                  Add to Deck
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Pagination */}
      {filteredCards.length > CARDS_PER_PAGE && (
        <div className="flex justify-center items-center gap-4 my-10">
          <Button
            className="btn2"
            variant="secondary"
            disabled={page === 0}
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          >
            Previous
          </Button>
          <span className="text-white">
            Page {page + 1} of {totalPages}
          </span>
          <Button
            className="btn2"
            variant="secondary"
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

export default DeckCreate;
