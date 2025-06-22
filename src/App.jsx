import { Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";  
import CardInfo from "./pages/CardInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/card/:id" element={<CardInfo />} />
      </Routes>
    </>
  );
}

export default App;
