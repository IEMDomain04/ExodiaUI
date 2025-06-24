import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function NavBar({ setSearchCard }) {
  return (
    <nav className="bg-darkColor border-2 border-b-white">
      <div className="flex justify-around items-center py-3">
        <img src="/assets/logo.png" alt="yu-gi-oh!" width={180} />

        <div className="flex gap-10">
          <Input className="text-white placeholder-white w-xs" onChange={(e) => setSearchCard(e.target.value)} type="text" placeholder="Search card..." />

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Select Type">Select Type</SelectItem>
                <SelectItem value="Normal Monster">Normal Monster</SelectItem>
                <SelectItem value="Effect Monster">Effect Monster</SelectItem>
                <SelectItem value="Fusion Monster">Fusion Monster</SelectItem>
                <SelectItem value="Ritual Monster">Ritual Monster</SelectItem>
                <SelectItem value="Synchro Monster">Synchro Monster</SelectItem>
                <SelectItem value="Xyz Monster">Xyz Monster</SelectItem>
                <SelectItem value="Pendulum Normal Monster">Pendulum Normal Monster</SelectItem>
                <SelectItem value="Pendulum Effect Monster">Pendulum Effect Monster</SelectItem>
                <SelectItem value="Pendulum Tuner Effect Monster">Pendulum Tuner Effect Monster</SelectItem>
                <SelectItem value="Synchro Pendulum Effect Monster">Synchro Pendulum Effect Monster</SelectItem>
                <SelectItem value="Link Monster">Link Monster</SelectItem>
                <SelectItem value="Ritual Effect Monster">Ritual Effect Monster</SelectItem>
                <SelectItem value="Gemini Monster">Gemini Monster</SelectItem>
                <SelectItem value="Spirit Monster">Spirit Monster</SelectItem>
                <SelectItem value="Toon Monster">Toon Monster</SelectItem>
                <SelectItem value="Tuner Monster">Tuner Monster</SelectItem>
                <SelectItem value="Union Effect Monster">Union Effect Monster</SelectItem>
                <SelectItem value="Flip Effect Monster">Flip Effect Monster</SelectItem>
                <SelectItem value="Spell Card">Spell Card</SelectItem>
                <SelectItem value="Trap Card">Trap Card</SelectItem>
              </SelectContent>
          </Select>


          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Race" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Select Race">Select Race</SelectItem>
              <SelectItem value="Aqua">Aqua</SelectItem>
              <SelectItem value="Beast">Beast</SelectItem>
              <SelectItem value="Beast-Warrior">Beast-Warrior</SelectItem>
              <SelectItem value="Creator-God">Creator-God</SelectItem>
              <SelectItem value="Cyberse">Cyberse</SelectItem>
              <SelectItem value="Dinosaur">Dinosaur</SelectItem>
              <SelectItem value="Divine-Beast">Divine-Beast</SelectItem>
              <SelectItem value="Dragon">Dragon</SelectItem>
              <SelectItem value="Fairy">Fairy</SelectItem>
              <SelectItem value="Fiend">Fiend</SelectItem>
              <SelectItem value="Fish">Fish</SelectItem>
              <SelectItem value="Insect">Insect</SelectItem>
              <SelectItem value="Machine">Machine</SelectItem>
              <SelectItem value="Plant">Plant</SelectItem>
              <SelectItem value="Psychic">Psychic</SelectItem>
              <SelectItem value="Pyro">Pyro</SelectItem>
              <SelectItem value="Reptile">Reptile</SelectItem>
              <SelectItem value="Rock">Rock</SelectItem>
              <SelectItem value="Sea Serpent">Sea Serpent</SelectItem>
              <SelectItem value="Spellcaster">Spellcaster</SelectItem>
              <SelectItem value="Thunder">Thunder</SelectItem>
              <SelectItem value="Warrior">Warrior</SelectItem>
              <SelectItem value="Winged Beast">Winged Beast</SelectItem>
              <SelectItem value="Wyrm">Wyrm</SelectItem>
              <SelectItem value="Zombie">Zombie</SelectItem>
              <SelectItem value="Illusion">Illusion</SelectItem>

              {/* For Spell/Trap cards, these appear as "races" in the API */}
              <SelectItem value="Normal">Normal</SelectItem>
              <SelectItem value="Field">Field</SelectItem>
              <SelectItem value="Equip">Equip</SelectItem>
              <SelectItem value="Continuous">Continuous</SelectItem>
              <SelectItem value="Quick-Play">Quick-Play</SelectItem>
              <SelectItem value="Ritual">Ritual</SelectItem>
              <SelectItem value="Counter">Counter</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Attribute" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Select Attribute">Select Attribute</SelectItem>
              <SelectItem value="DARK">DARK</SelectItem>
              <SelectItem value="LIGHT">LIGHT</SelectItem>
              <SelectItem value="EARTH">EARTH</SelectItem>
              <SelectItem value="WATER">WATER</SelectItem>
              <SelectItem value="FIRE">FIRE</SelectItem>
              <SelectItem value="WIND">WIND</SelectItem>
              <SelectItem value="DIVINE">DIVINE</SelectItem>
              <SelectItem value="SPELL">SPELL</SelectItem>     
              <SelectItem value="TRAP">TRAP</SelectItem>       
            </SelectContent>
          </Select>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
