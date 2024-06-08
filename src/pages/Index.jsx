import FirstContainer from '../components/FirstContainer'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecondContainer from '../components/SecondContainer'
import Review from '../components/Review'
import ReviewBig from '../components/ReviewBig'
import Delivery from '../components/Delivery'
import SmallNavBar from '../components/SmallNavBar'

function Index()
{
    return(
        <>
        <Navbar/><SmallNavBar/>
        <div className='mt-[220px] '>
          <FirstContainer />
          <SecondContainer/>
          <Review/><ReviewBig/>
          <Delivery/> 
        </div>
        <Footer/>
      



        </>
    )
}
export default Index