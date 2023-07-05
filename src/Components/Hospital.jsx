import hos from "../assets/hospital.png";
import hos2 from "../assets/hospital2.png";

const Hospital = () => {
  return (
    <div className="w-full my-6">
      <div className="md:flex gap-10 justify-center">
        <div className="shadow-md rounded-md md:w-1/3 p-4 bg-[#D0D0D0] flex flex-col justify-between">
          <h4 className="font-bold my-4 text-[#74747C] text-2xl">
            We are supported by Bangaluru Pet Hospital
          </h4>

          <img src={hos} alt="" className="w-full h-auto object-contain" />
        </div>
        <div className="shadow-md rounded-md md:w-1/3 p-4 bg-[#D0D0D0] flex flex-col justify-between">
          <img src={hos2} alt="" className="w-full h-auto object-contain" />
          <h4 className="font-semibold text-[#74747C] my-4">
            Our Director, Sunder Raman, Dr. Riya and Dr. Deviyane in discussion
            to create an exciting educational series for pet parents in
            partnership with Bangalore Pet Hospital.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
