import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

function DeckCreate() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }
  return (
    <div className="flex flex-col justify-center items-center my-30 gap-4 text-white md:my-50">
      <img
        src="/assets/logo.png" // replace with your logo or an animated loader
        alt="Loading Yu-Gi-Oh Cards"
        className="animate-pulse w-50 opacity-80 md:w-[400px]"
      />
      <p className="text-xl font-semibold">Soon...</p>
      <Button className="btn2 text-black bg-blue-400 w-30" onClick={goBack}>Return</Button>
    </div>
  );
}

export default DeckCreate;
