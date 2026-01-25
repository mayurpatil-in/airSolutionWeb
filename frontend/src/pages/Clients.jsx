import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Star,
  Quote,
  Users,
  Award,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const Clients = () => {
  const clients = [
    { id: 1, name: "The Grand Hotel", category: "Luxury Hotel" },
    { id: 2, name: "Spice Garden Restaurant", category: "Fine Dining" },
    { id: 3, name: "Coastal Kitchen", category: "Seafood Restaurant" },
    { id: 4, name: "Royal Palace Hotel", category: "5-Star Hotel" },
    { id: 5, name: "Urban Bistro", category: "Modern Cuisine" },
    { id: 6, name: "Heritage Inn", category: "Boutique Hotel" },
    { id: 7, name: "Ocean View Resort", category: "Beach Resort" },
    { id: 8, name: "Mountain Peak Lodge", category: "Hill Station" },
    { id: 9, name: "City Center Plaza", category: "Business Hotel" },
    { id: 10, name: "Garden Terrace", category: "Rooftop Restaurant" },
    { id: 11, name: "Riverside Cafe", category: "Casual Dining" },
    { id: 12, name: "Elite Banquets", category: "Event Venue" },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "Vision Air Solution transformed our kitchen ventilation system. The installation was seamless, and the results exceeded our expectations. Our kitchen staff now works in a much healthier environment.",
      author: "Rajesh Kumar",
      position: "Head Chef",
      company: "The Grand Hotel",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Professional service from consultation to installation. The team was knowledgeable, punctual, and delivered exactly what they promised. Highly recommend for any commercial kitchen project.",
      author: "Priya Sharma",
      position: "Operations Manager",
      company: "Spice Garden Restaurant",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Outstanding quality and attention to detail. Our kitchen now meets all compliance standards with room to spare. The HVAC system they installed is energy-efficient and whisper-quiet.",
      author: "Amit Patel",
      position: "Owner",
      company: "Coastal Kitchen",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "We've worked with Vision Air Solution on multiple properties. Their expertise in commercial kitchen ventilation is unmatched. They understand the unique needs of the hospitality industry.",
      author: "Sarah D'Souza",
      position: "Facilities Director",
      company: "Royal Palace Hotel",
      rating: 5,
    },
  ];

  const stats = [
    { icon: <Users size={32} />, number: "500+", label: "Happy Clients" },
    {
      icon: <Building2 size={32} />,
      number: "1000+",
      label: "Projects Completed",
    },
    { icon: <Award size={32} />, number: "100%", label: "Satisfaction Rate" },
    {
      icon: <TrendingUp size={32} />,
      number: "10+",
      label: "Years Experience",
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 left-10 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles size={16} className="text-yellow-300" />
            <span className="text-sm font-medium">
              Trusted by Industry Leaders
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Our{" "}
            <span className="gradient-text bg-gradient-to-r from-amber-400 to-yellow-200">
              Clients
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-amber-100/80 max-w-3xl mx-auto font-light"
          >
            Partnering with leading hotels, restaurants, and commercial kitchens
            across the region
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-2xl mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-secondary-dark mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-secondary-dark mb-6"
            >
              Trusted Partners
            </motion.h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're proud to serve some of the finest establishments in the
              hospitality industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <ClientCard
                key={client.id}
                client={client}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-secondary-dark mb-6"
            >
              Client Success Stories
            </motion.h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear what our clients have to say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-blue-600 to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-6"
          >
            Join Our Growing Family
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Experience the same quality and service that our clients trust
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/enquiry"
              className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Request Quote
            </a>
            <a
              href="/contact"
              className="border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const ClientCard = ({ client, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -8 }}
    className="card-premium p-8 text-center group cursor-pointer"
  >
    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
      <Building2 size={40} className="text-primary" />
    </div>
    <h3 className="text-xl font-bold text-secondary-dark mb-2 group-hover:text-primary transition-colors">
      {client.name}
    </h3>
    <p className="text-gray-500 text-sm">{client.category}</p>
  </motion.div>
);

const TestimonialCard = ({ testimonial, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="card-premium p-8 hover:shadow-2xl transition-all duration-300"
  >
    <Quote className="text-primary mb-4" size={40} />
    <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
      "{testimonial.quote}"
    </p>
    <div className="flex items-center gap-1 mb-6">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
    <div className="border-t border-gray-100 pt-6">
      <p className="font-bold text-secondary-dark text-lg">
        {testimonial.author}
      </p>
      <p className="text-sm text-gray-600">{testimonial.position}</p>
      <p className="text-sm text-primary font-semibold mt-1">
        {testimonial.company}
      </p>
    </div>
  </motion.div>
);

export default Clients;
