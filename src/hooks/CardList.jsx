import {useState, useEffect} from 'react';

function CardList() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);


    // Fetch cards from the API
    useEffect(() => {
        fetch("")
        .then((resp) => resp.json())
        .then((data) => {
            setCards(data);
            setLoading(false);
        })
        .catch((error) => {
            setLoading(false);
            console.error("FETCHING CARDS ERROR: ", error);
        })
    })

    if (loading) return <p>LOADING!!</p>

    return(
        <section>

        </section>
    );
}

export default CardList;