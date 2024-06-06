function Footer()
{
    return(
        <>
           <footer className="  fixed w-full h-[300px]">

              
                <div className="w-[1110px] m-auto mt-16 flex justify-between items-start">
                  
                    <div className="w-[500px]">
                        <h1 className="font-bold text-2xl">NIA Restaurant<span className="text-orange-600 text-4xl">.</span></h1>
                        <p className="text-neutral-600 mt-3">A culinary haven where diverse flavors and warm hospitality come together, creating a symphony of delicious memories.</p>
                    </div>
                
                <div className="flex gap-9">

                    <div className="w-[300px]">
                        <h1 className="font-bold text-2xl">ADDRESS<span className="text-orange-600 text-4xl">.</span></h1>
                        <p className=" text-neutral-600 mt-3">Dr.Mahalingam College of Engineering and Technology,. Makkinaickenpatti (POST),.  Pollachi 642003,. Coimbatore, Tamil Nadu.</p>
                    </div>
                    <div className="w-[200px]">
                        <h1 className="font-bold text-2xl">CONTACT US<span className="text-orange-600 text-4xl">.</span></h1>
                        <p className="text-sm font-bold text-neutral-500 mt-3">gokulsusela@gmail.com</p>
                        <p className="text-sm font-bold text-neutral-500 ">Phone number:7010437899</p>
                    </div>

                </div>
                    
                </div>
    

           </footer>
        </>
    )
}
export default Footer