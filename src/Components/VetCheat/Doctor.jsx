import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Doctor = () => {
  const [doc, setDoc] = useState([]);

  useEffect(() => {
    fetch("../../../public/doctor.json")
      .then((res) => res.json())
      .then((data) => setDoc(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="mt-20 mx-8">
      <div className="flex flex-col md:flex-row gap-4">
        <button className="bg-[#0000000D] text-opacity-40 text-black px-2 py-2 text-center font-medium rounded-md">
          Active veterinarian
        </button>
        <button className="text-opacity-40 text-black px-2 py-2 text-center font-medium rounded-md">
          Previous chat
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 gap-5">
        {doc.map((doctor) => (
          <Link to={`${doctor._id}`} key={doctor._id}>
            <div className="bg-slate-100 rounded-md shadow-md p-4">
              <img
                className="mx-auto my-2 object-cover"
                src={doctor.dr_image}
                alt={doctor.dr_name}
              />
              <div className="my-4">
                <h2 className="font-bold text-xl">{doctor.dr_name}</h2>
                <p>Hospital/Clinic:</p>
                <p className="font-semibold text-lg">{doctor.hospital}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
