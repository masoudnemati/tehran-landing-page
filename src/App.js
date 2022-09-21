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
          {/* <div className="header-img"> */}
          <p className="header">
            به صورت ۲۴ ساعته در ۷ روز هفته <br /> جهت اعزام تعمیرکار ابتدا شعبه
            مورد نظر خود را انتخاب کرده و سپس تماس بگیرید:
          </p>
          {/* <img src="/siamak-kVACg-kVKA0-unsplash.jpg" width="300" alt="" /> */}
          {/* </div> */}
        </div>
        <div className="map-branches">
          <Map position={position} />
          <Branches activeName={activeName} />
          <Directions
            setPosition={setPosition}
            activeDir={activeDir}
            setActiveDir={setActiveDir}
            setActiveName={setActiveName}
          />
        </div>
        <ContactManager />

        <style jsx>{`
          main {
            background-image: url("/siamak-kVACg-kVKA0-unsplash.jpg");
            background-attachment: fixed;
            background-position: right 30% bottom 35%;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .map-branches {
            padding: 4rem 5vw;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap-reverse;
            justify-content: space-around;
            align-items: flex-start;
            max-width: 1300px;
          }

          .header {
            margin: 0;
            background: linear-gradient(to left, white, transparent);
            padding: 6rem 5vw 2rem 5vw;
          }

          img {
            border-radius: 0.5rem;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }

          .header-img {
            padding: 0 5vw;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin-bottom: 1rem;
          }
        `}</style>
      </main>
    </>
  );
}

export default App;
