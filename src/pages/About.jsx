import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Fade";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";

function About() {
  const { sectionId } = useParams();

  useEffect(() => {
    if (sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [sectionId]);

  const awards = [
    {
      id: 1,
      title: "Webflow Awards Team",
      position: "Runner Up - Webflow Expert Design",
      type: "Product Design",
      year: "2022",
    },
    {
      id: 2,
      title: "Webflow Awards Team",
      position: "Runner Up - Webflow Expert Design",
      type: "Development",
      year: "2021",
    },
    {
      id: 3,
      title: "Webflow Awards Team",
      position: "Runner Up - Webflow Expert Design",
      type: "Branding",
      year: "2018",
    },
    {
      id: 4,
      title: "Webflow Awards Team",
      position: "Runner Up - Webflow Expert Design",
      type: "Product Design",
      year: "2014",
    },
  ];

  const experience = [
    {
      id: 1,
      title: "Front-End Developer",
      industry: "Tokopedia",
      year: 2023,
    },
    {
      id: 2,
      title: "Front-End Developer",
      industry: "Shopee",
      year: 2022,
    },
    {
      id: 3,
      title: "Front-End Developer",
      industry: "Lazada",
      year: 2021,
    },
  ];

  const [navbarBackground, setNavbarBackground] = useState();
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setNavbarBackground("shadow-lg"); // Ganti warna sesuai yang diinginkan saat discroll ke bawah
    } else {
      setNavbarBackground(); // Kembalikan ke warna awal jika scroll ke atas
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-smooth">
      {/* Navbar */}
      <div className={`sticky top-0 z-50`}>
        {/* Navbar */}
        <div className={`flex justify-between items-center px-4 md:px-6 xl:px-16 py-5 ${navbarBackground} bg-[#e9e9e9] transition-all`}>
          {/* logo */}
          <div className="flex items-center gap-2">
            <img src="/images/quick-tix-logo.png" alt="" className="w-9" />
            <h1 className="text-2xl font-bold">ADAM</h1>
          </div>
          {/* logo End */}

          {/* Menu Desktop */}
          <div className="hidden lg:flex gap-8">
            <Link
              to={"/"}
              className="relative before:contents-[''] before:absolute before:bottom-0 before:w-0 hover:before:w-full before:h-[1px] before:bg-black before:transition-all before:duration-300 hover:text-secondary transition-all duration-300 font-semibold"
            >
              Home
            </Link>

            <Link
              to={"/about"}
              className="relative before:contents-[''] before:absolute before:bottom-0 before:w-0 hover:before:w-full before:h-[1px] before:bg-black before:transition-all before:duration-300 hover:text-secondary transition-all duration-300 font-semibold"
            >
              About
            </Link>

            <a
              href="#contact"
              className="relative before:contents-[''] before:absolute before:bottom-0 before:w-0 hover:before:w-full before:h-[1px] before:bg-black before:transition-all before:duration-300 hover:text-secondary transition-all duration-300 font-semibold"
            >
              Contact
            </a>
          </div>
          {/* Menu Desktop End */}

          <div className="flex gap-3">
            {/* Hamburger Menu */}
            <button
              type="button"
              onClick={() => {
                setDisplayMenu(!displayMenu);
              }}
              className="flex lg:hidden flex-col justify-between bg-black w-11 h-11 p-3 py-4"
            >
              <span className="bg-white h-[2px] w-full rounded-full" />
              <span className="bg-white h-[2px] w-full rounded-full" />
              <span className="bg-white h-[2px] w-full rounded-full" />
            </button>
            {/* Hamburger Menu End */}

            {/* Let's Talk Button */}
            <button className="hidden md:flex relative overflow-hidden group before:contents-[''] before:absolute before:-left-3 before:top-0 before:bg-black before:-skew-x-[17deg] before:w-0 before:h-full hover:before:w-[115%]  before:transition-all before:duration-300 border border-black px-6 py-2 font-semibold">
              <h1 className="z-10 group-hover:text-secondary transition-all duration-300">Let's Talk</h1>
            </button>
            {/* Let's Talk Button End */}
          </div>
        </div>
        {/* Navbar End */}

        {/* Menu */}
        <div className={`${displayMenu ? "" : "-translate-y-36"} lg:hidden absolute left-0 right-0 -z-10 bg-white flex flex-col items-center gap-5 py-3 transition-all duration-500`}>
          <Link
            to={"/"}
            className="relative before:contents-[''] before:absolute before:bottom-0 before:w-0 hover:before:w-full before:h-[1px] before:bg-black before:transition-all before:duration-300 hover:text-secondary transition-all duration-300 font-semibold"
          >
            Home
          </Link>

          <Link
            to={"/about"}
            className="relative before:contents-[''] before:absolute before:bottom-0 before:w-0 hover:before:w-full before:h-[1px] before:bg-black before:transition-all before:duration-300 hover:text-secondary transition-all duration-300 font-semibold"
          >
            About
          </Link>

          <Link
            to="/about/#contact"
            className="relative before:contents-[''] before:absolute before:bottom-0 before:w-0 hover:before:w-full before:h-[1px] before:bg-black before:transition-all before:duration-300 hover:text-secondary transition-all duration-300 font-semibold"
          >
            Contact
          </Link>
        </div>
        {/* Menu End */}
      </div>
      {/* Navbar End */}

      {/* Content */}
      <div className={`px-4 pb-20 md:px-9 lg:px-14 mt-14 flex flex-col gap-32 xl:gap-60 ${displayMenu && "blur-sm"} transition-all duration-300`}>
        {/* Section 1 */}
        <section className="flex flex-col gap-10">
          <h1 className="lg:px-28 xl:px-80 text-4xl md:text-[54px] text-center font-bold leading-snug md:leading-tight">You're launching a business and we can help you make it look pretty.</h1>

          <div className="flex flex-col md:flex-row flex-wrap items-center md:justify-center gap-3">
            <h1 className="uppercase text-2xl font-bold">Design</h1>
            <span className="bg-secondary w-5 h-5" />
            <h1 className="uppercase text-2xl font-bold">Development</h1>
            <span className="bg-secondary w-5 h-5" />
            <h1 className="uppercase text-2xl font-bold">Webflow</h1>
          </div>

          <div className="overflow-hidden group xl:max-w-6xl xl:aspect-video self-center">
            <img src="https://source.unsplash.com/1600x900/?art" alt="" className="saturate-0 h-full group-hover:scale-125 group-hover:filter-none transition-all duration-500" />
          </div>

          <div className="flex flex-col md:flex-row gap-8 xl:px-12 text-lg xl:text-xl xl:font-medium">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row border-2 border-black xl:mx-12 mt-10 lg:mt-20">
            <div className="flex flex-col justify-center items-center gap-4 lg:gap-1 lg:w-full py-7 lg:py-5 ">
              <h1 className="text-[56px] font-bold">7+</h1>
              <h1 className="font-bold uppercase">Years of Experience</h1>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 lg:gap-1 lg:w-full py-7 lg:py-5 bg-black text-white">
              <h1 className="text-[56px] font-bold">50+</h1>
              <h1 className="font-bold uppercase">Project Completed</h1>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 lg:gap-1 lg:w-full py-7 lg:py-5">
              <h1 className="text-[56px] font-bold">30+</h1>
              <h1 className="font-bold uppercase">Happy Clients</h1>
            </div>
          </div>
        </section>
        {/* Section 1 End */}

        {/* Section 2 */}
        <section className="flex flex-col gap-10 md:px-16 lg:px-36 xl:px-64">
          <div className="flex flex-col gap-8 text-lg xl:text-xl xl:font-medium">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div className="overflow-hidden group">
            <img src="https://source.unsplash.com/1600x901/?art" alt="" className="saturate-0 h-full group-hover:scale-125 group-hover:filter-none transition-all duration-500" />
          </div>

          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius nemo distinctio voluptatem ex excepturi non neque repudiandae pariatur porro accusantium dolores maxime, natus, quaerat expedita. Animi, aspernatur accusantium.
            Error nemo tempore quasi at amet molestias autem maxime! Veritatis id iste sapiente numquam animi. Amet doloribus quaerat earum voluptatibus assumenda!
          </p>
        </section>
        {/* Section 2 End */}

        {/* Awards Section 3 */}
        <section className="xl:px-28">
          <Fade top>
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-4xl md:text-5xl font-bold">Awards</h1>
              <h1 className="text-lg font-bold text-center uppercase leading-relaxed">Regonitions & Accoimplishments</h1>
            </div>
          </Fade>

          <Fade left cascade>
            <div className="flex flex-col gap-6 mt-10 xl:mt-16">
              {awards.map((item) => {
                return (
                  <button className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 border-2 border-black px-2 lg:px-7 py-6 group hover:bg-black transition-all duration-300">
                    {/* Col 1 */}
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
                      <div className="flex justify-center items-center bg-secondary w-12 h-12">
                        <h1 className="text-lg font-bold">{item.id}</h1>
                      </div>

                      <div className="flex flex-col justify-center items-center lg:items-start gap-3 group-hover:text-white ">
                        <h1 className="text-2xl font-bold text-center transition-all duration-300">{item.title}</h1>
                        <h1 className="text-lg font-medium text-center transition-all duration-300">{item.position}</h1>
                      </div>
                    </div>
                    {/* Col 1 End */}

                    {/* Col 2 */}
                    <div className="flex flex-col md:flex-row gap-2 group-hover:text-white">
                      <h1 className="font-semibold text-center uppercase transition-all duration-300">{item.type}</h1>
                      <h1 className="font-semibold text-center transition-all duration-300">{item.year}</h1>
                    </div>
                    {/* Col 2 End */}
                  </button>
                );
              })}
            </div>
          </Fade>
        </section>
        {/* Awards Section 3 End */}

        {/* Experience */}
        <section className="xl:px-28">
          <Fade top>
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-4xl md:text-5xl font-bold">Experience</h1>
              <h1 className="text-lg font-bold text-center uppercase leading-relaxed">Regonitions & Accoimplishments</h1>
            </div>
          </Fade>

          <Fade left cascade>
            <div className="flex flex-col gap-6 mt-10 xl:mt-16">
              {experience.map((item) => {
                return (
                  <button className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 border-2 border-black px-2 lg:px-7 py-6 group hover:bg-black transition-all duration-300">
                    {/* Col 1 */}
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
                      <div className="flex justify-center items-center bg-secondary w-12 h-12">
                        <h1 className="text-lg font-bold">{item.id}</h1>
                      </div>

                      <div className="flex flex-col justify-center items-center lg:items-start gap-3 group-hover:text-white ">
                        <h1 className="text-2xl font-bold text-center transition-all duration-300">{item.title}</h1>
                        <h1 className="text-lg font-medium text-center transition-all duration-300">{item.industry}</h1>
                      </div>
                    </div>
                    {/* Col 1 End */}

                    {/* Col 2 */}
                    <div className="flex flex-col md:flex-row gap-2 group-hover:text-white">
                      <h1 className="font-semibold text-center transition-all duration-300">{item.year}</h1>
                    </div>
                    {/* Col 2 End */}
                  </button>
                );
              })}
            </div>
          </Fade>
        </section>
        {/* Experience End */}

        {/* Service */}
        <section className=" xl:px-28 ">
          <Fade top>
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-4xl md:text-5xl font-bold">Services</h1>
              <h1 className="text-lg font-bold text-center uppercase leading-relaxed">Regonitions & Accoimplishments</h1>
            </div>
          </Fade>

          <Fade bottom cascade>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 xl:mt-16">
              <button className="flex flex-col gap-5 border-2 border-black px-6 py-8 group hover:bg-black transition-all duration-300">
                <h1 className="text-3xl font-bold group-hover:text-secondary transition-all duration-300">Web Design</h1>
                <p className="text-lg font-medium leading-relaxed group-hover:text-white transition-all duration-300 ">Every single project is a challenge that we accept eagerly. Let's implement innovative ideas together!</p>
              </button>

              <button className="flex flex-col gap-5 border-2 border-black px-6 py-8 group hover:bg-black transition-all duration-300">
                <h1 className="text-3xl font-bold group-hover:text-secondary transition-all duration-300">Product Design</h1>
                <p className="text-lg font-medium leading-relaxed group-hover:text-white transition-all duration-300">Every single project is a challenge that we accept eagerly. Let's implement innovative ideas together!</p>
              </button>

              <button className="flex flex-col gap-5 border-2 border-black px-6 py-8 group hover:bg-black transition-all duration-300">
                <h1 className="text-3xl font-bold group-hover:text-secondary transition-all duration-300">UI/UX Design</h1>
                <p className="text-lg font-medium leading-relaxed group-hover:text-white transition-all duration-300">Every single project is a challenge that we accept eagerly. Let's implement innovative ideas together!</p>
              </button>

              <button className="flex flex-col gap-5 border-2 border-black px-6 py-8 group hover:bg-black transition-all duration-300">
                <h1 className="text-3xl font-bold group-hover:text-secondary transition-all duration-300">Art Direction</h1>
                <p className="text-lg font-medium leading-relaxed group-hover:text-white transition-all duration-300">Every single project is a challenge that we accept eagerly. Let's implement innovative ideas together!</p>
              </button>
            </div>
          </Fade>
        </section>
        {/* Service End */}
      </div>
      {/* Content End */}

      {/* Contact Me */}
      <section id="contact" className="py-20 bg-white">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl md:text-5xl text-center font-bold">Get in touch today</h1>
          <h1 className="text-lg font-medium text-center leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
        </div>

        <form className="mt-16 flex flex-col gap-5 px-5 lg:px-56 xl:px-72">
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-bold">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name=""
              id="name"
              placeholder=""
              className="bg-transparent px-4 py-3 border-2 border-black placeholder:text-black placeholder:font-medium placeholder:uppercase w-full focus:placeholder:-translate-y-10 placeholder:transition-all placeholder:duration-300 focus:border-secondary transition-all duration-300 focus:invalid:border-red-600 outline-none"
            />
          </div>
          {/* Name Input End*/}

          {/* Subject Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="font-bold">
              Subject<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name=""
              id="subject"
              placeholder=""
              className="bg-transparent px-4 py-3 border-2 border-black placeholder:text-black placeholder:font-medium placeholder:uppercase w-full focus:placeholder:-translate-y-10 placeholder:transition-all placeholder:duration-300 focus:border-secondary transition-all duration-300 focus:invalid:border-red-600 outline-none"
            />
          </div>
          {/* Subject Input End*/}

          {/* Work Mail Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold">
              Work Mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name=""
              id="email"
              placeholder=""
              className="bg-transparent px-4 py-3 border-2 border-black placeholder:text-black placeholder:font-medium placeholder:uppercase w-full focus:placeholder:-translate-y-10 placeholder:transition-all placeholder:duration-300 focus:border-secondary transition-all duration-300 focus:invalid:border-red-600 outline-none"
            />
          </div>
          {/* Work Mail Input End*/}

          {/* Subject Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="subject2" className="font-bold">
              Subject<span className="text-red-500">*</span>
            </label>
            <textarea
              type="email"
              name=""
              id="email"
              placeholder=""
              className="bg-transparent h-[200px] px-4 py-3 border-2 border-black placeholder:text-black placeholder:font-medium placeholder:uppercase w-full focus:placeholder:-translate-y-10 placeholder:transition-all placeholder:duration-300 focus:border-secondary transition-all duration-300 focus:invalid:border-red-600 outline-none"
            />
          </div>
          {/* Subject Input End */}

          <button className="mx-auto w-fit flex items-center relative overflow-hidden group before:contents-[''] before:absolute before:-left-3 before:top-0 before:bg-black before:-skew-x-[17deg] before:w-0 before:h-full hover:before:w-[115%]  before:transition-all before:duration-300 mt-5 bg-secondary px-9 py-4 font-semibold">
            <h1 className="z-10 text-lg group-hover:text-secondary transition-all duration-300">Submit Now</h1>
          </button>
        </form>
      </section>
      {/* Contact Me End */}

      {/* Contact Info */}
      <section className="grid grid-cols-1 lg:grid-cols-3 lg:flex-row gap-10 px-5 py-14 md:px-10">
        <button className="flex flex-col justify-center items-center gap-7 w-full py-8 bg-black ">
          <div className="bg-secondary p-4 rounded-full">
            <img src="/icons/mail-icon.svg" alt="" />
          </div>

          <div className="text-white">
            <h1 className="text-2xl font-bold">Message Me</h1>
            <h1 className="font-medium">nirvan.pramudhyta@gmail.com</h1>
          </div>
        </button>

        <button className="flex flex-col justify-center items-center gap-7 w-full py-8 bg-black ">
          <div className="bg-secondary p-4 rounded-full">
            <img src="/icons/phone-icon.svg" alt="" />
          </div>

          <div className="text-white">
            <h1 className="text-2xl font-bold">Call Me</h1>
            <h1 className="text-lg font-medium">(000) 000 - 1000</h1>
          </div>
        </button>

        <button className="flex flex-col justify-center items-center gap-7 w-full  px-10 py-8 bg-black ">
          <div className="bg-secondary p-4 rounded-full">
            <img src="/icons/map-pin-icon.svg" alt="" />
          </div>

          <div className="text-white">
            <h1 className="text-2xl font-bold">Address</h1>
            <h1 className="text-lg font-medium">6391 Smith Coorparoo 10299</h1>
          </div>
        </button>
      </section>
      {/* Contact Info End */}

      {/* Subscribe Section */}
      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 bg-[#dbdbdb] px-4 md:px-8 xl:px-28 py-14">
        <h1 className="text-2xl font-bold">Subscribe to out newsletter</h1>
        <form action="" className="flex flex-col md:flex-row md:gap-5 md:w-3/4 lg:w-1/2">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email Address"
            className="bg-transparent px-6 py-3 border-2 border-black placeholder:text-black placeholder:font-medium placeholder:uppercase w-full focus:placeholder:-translate-y-10 placeholder:transition-all placeholder:duration-300 focus:border-secondary transition-all duration-300 focus:invalid:border-red-600 outline-none"
          />
          <button type="button" className="bg-black py-4 md:px-8 text-white font-semibold">
            Subscribe
          </button>
        </form>
      </section>
      {/* Subscribe Section End */}

      {/* Footer */}
      <Footer />
      {/* Footer End */}
    </div>
  );
}

export default About;
