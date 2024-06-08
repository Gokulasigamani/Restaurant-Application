import { Link } from "react-router-dom"
import Firstimg from '../assets/FirstImage.png'
import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'
import '../App.css'

function FirstContainer()
{
    useEffect(()=>
    {
     Aos.init({duration:2000});
    },[])
    return(
        <>
            <div className="w-[1110px] m-auto mt-20 flex gap-40 items-center max-sm:flex-col max-sm:w-[300px]   ">
                <div className="w-[595px] max-sm:text-center max-sm:-m-48 max-sm:w-full" >
                    <h1 className="text-5xl max-sm:text-4xl font-bold" data-aos="fade-right">HAVE A <span className="text-orange-500">DELICIOUS</span><br /> MEAL WITH US.</h1>
                    <p className="mt-4 max-sm:text-center">A restaurant is a place where people go to eat, frequently with friends, family, or coworkers.</p>

                    <div className="mt-4 flex gap-10 max-sm:w-full max-sm:justify-center" data-aos="fade-right">
                        <Link  className=" px-7 py-4 shadow-xl bg-orange-500 text-xl rounded-xl font-semibold text-white">View Our Menu</Link> 
                        <Link className=" max-sm:hidden  px-10 py-4 border-2 shadow-xl bg-transparent  border-neutral-400 border-1  rounded-xl font-semibold text-black">Book a table</Link> 
                    </div>

                     

                     
                    <div className="flex gap-6 mt-7  max-sm:justify-center max-sm:gap-2  max-sm:w-full" data-aos="fade-right" >
                        <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJ1cmdlcnxlbnwwfHx8fDE2NDU1MjQ3NDI&ixlib=rb-1.2.1&q=80&w=400" className="w-[150px] max-sm:w-[110px] h-[110px] rounded-xl shadow-2xl" alt="" />
                        <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJ1cmdlcnxlbnwwfHx8fDE2NDU1MjQ3NDI&ixlib=rb-1.2.1&q=80&w=400" className="w-[150px] max-sm:w-[110px] h-[110px] rounded-xl shadow-2xl" alt="" />
                        <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJ1cmdlcnxlbnwwfHx8fDE2NDU1MjQ3NDI&ixlib=rb-1.2.1&q=80&w=400" className="w-[150px] max-sm:w-[110px] h-[110px] rounded-xl shadow-2xl" alt="" />
        
                    </div>

                </div>

                <img src={Firstimg} className="firstimg w-[440px] max-sm:mt-14 max-sm:mb-5 max-sm:w-[250px]" data-aos="fade-left" alt="" />
            </div>

            

        </>
    )
}
export default FirstContainer