import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Hospital from "../Components/Hospital";
import NavBar from "../Components/NavBar";
import Price from "../Components/Price";
import Services from "../Components/Services";
import Testimonial from "../Components/Testimonial";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Services />
      <Testimonial />
      <Hospital />
      <Price />
      <Footer />
    </div>
  );
};

export default Main;
