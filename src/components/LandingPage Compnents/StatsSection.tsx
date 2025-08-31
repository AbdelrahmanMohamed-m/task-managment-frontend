import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const StatsSection = () => (
  <motion.section
    className="py-16 px-4 bg-white/95 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div>
          <motion.div
            className="text-3xl md:text-4xl font-bold text-purple-600 mb-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <AnimatedCounter value={99} suffix="%" />
          </motion.div>
          <p className="text-gray-600">Uptime</p>
        </div>
        <div>
          <motion.div
            className="text-3xl md:text-4xl font-bold text-purple-600 mb-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatedCounter value={2} suffix="M+" />
          </motion.div>
          <p className="text-gray-600">Tasks Completed</p>
        </div>
        <div>
          <motion.div
            className="text-3xl md:text-4xl font-bold text-purple-600 mb-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <AnimatedCounter value={500} suffix="+" />
          </motion.div>
          <p className="text-gray-600">Companies</p>
        </div>
        <div>
          <motion.div
            className="text-3xl md:text-4xl font-bold text-purple-600 mb-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <AnimatedCounter value={150} suffix="+" />
          </motion.div>
          <p className="text-gray-600">Countries</p>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default StatsSection;