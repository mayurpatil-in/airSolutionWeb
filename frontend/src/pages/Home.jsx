import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Wind,
  ShieldCheck,
  Settings,
  ArrowRight,
  Fan,
  Thermometer,
  Hammer,
  Sparkles,
  CheckCircle2,
  Award,
  Users,
  Star,
  Quote,
  TrendingUp,
  Zap,
  Target,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Parallax effects
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section - Enhanced with Parallax */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-28 md:pt-44 md:pb-36 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              animation: "gridMove 20s linear infinite",
            }}
          ></div>
        </div>

        {/* Gradient Mesh Background with Mouse Parallax */}
        <motion.div
          className="absolute inset-0 bg-gradient-mesh opacity-60"
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
        ></motion.div>

        {/* Enhanced Floating Elements with 3D effect */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          className="container mx-auto px-4 relative z-10"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 hover:bg-white/20 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} className="text-yellow-300" />
              </motion.div>
              <span className="text-sm font-medium">
                Premium Kitchen Ventilation Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 tracking-tight"
            >
              Smart Air &{" "}
              <span className="gradient-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 animate-gradient">
                Kitchen Ventilation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 mb-12 font-light max-w-3xl mx-auto leading-relaxed"
            >
              Complete HVAC, Exhaust Hoods, and Fresh Air Systems engineered for
              modern commercial kitchens and hospitality excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/products"
                className="group relative bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
              >
                <span className="relative z-10">View Products</span>
                <ArrowRight
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <Link
                to="/enquiry"
                className="group relative border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 flex items-center gap-2"
              >
                <span className="relative z-10 group-hover:text-primary transition-colors">
                  Request Quote
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, borderRadius: "100%" }}
                  whileHover={{ scale: 2, borderRadius: "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <motion.svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
              animate={{
                d: [
                  "M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z",
                  "M0 10L60 16.7C120 23 240 37 360 40C480 43 600 37 720 33.3C840 30 960 30 1080 36.7C1200 43 1320 57 1380 63.3L1440 70V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V10Z",
                  "M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.svg>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <TrustBadge icon={<Award />} text="ISO Certified" />
            <TrustBadge icon={<ShieldCheck />} text="Quality Assured" />
            <TrustBadge icon={<Users />} text="500+ Clients" />
            <TrustBadge icon={<Star />} text="10+ Years" />
          </div>
        </div>
      </section>

      {/* Introduction - Bento Grid Style */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-secondary-dark mb-6"
            >
              Why Vision Air Solution?
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading ventilation solutions designed for excellence
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <BentoCard
              delay={0}
              className="md:col-span-2 bg-gradient-to-br from-primary to-blue-600 text-white"
              icon={<Target size={48} />}
              title="Precision Engineering"
              description="Every system is custom-designed for optimal airflow dynamics and energy efficiency in your specific kitchen layout."
            />
            <BentoCard
              delay={0.1}
              className="bg-gradient-to-br from-slate-50 to-blue-50"
              icon={<Zap size={40} className="text-primary" />}
              title="Fast Installation"
              description="Professional setup with minimal disruption to your operations."
            />
            <BentoCard
              delay={0.2}
              className="bg-gradient-to-br from-amber-50 to-orange-50"
              icon={<Award size={40} className="text-amber-600" />}
              title="Premium Quality"
              description="Only the finest materials and components."
            />
            <BentoCard
              delay={0.3}
              className="md:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 text-white"
              icon={<TrendingUp size={48} />}
              title="Proven Track Record"
              description="Over 500 successful installations across hotels, restaurants, and commercial kitchens nationwide."
            />
          </div>
        </div>
      </section>

      {/* Services/Key Features */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-secondary-dark mb-6"
            >
              Our Key Services
            </motion.h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl">
              Comprehensive solutions tailored for commercial kitchens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              delay={0}
              icon={<Fan size={56} />}
              title="Exhaust Hoods"
              description="Customized stainless steel exhaust hoods designed for effective smoke and grease removal."
            />
            <ServiceCard
              delay={0.1}
              icon={<Wind size={56} />}
              title="Fresh Air Units"
              description="Advanced fresh air systems to maintain a healthy and comfortable kitchen environment."
            />
            <ServiceCard
              delay={0.2}
              icon={<Thermometer size={56} />}
              title="HVAC Solutions"
              description="Complete heating, ventilation, and air conditioning services for optimal climate control."
            />
            <ServiceCard
              delay={0.3}
              icon={<Hammer size={56} />}
              title="Ducting & Design"
              description="Professional ducting fabrication and airflow design to maximize system efficiency."
            />
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-secondary-dark mb-6"
            >
              Our Process
            </motion.h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From consultation to installation, we ensure excellence at every
              step
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Animated Connector Line */}
            <svg
              className="absolute left-8 top-0 h-full w-1 hidden md:block"
              style={{ zIndex: 0 }}
            >
              <motion.line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray="8 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>

            <div className="space-y-8 relative z-10">
              <ProcessStep
                number="01"
                title="Consultation & Assessment"
                description="We analyze your kitchen layout, ventilation needs, and compliance requirements."
                delay={0}
              />
              <ProcessStep
                number="02"
                title="Custom Design"
                description="Our engineers create a tailored ventilation system optimized for your space."
                delay={0.1}
              />
              <ProcessStep
                number="03"
                title="Professional Installation"
                description="Expert installation with minimal disruption to your operations."
                delay={0.2}
              />
              <ProcessStep
                number="04"
                title="Testing & Handover"
                description="Comprehensive testing and training to ensure optimal performance."
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-blue-600 to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem number="10+" label="Years Experience" delay={0} />
            <StatItem number="500+" label="Projects Completed" delay={0.1} />
            <StatItem number="100%" label="Client Satisfaction" delay={0.2} />
            <StatItem number="24/7" label="Support Service" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-secondary-dark mb-6"
            >
              Client Success Stories
            </motion.h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Hear from our satisfied clients across the hospitality industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard
              quote="Vision Air Solution transformed our kitchen ventilation. The system is efficient, quiet, and has significantly improved our kitchen environment."
              author="Rajesh Kumar"
              position="Head Chef, The Grand Hotel"
              delay={0}
            />
            <TestimonialCard
              quote="Professional service from start to finish. The team was knowledgeable, punctual, and delivered exactly what they promised."
              author="Priya Sharma"
              position="Operations Manager, Spice Garden Restaurant"
              delay={0.1}
            />
            <TestimonialCard
              quote="Outstanding quality and attention to detail. Our kitchen now meets all compliance standards with room to spare."
              author="Amit Patel"
              position="Owner, Coastal Kitchen"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-br from-secondary-dark via-slate-800 to-secondary-dark text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8"
          >
            Ready to Upgrade Your Kitchen?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light"
          >
            Contact us today for a free consultation and quote for your
            commercial kitchen ventilation needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-accent to-yellow-500 text-white px-12 py-5 rounded-xl font-bold text-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const TrustBadge = ({ icon, text }) => (
  <motion.div
    className="flex items-center gap-2"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <div className="text-primary">{icon}</div>
    <span className="font-semibold text-gray-700">{text}</span>
  </motion.div>
);

const BentoCard = ({ icon, title, description, className = "", delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{
      scale: 1.02,
      rotateX: 2,
      rotateY: 2,
    }}
    className={`p-8 rounded-2xl ${className} group cursor-pointer`}
    style={{ transformStyle: "preserve-3d" }}
  >
    <motion.div
      className="mb-4"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.3 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="opacity-90 leading-relaxed">{description}</p>
  </motion.div>
);

const ServiceCard = ({ icon, title, description, delay }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg tilt
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative p-8 group cursor-pointer bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-slate-100/50 overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${isHovered ? -12 : 0}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Spotlight glow effect that follows mouse */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${tilt.y * 5 + 50}% ${tilt.x * 5 + 50}%, rgba(59, 130, 246, 0.15), transparent 50%)`,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Gradient border effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(45deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)",
          backgroundSize: "300% 300%",
        }}
        animate={{
          backgroundPosition: isHovered
            ? ["0% 50%", "100% 50%", "0% 50%"]
            : "0% 50%",
        }}
        transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
      >
        <div className="absolute inset-[2px] bg-white rounded-2xl" />
      </motion.div>

      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        <motion.div
          className="bg-gradient-to-br from-primary/10 to-blue-500/5 w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
          whileHover={{ scale: 1.15, rotate: 8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-primary">{icon}</div>
        </motion.div>
        <h3 className="text-2xl font-bold text-secondary-dark mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const ProcessStep = ({ number, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex gap-6 items-start group"
  >
    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:scale-110 transition-transform">
      {number}
    </div>
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-secondary-dark mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
    </div>
    <CheckCircle2
      className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
      size={24}
    />
  </motion.div>
);

const TestimonialCard = ({ quote, author, position, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="relative p-8 rounded-2xl overflow-hidden group cursor-pointer"
    style={{
      background: "rgba(255, 255, 255, 0.9)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
    }}
  >
    {/* Gradient overlay on hover */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-400/5 to-cyan-400/5 opacity-0"
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />

    <div className="relative z-10">
      <Quote className="text-primary mb-4" size={32} />
      <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <div>
        <p className="font-bold text-secondary-dark">{author}</p>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
    </div>
  </motion.div>
);

const StatItem = ({ number, label, delay }) => {
  const [count, setCount] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Extract numeric value from string like "500+" or "100%"
          const numericValue = parseInt(number.replace(/\D/g, "")) || 0;
          const suffix = number.replace(/[0-9]/g, "");

          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = numericValue / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [number, hasAnimated]);

  // Format the display number with suffix
  const displayNumber = () => {
    const suffix = number.replace(/[0-9]/g, "");
    return count + suffix;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6"
    >
      <motion.div
        className="text-5xl md:text-6xl font-black mb-3 text-white"
        animate={{ scale: hasAnimated ? [1, 1.1, 1] : 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        {displayNumber()}
      </motion.div>
      <div className="text-blue-200 text-sm md:text-base uppercase tracking-wider font-semibold">
        {label}
      </div>
    </motion.div>
  );
};

export default Home;
