import React from "react";

const Directions = () => {
  return (
    <>
      <div className="container">
        <div className="directions-container">
          <button className="north">شمال</button>
          <div className="directions-middle">
            <button className="east">شرق</button>
            <button className="west">غرب</button>
          </div>
          <button className="south">جنوب</button>
        </div>
      </div>
      <style jsx>{`
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
          background-color: white;
          border: 1px solid lightgray;
          border-radius: 0.5rem;
        }

        button:hover {
          cursor: pointer;
          border: 1px solid black;
        }

        .directions-container {
          width: 240px;
          height: 260px;
          border-radius: 0.5rem;
          box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
            rgba(17, 17, 26, 0.1) 0px 0px 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .north {
          margin-bottom: 10px;
        }

        .south {
          margin-top: 10px;
        }

        .east {
          margin-left: 20px;
        }
      `}</style>
    </>
  );
};

export default Directions;
