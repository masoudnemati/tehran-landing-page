import "./App.css";
import Directions from "./components/Directions";
import Map from "./components/Map";
import Branches from "./components/Branches";
import { useState } from "react";
import ContactManager from "./components/ContactManager";

function App() {
  const [position, setPosition] = useState([35.703656, 51.320131]);
  const [activeDir, setActiveDir] = useState("west");
  const [activeName, setActiveName] = useState("غرب");
  const [branchTel, setBranchTel] = useState("02144570530");
  const [workerTel, setWorkerTel] = useState("09120974053");
  const [address, setAddress] = useState("غرب تهران، ");

  return (
    <>
      <main>
        <div className="header-container">
          {/* <div className="header-img"> */}
          <p className="header">
            به صورت
            <b> ۲۴ </b>
            ساعته در
            <b> ۷ </b>
            روز هفته <br /> جهت اعزام تعمیرکار ابتدا شعبه مورد نظر خود را انتخاب
            کرده و سپس تماس بگیرید:
          </p>
          {/* <img src="/siamak-kVACg-kVKA0-unsplash.jpg" width="300" alt="" /> */}
          {/* </div> */}
        </div>
        <div className="map-branches">
          <Map position={position} />
          <Branches
            activeName={activeName}
            branchTel={branchTel}
            workerTel={workerTel}
            address={address}
          />
          <Directions
            setPosition={setPosition}
            activeDir={activeDir}
            setActiveDir={setActiveDir}
            setActiveName={setActiveName}
            setBranchTel={setBranchTel}
            setWorkerTel={setWorkerTel}
            setAddress={setAddress}
          />
        </div>
        <ContactManager />

        <style jsx>{`
          main {
            background-image: url("/siamak-kVACg-kVKA0-unsplash.jpg");
            background-attachment: fixed;
            background-position: center;
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

          @media screen and (max-width: 900px) {
            .map-branches {
              padding: 1rem 0;
              flex-direction: column-reverse;
              justify-content: center;
              align-items: center;
            }
          }
        `}</style>
      </main>
    </>
  );
}

export default App;
