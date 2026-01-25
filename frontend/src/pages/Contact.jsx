import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Our Office",
      details: [
        "123, Pawar Mal,",
        "Kaneri, Kolhapur,",
        "Maharashtra, India - 416234",
      ],
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Numbers",
      details: ["+91 9049506110", "+91 22 1234 5678"],
    },
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      details: ["info@visionairsolution.in", "sales@visionairsolution.in"],
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 left-10 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-float"
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
            <span className="text-sm font-medium">We're Here to Help</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Get in{" "}
            <span className="gradient-text bg-gradient-to-r from-indigo-400 to-violet-300">
              Touch
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto font-light"
          >
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {contactInfo.map((info, index) => (
              <ContactCard key={index} info={info} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Form & Map */}
      <section className="section-padding bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-black text-secondary-dark mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <div className="card-premium p-8">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        label="Your Name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <FormField
                        label="Subject"
                        name="subject"
                        type="text"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                        required
                      ></textarea>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <Send
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                      Send Message
                    </motion.button>
                  </form>
                ) : (
                  <SuccessMessage />
                )}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-black text-secondary-dark mb-4">
                  Visit Our Office
                </h2>
                <p className="text-gray-600 text-lg">
                  We're located in Kaneri, Kolhapur. Drop by for a consultation!
                </p>
              </div>

              <div className="card-premium overflow-hidden h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1911.4914714298563!2d74.2736121762966!3d16.627625211369164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0fee4a31341ff%3A0x99e51698c2b29f25!2sKaneri%2C%20Maharashtra%20416234!5e0!3m2!1sen!2sin!4v1769009003777!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vision Air Solution Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const ContactCard = ({ info, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="card-premium p-6 text-center group hover:shadow-2xl transition-all duration-300"
  >
    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:scale-110 transition-transform">
      {info.icon}
    </div>
    <h3 className="font-bold text-secondary-dark mb-3 text-lg">{info.title}</h3>
    <div className="space-y-1">
      {info.details.map((detail, index) => (
        <p key={index} className="text-gray-600 text-sm">
          {detail}
        </p>
      ))}
    </div>
  </motion.div>
);

const FormField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
      required={required}
    />
  </div>
);

const SuccessMessage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="text-center py-12"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
    >
      <CheckCircle2 size={48} className="text-white" />
    </motion.div>
    <h3 className="text-3xl font-bold text-secondary-dark mb-4">
      Message Sent!
    </h3>
    <p className="text-gray-600 text-lg mb-2">
      Thank you for reaching out to us.
    </p>
    <p className="text-gray-500">We'll get back to you within 24 hours.</p>
  </motion.div>
);

export default Contact;
