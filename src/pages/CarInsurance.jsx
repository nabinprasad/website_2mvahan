import { motion } from "framer-motion";

const plans = [
  "Comprehensive Insurance",
  "Third Party Insurance",
  "Zero Depreciation Cover",
  "Roadside Assistance",
  "Engine Protection",
  "Cashless Claims",
];

const CarInsurance = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-12">
        Car Insurance Plans
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white shadow-lg rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold">{plan}</h3>

            <p className="mt-4 text-gray-600">
              Protect your vehicle with our reliable insurance coverage.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CarInsurance;