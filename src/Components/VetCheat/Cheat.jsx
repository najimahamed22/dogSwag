import { useState } from "react";
import { Link } from "react-router-dom";
import Doctor from "./Doctor";

const Cheat = () => {
  const [showHi, setShowHi] = useState(false);
  const [hideButtons, setHideButtons] = useState(false);

  const handleClick = () => {
    setShowHi(true);
    setHideButtons(true);
  };

  return (
    <div className="w-full">
      <div className="p-3 border-b-2 font-bold fixed w-full bg-white border-slate-200 z-10">
        Vet Chat
      </div>
      <div>
        {!hideButtons && (
          <div className="mx-8 p-4 shadow-md rounded-xl bg-slate-100 bg-opacity-40 mt-20 mb-8">
            <div>
              <h2 className="font-semibold text-3xl pb-5">Dos:</h2>
              <li className="text-black text-opacity-50">
                Do provide accurate and detailed information about your pet's
                symptoms, behavior, and medical history when seeking advice from
                the veterinarian.
              </li>
              <li className="text-black text-opacity-50">
                Do ask specific questions to get the most relevant information
                and guidance from the veterinarian.
              </li>
              <li className="text-black text-opacity-50">
                Do provide updates to the veterinarian if there are any changes
                in your pet's condition or if the initial advice does not show
                improvement.
              </li>
              <li className="text-black text-opacity-50">
                Do ask for clarification if you don't understand something the
                veterinarian has recommended or explained.
              </li>
              <li className="text-black text-opacity-50">
                Do respect the veterinarian's expertise and follow their advice
                accordingly.
              </li>
              <li className="text-black text-opacity-50">
                Do keep the conversation polite and professional, as you would
                with any healthcare professional.
              </li>
              <li className="text-black text-opacity-50">
                Do use the chat service for non-emergency situations and general
                queries. In emergencies or urgent cases, contact a local
                veterinarian or animal hospital.
              </li>
            </div>
            <div>
              <h2 className="font-semibold text-3xl py-5">Don'ts:</h2>
              <li className="text-black text-opacity-50">
                Don't use the chat service as a substitute for a physical
                examination by a veterinarian when necessary. Some conditions
                may require hands-on assessment and diagnostic tests.
              </li>
              <li className="text-black text-opacity-50">
                Don't expect an immediate response at all times. Veterinarians
                may have other appointments or may need time to research and
                provide accurate information.
              </li>
              <li className="text-black text-opacity-50">
                Don't provide false or misleading information about your pet's
                condition, as it can lead to inaccurate advice and potential
                harm to your pet.
              </li>
              <li className="text-black text-opacity-50">
                Don't rely solely on the chat service for serious or
                life-threatening conditions. Seek immediate veterinary care in
                such cases.
              </li>
              <li className="text-black text-opacity-50">
                Don't share personal or sensitive information unrelated to your
                pet's health with the veterinarian.
              </li>
              <li className="text-black text-opacity-50">
                Don't use the chat service for obtaining prescriptions or
                medication without proper examination and authorization from a
                licensed veterinarian.
              </li>
            </div>
            <div className="flex gap-7 my-4 justify-center">
              <button className="btn-yellow text-xl" onClick={handleClick}>
                Agree
              </button>
              <Link
                to="/"
                className="text-xl px-6 py-2 font-medium bg-[#2F80E5] text-white rounded-2xl focus:outline-none">
                Cancel
              </Link>
            </div>
          </div>
        )}
        {showHi && <Doctor></Doctor>}
      </div>
    </div>
  );
};

export default Cheat;
