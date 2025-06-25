import { Route, Routes } from "react-router-dom";
import CreateDeck from "./pages/CreateDeck";
import MainPage from "./pages/MainPage";
import InfoPage from "./pages/InfoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/card/:id" element={<InfoPage />} />
        <Route path="/createDeck" element={<CreateDeck />} />
      </Routes>
    </>
  );
}

export default App;
