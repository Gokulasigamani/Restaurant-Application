import Zom from '../assets/Zomato.png'
import Swig from '../assets/Swiggy.png'

function Delivery()
{
    return(
        <>
         
            <div className="sm:w-[1110px] m-auto max-sm:hidden mt-20">
                 <h1 className="font-bold text-6xl mt-11 text-center " data-aos="fade-right">Get Our <span className="text-orange-500">Delicious </span>Food Deliverd At Your Door Step With</h1>
                 <div className=" mt-11 flex gap-10 justify-center items-end mb-7" data-aos="fade-right">
                        <img src={Zom} className="w-[300px]" alt="" />
                        <img src={Swig} className="w-[300px]" alt="" />
                 </div>

                 <hr class="w-[1110px] h-1 mx-auto my-4 bg-orange-600 border-0 rounded " data-aos="fade-right"></hr>

            </div>
                   
        </>
    )
}
export default Delivery;