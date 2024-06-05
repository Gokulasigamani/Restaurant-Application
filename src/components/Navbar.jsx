import Logo from '../assets/NIA.png'
import { Link } from 'react-router-dom'
import Contact from '../pages/Contact'

function Navbar()
{
    return(
        <>
        <nav className='sm:w-full max-sm:w-[100%]   h-[150px] flex items-center border-b-2  shadow-xl fixed top-0 z-10 '>
 
 
            <div className='sm:w-[1110px] flex justify-between m-auto items-center max-sm:gap-48'>
                <Link to={'/Contact'}  className=' bg-yellow-100 shadow-lg shadow-neutral-400 px-5 py-2 rounded-2xl font-semibold'>Contact us</Link>
                <a href=""><img src={Logo} alt="" className='w-[120px] h-[140px] ml-10' /></a>
                <button className=' bg-yellow-100 shadow-lg shadow-neutral-400 px-5 py-2 rounded-2xl font-semibold'>Book your Table</button>
            </div>
          
        
         </nav>
        </>
    )
}
export default Navbar