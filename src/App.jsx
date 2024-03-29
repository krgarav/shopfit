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
import { HiArrowRight } from "react-icons/hi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

function App() {
  return (
    <>
      <div className="flex mx-3">
        {/* left sidebar */}
        <div className="w-1/8">
          <div className="m-[2rem] ">
            <div className="flex flex-row items-center ">
              <div style={{ margin: "10px 0px" }}>
                <FaBagShopping
                  className="w-auto h-8 m-2"
                  style={{ color: "#9B5DFF" }}
                />
              </div>

              <div
                className="flex font-bold text-3xl"
                style={{ color: "#9B5DFF" }}
              >
                <h3 className="my-4 text-2xl">shop</h3>
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

        {/* middle */}
        <div className="w-2/3">
          {/* location and search */}
          <div className="flex ">
            {/* location */}
            <div className="flex justify-between items-center mt-12 text-xl bg-slate-100  h-[52px] p-3 rounded-full  min-w-52 ">
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
            <div className="flex justify-between items-center mt-12 text-2xl bg-slate-100 h-[52px] w-2/3 p-3 rounded-xl ml-8 ">
              <div className="flex items-center justify-center">
                <CiSearch className="text-xl text-black font-medium	" />
                <div>
                  <input
                    placeholder="Search for Product or Store"
                    className="m-2 p-2 w-full bg-slate-100 text-sm font-medium border-none"
                  ></input>
                </div>
              </div>
            </div>
          </div>

          {/* grey box */}
          <div>
            <div className="bg-[#CCCCCC] h-56 border-black mt-8 rounded-xl w-full"></div>
          </div>

          {/* buy new , refurbished, flexibly */}
          <div className="flex mt-8 ">
            <div className="bg-gradient-to-r from-[#E9ECFF] to-[#ABB8FF] rounded-xl w-1/3 h-auto ">
              <div className="text-[#4562FF] font-bold  text-2xl sm:text-sm md:text-2xl p-4 rounded-xl">
                Buy New
              </div>
              <div className="text-slate-500 p-4 font-medium mt-5">
                Authorized and tested Equipment
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#F9E9FF] to-[#EEABFF] rounded-xl w-1/3 h-auto ml-5">
              <div className="text-[#CC00FF] p-3  font-bold text-sm sm:text-sm md:text-2xl  ">
                Buy Refurbished
              </div>
              <div className="text-slate-500 p-3 font-medium text-base w-auto mt-8">
                Affordable yet Efficient
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#F0FFE9] to-[#D5FFAB] rounded-xl w-1/3 h-auto ml-5 text-wrap">
              <div className="text-[#1B6700] p-4 font-bold  text-2xl sm:text-sm md:text-2xl">
                Rent Flexibly
              </div>
              <div className="text-slate-500 p-4 font-medium mt-5 text-base text-wrap w-auto">
                Efficiency without Commitment
              </div>
            </div>
          </div>

          {/* Browse by Category */}
          <div className="flex mt-4 items-center w-full">
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#808080] flex-1 h-[1px]"></div>
            <div className="font-bold text-3xl m-3">Browse by Category</div>
            <div className="bg-gradient-to-r from-[#808080] to-[#FFFFFF] flex-1 h-[1px]"></div>
          </div>

          {/* category */}
          <div className="flex justify-around">
            <div className="flex flex-col items-center m-3 ml-5">
              <img
                src="./public/assets/img1.png"
                className="rounded-xl w-[160px] h-[160px]"
              />
              <p className="text-lg font-medium">Ultrasound Therapy</p>
            </div>

            <div className="flex flex-col items-center m-3">
              <img
                src="./public/assets/img2.png"
                className="rounded-xl w-[160px] h-[160px]"
              />
              <p className="text-lg font-medium">Electro Therapy</p>
            </div>

            <div className="flex flex-col items-center m-3">
              <img
                src="./public/assets/img3.png"
                className="rounded-xl w-[160px] h-[160px]"
              />
              <p className="text-lg font-medium">Electro Therapy</p>
            </div>

            <div className="flex flex-col items-center m-3">
              <img
                src="./public/assets/img4.png"
                className="rounded-xl w-[160px] h-[160px]"
              />
              <p className="text-lg font-medium">Electro Therapy</p>
            </div>
          </div>

          {/* single line */}
          <div className="w-full h-[1px] text-[#CCCCCC] bg-slate-300 m-4"></div>

          {/* Specialist Favorites */}
          <div className="flex mt-3 items-center w-full">
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#808080] flex-1 h-[1px]"></div>
            <div className="font-bold text-3xl m-3">Specialist Favorites</div>
            <div className="bg-gradient-to-r from-[#808080] to-[#FFFFFF] flex-1 h-[1px]"></div>
          </div>

          {/* favorites */}
          <div className="flex justify-evenly overflow-x-auto overflow-y-hidden">
            <div className="h-[541px] w-[316px] bg-[#F6F6F6] mt-4 rounded-[16px] mr-8">
              <div>
                <div className="h-[461px]">
                  <img
                    src="./public/assets/img5.png"
                    className="object-cover h-full w-full rounded-[16px]"
                  />
                  <div className="flex justify-between m-3">
                    <div>
                      <div className="mb-2 font-medium text-lg">
                        Gym Equipments
                      </div>
                      <div className="text-slate-500">
                        Starting at
                        <span className="text-[#9B5DFF] m-1 font-medium">
                          ₹300
                        </span>
                      </div>
                    </div>
                    <div className="w-[48px] h-[45px] rounded-full bg-[#9B5DFF] mt-2">
                      <HiArrowRight className="text-[white] w-[24px] h-[24px] m-[10px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[541px] w-[316px] bg-[#F6F6F6] mt-4 rounded-[16px] mr-8">
              <div>
                <div className="h-[461px]">
                  <img
                    src="./public/assets/img6.png"
                    className="object-cover h-full w-full rounded-[16px]"
                  />
                  <div className="flex justify-between m-3">
                    <div>
                      <div className="mb-2 font-medium text-lg">
                        Gym Equipments
                      </div>
                      <div className="text-slate-500">
                        Starting at
                        <span className="text-[#9B5DFF] m-1 font-medium">
                          ₹300
                        </span>
                      </div>
                    </div>
                    <div className="w-[48px] h-[45px] rounded-full bg-[#9B5DFF] mt-2">
                      <HiArrowRight className="text-[white] w-[24px] h-[24px] m-[10px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[541px] w-[316px] bg-[#F6F6F6] mt-4 rounded-[16px] mr-8">
              <div>
                <div className="h-[461px]">
                  <img
                    src="./public/assets/img7.png"
                    className="object-cover h-full w-full rounded-[16px]"
                  />
                  <div className="flex justify-between m-3">
                    <div>
                      <div className="mb-2 font-medium text-lg">
                        Gym Equipments
                      </div>
                      <div className="text-slate-500">
                        Starting at
                        <span className="text-[#9B5DFF] m-1 font-medium">
                          ₹300
                        </span>
                      </div>
                    </div>
                    <div className="w-[48px] h-[45px] rounded-full bg-[#9B5DFF] mt-2">
                      <HiArrowRight className="text-[white] w-[24px] h-[24px] m-[10px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           {/* single line */}
           <div className="w-full h-[1px] text-[#CCCCCC] bg-slate-300 m-4"></div>


          {/* top selling */}
          <div className="flex mt-3 items-center w-full">
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#808080] flex-1 h-[1px]"></div>
            <div className="font-[500] text-3xl m-3">Top Selling</div>
            <div className="bg-gradient-to-r from-[#808080] to-[#FFFFFF] flex-1 h-[1px]"></div>
          </div>

          {/* top selling component */}
          <div className="flex">
            <div className="bg-[#F6F6F6] w-1/3 h-auto rounded-[12px] mr-8">
              <div className="h-auto p-3">
                <img
                  src="./public/assets/img8.png"
                  className="object-cover h-auto w-full rounded-[16px]"
                />
              </div>
              {/* <p className="w-[139px] h-[24px] font-[600] text-lg m-3">
                Knee Bandage
              </p>
              <p className="w-[139px] h-[24px] font-[400] text-lg m-3">
                Starts from
              </p>
              <p className="w-[155px] h-[30px] font-[500] text-2xl m-3">
                ₹100 - ₹1,300
              </p> */}
              <div className="flex justify-center">
                <button className="border border-[#9B5DFF] w-[217px] p-[12px] rounded-[8px] text-[#9B5DFF] font-medium text-2xl">
                  Explore
                </button>
              </div>
            </div>

            <div className="bg-[#F6F6F6] w-1/3 h-auto rounded-[12px] mr-8">
              <div className="h-auto p-3">
                <img
                  src="./public/assets/img8.png"
                  className="object-cover h-full w-full rounded-[16px]"
                />
              </div>
              {/* <p className="w-[139px] h-[24px] font-[600] text-lg m-3">
                Knee Bandage
              </p>
              <p className="w-[139px] h-[24px] font-[400] text-lg m-3">
                Starts from
              </p>
              <p className="w-[155px] h-[30px] font-[500] text-2xl m-3">
                ₹100 - ₹1,300
              </p> */}
              <div className="flex justify-center">
                <button className="border border-[#9B5DFF] w-[217px] p-[12px] rounded-[8px] text-[#9B5DFF] font-medium text-2xl">
                  Explore
                </button>
              </div>
            </div>

            <div className="bg-[#F6F6F6] w-1/3 h-auto rounded-[12px] mr-8">
              <div className="h-auto p-3">
                <img
                  src="./public/assets/img8.png"
                  className="object-cover h-full w-full rounded-[16px]"
                />
              </div>
              {/* <p className="w-[139px] h-[24px] font-[600] text-lg m-3">
                Knee Bandage
              </p>
              <p className="w-[139px] h-[24px] font-[400] text-lg m-3">
                Starts from
              </p>
              <p className="w-[155px] h-[30px] font-[500] text-2xl m-3">
                ₹100 - ₹1,300
              </p> */}
              <div className="flex justify-center">
                <button className="border border-[#9B5DFF] w-[217px] p-[12px] rounded-[8px] text-[#9B5DFF] font-medium text-2xl">
                  Explore
                </button>
              </div>
            </div>
          </div>

          {/* single line */}
          <div className="w-full h-[1px] text-[#CCCCCC] bg-slate-300 m-8"></div>

          {/* Featured Brand */}
          <div className="flex mt-3 items-center w-full">
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#808080] flex-1 h-[1px]"></div>
            <div className="font-[500] text-3xl m-3">Featured Brand</div>
            <div className="bg-gradient-to-r from-[#808080] to-[#FFFFFF] flex-1 h-[1px]"></div>
          </div>

          {/* Brand logo */}
          <div className="flex justify-between mt-6 ">
            <div className="w-[172.14px] h-[171px]">
              <img
                src="./public/assets/img9.png"
                className="rounded-full shadow-xl"
              />
            </div>
            <div className="w-[172.14px] h-[171px]">
              {" "}
              <img
                src="./public/assets/img10.png"
                className="rounded-full shadow-xl"
              />
            </div>
            <div className="w-[172.14px] h-[171px]">
              {" "}
              <img
                src="./public/assets/img11.png"
                className="rounded-full shadow-xl"
              />
            </div>
            <div className="w-[172.14px] h-[171px]">
              {" "}
              <img
                src="./public/assets/img12.png"
                className="rounded-full shadow-xl"
              />
            </div>
          </div>

          {/* single line */}
          <div className="w-full h-[1px] text-[#CCCCCC] bg-slate-300 m-8"></div>

          {/* Popular activities */}
          <div className="flex mt-3 items-center w-full">
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#808080] flex-1 h-[1px]"></div>
            <div className="font-[500]  text-3xl m-3">Popular Activities</div>
            <div className="bg-gradient-to-r from-[#808080] to-[#FFFFFF] flex-1 h-[1px]"></div>
          </div>

          {/* Activites */}
          <div className="flex mb-[10rem] justify-between">
            <div className="h-[335px] w-[259px] bg-[#F6F6F6] mt-4 rounded-[16px] mr-8 ">
              <div>
                <div className="h-[260px]">
                  <img
                    src="./public/assets/img13.jpg"
                    className="rounded-lg object-cover h-full w-full p-4 "
                  />
                </div>
                <div className="flex justify-between m-3">
                  <div>
                    <div className="mb-1 font-medium text-xl">Sleep</div>
                    <div className="text-slate-600">4 Items</div>
                  </div>
                  <div className="w-[48px] h-[45px] rounded-full bg-[#9B5DFF] mt-1">
                    <HiArrowRight className="text-[white] w-[24px] h-[24px] m-[10px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[335px] w-[259px] bg-[#F6F6F6] mt-4 rounded-[16px] mr-8 ">
              <div>
                <div className="h-[260px]">
                  <img
                    src="./public/assets/img13.jpg"
                    className="rounded-lg object-cover h-full w-full p-4 "
                  />
                </div>
                <div className="flex justify-between m-3">
                  <div>
                    <div className="mb-1 font-medium text-xl">Sleep</div>
                    <div className="text-slate-600">4 Items</div>
                  </div>
                  <div className="w-[48px] h-[45px] rounded-full bg-[#9B5DFF] mt-1">
                    <HiArrowRight className="text-[white] w-[24px] h-[24px] m-[10px]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[335px] w-[259px] bg-[#F6F6F6] mt-4 rounded-[16px] mr-8 ">
              <div>
                <div className="h-[260px]">
                  <img
                    src="./public/assets/img13.jpg"
                    className="rounded-lg object-cover h-full w-full p-4 "
                  />
                </div>
                <div className="flex justify-between m-3">
                  <div>
                    <div className="mb-1 font-medium text-xl">Sleep</div>
                    <div className="text-slate-600">4 Items</div>
                  </div>
                  <div className="w-[48px] h-[45px] rounded-full bg-[#9B5DFF] mt-1">
                    <HiArrowRight className="text-[white] w-[24px] h-[24px] m-[10px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* last div */}
        </div>

        {/* right sidebar */}
        <div className="flex w-1/6">
          <div className=" flex flex-col ">
            <div className=" mt-[3rem] flex justify-end">
              <img
                src="/assets/img15.png"
                className="rounded-full w-[56px] h-[56px]"
              />
            </div>

            <div className="w-full h-[52px] border-[#CCCCCC] border-[1px] rounded-[16px] flex items-center justify-between my-7 ml-2">
              <div className="flex items-center ">
                <RiCustomerService2Fill className="w-[24px] h-[24px] text-[#9B5DFF] m-3" />
                <div className="w-[95px] h-[24px] text-[#9B5DFF] font-medium">
                  Help Center
                </div>
              </div>
              <div>
                <HiOutlineArrowCircleRight className="size-[24px] text-[#9B5DFF] mr-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
