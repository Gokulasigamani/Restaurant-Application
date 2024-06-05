import Logo from '../assets/NIA.png'
import { Link } from 'react-router-dom'
import Contact from '../pages/Contact'
import Logo2 from '../assets/NIA_SM.png'

function Navbar()
{
    return(
        <>
        <nav className='sm:w-full  h-[150px] flex items-center border-b-2  shadow-xl fixed top-0 z-10 max-sm:hidden '>
 
 
            <div className='w-[1110px] flex justify-between m-auto items-center'>
                <Link to={'/Contact'}  className=' bg-yellow-100 shadow-lg shadow-neutral-400 px-5 py-2 rounded-2xl font-semibold'>Contact us</Link>
                <a href=""><img src={Logo} alt="" className='w-[120px] h-[140px] ml-10' /></a>
                <button className=' bg-yellow-100 shadow-lg shadow-neutral-400 px-5 py-2 rounded-2xl font-semibold'>Book your Table</button>
        </div>
        </nav>
        
            {/* small screen*/}

            <div className='max-sm:relative sm:hidden'>
                <img src="https://source.unsplash.com//1600x1000/?food" className='max-sm:w-full max-sm:h-[500px] max-sm:object-cover max-sm:relative max-sm:top-0 ' alt="" />
                <div className='max-sm:w-full max-sm:bg-black max-sm:absolute max-sm:top-0 max-sm:right-0 max-sm:left-0 max-sm:bottom-0 max-sm:[400px] max-sm:opacity-60'></div>
            </div>\

            <div>
               <img src={Logo2} alt="" className='max-sm:absolute  max-sm:w-[250px] max-sm:top-0 max-sm:right-16 sm:hidden transition-all' />
            </div>
       
      
        </>
    )
}
export default Navbar