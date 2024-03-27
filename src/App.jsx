import "./App.css";
import { FaBagShopping } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

function App() {
  return (
    <>
      <div className="flex">
        <div>
          <div className="m-[2rem] ">
            <div className="flex flex-row items-center ">
              <div style={{ margin: "10px 0px" }}>
                <FaBagShopping
                  className="w-8 h-8 m-2"
                  style={{ color: "#9B5DFF" }}
                />
              </div>

              <div
                className="flex font-bold text-3xl"
                style={{ color: "#9B5DFF" }}
              >
                <h3 className="my-4">shop</h3>
                <div className="border-r-2 mx-2 h-16 border-black"></div>
              </div>

              <div>
                <div className="font-bold">Back to</div>
                <p
                  className="font-bold text-3xl flex"
                  style={{ color: "#9B5DFF" }}
                >
                  p<span className="text-black">fit</span>
                  <IoArrowForwardCircleOutline className="text-black mt-4 ms-2 h-[20px] w-[20px]" />
                </p>
              </div>
            </div>
          </div>

          <div className="m-[2rem] flex" style={{ color: "#9B5DFF" }}>
            <div
              className="border-2 flex w-[200px] rounded-full"
              style={{ borderColor: "#9B5DFF" }}
            >
              <MdHome className="w-[25px] h-[25px] m-[10px]" />
              <p className="m-[8px] text-lg font-bold">Home</p>
            </div>
          </div>

          <div className="m-[2rem] flex">
            <div className="flex w-[200px] " style={{ borderColor: "#9B5DFF" }}>
              <MdOutlineLocalOffer className="w-[25px] h-[25px] m-[10px]" />
              <p className="m-[8px] text-lg font-bold">Buy</p>
            </div>
          </div>

          <div className="m-[2rem] flex">
            <div
              className="flex w-[200px] rounded-full"
              style={{ borderColor: "#9B5DFF" }}
            >
              <CiClock2 className="w-[25px] h-[25px] m-[10px]" />
              <p className="m-[8px] text-lg font-bold">Rent</p>
            </div>
          </div>

          <div className="m-[2rem] flex">
            <div className="flex w-[200px] rounded-full">
              <CiBookmark className="w-[25px] h-[25px] m-[10px]" />
              <p className="m-[8px] text-lg font-bold">Saved</p>
            </div>
          </div>

          <div className="m-[2rem] flex">
            <div className="flex w-[200px] rounded-full">
              <AiOutlineShoppingCart className="w-[25px] h-[25px] m-[10px]" />
              <p className="m-[8px] text-lg font-bold">Cart</p>
            </div>
          </div>
        </div>

        <div >
          {/* location and search */}
          <div className="flex">
            {/* location */}
            <div className="flex justify-between items-center mt-12 text-2xl bg-slate-100 h-[52px] w-[320px] p-3 rounded-full">
              <div className="flex items-center">
                <FaLocationDot
                  className="text-lg"
                  style={{ color: "#9B5DFF" }}
                />
                <div className="pl-[15px] text-slate-500 text-sm font-medium ">
                  Deliver to: <span className="text-black">Noida, 201309</span>
                </div>
              </div>
              <div>
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>

            {/* search box */}
            <div className="flex justify-between items-center mt-12 text-2xl bg-slate-100 h-[52px] w-[400px] p-3 rounded-xl ml-8">
              <div className="flex items-center justify-center">
                <CiSearch
                  className="text-xl text-black font-medium	"
                />
                <div>
                  <input placeholder="Search for Product or Store " className="m-2 p-2 w-64 bg-slate-100 text-sm font-medium "></input>
                </div>
              </div>
            </div>
          </div>

          {/* grey box */}
          <div>
            <div className="bg-slate-200 w-full h-full"></div>
          </div>

          {/* new , refurbished, flexibly */}
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* category */}
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* favorites */}
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* top selling */}
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Brand */}
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Activites */}
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {/* last div */}
        </div>

        <div></div>
      </div>
    </>
  );
}

export default App;
