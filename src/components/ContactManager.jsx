import React from "react";

const ContactManager = () => {
  return (
    <div className="manager-container">
      <p className="manager-p">
        برای ارائه نظرات، پیشنهادات و انتقادات از نحوه پاسخگویی اوپراتور و یا
        عملکرد تعمیرکاران پکیج کار با
        <b> مدیریت </b>
        در ارتباط باشید:
      </p>
      <a href="tel:0900000000" className="tel">
        تماس با مدیریت
      </a>
      <a href="mailto: abc@example.com" className="tel mail">
        ایمیل به مدیریت
      </a>

      <style jsx>{`
        .manager-container {
          margin: 0;
          padding: 2rem 5vw;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.8),
            transparent
          );
          text-align: center;
        }

        .mail {
          margin-right: 1rem;
        }
      `}</style>
    </div>
  );
};

export default ContactManager;
