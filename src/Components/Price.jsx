import price from "../assets/price.png";
import { TiTick } from "react-icons/ti";

const Price = () => {
  return (
    <div className="relative  h-screen">
      <div className="bg-yellow-400  clip-bottom-shape absolute inset-0 h-[145%] md:h-[120%]"></div>
      <h2 className="text-center text-white py-10 text-3xl font-bold relative z-10">
        Pricing Plans
      </h2>
      <div className="md:flex relative z-10 mx-24 my-16 gap-8">
        <div className="shadow-md  rounded-md md:w-1/3 p-4 bg-base-100">
          <div className="text-center">
            <h2 className="font-semibold text-2xl">Free Pack</h2>
            <h3 className="font-bold text-3xl">$0</h3>
          </div>

          <div className="flex items-center my-4">
            <TiTick />
            <p>Create one pet profile</p>
          </div>
          <div className="flex items-center my-4">
            <TiTick />
            <p>Assign notification to one person</p>
          </div>
          <div className="flex justify-center">
            <button className="btn-yellow">Try for free</button>
          </div>
        </div>
        <div className="shadow-md  rounded-md md:w-1/3 p-4 bg-base-100">
          <div className="text-center">
            <h2 className="font-semibold text-2xl">Trial Pack</h2>
            <h3 className="font-bold text-3xl">$2</h3>
            <p>Monthly</p>
          </div>

          <div className="flex items-center my-4">
            <TiTick />
            <p>Create one pet profile</p>
          </div>
          <div className="flex items-center my-4">
            <TiTick />
            <p>Assign notification to one person</p>
          </div>
          <div className="flex items-center my-4">
            <TiTick />
            <p>Send 10 message notification</p>
          </div>
          <div className="flex justify-center">
            <button className="btn-yellow">Try for free</button>
          </div>
        </div>
        <div className="shadow-md  rounded-md md:w-1/3 p-4 bg-base-100">
          <div className="text-center">
            <h2 className="font-semibold text-2xl">Free Pack</h2>
            <h3 className="font-bold text-3xl">$6</h3>
            <p>3 Months</p>
          </div>

          <div className="flex items-center my-4">
            <TiTick />
            <p>Create 10 pet profile</p>
          </div>

          <div className="flex items-center my-4">
            <TiTick />
            <p>Assign notification to 10 person</p>
          </div>
          <div className="flex items-center my-4">
            <TiTick />
            <p>Send 150 message notification</p>
          </div>
          <div className="flex justify-center">
            <button className="btn-yellow">Try for free</button>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 -bottom-20 transform -translate-x-1/2">
        <img className="h-[600px]" src={price} alt="" />
      </div>
    </div>
  );
};

export default Price;
