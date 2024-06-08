import Logo from '../assets/NIA.png'
import { Link } from 'react-router-dom'
import Contact from '../pages/Contact'
import Logo2 from '../assets/NIA_SM.png'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'



function Navbar()
{

    useEffect(()=>
        {
         Aos.init({duration:2000});
        },[])

    return(
        <>
        <nav className='sm:w-full  h-[150px] flex items-center border-b-2  shadow-xl fixed top-0 z-10 max-sm:hidden  '>
 
 
            <div className='w-[1110px] flex justify-between m-auto items-center'>
                <Link to={'/Contact'}  className=' bg-yellow-100 shadow-lg shadow-neutral-400 px-5 py-2 rounded-2xl font-semibold'>Contact us</Link>
                <a href=""><img src={Logo} alt="" className='w-[120px] h-[140px] ml-10' /></a>
                <button className=' bg-yellow-100 shadow-lg shadow-neutral-400 px-5 py-2 rounded-2xl font-semibold'>Book your Table</button>
        </div>
        </nav>
        
            {/* small screen*/}

            <div className='max-sm:relative sm:hidden'>
                <img src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='max-sm:w-full max-sm:h-[420px] max-sm:object-cover max-sm:relative max-sm:top-0 ' alt="" />
                <div className='max-sm:w-full max-sm:bg-black max-sm:absolute max-sm:top-0 max-sm:right-0 max-sm:left-0 max-sm:bottom-0 max-sm:[400px] max-sm:opacity-60'></div>
            </div>

            <div className='max-sm:max-sm:flex max-sm:justify-center '>
               <img src={Logo2} alt="" className='max-sm:absolute  max-sm:w-[250px] max-sm:top-12  sm:hidden transition-all' data-aos="fade-top" />
               <button className=' bg-transparent border text-white hover:bg-white hover:text-black shadow-lg shadow-black-700 px-10 py-2 rounded-3xl  font-semibold sm:hidden max-sm:absolute max-sm:top-[265px] border-white ' data-aos="fade-bottom">Book your Table</button>
           </div>

           
       
      
        </>
    )
}
export default Navbar