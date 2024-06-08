import { Link } from "react-router-dom"
import Firstimg from '../assets/FirstImage.png'
import Zom from '../assets/Zomato.png'
import Swig from '../assets/Swiggy.png'
import Aos from "aos"
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
            <div className="w-[1110px] m-auto mt-20 flex gap-32 items-center max-sm:hidden mb-12  ">
               <img src={Firstimg} className="firstimg w-[410px]" data-aos="fade-left" alt="" />

               <div className="w-[555px]" >
                    <h1 className="text-6xl font-bold" data-aos="fade-right">HAVE A <span className="text-orange-500">DELICIOUS</span><br /> MEAL WITH US.</h1>
                    <p className="mt-4">A restaurant is a place where people go to eat, frequently with friends, family, or coworkers.</p>

                    <div className="mt-4 flex gap-10" data-aos="fade-right">
                        <Link className=" px-7 py-4 shadow-xl bg-orange-500 text-xl rounded-xl font-semibold text-white">View Our Menu</Link> 
                        <Link className=" px-10 py-4 border-2 shadow-xl bg-transparent  border-neutral-400 border-1  rounded-xl font-semibold text-black">Book a table</Link> 
                    </div>

                    <div className="flex gap-6 mt-7" data-aos="fade-right">
                            <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJ1cmdlcnxlbnwwfHx8fDE2NDU1MjQ3NDI&ixlib=rb-1.2.1&q=80&w=400" className="w-[150px] h-[110px] rounded-xl shadow-2xl" alt="Burger" />
                            <img src="https://images.unsplash.com/photo-1621996348496-29f78a1487e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxkb3NhfGVufDB8fHx8MTY0NTUyNDc0Mg&ixlib=rb-1.2.1&q=80&w=400" className="w-[150px] h-[110px] rounded-xl shadow-2xl" alt="Dosa" />
                            <img src="https://images.unsplash.com/photo-1598971015793-c74c674b77a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHBhcmF0aGF8ZW58MHx8fHwxNjQ1NTI0NzQy&ixlib=rb-1.2.1&q=80&w=400" className="w-[150px] h-[110px] rounded-xl shadow-2xl" alt="Paratha" />
                   </div>


                </div>
            </div>

              {/*Small Screen */}

              <div className=" max-sm:w-full mb-5  sm:hidden" >
                            <h1 className="text-5xl text-orange-700 text-center font-bold">Our <span className="text-5xl text-black">Journey</span></h1>
                            <div className="card w-[320px] bg-orange-400 rounded-2xl  m-auto mt-5 shadow-2xl py-2  shadow-black" data-aos="flip-left">
                                 <p className="text-sm text-center px-2 py-4  "> NIA Restaurant has established itself as one of the finest veg restaurants in Coimbatore due to its focus on quality and service. Walk into our restaurants for an all- day dining experience like no other. We offer a variety of cuisines to tease your taste buds and are especially proud of our unique offerings in South Indian dishes</p>
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