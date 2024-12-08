export const CardData=(props)=>{
    return( <li className="inline-block" key={props.data.id}>
           <div className="bg-black font-serif  flex items-center justify-center">
             <div className="m-6 bg-black border border-white shadow-inner rounded-lg h-auto w-96">
               <div className="m-5 pt-5 mb-5">
                 <img className="rounded-lg shadow-lg h-80 border border-white" src={props.data.img_url} alt="" />
                 <h1 className="bg-red-900 rounded-lg text-white p-2 mb-5 mt-3">{props.data.name}</h1>
                 <h2 className="bg-red-900 rounded-lg text-white p-2 mb-5 mt-3">Rating: {props.data.rating}</h2>
                 <h2 className="bg-red-900 rounded-lg text-white p-2 mb-5 mt-3">{props.data.genre}</h2>
                 <a className="p-2 bg-gray-200 rounded-sm transition duration-1000 hover:scale-110 hover:bg-red-800" href={props.data.watch_url}>{props.canwatch}</a>
               </div>
             </div>
           </div>
         </li>);
 }