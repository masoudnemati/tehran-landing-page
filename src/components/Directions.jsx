import React from "react";

const Directions = ({
  setPosition,
  activeDir,
  setActiveDir,
  setActiveName,
}) => {
  return (
    <>
      <div className="container">
        <div className="directions-container">
          <button
            className="north"
            onClick={() => {
              setPosition([35.749019463820396, 51.331987454699714]);
              setActiveDir("north");
              setActiveName("شمال");
            }}
          >
            شمال
          </button>
          <div className="directions-middle">
            <button
              className="east"
              onClick={() => {
                setPosition([35.724270871909, 51.428299775422914]);
                setActiveDir("east");
                setActiveName("شرق");
              }}
            >
              شرق
            </button>
            <button
              className="west"
              onClick={() => {
                setPosition([35.71426496644119, 51.255362964504286]);
                setActiveDir("west");
                setActiveName("غرب");
              }}
            >
              غرب
            </button>
          </div>
          <button
            className="south"
            onClick={() => {
              setPosition([35.67752496742818, 51.34114281083511]);
              setActiveDir("south");
              setActiveName("جنوب");
            }}
          >
            جنوب
          </button>
        </div>
      </div>
      <style jsx>{`
        .directions-container {
          width: 200px;
          height: 260px;
          border-radius: 3.5rem;
          box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
            rgba(17, 17, 26, 0.1) 0px 0px 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .directions-middle {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
        }

        button {
          width: 70px;
          height: 60px;
          padding: 0;
          background-color: rgba(255, 255, 255, 0.8);
          border: 1px solid lightgray;
          border-radius: 0.5rem;
          transition: background-color 0.3s linear;
        }

        button:hover {
          cursor: pointer;
          border: 1px solid black;
        }

        button:active {
          background-color: green;
        }

        .north {
          margin-bottom: 10px;
          background-color: ${activeDir === "north"
            ? "#C8FACC"
            : "rgba(255, 255, 255, 0.75)"};
        }

        .west {
          background-color: ${activeDir === "west"
            ? "#C8FACC"
            : "rgba(255, 255, 255, 0.75)"};
        }

        .south {
          margin-top: 10px;
          background-color: ${activeDir === "south"
            ? "#C8FACC"
            : "rgba(255, 255, 255, 0.75)"};
        }

        .east {
          margin-left: 20px;
          background-color: ${activeDir === "east"
            ? "#C8FACC"
            : "rgba(255, 255, 255, 0.75)"};
        }
      `}</style>
    </>
  );
};

export default Directions;
