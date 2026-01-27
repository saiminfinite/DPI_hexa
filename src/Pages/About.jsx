const About = () => {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        About Us
      </h1>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
          <li>
            As a cybersecurity provider, we deliver comprehensive
            cybersecurity services and solutions to help organizations
            establish a secure and consistent environment while handling
            confidential data.
          </li>

          <li>
            We provide end-to-end IT and advanced technology solutions
            across IT infrastructure support, cloud services, end-user
            support, networking, and software solutions.
          </li>

          <li>
            Our company was established in 2025, backed by over
            5 years of professional experience in the IT and
            cybersecurity domain.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
