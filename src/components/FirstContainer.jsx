import { Link } from "react-router-dom"
import Firstimg from '../assets/FirstImage.png'
import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

function FirstContainer()
{
    useEffect(()=>
    {
     Aos.init({duration:2000});
    },[])
    return(
        <>
            <div className="w-[1110px] m-auto mt-20 flex gap-32 items-center  ">
                <div className="w-[555px]" >
                    <h1 className="text-6xl font-bold" data-aos="fade-right">HAVE A <span className="text-orange-500">DELICIOUS</span><br /> MEAL WITH US.</h1>
                    <p className="mt-4">A restaurant is a place where people go to eat, frequently with friends, family, or coworkers.</p>

                    <div className="mt-4 flex gap-10" data-aos="fade-right">
                        <Link className=" px-7 py-4 shadow-xl bg-orange-500 text-xl rounded-xl font-semibold text-white">View Our Menu</Link> 
                        <Link className=" px-10 py-4 border-2 shadow-xl bg-transparent  border-neutral-400 border-1  rounded-xl font-semibold text-black">Book a table</Link> 
                    </div>

                    <div className="flex gap-6 mt-7" data-aos="fade-right" >
                        <img src="https://source.unsplash.com//500x400/?Burger" className="w-[150px] h-[110px] rounded-xl shadow-2xl" alt="" />
                        <img src="https://source.unsplash.com//500x400/?dosa" className="w-[150px] h-[110px] rounded-xl shadow-2xl" alt="" />
                        <img src="https://source.unsplash.com//500x400/?paratha" className="w-[150px] h-[110px] rounded-xl shadow-2xl" alt="" />
                    </div>

                </div>

                <img src={Firstimg} className="firstimg w-[440px]" data-aos="fade-left" alt="" />
            </div>
        </>
    )
}
export default FirstContainer