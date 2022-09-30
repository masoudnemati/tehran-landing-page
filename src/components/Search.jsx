import React, { useEffect } from "react";

const Search = () => {
  <script
    async
    src="https://cse.google.com/cse.js?cx=ecc9719558dcef695"
  ></script>;

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cse.google.com/cse.js?cx=ecc9719558dcef695";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="search-container">
        <p>
          در صورتی که به دنبال موضوع خاصی هستید عبارت مورد نظر را در کادر جستجوی
          زیر سرچ کنید تا مقالات مرتبط با آن را که در سایت پکیجکار منتشر شده
          مشاهده کنید
        </p>
        <div className="google-search-container">
          <div className="gcse-search"></div>
        </div>
      </div>
      <style jsx>{`
        .search-container {
          padding: 2rem 5vw;
        }

        .search-container p {
          padding: 1rem;
          margin-bottom: 0;
          background: linear-gradient(to left, white 70%, transparent);
        }
      `}</style>
    </>
  );
};

export default Search;
