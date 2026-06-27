import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Headphones,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-blue-600">
            Contact Us
          </h1>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 text-xl">
            We're here to help! Reach out to us for any insurance
            enquiries or service requests.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Visit */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10 text-center"
          >
            <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-8">
              <MapPin size={42} color="white" />
            </div>

            <h3 className="text-4xl font-bold text-slate-800 mb-8">
              Visit Us
            </h3>

            <h4 className="font-bold text-2xl mb-4">
              2M Insurance Services
            </h4>

            <p className="text-gray-700 text-xl leading-10">
              Kudalwadi, Chikhali
              <br />
              Pune, Maharashtra
            </p>
          </motion.div>

          {/* Call */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-10 text-center"
          >
            <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-8">
              <Phone size={42} color="white" />
            </div>

            <h3 className="text-4xl font-bold text-slate-800 mb-8">
              Call Us
            </h3>

            <div className="space-y-6 text-xl">
              <div>
                <p className="font-bold">Contact Us:</p>
                <a
                  href="tel:8237722686"
                  className="text-blue-600 hover:underline"
                >
                  8237722686
                </a>
              </div>

              <div>
                <p className="font-bold">Phone No:</p>
                <a
                  href="tel:9090585824"
                  className="text-blue-600 hover:underline"
                >
                  9090585824
                </a>
              </div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl p-10 text-center"
          >
            <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-8">
              <Mail size={42} color="white" />
            </div>

            <h3 className="text-4xl font-bold text-slate-800 mb-8">
              Send Us Email
            </h3>

            <p className="text-gray-700 text-xl leading-10 mb-6">
              For all insurance enquiries and service requests,
              please email us at:
            </p>

            <a
              href="mailto:2mpolicy@gmail.com"
              className="text-blue-600 text-2xl font-semibold hover:underline"
            >
              2mpolicy@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl shadow-lg p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                <Clock3 size={36} className="text-blue-600" />
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-2">
                  Working Hours
                </h4>

                <p className="text-lg text-gray-600">
                  Mon - Sat: 9:30 AM - 7:00 PM
                </p>

                <p className="text-lg text-gray-600">
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                <Headphones size={36} className="text-blue-600" />
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-2">
                  We're Always Here
                </h4>

                <p className="text-lg text-gray-600">
                  Our support team is available to assist you
                  with all your insurance needs.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;