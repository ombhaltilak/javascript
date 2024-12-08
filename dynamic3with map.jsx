import cardData from "./api/cardData.json";

const Header = () => {
  return (
    <header>
      <ul className="bg-[#00050D] font-serif h-12 p-2  shadow-white shadow-inner text-white flex gap-5">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li className="flex justify-around"><a href="#">Profile</a></li>
      </ul>
    </header>
  );
};

export default Header;

export const Card = () => {
  const age = 19;
  const watch = age < 18 ? "Not Available" : "Watch Now";

  return (
    <ul className=" bg-black ">
      {cardData.map((curElem) => (
        <li className="inline-block" key={curElem.id}>
          <div className="bg-black font-serif  flex items-center justify-center">
            <div className="m-6 bg-black border border-white shadow-inner rounded-lg h-auto w-96">
              <div className="m-5 pt-5 mb-5">
                <img className="rounded-lg shadow-lg h-80 border border-white" src={curElem.img_url} alt="" />
                <h1 className="bg-red-900 rounded-lg text-white p-2 mb-5 mt-3">{curElem.name}</h1>
                <h2 className="bg-red-900 rounded-lg text-white p-2 mb-5 mt-3">Rating: {curElem.rating}</h2>
                <h2 className="bg-red-900 rounded-lg text-white p-2 mb-5 mt-3">{curElem.genre}</h2>
                <a className="p-2 bg-gray-200 rounded-sm transition duration-1000 hover:scale-110 hover:bg-red-800" href={curElem.watch_url}>{watch}</a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export const Footer = () => {
  return <footer className="bg-[#00050D] font-serif shadow-white shadow-inner h-12 p-2 w-full text-white">@copyright</footer>;
};

// hum sirf default export ek bar hi kar sakte hai lekin vaise Named export multiple kar sakte hai.
// function ka name ka 1st letter Capital rakho
// named export me hame function ka jo name hai vohi APP.jsx me import ke samay likhna hota hai default export me ham koibhi name likh sakte hai
