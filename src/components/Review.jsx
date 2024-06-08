import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos"
import { useEffect } from "react"

import 'aos/dist/aos.css'

function Review()
{
    
        useEffect(()=>
        {
         Aos.init({duration:2000});
        },[])
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <>  
            <div className="sm:hidden max-sm:w-[300px] m-auto mt-[50px]">
               
               <div className=" text-center text-3xl mb-2" data-aos="zoom-in">
                <h1 className="text-orange-600 font-bold text-3xl">Customer <span className="text-black">Reviews</span></h1>
               </div>

                <div data-aos="zoom-in" className="mt-8 mb-8">
                <Slider {...settings}>

                 {
                    data.map((d)=>
                    (
                        <div className="bg-orange-400  shadow-slate-600 shadow-lg rounded-3xl   ">
                               <div className="flex justify-center items-center">
                                    <img src={d.img} alt="" className="m-4 rounded-full w-[150px]" />
                               </div>
                               <div className="bg-orange-100 text-center p-4 h-[200px]">
                                    <h2 className="font-bold text-xl text-orange-900 ">{d.name}</h2>
                                    <p>{d.review}</p>
                               </div>
                        </div>
                    ))
                 }
                   </Slider>
            </div>
         
            </div>
          
        </>
    )
}
const data = [
   
    {
        name: "Anita Sharma",
        img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400",
        review: "“NIA RESTAURANT” ... Delicious food and great service! The staff was very friendly and the atmosphere was cozy. Definitely coming back!"
    },
    {
        name: "Rahul Verma",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400",
        review: "“NIA RESTAURANT” ... Wonderful experience! The dishes were flavorful and the presentation was top-notch. The prices are very reasonable too."
    },
    {
        name: "Sakshi Patel",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400",
        review: "“NIA RESTAURANT” ... Excellent service and tasty food. The ambiance is quite nice and the prices are affordable. Would recommend to anyone looking for a good dining experience."
    },
   

];


export default Review;