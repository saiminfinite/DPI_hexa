import { HiShieldCheck, HiServer, HiUserGroup, HiLightBulb } from "react-icons/hi";
import Cb_hexa_2 from "../assets/Cb_hexa_2.jpg";

const About = () => {
  return (
    <div className="w-full bg-[#081226] overflow-hidden text-gray-300">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-20 bg-gradient-to-b from-[#0b1c3f] to-[#081226]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">DPI Hexashield</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
            We are architects of secure digital environments. Founded in 2025 with over 5 years of domain expertise, we bridge the gap between complex technology and seamless business operations.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20">
            <img
              src={Cb_hexa_2}
              alt="Team collaboration"
              className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
          </div>
          {/* Decorative background element */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-500/20 rounded-2xl -z-10 bg-transparent"></div>
        </div>

        {/* RIGHT TEXT CONTENT */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
          </div>

          <p className="text-lg leading-relaxed">
            As a premier cybersecurity provider, we focus on delivering comprehensive services that help organizations establish a secure and resilient consistency. We don't just protect data; we enable trust.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <FeatureItem
              icon={<HiShieldCheck className="w-6 h-6 text-cyan-400" />}
              title="Cybersecurity"
              desc="End-to-end protection for critical assets."
            />
            <FeatureItem
              icon={<HiServer className="w-6 h-6 text-blue-400" />}
              title="Infrastructure"
              desc="Robust IT support and cloud services."
            />
            <FeatureItem
              icon={<HiUserGroup className="w-6 h-6 text-purple-400" />}
              title="Expert Team"
              desc="Backed by years of industry experience."
            />
            <FeatureItem
              icon={<HiLightBulb className="w-6 h-6 text-yellow-400" />}
              title="Innovation"
              desc="Future-ready tech solutions."
            />
          </div>
        </div>
      </section>

      {/* ================= MISSION STATEMENT ================= */}
      <section className="py-20 bg-[#0b1c3f]/50 relative mt-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light italic leading-relaxed">
            "To empower businesses with secure, scalable, and innovative IT solutions that drive growth and resilience in a rapidly evolving digital landscape."
          </p>
        </div>
      </section>

    </div>
  );
};

const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 transition-colors">
    <div className="mt-1 p-2 bg-white/5 rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-semibold text-lg">{title}</h4>
      <p className="text-sm text-gray-400 mt-1">{desc}</p>
    </div>
  </div>
);

export default About;
