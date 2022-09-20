import React from "react";

const Branchs = ({ activeName }) => {
  return (
    <>
      <div className="branches-container">
        <p className="branch-name">شعبه {activeName} تهران</p>
        <p>
          <span>ساعات کار: </span>۹ صبح<span> الی </span>
          ۱۲ شب
        </p>
        <address>
          <span>آدرس: </span>
          آدرس شعبه {activeName} تهران، محله فلانی، خیابان فلان، کوچه گلها
        </address>
        <div className="owner-tel">
          <p>
            <span>سرپرست واحد: </span>
            آقای {activeName} فلانی
          </p>
          <a href="tel:0900000000" className="tel">
            تماس با ۰۹۰۱۲۳۴۵۶۷۸
          </a>
        </div>
      </div>
      <style jsx>{`
        .branches-container {
          padding: 1.25rem;
          width: 435px;
          background-color: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(5px);
          border-radius: 0.5rem;
        }

        a {
          text-decoration: none;
          color: rgb(70, 70, 70);
        }

        address span,
        p span {
          color: rgb(95, 95, 95);
        }

        address {
          margin: 2rem 0 1rem 0;
        }

        .branch-name {
          margin-top: 0;
          font-weight: bold;
          font-size: large;
          color: #3184ce;
          margin-bottom: 2rem;
        }

        .owner-tel {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }

        .tel {
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
      `}</style>
    </>
  );
};

export default Branchs;
