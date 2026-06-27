import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-slate-900 mb-4">
            About Us
          </h1>

          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We are committed to protecting every journey with trusted vehicle
            insurance solutions and exceptional customer service.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900"
              alt="About Us"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-blue-600 mb-8">
              We're Passionate. We're Reliable.
            </h2>

            <p className="text-xl text-gray-700 leading-10 mb-8">
              Since our establishment in 2017, we have been dedicated to
              providing dependable vehicle insurance solutions that protect
              individuals, families, and businesses across India.
            </p>

            <p className="text-xl text-gray-700 leading-10 mb-8">
              Our focus is on delivering comprehensive coverage, hassle-free
              claim assistance, and customer-centric services that ensure peace
              of mind at every step of the journey.
            </p>

            <p className="text-xl text-gray-700 leading-10">
              We believe insurance is more than just a policy—it's a promise of
              protection, trust, and support whenever our customers need us.
              Through innovation, transparency, and continuous improvement, we
              strive to create lasting value for every customer we serve.
            </p>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white border border-gray-100 shadow-xl rounded-3xl p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                👁️
              </div>

              <h3 className="text-5xl font-bold text-slate-900">
                Vision
              </h3>
            </div>

            <p className="text-xl text-gray-700 leading-10">
              To create a lasting legacy of trust, protection, and excellence
              in vehicle insurance by safeguarding our customers' journeys,
              delivering exceptional service, and building enduring
              relationships that span generations.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-100 shadow-xl rounded-3xl p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
                🎯
              </div>

              <h3 className="text-5xl font-bold text-slate-900">
                Mission
              </h3>
            </div>

            <p className="text-xl text-gray-700 leading-10">
              Established in 2017, our mission is to reach and provide service
              in every part of India and make reliable vehicle insurance
              accessible to every customer, regardless of location. We aim to
              expand our presence across urban, semi-urban, and rural India by
              offering prompt assistance, personalized insurance solutions, and
              seamless claim support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;