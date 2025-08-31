import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { Button } from "./button";

const AnimatedHeader = ({ onNavigate, scrollY, mousePosition }: { onNavigate: (page: string) => void, scrollY: number, mousePosition: { x: number, y: number } }) => {
  const headerOpacity = Math.min(scrollY / 100, 0.95);

  return (
    <motion.header
      className="fixed top-0 w-full z-50 px-4 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0 backdrop-blur-xl border-b border-white/20"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${0.1 + headerOpacity * 0.1})`,
          boxShadow: scrollY > 50 ? '0 8px 32px rgba(0, 0, 0, 0.1)' : 'none'
        }}
        animate={{
          backgroundColor: `rgba(255, 255, 255, ${0.1 + headerOpacity * 0.1})`,
        }}
      ></motion.div>
      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="absolute -top-2 left-1/4 w-1 h-1 bg-yellow-300 rounded-full opacity-70"
          animate={{ y: [-2, 2, -2], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-2 right-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-50"
          animate={{ y: [2, -2, 2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="w-10 h-10 bg-gradient-to-br from-white to-white/90 rounded-xl flex items-center justify-center shadow-lg"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="w-6 h-6 text-purple-600" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white leading-none">TaskFlow</span>
            <span className="text-xs text-purple-200 leading-none">Project Management</span>
          </div>
        </motion.div>
        <motion.nav
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {[
            { name: 'Features', href: '#features' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'About', href: '#about' },
            { name: 'Contact', href: '#contact' }
          ].map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-white/90 hover:text-white transition-all duration-300 relative group py-2 px-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + (index * 0.05) }}
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.nav>
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 transition-all duration-300 px-6 py-2 rounded-full border border-white/20 backdrop-blur-sm"
            onClick={() => onNavigate('login')}
          >
            Login
          </Button>
          <Button
            className="bg-gradient-to-r from-white to-white/95 text-purple-600 hover:from-white/95 hover:to-white/90 transition-all duration-300 px-6 py-2 rounded-full shadow-lg font-medium"
            onClick={() => onNavigate('signup')}
          >
            <span>Get Started Free</span>
            <span className="ml-2"><ArrowRight className="w-4 h-4" /></span>
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </motion.header>
  );
};

export default AnimatedHeader;