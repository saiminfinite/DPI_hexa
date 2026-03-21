import cb_hexa from "../assets/cb_hexa.jpg";
import { Link } from "react-router-dom";
import { HiArrowRight, HiCloud, HiShieldCheck, HiDatabase, HiCode } from "react-icons/hi";
import HeroHeadline from "../Components/HeroHeadline/HeroHeadline";

const Home = () => {
  return (
    <div className="w-full overflow-hidden bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 overflow-hidden">

        {/* Animated Background - Swirling orbs & glow */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-400/20 rounded-full blur-[120px] animate-pulse"></div>
          {/* Swirling orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-[80px] orb-swirl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-300/10 blur-[100px] orb-swirl-reverse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-400/5 blur-[120px] orb-swirl-slow"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-white text-sm font-semibold tracking-wide uppercase">
                Future-Ready IT Solutions
              </span>
            </div>

            <HeroHeadline />

            <p className="text-lg md:text-xl text-blue-50 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Elevate your business with next-gen cybersecurity, cloud infrastructure, and digital transformation strategies tailored for growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg shadow-xl shadow-blue-900/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Started <HiArrowRight />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg backdrop-blur-sm transition-all hover:scale-105"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-blue-100 text-sm font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> 24/7 Support
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> 99.9% Uptime
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-blue-900/30 transform hover:-translate-y-2 transition-transform duration-500">
              <img
                src={cb_hexa}
                alt="Digital Transformation"
                className="w-full h-auto object-cover opacity-95 hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-xl blur-xl"></div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Comprehensive IT Services
            </h3>
            <p className="text-slate-600 text-lg">
              We deliver robust solutions that protect your data, optimize operations, and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <ServiceCard
              icon={<HiCloud className="w-8 h-8 text-blue-600" />}
              title="Cloud Solutions"
              desc="Scalable cloud architectures designed for performance and reliability."
            />

            <ServiceCard
              icon={<HiShieldCheck className="w-8 h-8 text-blue-600" />}
              title="Cyber Security"
              desc="Advanced threat protection to safeguard your digital assets."
            />

            <ServiceCard
              icon={<HiDatabase className="w-8 h-8 text-blue-600" />}
              title="Data Management"
              desc="Reliable backup, recovery, and data organization strategies."
            />

            <ServiceCard
              icon={<HiCode className="w-8 h-8 text-blue-600" />}
              title="IT Consulting"
              desc="Strategic guidance to navigate the complex digital landscape."
            />
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 relative overflow-hidden text-center bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to secure your future?
          </h2>
          <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto">
            Partner with us to build specific, secure, and intelligent IT infrastructures.
          </p>

          <Link
            to="/contact"
            className="inline-flex px-10 py-4 bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-full shadow-xl shadow-blue-900/20 transition-transform hover:-translate-y-1"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

/* ================= SERVICE CARD - Glassmorphism ================= */
const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="group bg-white/80 border border-white backdrop-blur-sm p-8 rounded-2xl hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-2">
      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-200/50 transition-all duration-300 border border-blue-100">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
};

export default Home;
