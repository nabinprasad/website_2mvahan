import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FadeUp from "../components/FadeUp";

const Home = () => {
  return (
    <>
     <section className="bg-gradient-to-r from-orange-50 via-white to-blue-50 min-h-screen flex items-center">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div>
        <p className="text-blue-900 font-semibold uppercase tracking-wider">
          Smart Choice For Your Vehicle Insurance
        </p>

        <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mt-4">
          Vehicle Insurance
          <span className="block text-orange-500">
            Made Simple
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Comprehensive Insurance Solutions for Cars, Bikes, Commercial Vehicles, and More.
 
        </p>

        <div className="flex gap-4 mt-8">
            <Link to="/contact" className="bg-[#0B2E6B] text-white px-8 py-4 rounded-xl">
              Get Instant Quote
            </Link>
        </div>
      </div>

      <div>
        <motion.img
  src="car.png"
  alt=""
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2 }}
/>
       
      </div>

    </div>
  </div>
</section>

    <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

   <div className="grid md:grid-cols-4 gap-6">

  <FadeUp delay={0.1}>
    <div className="bg-blue-50 p-8 rounded-2xl hover:-translate-y-3 transition-all duration-500">
      <h3>Easy Comparison</h3>
    </div>
  </FadeUp>

  <FadeUp delay={0.2}>
    <div className="bg-green-50 p-8 rounded-2xl hover:-translate-y-3 transition-all duration-500">
      <h3>Trusted Insurers</h3>
    </div>
  </FadeUp>

  <FadeUp delay={0.3}>
    <div className="bg-purple-50 p-8 rounded-2xl hover:-translate-y-3 transition-all duration-500">
      <h3>Save More</h3>
    </div>
  </FadeUp>

  <FadeUp delay={0.4}>
    <div className="bg-orange-50 p-8 rounded-2xl hover:-translate-y-3 transition-all duration-500">
      <h3>24/7 Support</h3>
    </div>
  </FadeUp>

</div>

  </div>
</section>
    </>
  );
};

export default Home;