// export const CardData=(props)=>{
//     const { data, canwatch } = props;
//     return( <li className="inline-block" key={data.id}>
//            <div className="bg-black font-serif  flex items-center justify-center">
//              <div className="m-6 bg-black border border-white shadow-inner rounded-lg h-auto w-96">
//                <div className="m-5 pt-5 mb-5">
//                  <img className="rounded-lg shadow-lg h-80 border border-white" src={data.img_url} alt="" />
//                  <h1 className="bg-red-900 rounded-lg text-white p-2 mb-5 mt-3">{data.name}</h1>
//                  <h2 className="bg-red-900 rounded-lg text-white p-2 mb-5 mt-3">Rating: {data.rating}</h2>
//                  <h2 className="bg-red-900 rounded-lg text-white p-2 mb-5 mt-3">{data.genre}</h2>
//                  <a className="p-2 bg-gray-200 rounded-sm transition duration-1000 hover:scale-110 hover:bg-red-800" href={data.watch_url}>{canwatch}</a>
//                </div>
//              </div>
//            </div>
//          </li>);
//  }
//with destructure


// export const CardData=(props)=>{
//   const { id,name,img_url,rating,genre,watch_url } = props.data;
//   const{canwatch}=props;
//   return( <li className="inline-block" key={id}>
//          <div className="bg-black font-serif  flex items-center justify-center">
//            <div className="m-6 bg-black border border-white shadow-inner rounded-lg h-auto w-96">
//              <div className="m-5 pt-5 mb-5">
//                <img className="rounded-lg shadow-lg h-80 border border-white" src={img_url} alt="" />
//                <h1 className="bg-red-900 rounded-lg text-white p-2 mb-5 mt-3">{name}</h1>
//                <h2 className="bg-red-900 rounded-lg text-white p-2 mb-5 mt-3">Rating: {rating}</h2>
//                <h2 className="bg-red-900 rounded-lg text-white p-2 mb-5 mt-3">{genre}</h2>
//                <a className="p-2 bg-gray-200 rounded-sm transition duration-1000 hover:scale-110 hover:bg-red-800" href={watch_url}>{canwatch}</a>
//              </div>
//            </div>
//          </div>
//        </li>);
// }
//further destructure



export const CardData=({data})=>{
  const { id,name,img_url,rating,genre,watch_url } =data;
  return( <li className="inline-block" key={id}>
         <div className="bg-black font-serif  flex items-center justify-center">
           <div className="m-6 bg-black border border-white shadow-inner rounded-lg h-auto w-96">
             <div className="m-5 pt-5 mb-5">
               <img className="rounded-lg shadow-lg h-80 border border-white" src={img_url} alt="" />
               <h1 className="bg-red-900 rounded-lg text-white p-2 mb-5 mt-3">{name}</h1>
               <h2 className="bg-red-900 rounded-lg text-white p-2 mb-5 mt-3">Rating: {rating}</h2>
               <h2 className="bg-red-900 rounded-lg text-white p-2 mb-5 mt-3">{genre}</h2>
               <a className="p-2 bg-gray-200 rounded-sm transition duration-1000 hover:scale-110 hover:bg-red-800" href={watch_url}>Watch</a>
             </div>
           </div>
         </div>
       </li>);
}
//so further destructure