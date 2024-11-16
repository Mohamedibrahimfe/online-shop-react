import { useState } from "react";
const pagesData = [
  {
    id: 1,
    title: "Best Offer",
    subtitle: "New Arrivals On Sale",
    img: "/images/slide_01.jpg",
  },
  {
    id: 2,
    title: "Flash Deals",
    subtitle: "Get your best products",
    img: "/images/slide_02.jpg",
  },
  {
    id: 3,
    title: "Last Minute",
    subtitle: "Grab last minute deals",
    img: "/images/slide_03.jpg",
  },
];
export default function Banner() {
  const [page, setPage] = useState(1);

  return (
    <div className="banner ">
      <h1 className="title">{pagesData[page - 1].title}</h1>
      <h3 className="subtitle ">{pagesData[page - 1].subtitle}</h3>
      <img src={pagesData[page - 1].img} alt="" />
      <div className="dots">
        <span
          className={page === 1 ? "active" : ""}
          onClick={() => setPage(1)}
        ></span>
        <span
          className={page === 2 ? "active" : ""}
          onClick={() => setPage(2)}
        ></span>
        <span
          className={page === 3 ? "active" : ""}
          onClick={() => setPage(3)}
        ></span>
      </div>
    </div>
  );
}
