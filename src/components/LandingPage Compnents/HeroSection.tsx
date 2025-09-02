import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Shield } from "lucide-react";
import { Button } from "./button";
import AnimatedCounter from "./AnimatedCounter";
import FloatingElement from "./FlaotingElement";
import { NAV_TARGET } from "../../Utilites/Contants";

const HeroSection = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <section className="relative px-4 pt-32 pb-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,.2) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(255,255,255,.2) 2px, transparent 0)',
        backgroundSize: '100px 100px'
      }}></div>
    </div>
    <FloatingElement delay={0}>
      <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-300 rounded-full opacity-60" />
    </FloatingElement>
    <FloatingElement delay={1}>
      <div className="absolute top-40 right-20 w-6 h-6 bg-pink-300 rounded-full opacity-60" />
    </FloatingElement>
    <FloatingElement delay={2}>
      <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-blue-300 rounded-full opacity-60" />
    </FloatingElement>
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Work Smarter,
        </motion.span>
        <br />
        <motion.span
          className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Not Harder
        </motion.span>
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        Manage tasks, collaborate with your team, and hit every deadline—
        <br />
        without the chaos.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <Button
          size="lg"
          className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-4 h-auto transition-all duration-300"
          onClick={() => onNavigate(NAV_TARGET.SIGNUP)}
        >
          Get Started Free
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="ml-2"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white text-white bg-white/10 hover:bg-white/20 text-lg px-8 py-4 h-auto transition-all duration-300"
        >
          <Play className="w-5 h-5 mr-2" />
          Watch Demo
        </Button>
      </motion.div>
      <motion.p
        className="text-purple-200 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        No credit card required • Free forever plan
      </motion.p>
      <motion.div
        className="mt-12 flex flex-wrap items-center justify-center gap-8 text-purple-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="flex items-center space-x-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.7 + (i * 0.1) }}
              >
                <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              </motion.div>
            ))}
          </div>
          <span className="text-sm">Trusted by <AnimatedCounter value={15000} />+ teams</span>
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="w-4 h-4" />
          <span className="text-sm">SOC 2 Compliant</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;