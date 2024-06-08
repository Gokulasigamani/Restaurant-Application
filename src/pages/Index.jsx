import FirstContainer from '../components/FirstContainer'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecondContainer from '../components/SecondContainer'
import Review from '../components/Review'
function Index()
{
    return(
        <>
        <Navbar/>
        <div className='mt-[220px] '>
          <FirstContainer /> 
        </div>
        
          <SecondContainer/>
          <Review/>
      



        </>
    )
}
export default Index