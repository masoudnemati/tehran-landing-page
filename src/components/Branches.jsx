import React from "react";

const Branchs = ({ activeName, branchTel, workerTel, address }) => {
  return (
    <>
      <div className="branches-container">
        <p className="branch-name">شعبه {activeName} تهران</p>
        <p>
          <span>ساعات کار: </span>۹ صبح<span> الی </span>
          ۱۲ شب
        </p>
        {/* <address>
          <span>آدرس: </span>
          {address}
        </address> */}
        <div className="owner-tel">
          {/* <p>
            <span>سرپرست واحد: </span>
            آقای {activeName} فلانی
          </p> */}
          <div className="tel-container">
            <a href={`tel:${branchTel}`} className="tel">
              {branchTel}
            </a>
            <span className="tel-des">تماس با تلفن شعبه</span>
          </div>
          {workerTel && (
            <div className="tel-container">
              <a href={`tel:${workerTel}`} className="tel">
                {workerTel}
              </a>
              <span className="tel-des">تماس با سرپرست واحد</span>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .branches-container {
          padding: 1rem 1.25rem;
          width: 435px;
          height: 211px;
          background-color: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(5px);
          border-radius: 0.5rem;
        }

        address span,
        p span {
          color: rgb(95, 95, 95);
        }

        address {
          margin: 2rem 0 1rem 0;
        }

        .tel-container {
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .branch-name {
          margin-top: 0;
          font-weight: bold;
          font-size: larger;
          color: #023663;
          margin-bottom: 2rem;
        }

        .owner-tel {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }

        .tel {
          text-decoration: none;
          color: rgb(70, 70, 70);
          font-size: medium;
          background-color: #0078d0;
          border: 0;
          border-radius: 56px;
          color: #fff;
          cursor: pointer;
          display: inline-block;
          font-size: 16px;
          outline: 0;
          padding: 12px 18px;
          position: relative;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s;
          -webkit-user-select: none;
          touch-action: manipulation;
        }

        .tel:before {
          background-color: initial;
          background-image: linear-gradient(
            #fff 0,
            rgba(255, 255, 255, 0) 100%
          );
          border-radius: 125px;
          content: "";
          height: 50%;
          left: 4%;
          opacity: 0.5;
          position: absolute;
          top: 0;
          transition: all 0.3s;
          width: 92%;
        }

        .tel:hover {
          box-shadow: rgba(255, 255, 255, 0.2) 0 3px 15px inset,
            rgba(0, 0, 0, 0.1) 0 3px 5px, rgba(0, 0, 0, 0.1) 0 10px 13px;
          transform: scale(1.05);
        }

        .tel-des {
          color: rgb(65, 65, 65);
          font-size: small;
          margin-top: 5px;
        }

        @media screen and (max-width: 900px) {
          .branches-container {
            width: 275px;
            height: auto;
            padding: 0.25rem 1rem;
            margin: 0;
            border-radius: 0;
            backdrop-filter: none;
            background-color: rgba(255, 255, 255, 0.7);
          }

          address {
            margin: 1rem 0 0.5rem 0;
          }

          .branch-name {
            margin-bottom: 1rem;
          }

          .tel {
            font-size: small;
          }
        }
      `}</style>
    </>
  );
};

export default Branchs;
