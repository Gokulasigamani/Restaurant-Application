import { Link } from "react-router-dom"
import Zom from '../assets/Zomato.png'
import Swig from '../assets/Swiggy.png'
import Aos from "aos"
import Coco from '../assets/Coco.png'
import { useEffect } from "react"

import 'aos/dist/aos.css'
function SecondContainer()
{
    useEffect(()=>
    {
     Aos.init({duration:2000});
    },[])
    return(
        <>
            <div className="w-[1110px] m-auto mt-20 flex gap-32 justify-center items-center  max-sm:hidden mb-12  ">
               <img src={Coco} className="w-[610px] mt-20" data-aos="fade-left" alt="" />

               <div className="w-[600px]" >
                    <h1 className="text-6xl font-bold" data-aos="fade-right">Our<span className="text-orange-500">Journey</span></h1>
                    <h2 className="text-3xl font-bold mt-3 w-[600px]" data-aos="fade-right">Gateway to the Flavours <span className="text-orange-400">of TAMIL NADU</span> </h2>
                    <p className="mt-3 text-xl font-bold">NIA Restaurant has established itself as one of the finest veg restaurants in Coimbatore due to its focus on quality and service. Walk into our restaurants for an all- day dining experience like no other. We offer a variety of cuisines to tease your taste buds and are especially proud of our unique offerings in South Indian dishes.</p>


                </div>
            </div>

              {/*Small Screen */}

              <div className=" max-sm:w-full mb-5  sm:hidden" >
                            <h1 className="text-5xl text-orange-700 text-center font-bold">Our <span className="text-5xl text-black">Journey</span></h1>
                            <div className="card w-[320px] bg-orange-400 rounded-2xl  m-auto mt-5 shadow-2xl py-2  shadow-black" data-aos="flip-left">
                                 <p className="text-sm text-center px-3 py-5 font-semibold text-neutral-600"> NIA Restaurant has established itself as one of the finest veg restaurants in Coimbatore due to its focus on quality and service. Walk into our restaurants for an all- day dining experience like no other. We offer a variety of cuisines to tease your taste buds and are especially proud of our unique offerings in South Indian dishes</p>
                            </div>
                 </div>

                <div className="sm:hidden   max-sm:w-full " >
                    <h1 className="font-bold text-3xl mt-11 text-center " data-aos="fade-right">Get Our <span className="text-orange-500">Delicious </span>Food Deliverd At Your Door Step With</h1>
                    <hr class="w-48 h-1 mx-auto my-4 bg-orange-400 border-0 rounded " data-aos="fade-right"></hr>
                    <div className="sm:hidden max-sm:w-full flex gap-10 justify-center items-end mb-7" data-aos="fade-right">
                        <img src={Zom} className="w-[120px]" alt="" />
                        <img src={Swig} className="w-[100px]" alt="" />

                    </div>
             </div>   
        </>
    )
}
export default SecondContainer