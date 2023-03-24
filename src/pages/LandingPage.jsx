import Navbar from "../components/Navbar";
import Blogs from "../components/sections/Blogs";
import ContactUs from "../components/sections/ContactUs";
import Footer from "../components/sections/Footer";

import Header from "../components/sections/Header";
import Property from "../components/sections/Property";
import WhyChoose from "../components/sections/WhyChoose";

function LandingPage() {
  return (
    <div>
      <Navbar />

      <Header />
      <WhyChoose />
      <Property />
      <Blogs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default LandingPage;
