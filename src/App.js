import logo from "./logo.svg";
import "./App.css";
import Directions from "./components/Directions";
import Map from "./components/Map";
import Branches from "./components/Branches";

function App() {
  return (
    <>
      <h1>تعمیرکار تهران</h1>
      <p className="header">
        به صورت ۲۴ ساعته در ۷ روز هفته <br /> جهت اعزام تعمیرکار ابتدا شعبه مورد
        نظر خود را انتخاب کرده و سپس تماس بگیرید:
      </p>
      <hr />
      <div className="map-branches">
        <Directions />
        <Branches />
        <Map />
      </div>
      <hr />

      <style jsx>{`
        .map-branches {
          padding: 0 5vw;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
        }

        h1 {
          margin-top: 2rem;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .header {
          margin: 0 0 2rem 0;
          padding: 0 5vw;
          text-align: center;
        }

        hr {
          color: rgba(211, 211, 211, 0.3);
          box-shadow: none;
          margin: 2rem 5vw;
        }
      `}</style>
    </>
  );
}

export default App;
