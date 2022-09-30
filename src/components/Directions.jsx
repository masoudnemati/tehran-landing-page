import React from "react";

const Directions = ({
  setPosition,
  activeDir,
  setActiveDir,
  setActiveName,
  setBranchTel,
  setWorkerTel,
  setAddress,
}) => {
  return (
    <>
      <div className="container">
        <div className="directions-container">
          <div className="top">
            <button
              className="north"
              onClick={() => {
                setPosition([35.808121247699546, 51.400987416315644]);
                setActiveDir("north");
                setActiveName("شمال");
                setBranchTel("02122171477");
                setWorkerTel("09028193128");
                setAddress("شمال تهران، ولنجک");
              }}
            >
              شمال
            </button>
            <button
              className="west-city"
              onClick={() => {
                setPosition([35.7694430672955, 51.35531532682283]);
                setActiveDir("west-city");
                setActiveName("شهرک غرب");
                setBranchTel("02188195425");
                setWorkerTel(false);
                setAddress("شهرک غرب، بلوار نورانی");
              }}
            >
              شهرک غرب
            </button>
          </div>
          <div className="directions-middle">
            <button
              className="east"
              onClick={() => {
                setPosition([35.72059244184825, 51.500311410524574]);
                setActiveDir("east");
                setActiveName("شرق");
                setBranchTel("02177682493");
                setWorkerTel("09391052336");
                setAddress("شرق تهران، خدابنده لو");
              }}
            >
              شرق
            </button>
            <button
              className="middle"
              onClick={() => {
                setPosition([35.71482149218997, 51.427813468591225]);
                setActiveDir("middle");
                setActiveName("مرکز");
                setBranchTel("02188314410");
                setWorkerTel("09362175781");
                setAddress("مرکز تهران");
              }}
            >
              مرکز
            </button>
            <div className="west-west-city">
              <button
                className="west"
                onClick={() => {
                  setPosition([35.703656, 51.320131]);
                  setActiveDir("west");
                  setActiveName("غرب");
                  setBranchTel("02144570530");
                  setWorkerTel("09120974053");
                  setAddress("غرب تهران");
                }}
              >
                غرب
              </button>
            </div>
          </div>
          <button
            className="south"
            onClick={() => {
              setPosition([35.689081864342604, 51.384007484658525]);
              setActiveDir("south");
              setActiveName("جنوب");
              setBranchTel("02166839505");
              setWorkerTel(false);
              setAddress("جنوب تهران، خیابان کمالی");
            }}
          >
            جنوب
          </button>
        </div>
      </div>
      <style jsx>{`
        .directions-container {
          padding: 0 1rem;
          height: 240px;
          border-radius: 3.5rem;
          box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
            rgba(17, 17, 26, 0.1) 0px 0px 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(5px);
          margin: 0;
        }

        .directions-middle {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: flex-start;
          align-items: flex-start;
        }

        button {
          width: 80px;
          height: 60px;
          padding: 0;
          background-color: rgba(255, 255, 255, 0.8);
          border: 1px solid lightgray;
          border-radius: 0.5rem;
          transition: background-color 0.3s linear;
          box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
            rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
            rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        }

        button:hover {
          cursor: pointer;
          border: 1px solid black;
        }

        button:active {
          background-color: green;
        }

        .west-west-city {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .north {
          margin-right: 90px;
          margin-bottom: 10px;
          margin-left: 10px;
          background-color: ${activeDir === "north"
            ? "#C8FACC"
            : "rgba(255, 255, 255, 1)"};
        }

        .west {
          background-color: ${activeDir === "west"
            ? "#C8FACC"
            : "rgba(255, 255, 255, 1)"};
        }

        .west-city {
          border-top-left-radius: 40px;
          background-color: ${activeDir === "west-city"
            ? "#C8FACC"
            : "rgba(255, 255, 255, 1)"};
        }

        .middle {
          margin: 0 10px;
          background-color: ${activeDir === "middle"
            ? "#C8FACC"
            : "rgba(255, 255, 255, 1)"};
        }

        .south {
          margin-top: 10px;
          background-color: ${activeDir === "south"
            ? "#C8FACC"
            : "rgba(255, 255, 255, 1)"};
        }

        .east {
          background-color: ${activeDir === "east"
            ? "#C8FACC"
            : "rgba(255, 255, 255, 1)"};
        }

        @media screen and (max-width: 900px) {
          .directions-container {
            width: 275px;
            height: 230px;
            padding: 0 1rem;
            margin: 0;
            backdrop-filter: none;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Directions;
