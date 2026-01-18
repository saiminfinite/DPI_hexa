const Home = () => {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] flex items-center bg-gradient-to-r from-[#0b1c3f] via-[#0f2a5f] to-[#09162f] text-white">
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm tracking-wide uppercase text-gray-300 mb-3">
              Innovative IT Solutions for a Smarter Tomorrow
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming Ideas into <br />
              <span className="text-blue-400">Digital Reality</span>
            </h1>

            <p className="mt-6 text-gray-300 max-w-xl">
              We help businesses grow with secure, scalable, and future-ready
              IT solutions tailored to your needs.
            </p>

            <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition">
              Learn More
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1603575448360-153f093fd0f9"
              alt="IT Solutions"
              className="rounded-xl shadow-lg max-h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-4">
            Our Core Services
          </h2>

          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Delivering reliable, secure, and scalable IT services that help your
            business stay ahead.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            <ServiceCard
              title="Cloud Solutions"
              desc="Secure and scalable cloud infrastructure."
            />

            <ServiceCard
              title="Cyber Security"
              desc="Protect your data with advanced security."
            />

            <ServiceCard
              title="Backup Solutions"
              desc="Reliable backup & disaster recovery."
            />

            <ServiceCard
              title="IT Consulting"
              desc="Expert guidance for digital growth."
            />
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-14 bg-[#0b1c3f] text-white text-center">
        <h3 className="text-3xl font-bold">
          Ready to Transform Your Business?
        </h3>

        <p className="mt-3 text-gray-300">
          Let’s build secure and smart digital solutions together.
        </p>

        <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

/* ================= SERVICE CARD ================= */
const ServiceCard = ({ title, desc }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
};

export default Home;
