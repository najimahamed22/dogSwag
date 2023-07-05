import { useEffect, useState } from "react";

const useDoctor = () => {
  const [doc, setDoc] = useState([]);

  useEffect(() => {
    fetch("../../../public/doctor.json")
      .then((res) => res.json())
      .then((data) => setDoc(data))
      .catch((error) => console.error(error));
  }, []);

  return doc;
};

export default useDoctor;
