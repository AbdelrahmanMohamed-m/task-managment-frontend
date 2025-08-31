import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const FooterSection = () => (
  <motion.footer
    className="bg-gray-900 text-gray-400 py-12 px-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-6xl mx-auto text-center">
      <motion.div
        className="flex items-center justify-center space-x-2 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Zap className="w-5 h-5 text-white" />
        </motion.div>
        <span className="text-2xl font-bold text-white">TaskFlow</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} TaskFlow. Built for productivity.
      </motion.p>
    </div>
  </motion.footer>
);

export default FooterSection;