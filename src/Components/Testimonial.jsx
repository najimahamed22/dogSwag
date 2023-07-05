import av1 from "../assets/Avatar.png";
import av2 from "../assets/Avatar1.png";
import av3 from "../assets/Avatar2.png";

const Testimonial = () => {
  return (
    <div className="w-full my-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold my-3">
          Don’t just take our word for it
        </h1>
        <p>Here’s is what our customers have to say about our services</p>
      </div>
      <div className="md:flex justify-between gap-6 m-10">
        <div className="shadow-md rounded-md md:w-1/3 p-4 bg-base-100">
          <div className="flex gap-4 items-center">
            <img src={av1} alt="" className="w-12 h-12 rounded-full" />
            <h4 className="font-bold text-2xl">Rylie Gibbs</h4>
          </div>
          <hr className="my-2" />
          <p className="my-4">
            I can not imagine life without DogSwag. It has transformed the way I
            manage my dog is schedule. From vet appointments to playdates, I
            never miss a beat. It is a game-changer for any dog owner!
          </p>
        </div>
        <div className="shadow-md rounded-md md:w-1/3 p-4 bg-base-100">
          <div className="flex gap-4 items-center">
            <img src={av2} alt="" className="w-12 h-12 rounded-full" />
            <h4 className="font-bold text-2xl">Sarah Kim</h4>
          </div>
          <hr className="my-2" />
          <p className="my-4">
            As a busy professional, I needed a reliable solution to keep track
            of my dog is vaccinations. DogSwag has been a lifesaver! The
            reminder feature ensures my dog stays up to date with immunizations.
            Highly recommended!
          </p>
        </div>
        <div className="shadow-md rounded-md md:w-1/3 p-4 bg-base-100">
          <div className="flex gap-4 items-center">
            <img src={av3} alt="" className="w-12 h-12 rounded-full" />
            <h4 className="font-bold text-2xl">Emily S.</h4>
          </div>
          <hr className="my-2" />
          <p className="my-4">
            DogSwag has made feeding time a breeze. I can set up customized
            feeding schedules and receive reminders, ensuring my dog is meals
            are on time. It has simplified my daily routine and brought order to
            our lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
