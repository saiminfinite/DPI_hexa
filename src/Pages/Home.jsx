import cb_hexa from "../assets/cb_hexa.jpg";
import { Link } from "react-router-dom";
import { HiArrowRight, HiCloud, HiShieldCheck, HiDatabase, HiCode } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full overflow-hidden bg-slate-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[#0b1c3f] overflow-hidden">

        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
              <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">
                Future-Ready IT Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
              Secure. Scalable. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Unstoppable.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Elevate your business with next-gen cybersecurity, cloud infrastructure, and digital transformation strategies tailored for growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/25 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Started <HiArrowRight />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-lg backdrop-blur-sm transition-all hover:scale-105"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> 24/7 Support
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> 99.9% Uptime
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/50 transform hover:-translate-y-2 transition-transform duration-500">
              <img
                src={cb_hexa}
                alt="Digital Transformation"
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c3f] via-transparent to-transparent opacity-60"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-xl opacity-20 rotate-12 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-24 bg-[#081226] relative">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-400 font-semibold tracking-wide uppercase mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive IT Services
            </h3>
            <p className="text-gray-400 text-lg">
              We deliver robust solutions that protect your data, optimize operations, and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <ServiceCard
              icon={<HiCloud className="w-8 h-8 text-blue-400" />}
              title="Cloud Solutions"
              desc="Scalable cloud architectures designed for performance and reliability."
            />

            <ServiceCard
              icon={<HiShieldCheck className="w-8 h-8 text-cyan-400" />}
              title="Cyber Security"
              desc="Advanced threat protection to safeguard your digital assets."
            />

            <ServiceCard
              icon={<HiDatabase className="w-8 h-8 text-purple-400" />}
              title="Data Management"
              desc="Reliable backup, recovery, and data organization strategies."
            />

            <ServiceCard
              icon={<HiCode className="w-8 h-8 text-pink-400" />}
              title="IT Consulting"
              desc="Strategic guidance to navigate the complex digital landscape."
            />
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-[#0b1c3f] z-0"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to secure your future?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Partner with us to build specific, secure, and intelligent IT infrastructures.
          </p>

          <Link
            to="/contact"
            className="inline-flex px-10 py-4 bg-white text-blue-900 hover:bg-blue-50 font-bold rounded-full shadow-xl transition-transform hover:-translate-y-1"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

/* ================= SERVICE CARD ================= */
const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="group bg-white/5 border border-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
      <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-blue-500/20 shadow-lg shadow-black/20">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{title}</h4>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{desc}</p>
    </div>
  );
};

export default Home;
