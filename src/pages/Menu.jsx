import { Link } from "react-router-dom";
import Card from "../components/Card";

const foodItems = [
    {
      foodname: "Idli",
      type: "veg",
      price: 30,
      desc: "Soft and fluffy steamed rice cakes",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      rate: 4.1
    },
    {
      foodname: "Dosa",
      type: "veg",
      price: 50,
      desc: "Crispy fermented rice and lentil crepe",
      rate:2.5,
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      foodname: "Sambar",
      type: "veg",
      price: 40,
      rate:4.5,
      desc: "Tangy and spicy lentil soup with vegetables",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      foodname: "Vada",
      type: "veg",
      price: 20,
      rate:3.5,
      desc: "Crispy deep-fried lentil doughnut",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      foodname: "Pongal",
      type: "veg",
      price: 45,
      rate:5,
      desc: "Savory rice and lentil porridge",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
  ];
  


function Menu()
{
    return(
        <>
        {/* menu-nav */}
           <div className="flex justify-between items-center max-sm:w-full py-4 px-4 bg-orange-400 sm:hidden">
                <Link to={'/'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
               </svg>
                </Link>

                <div>
                   <h1 className="font-semibold text-xl text-black">Menu</h1>
                </div>
                
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                    </svg>
                </div>
           </div>


           {/* Menu-body */}

                <div>
                     
                    {
                        foodItems.map((i)=>
                        {
                            return <Card name={i.foodname} desc={i.desc} img={i.img} price={i.price} rate={i.rate} />
                        })
                    }

                </div>
        </>
    )
}
export default Menu;