import { Link, useNavigate, useParams } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import useDoctor from "../Hooks/useDoctor";
import world from "../../assets/icon/world.png";
import hospital from "../../assets/icon/hospital.png";
import star from "../../assets/icon/star.png";
import time from "../../assets/icon/time.png";
import tablet from "../../assets/icon/tablet.png";
import sms from "../../assets/icon/smsdog.png";
import icon from "../../assets/icon/icon.png";
import icon1 from "../../assets/icon/icon2.png";
import icon2 from "../../assets/icon/icon3.png";
import sticker from "../../assets/icon/ballon.png";
import modaldog from "../../assets/icon/mdog.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useState, useEffect, useRef } from "react";
import { BiSolidDownload } from "react-icons/bi";

const DoctorCheat = () => {
  const doc = useDoctor();
  const doctorId = useParams();
  const ref = useRef();
  const option = {
    orientation: "landscape",
    unit: "in",
    format: [1, 1],
  };
  const [remainingTime, setRemainingTime] = useState(900); // 900 seconds = 15 minutes
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    if (remainingTime === 0) {
      navigate("/"); // Replace "/your-route" with the desired route
    }

    return () => {
      clearInterval(timer);
    };
  }, [remainingTime, navigate]);

  const singleDoc = doc.find((doctor) => doctor._id === doctorId.id);
  console.log(doc);
  if (!singleDoc) {
    return <div>No doctor found for the given ID.</div>;
  }
  const duration = 15; // Duration in minutes
  const progress = ((duration * 60 - remainingTime) / (duration * 60)) * 100;

  // Convert remainingTime to minutes and seconds
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="w-full">
      <div className="p-3 pe-16 border-b-2 fixed w-10/12 bg-white border-slate-200 z-10">
        <div className="flex  justify-between items-center">
          <div className="flex gap-5 justify-between items-center">
            <img
              className="w-10 rounded-full"
              src={singleDoc.dr_image}
              alt=""
            />
            <h3 className="font-bold">{singleDoc.dr_name}</h3>
          </div>

          <div className="flex gap-3 justify-center items-center">
            <img src={world} className="" alt="" />
            <h2> Bangalore, India</h2>
          </div>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mt-20 mb-10 mx-4">
        <div className="col-span-2 order-2 md:order-1 mt-4">
          <p className="text-center ps-28 text-sm text-[#74747C]">14:40</p>
          <div className="flex my-3 items-center gap-3">
            <img className="h-8 rounded-full" src={singleDoc.dr_image} alt="" />
            <p className="rounded-e-2xl rounded-t-2xl p-3 bg-[#0000001A]">
              Can you explain further so i can assist you better
            </p>
          </div>
          <p className="text-center ps-28 text-sm text-[#74747C]">14:40</p>
          <div className="my-3 flex justify-end">
            <img src={sms} className="w-56" alt="" />
          </div>
          <p className="text-end text-sm text-[#74747C]">14:40</p>
          <div className="text-end my-3 md:ms-72">
            <p className="ms-28 text-lg text-white rounded-s-2xl rounded-t-2xl p-2 bg-[#9747FF]">
              That is the issue she’s facing
            </p>
          </div>
          <p className="text-end text-sm mb-10 text-[#74747C]">14:40</p>
          <div className="fixed inset-x-72 bottom-5 right-[330px] ">
            <div className="relative ">
              <input
                type="text"
                placeholder="Write a message..."
                className="input border-2 rounded-3xl border-[#10101033] input-info w-full"
              />
              <div className="absolute right-2 bottom-3 flex gap-2">
                <img src={icon} className="h-6 cursor-pointer" alt="" />
                <img src={icon1} className="h-6 cursor-pointer" alt="" />
                <img src={icon2} className="h-6 cursor-pointer" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 order-1 md:order-2">
          <div>
            <div className="flex border-2 border-slate-200 p-2 rounded-t-md gap-5">
              <img className="h-full" src={hospital} alt="" />
              <div>
                <h4 className="text-opacity-60 text-black">
                  Hospital/Clinic:{" "}
                </h4>
                <h3 className=" text-sm font-semibold">{singleDoc.hospital}</h3>
              </div>
            </div>
            <div className="flex border-2 border-t-0 border-slate-200 p-3  gap-5">
              <img className="h-full" src={star} alt="" />
              <div>
                <h4 className="text-opacity-60 text-black">
                  Years of Experience:
                </h4>
                <h3 className=" text-sm font-semibold">
                  {singleDoc.years_of_experience} Years
                </h3>
              </div>
            </div>
            <div className="flex border-2 border-t-0 border-slate-200 p-3 rounded-b-md gap-5">
              <img className="h-full" src={time} alt="" />
              <div>
                <h4 className="text-opacity-60 text-black">Available time:</h4>
                <h3 className=" text-sm font-semibold">{singleDoc.time}</h3>
              </div>
            </div>
            <div className="my-5">
              <div
                onClick={() => window.my_modal_3.showModal()}
                className="flex bg-[#A5ED6ECC] justify-center items-center rounded-xl cursor-pointer gap-5 w-full py-4 mx-auto">
                <img className="h-9" src={tablet} alt="" />
                <p className="text-[#47821A] text-xl font-semibold ">
                  View Prescriptions
                </p>
              </div>
            </div>
            <div className="bg-slate-100 shadow-md py-4">
              <div className="relative  w-40 mx-auto">
                <CircularProgressbar
                  value={progress}
                  strokeWidth={12}
                  styles={buildStyles({
                    textSize: "8px",
                    pathColor: "#47AADA",
                    textColor: "#47821A",
                    trailColor: "#E4E4E4",
                  })}
                />
                <div className="absolute text-[#47AADA] text-center inset-0 flex items-center justify-center font-bold">
                  {formattedTime} <br />
                  Remaining
                </div>
              </div>
            </div>
            <div className="my-5">
              <button
                onClick={() => window.my_modal_5.showModal()}
                className=" bg-[#F33C3C] py-3 text-white font-bold rounded-3xl w-full text-center">
                End conversation
              </button>
            </div>
          </div>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <form
          method="dialog"
          className="modal-box w-full border-2 border-gray-300 max-w-sm">
          <div className="border-b-2 border-gray-300 flex justify-between pb-2">
            <h3 className="font-bold text-lg">Dog details</h3>
            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          </div>
          <div>
            <div className="flex justify-between">
              <h4 className="font-medium">Vormitting</h4>
              <h4 className="text-[#74747C]">Previous</h4>
            </div>
            <div ref={ref}>
              <div className="flex gap-4 my-4">
                <img className="h-9 my-auto" src={tablet} alt="" />
                <div className="space-y-1">
                  <p className="font-semibold text-sm">Drug</p>
                  <h3 className="font-semibold text-xl">
                    {singleDoc.prescriptions}
                  </h3>
                  <p className="text-sm text-[#74747C]">
                    <span className="font-bold  text-black">3</span> To be taken
                    |<span className="font-bold text-black"> 2 </span>Times
                    daily | For
                    <span className="font-bold text-black"> 5 </span> Days
                  </p>
                  <p className="font-semibold text-sm">Before meal</p>
                </div>
              </div>
              <hr className="border-t-2 border-solid font-bold" />
              <div className="flex gap-4 my-4">
                <img className="h-9 my-auto" src={tablet} alt="" />
                <div className="space-y-1">
                  <p className="font-semibold text-sm">Drug</p>
                  <h3 className="font-semibold text-xl">
                    {singleDoc.prescriptions}
                  </h3>
                  <p className="text-sm text-[#74747C]">
                    <span className="font-bold  text-black">3</span> To be taken
                    |<span className="font-bold text-black"> 2 </span>Times
                    daily | For
                    <span className="font-bold text-black"> 5 </span> Days
                  </p>
                  <p className="font-semibold text-sm">Before meal</p>
                </div>
              </div>
              <hr className="border-t-2 border-solid font-bold" />
              <div className="flex gap-4 my-4">
                <img className="h-9 my-auto" src={tablet} alt="" />
                <div className="space-y-1">
                  <p className="font-semibold text-sm">Drug</p>
                  <h3 className="font-semibold text-xl">
                    {singleDoc.prescriptions}
                  </h3>
                  <p className="text-sm text-[#74747C]">
                    <span className="font-bold  text-black">3</span> To be taken
                    |<span className="font-bold text-black"> 2 </span>Times
                    daily | For
                    <span className="font-bold text-black"> 5 </span> Days
                  </p>
                  <p className="font-semibold text-sm">Before meal</p>
                </div>
              </div>
            </div>
            <hr className="border-t-2 border-solid font-bold" />
            <div className="flex mt-3  justify-center items-center">
              <ReactToPdf
                targetRef={ref}
                filename="code-example.pdf"
                option={option}
                scale={0.6}>
                {({ toPdf }) => (
                  <div
                    onClick={toPdf}
                    className="bg-slate-100 rounded-xl p-2 cursor-pointer  items-center flex gap-3">
                    <BiSolidDownload className="h-5  text-lg" />
                    <button className="text-center ">PDF</button>
                  </div>
                )}
              </ReactToPdf>
            </div>
          </div>
        </form>
      </dialog>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <div className="border-b-2 mt-4 border-[#0000001A]">
            <button className="btn btn-sm  btn-circle btn-ghost absolute right-5 top-2">
              ✕
            </button>
          </div>

          <div className="relative mt-11 mb-5">
            <div className="flex pt-10 justify-center">
              <img className="h-40" src={modaldog} alt="" />
            </div>
            <img
              className="absolute h-24 -top-10 left-36"
              src={sticker}
              alt=""
            />
          </div>
          <p className="text-center mx-6 font-medium">
            Your conversation was free. Hope your doggy recovers soon.
          </p>
          <div className="mt-5 text-center">
            <Link to="/" className="btn-yellow">
              Done
            </Link>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default DoctorCheat;
