import React from "react";
import { useState, useEffect } from "react";
import "animate.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";

function Home() {
  const [displayMenu, setDisplayMenu] = useState(false);

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

  const customers = [
    {
      id: 1,
      name: "Tokopedia",
    },
    {
      id: 2,
      name: "Shopee",
    },
    {
      id: 3,
      name: "Lazada",
    },
    {
      id: 4,
      name: "Traveloka",
    },
    {
      id: 5,
      name: "Tiketku",
    },
    {
      id: 6,
      name: "Gojek",
    },
    {
      id: 7,
      name: "Grab",
    },
    {
      id: 8,
      name: "Uber",
    },
  ];

  const [navbarBackground, setNavbarBackground] = useState();

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
    <div className="bg-[#e9e9e9] scroll-smooth">
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

            <Link
              to="/about/#contact"
              className="relative before:contents-[''] before:absolute before:bottom-0 before:w-0 hover:before:w-full before:h-[1px] before:bg-black before:transition-all before:duration-300 hover:text-secondary transition-all duration-300 font-semibold"
            >
              Contact
            </Link>
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
      <div className={`px-4 md:px-9 lg:px-14 mt-14 flex flex-col gap-32 xl:gap-60 ${displayMenu && "blur-sm"} transition-all duration-300`}>
        {/* Section 1 */}
        <section className="mt-5 lg:grid lg:grid-cols-[55%,45%] xl:grid-cols-2 xl:px-12 content-center">
          {/* Col 1 */}
          <Fade left cascade>
            <div className="flex flex-col gap-7 lg:basis-1/2 lg:justify-center">
              <h1 className="uppercase text-4xl md:text-6xl lg:text-[54px] font-bold leading-normal md:leading-snug">Hi, I'm NIRVAN. A Front-end Web Developer Based In Semarang</h1>

              <div className="flex flex-wrap items-center gap-3">
                <h1 className="uppercase text-2xl font-bold">Design</h1>
                <span className="bg-secondary w-5 h-5" />
                <h1 className="uppercase text-2xl font-bold">Development</h1>
                <span className="bg-secondary w-5 h-5" />
                <h1 className="uppercase text-2xl font-bold">Webflow</h1>
              </div>

              <div className="flex flex-col md:flex-row md:w-1/2 lg:w-3/4 xl:w-1/2">
                <button className="flex justify-center group relative before:contents-[''] before:absolute before:left-0 before:top-0 before:bg-white before:w-full before:h-0 hover:before:h-full bg-black before:transition-all before:duration-300 w-full py-3">
                  <h1 className="z-10 text-white font-semibold group-hover:text-black transition-all duration-300">Got a Project</h1>
                </button>
                <button className="w-full border border-black py-3 font-semibold">Let's Talk</button>
              </div>
            </div>
          </Fade>
          {/* Col 1 End */}

          {/* Col 2 */}
          <Fade right>
            <div className="overflow-hidden aspect-square rounded-full mt-9 md:mt-16 lg:mt-0 md:w-3/4 lg:w-full xl:max-w-md md:mx-auto group">
              <img src="/images/nirvan-photo.jpg" alt="" className="relative bottom-9 saturate-0 group-hover:saturate-100 group-hover:scale-110 transition-all duration-500 " />
            </div>
          </Fade>
          {/* Col 2 End */}
        </section>
        {/* Section 1 End */}

        {/* Section 2 */}
        <section className="lg:mt-28 xl:mt-0 flex flex-col gap-5 xl:px-28">
          <div className="flex flex-col lg:flex-row gap-5 xl:gap-16">
            {/* Col 1 */}
            <Slide left>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold uppercase">Nirvan</h1>
                  <span className="bg-secondary w-4 h-4" />
                  <h1 className="text-2xl font-bold uppercase">Adam</h1>
                </div>

                <h1 className="text-4xl md:text-5xl xl:text-[54px] font-bold leading-snug xl:leading-[1.2]">Lead product designer and art director. </h1>
              </div>
            </Slide>
            {/* Col 1 End */}

            {/* Col 2 */}
            <Slide right>
              <div className="flex flex-col gap-7">
                <p className="text-3xl font-semibold leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                <p className="md:text-lg font-medium leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <div className="flex flex-col md:flex-row md:justify-between gap-7">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-xs font-semibold text-secondary uppercase">Born In</h1>
                    <h1 className="text-2xl font-bold ">Wonosobo</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-xs font-semibold text-secondary uppercase">Experience</h1>
                    <h1 className="text-2xl font-bold ">7+ Years</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-xs font-semibold text-secondary uppercase">Date of Birth</h1>
                    <h1 className="text-2xl font-bold ">29 May 2001</h1>
                  </div>
                </div>
              </div>
            </Slide>
            {/* Col 2 End */}
          </div>

          <Slide bottom>
            <div className="flex flex-col lg:flex-row  border-2 border-black mt-10 lg:mt-20">
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
          </Slide>
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

        {/* Portfolio Section */}
        <section className="xl:px-28">
          <Fade top>
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-4xl md:text-5xl font-bold">Portfolio</h1>
              <h1 className="text-lg font-bold text-center uppercase leading-relaxed">Regonitions & Accoimplishments</h1>
            </div>
          </Fade>

          <div className="flex flex-col gap-6 lg:gap-28 mt-10 xl:mt-16">
            {/* Portfolio 1 */}
            <Fade left cascade>
              <div className="flex flex-col lg:flex-row gap-11 lg:gap-9">
                {/* Col 1 */}
                <div className="max-w-lg overflow-hidden group">
                  <img src="https://source.unsplash.com/1600x900/?art" alt="" className="saturate-0 h-full group-hover:scale-125 group-hover:filter-none transition-all duration-500" />
                </div>
                {/* Col 1 End */}

                {/* Col 2 */}
                <div className="flex flex-col gap-8">
                  <h1 className="bg-secondary w-fit px-3 py-2 text-lg text-white font-bold uppercase">Art Direction</h1>
                  <h1 className="text-4xl md:text-5xl font-bold leading-snug lg:leading-tight">Beautiful and advanced website interfaces</h1>
                  <button className="w-fit underline text-lg lg:text-xl font-semibold hover:text-secondary transition-all duration-200">Read More</button>
                </div>
                {/* Col 2  End*/}
              </div>
            </Fade>
            {/* Portfolio 1 End */}

            {/* Portfolio 1 */}
            <Fade right cascade>
              <div className="flex flex-col lg:flex-row gap-11 lg:gap-9">
                {/* Col 1 */}
                <div className="lg:order-1 max-w-lg overflow-hidden group">
                  <img src="https://source.unsplash.com/1600x901/?art" alt="" className="saturate-0 h-full group-hover:scale-125 group-hover:filter-none transition-all duration-500" />
                </div>
                {/* Col 1 End */}

                {/* Col 2 */}
                <div className="flex flex-col gap-8">
                  <h1 className="bg-secondary w-fit px-3 py-2 text-lg text-white font-bold uppercase">Art Direction</h1>
                  <h1 className="text-4xl md:text-5xl font-bold leading-snug lg:leading-tight">Beautiful and advanced website interfaces</h1>
                  <button className="w-fit underline text-lg lg:text-xl font-semibold hover:text-secondary transition-all duration-200">Read More</button>
                </div>
                {/* Col 2  End*/}
              </div>
            </Fade>
            {/* Portfolio 1 End */}

            {/* Portfolio 1 */}
            <Fade left cascade>
              <div className="flex flex-col lg:flex-row gap-11 lg:gap-9">
                {/* Col 1 */}
                <div className="max-w-lg overflow-hidden group">
                  <img src="https://source.unsplash.com/1600x902/?art" alt="" className="saturate-0 h-full group-hover:scale-125 group-hover:filter-none transition-all duration-500" />
                </div>
                {/* Col 1 End */}

                {/* Col 2 */}
                <div className="flex flex-col gap-8">
                  <h1 className="bg-secondary w-fit px-3 py-2 text-lg text-white font-bold uppercase">Art Direction</h1>
                  <h1 className="text-4xl md:text-5xl font-bold leading-snug lg:leading-tight">Beautiful and advanced website interfaces</h1>
                  <button className="w-fit underline text-lg lg:text-xl font-semibold hover:text-secondary transition-all duration-200">Read More</button>
                </div>
                {/* Col 2  End*/}
              </div>
            </Fade>
            {/* Portfolio 1 End */}

            {/* Portfolio 1 */}
            <Fade right cascade>
              <div className="flex flex-col lg:flex-row gap-11 lg:gap-9">
                {/* Col 1 */}
                <div className="lg:order-1 max-w-lg overflow-hidden group">
                  <img src="https://source.unsplash.com/1600x903/?art" alt="" className="saturate-0 h-full group-hover:scale-125 group-hover:filter-none transition-all duration-500" />
                </div>
                {/* Col 1 End */}

                {/* Col 2 */}
                <div className="flex flex-col gap-8">
                  <h1 className="bg-secondary w-fit px-3 py-2 text-lg text-white font-bold uppercase">Art Direction</h1>
                  <h1 className="text-4xl md:text-5xl font-bold leading-snug lg:leading-tight">Beautiful and advanced website interfaces</h1>
                  <button className="w-fit underline text-lg lg:text-xl font-semibold hover:text-secondary transition-all duration-200">Read More</button>
                </div>
                {/* Col 2  End*/}
              </div>
            </Fade>
            {/* Portfolio 1 End */}
          </div>
        </section>
        {/* Portfolio Section End */}

        {/* Services Section */}
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
        {/* Services Section End */}

        {/* Testimony Customer Section */}
        <Fade top>
          <section className="mt-20 xl:px-28">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center leading-snug">Happy Customer</h1>
              <h1 className="text-lg font-bold text-center uppercase leading-relaxed">Regonitions & Accoimplishments</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">
              {customers.map((customer) => {
                return (
                  <button className="flex justify-center items-center h-24 border border-black group hover:bg-black transition-all duration-300">
                    <h1 className="font-semibold group-hover:text-secondary transition-all duration-300">{customer.name}</h1>
                  </button>
                );
              })}
            </div>
          </section>
        </Fade>
        {/* Testimony Customer Section End */}
      </div>
      {/* Content End */}

      {/* Subscribe Section */}
      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 bg-[#dbdbdb] mt-20 px-4 md:px-8 xl:px-28 py-14">
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

export default Home;
