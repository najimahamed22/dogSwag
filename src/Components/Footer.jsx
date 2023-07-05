import logo from "../assets/dlogo.png.png";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="md:mt-32">
      <div className="container mx-auto md:py-8 pt-80 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
          <div className="w-full sm:col-span-1">
            <div>
              <img src={logo} className="h-44" alt="" />
            </div>
          </div>
          <div className="w-full sm:col-span-1">
            <div className="mb-7">
              <h2 className="title-font font-medium mb-3">Address</h2>
              <h4 className="font-semibold">
                DogSwag India Limited Bangalore, India
              </h4>
            </div>
            <div>
              <h5>Email</h5>
              <p className="font-bold">Founders@dogswag.club</p>
            </div>
          </div>
          <div className="w-full sm:col-span-1">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Quick Links
            </h2>
            <nav className="list-none space-y-5 font-bold mt-7">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About us</Link>
              </li>
              <li className="text-[#C30000]">
                <Link to="/">Report a Bug</Link>
              </li>
            </nav>
          </div>
          <div className="w-full sm:col-span-1">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Legal
            </h2>
            <h4 className="font-bold">Privacy policy</h4>
          </div>
          <div className="w-full sm:col-span-2">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Join Our Newsletter
            </h2>
            <h4 className="font-bold">
              Woof, Woof! Subscribe to our newsletter and stay up to date with
              the latest blogs, contests, and giveaways.
            </h4>
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                />
                <button className="btn-yellow">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
          <p className="text-center sm:text-left mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} DogSwag™. All Rights Reserved.
          </p>
          <div className="flex justify-center sm:justify-end gap-4">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
