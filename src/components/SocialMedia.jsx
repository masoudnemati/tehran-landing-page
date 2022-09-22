import React from "react";
import Aparat from "./SVG/Aparat";
import Instagram from "./SVG/Instagram";
import Telegram from "./SVG/Telegram";

const SocialMedia = () => {
  return (
    <>
      <div className="social-container">
        <p>
          <b> پکیج کار </b>
          را در شبکه‌های اجتماعی دنبال کنید:
        </p>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/tamirkar_net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
              <span> - Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://t.me/tamirga110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Telegram />
              <span> - Telegram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.aparat.com/tamirkar110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Aparat />
              <span> - Aparat</span>
            </a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .social-container {
          font-weight: 300;
          direction: ltr;
          padding: 4rem 5vw 6rem 5vw;
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-around;
          align-content: center;
          background: linear-gradient(to left, white, transparent);
        }
        .social-container p {
          direction: rtl;
          color: black;
        }

        .social-container ul {
          display: flex;
          flex-direction: row;
        }
        .social-container ul li {
          list-style: none;
          margin: 0 15px;
        }
        .social-container ul li a span {
          padding: 0;
          margin: 0;
          position: absolute;
          top: 25px;
          left: 70px;
          font-size: 1rem;
          color: #262626;
          letter-spacing: 4px;
          transition: 0.5s;
        }
        .social-container ul li a {
          text-decoration: none;
          display: absolute;
          display: block;
          width: 210px;
          height: 80px;
          background: #fff;
          padding-left: 20px;
          transform: rotate(-30deg) skew(25deg) translate(0, 0);
          transition: 0.5s;
          box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          border-right: 1px solid rgba(0, 0, 0, 0.1);
        }
        .social-container ul li a:before {
          content: "";
          position: absolute;
          top: 10px;
          left: -20px;
          height: 100%;
          width: 20px;
          background: #b1b1b1;
          transform: 0.5s;
          transform: rotate(0deg) skewY(-45deg);
        }
        .social-container ul li a:after {
          content: "";
          position: absolute;
          bottom: -20px;
          left: -10px;
          height: 20px;
          width: 100%;
          background: #b1b1b1;
          transform: 0.5s;
          transform: rotate(0deg) skewX(-45deg);
        }
        .social-container ul li a:hover {
          transform: rotate(-30deg) skew(25deg) translate(20px, -15px);
          box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
        }
        .social-container ul li:hover a span {
          color: white;
        }
        .social-container ul li:hover:nth-child(1) a {
          background: #e4405f;
        }
        .social-container ul li:hover:nth-child(1) a:before {
          background: #d81c3f;
        }
        .social-container ul li:hover:nth-child(1) a:after {
          background: #e46880;
        }
        .social-container ul li:hover:nth-child(2) a {
          background: #0190c4;
        }
        .social-container ul li:hover:nth-child(2) a:before {
          background: #096285;
        }
        .social-container ul li:hover:nth-child(2) a:after {
          background: #3f8dac;
        }
        .social-container ul li:hover:nth-child(3) a {
          background: #e42b4d;
        }
        .social-container ul li:hover:nth-child(3) a:before {
          background: #b81633;
        }
        .social-container ul li:hover:nth-child(3) a:after {
          background: #c74d66;
        }
        @media only screen and (max-width: 1200px) {
          .social-container {
            flex-direction: column;
            background: linear-gradient(to bottom, white, transparent);
          }
          .social-container ul {
            padding-top: 1rem;
            flex-direction: column;
          }
          .social-container ul li:not(:first-of-type) {
            margin-top: 4rem;
          }
        }
      `}</style>
    </>
  );
};

export default SocialMedia;
