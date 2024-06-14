
import Logo from '../assets/NIA.png'
import { Link } from 'react-router-dom'

function Success({details})
{
    return(
    
        <>
        <div>
         
         <div className="text-center" >
            <img src={Logo} className='w-[100px] mt-2 m-auto  sm:w-[150px] ' alt="" />
            <h1 className="text-4xl font-bold sm:text-5xl">Thankyou! </h1>
            <h2 className="text-3xl font-semibold text-orange-600 sm:mt-4 max-sm:mt-2 uppercase " >{details.name}</h2>
        </div>

         
        <div className='bg-orange-200 sm:w-[500px] sm:m-auto  sm:mt-2  max-sm:p-10 mt-4 p-10 m-3 rounded-3xl flex justify-center items-center gap-5 ' >
              
             <div className='text-lg font-bold text-black max-sm:text-sm max-sm:font-semibold  ' >
                <h2>Name:</h2>
                <br />
                <h2>Email:</h2>
                <br />
                <h2>Date:</h2>
                <br />
                <h2>Members:</h2>
              </div>

              <div className='text-lg font-semibold text-black max-sm:text-sm max-sm:font-semibold  ' >
                <h2>{details.name}</h2>
                <br />
                <h2>{details.email}</h2>
                <br />
                <h2>{details.date}</h2>
                <br />
                <h2>{details.members}</h2>
              </div>
            
             </div>

             <p className=' sm:m-auto max-sm:font-semibold max-sm:text-sm text-center p-4 sm:font-bold sm:w-[600px] ' > <span className='uppercase text-orange-600'>{details.name} </span>  ,your table reservation at NIA RESTAURANT, 2024, at {details.date} has been confirmed. Please arrive 10 minutes early to ensure timely seating.</p>
             <div className="text-center px-5 py-2 bg-green-500 w-[100px] m-auto rounded-2xl font-bold mb-2 " > <Link to={"/"}  >Back</Link></div>


        

        </div>

        </>
    )
}
export default Success
