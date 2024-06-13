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
                <Link to={'/'}><img src={Logo} alt="" className='w-[120px] h-[140px] ml-10' /></Link>
                <Link to={'/Table'} className=' bg-yellow-100 shadow-lg shadow-neutral-400 px-5 py-2 rounded-2xl font-semibold'>Book your Table</Link>
        </div>
        </nav>
        
            {/* small screen*/}

           
           
       
      
        </>
    )
}
export default Navbar