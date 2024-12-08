import cardData from "./api/cardData.json";
import { CardData } from "./list";
const Header = () => {
  return (
    <header>
      <ul className="bg-[#00050D] font-serif h-12 p-2  shadow-white shadow-inner text-white flex gap-5">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
    </header>
  );
};

export default Header;

export const Card = () => {
  const age = 19;
  const watch = age < 18 ? "Not Available" : "Watch Now";

  return (
    <ul className="bg-black">
      {cardData.map((curElem) => (
        <CardData key={curElem.id} data={curElem} />
      ))}//key and data are props
    </ul>
  );
};


export const Footer = () => {
  return <footer className="bg-[#00050D] font-serif shadow-white shadow-inner h-12 p-2 w-full text-white">@copyright</footer>;
};

// hum sirf default export ek bar hi kar sakte hai lekin vaise Named export multiple kar sakte hai.
// function ka name ka 1st letter Capital rakho
// named export me hame function ka jo name hai vohi APP.jsx me import ke samay likhna hota hai default export me ham koibhi name likh sakte hai
