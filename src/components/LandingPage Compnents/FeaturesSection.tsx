import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { CheckCircle, Users, TrendingUp } from "lucide-react";

const FeaturesSection = () => (
  <section className="py-20 px-4 bg-gray-50/80 backdrop-blur-sm">
    <div className="max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Everything you need to succeed
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Powerful features designed to help teams collaborate better and deliver results faster.
        </motion.p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={CheckCircle}
          title="Smart Task Management"
          description="Organize your work with task priorities, automated deadlines, and intelligent scheduling that adapts to your workflow."
          color="bg-gradient-to-br from-red-500 to-red-600"
          delay={0.2}
        />
        <FeatureCard
          icon={Users}
          title="Team Collaboration"
          description="Assign tasks, share updates, and stay aligned in real-time with powerful collaboration tools built for modern teams."
          color="bg-gradient-to-br from-blue-500 to-blue-600"
          delay={0.4}
        />
        <FeatureCard
          icon={TrendingUp}
          title="Progress Tracking"
          description="Visualize your goals and monitor progress with intuitive dashboards, reports, and analytics that keep you on track."
          color="bg-gradient-to-br from-purple-500 to-purple-600"
          delay={0.6}
        />
      </div>
    </div>
  </section>
);

export default FeaturesSection;