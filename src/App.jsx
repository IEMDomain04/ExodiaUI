import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import InfoPage from "./pages/InfoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/card/:id" element={<InfoPage />} />
      </Routes>
    </>
  );
}

export default App;
