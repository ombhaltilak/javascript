const Header=()=>{
    return(
    <header >
  <ul class="bg-[#00050D] font-serif h-12 p-2 shadow-white shadow-inner text-white flex gap-5">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Profile</a></li>
    </ul>
    </header>
    );
  }
  export default Header;
  export const Card=()=>{
    const name="Avengers: Infinity War (2018)";
    const rating="Rating:8.5";
    const types=()=>{
    const type='Action';
      return type;
    }
    
    let age=19;
    let watch;
  
    if (age<18){
       watch="Not Available";
    }
    else{
      watch="Watch Now";
    }
  
  
        return(<div  class=" bg-[#000000] font-serif shadow-white shadow-inner flex items-center justify-center">
              <div class="m-6 bg-black border border-white shadow-inner rounded-lg h-auto w-96">
                <div class="m-5 pt-5 mb-5 "> 
              <img class="rounded-lg shadow-lg h-80 border border-white" src="../images/mh.png" alt="" />
              <h1 class="bg-orange-300 rounded-lg mb-5 mt-3">{name}{5+3.2}</h1>
              <h2 class="bg-orange-300 rounded-lg mb-5 mt-3">{rating}</h2>
              <h2 class="bg-orange-300 rounded-lg mb-5 mt-3">{types()}</h2>
              <button class=" p-2 bg-gray-200 rounded-sm transition duration-1000 hover:scale-110 hover:bg-red-800">{watch}</button>
  
              </div>
              </div>
            </div>);
  }
  export  const Footer=()=>{
    return <footer class="bg-[#00050D] font-serif shadow-white shadow-inner h-12 p-2 w-full text-white">@copyright</footer>
  }
  //hum sirf default export ek bar hi kar sakte hai lekin vaise Named export multiple kar sakte hai .
  //function ka name ka 1st letter Capital rakho
  //named  export me hame function ka jo name hai vohi APP.jsx me import ke samay likhna hota hai default export me ham  koibhi name likh sakte hai
  //yaha hamne if else condition ka use kiya hai kisi datta ko akab kya dikhana hai ye set karne keliye
  