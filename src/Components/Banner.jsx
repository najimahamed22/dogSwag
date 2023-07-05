import banner from "../assets/banner.png";
import plm from "../assets/problem.png";

const Banner = () => {
  return (
    <div className="w-full">
      <div className="md:mx-16">
        <h1
          className="md:text-[78px] hidden md:block sm:text-[70px] md:text-justify uppercase font-bold"
          style={{ lineHeight: "105%" }}>
          Simplify and Optimize Dog Care
        </h1>
        <h1 className="text-4xl md:hidden md:text-justify uppercase font-bold">
          Simplify and Optimize Dog Care
        </h1>
      </div>
      <div className="md:relative md:mx-72 -top-16">
        <span className="text-gray-500 text-xl">
          Expert Guidance, Informative Videos, and Advanced Organization for
          Effortless Pet Care
        </span>
      </div>
      <div className="md:relative -top-28 md:me-16 md:text-end">
        <button className="btn-yellow text-2xl">Get Started</button>
      </div>
      <div className="relative top-8 md:flex hidden justify-between mx-6">
        <div className="shadow-md rounded-md p-4 bg-base-100 w-80">
          <h4 className="uppercase">SO EASY</h4>
          <hr />
          <p className="my-4">
            Create individual profiles for your dogs and keep track of all their
            needs
          </p>
        </div>
        <div className="shadow-md rounded-md p-4 bg-base-100 w-80">
          <h4 className="uppercase">Never forget</h4>
          <hr />
          <p className="my-4">
            Organize your dog’s daily routine and never miss anything important
          </p>
        </div>
      </div>
      <div className="md:-mt-72">
        <img className="mx-auto h-[450px]" src={banner} alt="" />
      </div>
      <div className="px-4">
        <div
          className="object-cover bg-no-repeat bg-center rounded-3xl w-full h-[580px] md:relative bottom-20"
          style={{
            backgroundImage: `url(${plm})`,
            zIndex: 9999,
          }}>
          <div className="grid mx-8 my-10 md:grid-cols-3 grid-cols-1 gap-3 justify-center items-center h-full">
            <div className="shadow-md rounded-md md:p-4 p-2 h-32 w-72 bg-base-100">
              <h4 className="font-bold text-2xl">Your Problem</h4>
              <hr />
              <p className="my-4">Difficulty Keeping Track of Vaccinations</p>
            </div>
            <div className="shadow-md rounded-md hidden md:block md:p-4 p-2 h-32 w-72 bg-base-100">
              <h4 className="font-bold text-2xl">Your Problem</h4>
              <hr />
              <p className="my-4">Missed Appointments and Important Dates</p>
            </div>
            <div className="shadow-md rounded-md hidden md:block md:p-4 p-2 w-72 h-32 bg-base-100">
              <h4 className="font-bold text-2xl">Your Problem</h4>
              <hr />
              <p className="my-4">Chaotic Feeding Schedule</p>
            </div>
            <div className="shadow-md rounded-md  p-4 w-72 bg-base-100">
              <h4 className="font-bold text-2xl">Our Solution</h4>
              <hr />
              <p className="my-4">
                DogSwag allows you to input vaccination dates and sends you
                reminders for upcoming vaccinations, ensuring your dog is
                immunization stays up to date
              </p>
            </div>
            <div className="shadow-md rounded-md hidden md:block p-4 w-72 bg-base-100">
              <h4 className="font-bold text-2xl">Our Solution</h4>
              <hr />
              <p className="my-4">
                Stay organized with our calendar feature. Easily schedule and
                set reminders for vet appointments, grooming sessions, training
                classes, and important dates to ensure you never miss a
                commitment
              </p>
            </div>
            <div className="shadow-md rounded-md hidden md:block p-4 w-72 bg-base-100">
              <h4 className="font-bold text-2xl">Our Solution</h4>
              <hr />
              <p className="my-4">
                With our Dog Organizer, you can create and manage a consistent
                feeding schedule, set meal reminders, and track dietary
                preferences, ensuring your dog receives proper nutrition at the
                right times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
