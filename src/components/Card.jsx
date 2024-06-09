import { Link } from "react-router-dom"
function Card(props)
{
    return(
        <div className="flex sm:hidden max-sm:w-full ">
            <div className="flex-col justify-center items-center gap-3 pb-2 m-auto max-sm:w-[200px] sm:hidden bg-green-100 border border-orange-300 shadow-2xl shadow-black rounded-3xl mt-6 mb-6">

                <div className="relative">
                    <img src={props.img} className="w-[200px] m-0 rounded-t-3xl relative " alt="" />
                     <div className={ props.rate < 4 ? "px-2 py-1 text-[10px] rounded-2xl text-green-700 bg-green-100 font-bold absolute bottom-2 m-[8px] ":"d-none"}>Must try</div>
 
                </div>
            
                <div className="p-3">
                    <h2 className="font-bold ">{props.name}</h2>
                    <p className="text-sm font-serif">{props.desc}</p>
                    <h4 className="font-bold text-sm text-orange-800">Price:{props.price}</h4> 
                    <div className="mt-2"> <Link className="  text-[10px] font-bold px-2 py-1 bg-orange-200 border border-orange-300 shadow-xl shadow-black rounded-xl" >Order Now</Link></div>            
                </div>


            </div>
        </div>
    )
}



export default Card