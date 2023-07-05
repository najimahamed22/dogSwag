import { Link, useParams } from "react-router-dom";
import useDoctor from "../Hooks/useDoctor";
import { AiOutlineRight } from "react-icons/ai";
import world from "../../assets/icon/world.png";
import hospital from "../../assets/icon/hospital.png";
import star from "../../assets/icon/star.png";
import time from "../../assets/icon/time.png";
import avatar from "../../assets/icon/man.png";
import book from "../../assets/icon/book.png";
import dogy from "../../assets/icon/dogy.png";
import { useState } from "react";

const DoctorDetails = () => {
  const doc = useDoctor();
  const doctorId = useParams();
  const [selectedReason, setSelectedReason] = useState("");
  const [note, setNote] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  console.log(doc);
  console.log(doctorId);

  const singleDoc = doc.find((doctor) => doctor._id === doctorId.id);

  if (!singleDoc) {
    return <div>No doctor found for the given ID.</div>;
  }

  const handleReasonChange = (event) => {
    setSelectedReason(event.target.value);
    checkButtonState(event.target.value, note);
  };

  const handleNoteChange = (event) => {
    const value = event.target.value;
    setNote(value);
    checkButtonState(selectedReason, value);
  };

  const checkButtonState = (reason, note) => {
    if (reason && note.length <= 280 && note.length >= 1) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };

  return (
    <div className="w-full">
      <div className="p-3 border-b-2 font-bold fixed w-full bg-white border-slate-200 z-10">
        Vet Chat
      </div>
      <div className="mx-8 p-4 mt-14 mb-8">
        <div className="flex text-opacity-40 text-black font-medium items-center gap-4">
          <button className="">Active veterinarian</button>
          <AiOutlineRight />
          <button className=" ">Previous chat</button>
        </div>
        <div className="w-full flex flex-col md:flex-row my-9 border-slate-200 rounded-md p-4 border-2 shadow-md justify-between">
          <img
            className="rounded-full h-24 mb-4 md:mb-0 md:mr-6"
            src={singleDoc.dr_image}
            alt={singleDoc.dr_name}
          />
          <div className="flex-1">
            <h2 className="font-bold text-xl">{singleDoc.dr_name}</h2>
            <div className="flex gap-3 items-center my-4">
              <img src={world} className="h-full" alt="" />
              <p>{singleDoc.hospital}</p>
            </div>
          </div>
          <button
            className="btn-yellow h-14 my-auto"
            onClick={() => window.my_modal_3.showModal()}>
            Start Cheat
          </button>
        </div>
        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box w-full max-w-2xl">
            <div className="border-b-2 border-gray-300 flex justify-between pb-2">
              <h3 className="font-bold text-lg">Dog details</h3>
              <button className="btn btn-sm btn-circle btn-ghost">✕</button>
            </div>

            <div className="grid mt-5 gap-6 grid-cols-1 md:grid-cols-3">
              <div className="col-span-1">
                <img
                  className="bg-[#478D8780] mx-auto my-2 rounded-full"
                  src={dogy}
                  alt=""
                />
                <h2 className="font-bold text-center">Milo</h2>
                <div className="my-4 flex gap-2">
                  <h4 className="text-[#74747C]">Age:</h4>
                  <span className="font-bold text-black">4</span>
                </div>
                <div className="my-4 flex gap-2">
                  <h4 className="text-[#74747C]">Weight:</h4>
                  <span className="font-bold text-black">10kg</span>
                </div>
                <div className="my-4 flex gap-2">
                  <h4 className="text-[#74747C]">Breed:</h4>
                  <span className="font-bold text-black">German shepherd</span>
                </div>
                <button className="rounded-xl border-2 border-gray-300 px-4 text-center mx-auto">
                  Edit
                </button>
              </div>
              <div className="col-span-2">
                <div className="w-full">
                  <div className="form-control w-full max-w-xl">
                    <label className="label">
                      <h4 className="text-[#74747C] font-bold">
                        Select a Reason
                      </h4>
                    </label>
                    <select
                      className="select w-full select-bordered"
                      value={selectedReason}
                      onChange={handleReasonChange}>
                      <option value="">Pick one</option>
                      <option>Parvovirus</option>
                      <option>Canine Distemper</option>
                      <option>Lyme Disease</option>
                      <option>Kennel Cough</option>
                      <option>Rabies</option>
                      <option>Heartworm Disease</option>
                    </select>
                  </div>
                </div>
                <div className="my-7">
                  <label className="label">
                    <h4 className="text-[#74747C] font-bold">Add note</h4>
                  </label>
                  <textarea
                    className="textarea bottom-2 border-gray-300 w-full"
                    placeholder="0/280"
                    value={note}
                    onChange={handleNoteChange}></textarea>
                </div>
              </div>
            </div>
            <div className="md:flex sm:space-y-4 md:space-y-0 items-center gap-7 justify-end">
              <h2>You will be charged 1 chat credit</h2>
              <Link to={`${doctorId.id}`}>
                <button
                  className="btn-yellow"
                  disabled={disableButton}
                  type="submit">
                  Agree &amp; Continue{" "}
                </button>
              </Link>
            </div>
          </form>
        </dialog>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 my-10">
          <div className="col-span-1">
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
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="border-2 border-slate-200 p-2 rounded-t-md">
              <div className="flex  gap-5">
                <img className="h-full" src={avatar} alt="" />
                <h3 className="font-bold">Professional summary</h3>
              </div>
              <p className="my-5">{singleDoc.summary}</p>
            </div>
            <div className="border-2 border-t-0 border-slate-200 p-3 ">
              <div className="flex  gap-5">
                <img className="h-full" src={book} alt="" />
                <h3 className="font-bold">Education</h3>
              </div>
              <div className="text-start ps-5 my-5">
                <ul>
                  {singleDoc.education.map((item, index) => (
                    <li className="list-disc" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-2 border-t-0 border-slate-200 p-3 rounded-b-md">
              <div className="flex  gap-5">
                <img className="h-full" src={star} alt="" />
                <h3 className="font-bold">Experience</h3>
              </div>
              <div className="text-start ps-5 my-5">
                <ul>
                  {singleDoc.experience.map((item, index) => (
                    <li className="list-disc" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
