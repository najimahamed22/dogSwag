import { Link } from "react-router-dom";
import dog1 from "../assets/dog1.png";
import dog1g from "../assets/dog1g.png";
import dog2 from "../assets/dog2.png";
import dog2g from "../assets/dog2g.png";
import dog3 from "../assets/dog3.png";
import dog3g from "../assets/dog3g.png";
const Services = () => {
  return (
    <div className="w-full">
      <div className="text-center">
        <h1 className="text-5xl my-3 font-bold">Our Services</h1>
        <p>Comprehensive Services Tailored to Your Dog is Every Need</p>
      </div>
      <div className="grid mx-7 mt-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-2 text-white bg-yellow-400 rounded-2xl">
          <div className="m-10">
            <h2 className="text-2xl font-bold">DogSwag Organizer</h2>
            <p className="font-semibold">
              Pet schedule management, reminders, behavior <br /> tracking and
              analytics
            </p>
          </div>
          <div className="relative z-40">
            <img
              className="md:w-[400px] w-full md:ms-20 mt-24"
              src={dog1}
              alt=""
            />
            <div>
              <img
                className="absolute w-[600px] left-5  -z-30 bottom-7"
                src={dog1g}
                alt=""
              />
            </div>
            <div className="absolute right-10 bottom-10">
              <button className="btn-white text-yellow-400"> Join Now </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 text-white bg-[#DB6D84] rounded-2xl">
          <div className="m-10">
            <h2 className="text-2xl font-bold">Vet Talk</h2>
            <p className="font-semibold">
              Unlock Expertise Through Engaging Videos: Empower Yourself with
              Invaluable Dog Care Insights
            </p>
          </div>
          <div className="relative z-40">
            <img
              className="md:w-[400px] h-[387px] w-full rounded-lg mt-24"
              src={dog2}
              alt=""
            />
            <div>
              <img
                className="absolute w-[300px] left-5  -z-30 bottom-32"
                src={dog2g}
                alt=""
              />
            </div>
            <div className="absolute right-10 bottom-10">
              <button className="btn-white text-[#DB6D84]"> Join Now </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-7 my-3">
        <div className=" text-white bg-[#55ABA3] rounded-2xl">
          <div className="p-9">
            <h2 className="text-2xl font-bold">Vet Chat</h2>
            <p className="font-semibold">
              Connect with Professional Vets for Personalized Dog Care Guidance
            </p>
          </div>
          <div className="relative z-40">
            <img
              className="md:w-[440px] h-[380px] w-full rounded-lg ms-auto me-48"
              src={dog3}
              alt=""
            />
            <div>
              <img
                className="absolute w-[680px] md:right-12  -z-30 bottom-1"
                src={dog3g}
                alt=""
              />
            </div>
            <div className="absolute left-10 bottom-10">
              <Link to="/vatCheat/cheat" className="btn-white text-[#55ABA3]">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
