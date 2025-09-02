import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { NAV_TARGET } from "../../Utilites/Contants";

const CTASection = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <motion.section
    className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="absolute inset-0">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(147, 51, 234, 0.9), rgba(37, 99, 235, 0.9))",
            "linear-gradient(45deg, rgba(37, 99, 235, 0.9), rgba(147, 51, 234, 0.9))",
            "linear-gradient(45deg, rgba(147, 51, 234, 0.9), rgba(37, 99, 235, 0.9))"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </div>
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Ready to transform your workflow?
      </motion.h2>
      <motion.p
        className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Join thousands of teams who have already revolutionized their productivity with TaskFlow.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-4 h-auto transition-all duration-300"
          onClick={() => onNavigate(NAV_TARGET.SIGNUP)}
        >
          Start Your Free Trial
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="ml-2"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </Button>
      </motion.div>
    </div>
  </motion.section>
);

export default CTASection;