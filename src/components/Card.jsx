function Card(props)
{
    return(
        <>
            <div className="flex justify-center items-center gap-4 py-4 px-2 m-auto max-sm:w-[360px] sm:hidden bg-orange-100 border border-orange-300 shadow-2xl shadow-black rounded-3xl mt-6 mb-6">

                <div>
                    <img src="" className="w-[100px]" alt="" />
                </div>
            
                <div className="">
                    <h2 className="font-bold mb-2">Burger</h2>
                    <p className="text-sm font-medium mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, doloribus.</p>
                    <h4 className="font-bold text-orange-800">RS:200</h4>                
                </div>


            </div>
        </>
    )
}
const data = [
    {
      foodname: "Idli",
      type: "veg",
      price: 30,
      desc: "Soft and fluffy steamed rice cakes",
      img: "https://images.unsplash.com/photo-1617191512006-8ce02e98d673"
    },
    {
      foodname: "Dosa",
      type: "veg",
      price: 50,
      desc: "Crispy fermented rice and lentil crepe",
      img: "https://images.unsplash.com/photo-1591107492700-e6d27c33bfc7"
    },
    {
      foodname: "Sambar",
      type: "veg",
      price: 40,
      desc: "Tangy and spicy lentil soup with vegetables",
      img: "https://images.unsplash.com/photo-1617191512006-8ce02e98d673"
    },
    {
      foodname: "Vada",
      type: "veg",
      price: 20,
      desc: "Crispy deep-fried lentil doughnut",
      img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f43"
    },
    {
      foodname: "Pongal",
      type: "veg",
      price: 45,
      desc: "Savory rice and lentil porridge",
      img: "https://images.unsplash.com/photo-1601504900490-9202e78fd484"
    },
    {
      foodname: "Biryani",
      type: "non veg",
      price: 150,
      desc: "Spicy and aromatic rice with meat",
      img: "https://images.unsplash.com/photo-1605478521088-6d9acf2417f1"
    },
    {
      foodname: "Chicken Chettinad",
      type: "non veg",
      price: 200,
      desc: "Spicy chicken curry from Chettinad cuisine",
      img: "https://images.unsplash.com/photo-1617196032084-dee97c23f7ed"
    },
    {
      foodname: "Kuzhi Paniyaram",
      type: "veg",
      price: 35,
      desc: "Fried dumplings made from fermented batter",
      img: "https://images.unsplash.com/photo-1598870004470-a1a37ba232b1"
    },
    {
      foodname: "Fish Curry",
      type: "non veg",
      price: 120,
      desc: "Spicy and tangy fish curry",
      img: "https://images.unsplash.com/photo-1597318185744-b307e0bca621"
    },
    {
      foodname: "Kootu",
      type: "veg",
      price: 40,
      desc: "Healthy and wholesome vegetable stew",
      img: "https://images.unsplash.com/photo-1627308597277-f37d6a26a3b8"
    }
  ];


export default Card