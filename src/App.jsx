import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";  

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        
        {/* <Route path="/aboutme" element={<text />} />
        <Route path="/projects" element={<text />} />
        <Route path="/casestudy" element={<text />} /> */}
      </Routes>
    </>
  );
}

export default App;
