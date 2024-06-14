
import { Form } from "react-router-dom";
import Logo from "../assets/NIA.png";
import { useRef } from "react";
import { Link } from "react-router-dom";
function Table({setDetails}) {
  let NameInput = useRef();
  let DateInput = useRef();
  let EmailInput = useRef();
  let MembersInput = useRef();

  function BookingHandler() {
    let BookingDatas = {
      name: NameInput.current.value,
      email: EmailInput.current.value,
      date: DateInput.current.value,
      members: MembersInput.current.value,
    };
    setDetails(BookingDatas);
    fetch("http://localhost:4000/p", {
      method: "POST",
      body: JSON.stringify({
        "name":BookingDatas.name,
        "email":BookingDatas.email,
        "date":BookingDatas.date,
        "members":BookingDatas.members
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res)=>console.log(res))
    .catch((Err)=>console.log(Err))
  }

  return (
    <>
      <div className="mt-2 p-4">
        <div className="text-center mb-10">
          <img src={Logo} className="w-[110px] m-auto" alt="" />
          <h1 className="text-4xl font-bold">
            Book Your <span className="text-orange-400">Table</span>
          </h1>
          <p className="font-semibold text-sm mt-2">
            Reserve your table today and experience the best that NIA has to
            offer. We can't wait to serve you!
          </p>
          <hr
            class="w-[120px] h-1 mx-auto my-4 bg-orange-600 border-0 rounded "
            data-aos="fade-right"
          ></hr>
        </div>

        <form action="" className="sm:w-[500px] m-auto">
          <div class="w-full   mb-4">
            <input
              ref={NameInput}
              type="text"
              placeholder="Enter the Name"
              class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div class="w-full  mb-4">
            <input
              ref={EmailInput}
              type="email"
              placeholder="Enter the Email"
              class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div class="w-full  mb-4">
            <input
              ref={MembersInput}
              type="number"
              placeholder="Number of Members"
              class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div class="w-full  mb-4">
            <input
              ref={DateInput}
              type="datetime-local"
              placeholder="Enter the Name"
              class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <Link to={'/Success'}
            onClick={BookingHandler}
            className="px-4 py-3 bg-orange-400 rounded-2xl text-white font-bold w-full flex justify-center"
          >
            Book a table
          </Link>
        </form>
      </div>
    </>
  );
}
export default Table;
