import { motion } from "framer-motion";

const services = [
  {
    icon: "🚗",
    title: "Motor Insurance",
    description:
      "We provide insurance solutions for Bikes, Scooters, Cars, Commercial Vehicles, Goods Carriers, Passenger Vehicles, and Fleet Owners. Our team helps customers choose the right coverage at competitive premiums.",
  },
  {
    icon: "🛡️",
    title: "100% Claim Support",
    description:
      "We assist customers throughout the claim process, from claim registration to settlement. Our dedicated support team ensures hassle-free documentation, inspection coordination, and quick claim resolution.",
  },
  {
    icon: "📄",
    title: "RTO Services",
    description:
      "We provide complete RTO assistance including vehicle registration, ownership transfer, NOC, permit work, hypothecation addition/removal, fitness certification, and other vehicle-related documentation services.",
  },
  {
    icon: "🔥",
    title: "General Insurance",
    description:
      "We offer Fire Insurance, Transit Insurance, Workmen Compensation Insurance, and other commercial risk protection solutions to safeguard businesses, assets, employees, and goods in transit.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            Our Services
          </h1>

          <p className="text-gray-600 text-lg">
            Comprehensive Motor Insurance, Claim Assistance &
            RTO Services Under One Roof
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center"
            >
              <div className="text-6xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-3xl font-bold text-slate-800 mb-5">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-8 text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;