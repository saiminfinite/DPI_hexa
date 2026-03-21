
import Cb_hexa_2 from "../assets/Cb_hexa_2.jpg";
const contentList = [
  "About Us",
  "Services We Provide",
  "Consulting Implementation & Support",
  "GRC Services",
  "IT Infrastructure & Network Services",
  "Technology Stack & Offering",
  "Other Services",
];

const Contant = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8 pt-24">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 w-[600px] md:w-[360px]">
            <img
              src={Cb_hexa_2}  
              alt="Security"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            CONTENT
          </h2>

          <div className="space-y-5">
            {contentList.map((item, index) => (
              <div key={index} className="flex items-center gap-5">
                
                {/* NUMBER BOX */}
                <div className="w-14 h-14 flex items-center justify-center 
                rounded-lg text-white font-semibold text-lg
                bg-gradient-to-br from-blue-600 to-cyan-500
                shadow-lg shadow-blue-200/50">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* TEXT */}
                <p className="text-lg font-medium text-slate-800">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* ARROWS */}
          <div className="flex gap-3 mt-10 justify-end">
            <button className="w-10 h-10 border-2 border-blue-600 
              text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors">
              ▶
            </button>
            <button className="w-10 h-10 bg-blue-600 
              text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
              ▶
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contant;