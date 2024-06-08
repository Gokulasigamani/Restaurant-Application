import Logo from '../assets/NIA.png'
import { Link } from 'react-router-dom'
import Contact from '../pages/Contact'
import Logo2 from '../assets/NIA_SM.png'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

function SmallNavBar()
{
    return(
        <>
         <div className='max-sm:relative sm:hidden'>
                <img src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='max-sm:w-full max-sm:h-[420px] max-sm:object-cover max-sm:relative max-sm:top-0 ' alt="" />
                <div className='max-sm:w-full max-sm:bg-black max-sm:absolute max-sm:top-0 max-sm:right-0 max-sm:left-0 max-sm:bottom-0 max-sm:[400px] max-sm:opacity-60'></div>
            </div>

            <div className='max-sm:max-sm:flex max-sm:justify-center '>
               <img src={Logo2} alt="" className='max-sm:absolute  max-sm:w-[250px] max-sm:top-12  sm:hidden transition-all' data-aos="fade-top" />
               <button className=' bg-transparent border text-white hover:bg-white hover:text-black shadow-lg shadow-black-700 px-10 py-2 rounded-3xl  font-semibold sm:hidden max-sm:absolute max-sm:top-[265px] border-white ' data-aos="fade-bottom">Book your Table</button>
               <Link to={"/Contact"} className=' bg-transparent border text-white hover:bg-white hover:text-black shadow-lg shadow-black-700 px-5 py-2 rounded-3xl  font-semibold sm:hidden max-sm:absolute max-sm:top-[265px] border-neutral-300 max-sm:mt-14 ' data-aos="fade-bottom">Contact us</Link>
           </div>

        </>
    )
}
export default SmallNavBar