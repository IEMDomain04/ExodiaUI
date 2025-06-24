import { useState } from 'react';
import NavBar from '../components/NavBar';
import CardList from '../cards/CardList';
import Footer from '../components/Footer';

function MainPage() {

    const [searchCard, setSearchCard] = useState('');

    return (
        <main>
            <NavBar setSearchCard={setSearchCard}/>
            <CardList searchCard={searchCard} />
            <Footer />
        </main>
    );
}

export default MainPage;