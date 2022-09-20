import "./App.css";
import Directions from "./components/Directions";
import Map from "./components/Map";
import Branches from "./components/Branches";
import { useState } from "react";
import ContactManager from "./components/ContactManager";

function App() {
  const [position, setPosition] = useState([
    35.714515008077015, 51.26831135597801,
  ]);
  const [activeDir, setActiveDir] = useState("west");
  const [activeName, setActiveName] = useState("غرب");

  return (
    <>
      <main>
        <div className="header-container">
          <p className="header">
            به صورت ۲۴ ساعته در ۷ روز هفته <br /> جهت اعزام تعمیرکار ابتدا شعبه
            مورد نظر خود را انتخاب کرده و سپس تماس بگیرید:
          </p>
          {/* <img src="/siamak-kVACg-kVKA0-unsplash.jpg" width={350} alt="" /> */}
        </div>
        <div className="map-branches">
          <Directions
            setPosition={setPosition}
            activeDir={activeDir}
            setActiveDir={setActiveDir}
            setActiveName={setActiveName}
          />
          <Branches activeName={activeName} />
          <Map position={position} />
        </div>
        {/* <ContactManager /> */}

        <style jsx>{`
          .map-branches {
            padding: 0 5vw;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: flex-start;
          }

          .header {
            margin: 0;
            padding: 2rem 5vw;
          }

          img {
            border-radius: 0.5rem;
          }
        `}</style>
      </main>
    </>
  );
}

export default App;
