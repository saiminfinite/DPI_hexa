import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0f14] text-gray-300 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            JUNOSYS NETWORKS PVT. LTD.
          </h2>

          <p className="text-sm leading-relaxed">
            209, NRK Biz Park, Plot No. 397 & 405, Scheme No. 54, PU-4,
            Indore (M.P) – 452010
          </p>

          <p className="mt-4 text-sm">
            <span className="font-semibold text-white">Phone:</span> 0731-4084549
          </p>

          <p className="text-sm">
            <span className="font-semibold text-white">Email:</span>{" "}
            info@junosys.in
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mt-6">
            <IconBox><FaTwitter /></IconBox>
            <IconBox><FaFacebookF /></IconBox>
            <IconBox><FaInstagram /></IconBox>
            <IconBox><FaLinkedinIn /></IconBox>
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Useful Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Alliances</li>
            <li className="hover:text-white cursor-pointer">Testimonials</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Services
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">
              Next Generation Firewall
            </li>
            <li className="hover:text-white cursor-pointer">
              End-Point Protection
            </li>
            <li className="hover:text-white cursor-pointer">
              Backup Solutions
            </li>
            <li className="hover:text-white cursor-pointer">
              On Cloud
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-white/10 text-center py-6 text-sm">
        <p>
          © Copyright <span className="text-white font-medium">
            Junosys Networks Pvt Ltd
          </span>. All Rights Reserved
        </p>
        <p className="mt-1">
          Designed by <span className="text-[#4da3ff]">C9LAB</span>
        </p>
      </div>
    </footer>
  );
};

/* SOCIAL ICON BOX */
const IconBox = ({ children }) => (
  <div className="w-10 h-10 rounded-md bg-white/10 hover:bg-[#4da3ff] hover:text-white transition flex items-center justify-center cursor-pointer">
    {children}
  </div>
);

export default Footer;
