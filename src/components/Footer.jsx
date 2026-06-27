import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B2E6B] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-white">2m</span>
              <span className="text-orange-400">Vahan</span>
            </h2>

            <p className="text-slate-300 leading-7">
              Your trusted partner for Motor Insurance,
              Claim Assistance, RTO Services, and
              General Insurance solutions.
            </p>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <a href="/" className="hover:text-orange-400">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-orange-400">
                  About Us
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-orange-400">
                  Services
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-orange-400">
                  Contact
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Info
            </h3>

            <div className="space-y-4 text-slate-300">
              <div className="flex gap-3">
                <Phone size={18} />
                <span>8237722686</span>
              </div>

              <div className="flex gap-3">
                <Phone size={18} />
                <span>9090585824</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>2mpolicy@gmail.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>
                  Kudalwadi, Chikhali,
                  Pune, Maharashtra
                </span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            {/* <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-orange-500 transition"
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-orange-500 transition"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-orange-500 transition"
              >
                <Linkedin size={20} />
              </a>
            </div> */}

            <div className="mt-6">
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition">
                Get Insurance Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-300 text-sm">
            <p>
              © 2026 2mVahan Insurance Services.
              All Rights Reserved.
            </p>

            <p>
              Maintained & Developed By{" "}
              <span className="text-orange-400 font-semibold">
                Sunbrilo Technologies
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;