import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  User,
  Building2,
  Mail,
  Phone,
  Package,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const Enquiry = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productParam = params.get("product");
    if (productParam) {
      setFormData((prev) => ({ ...prev, product: productParam }));
    }
  }, [location]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.product.trim())
      newErrors.product = "Product/Service is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          product: "",
          message: "",
        });
        setSubmitted(false);
      }, 5000);
    }
  };

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
            <span className="text-sm font-medium">Get a Free Consultation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Request a{" "}
            <span className="gradient-text bg-gradient-to-r from-indigo-400 to-violet-300">
              Quote
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto font-light"
          >
            Tell us about your project and we'll provide a customized solution
            for your commercial kitchen needs
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Left Side - Info */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="sticky top-24"
                >
                  <h2 className="text-3xl md:text-4xl font-black text-secondary-dark mb-6">
                    Let's Build Something Great Together
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    Fill out the form and our team will get back to you within
                    24 hours with a detailed proposal tailored to your
                    requirements.
                  </p>

                  {/* Benefits */}
                  <div className="space-y-6">
                    <BenefitItem
                      icon={<CheckCircle2 size={24} />}
                      title="Free Consultation"
                      description="Expert advice at no cost"
                    />
                    <BenefitItem
                      icon={<CheckCircle2 size={24} />}
                      title="Custom Solutions"
                      description="Tailored to your needs"
                    />
                    <BenefitItem
                      icon={<CheckCircle2 size={24} />}
                      title="Quick Response"
                      description="24-hour turnaround time"
                    />
                    <BenefitItem
                      icon={<CheckCircle2 size={24} />}
                      title="Competitive Pricing"
                      description="Best value for your investment"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="card-premium p-8 md:p-10"
                >
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <FormField
                        icon={<User size={20} />}
                        label="Full Name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        required
                      />

                      {/* Company */}
                      <FormField
                        icon={<Building2 size={20} />}
                        label="Company / Hotel Name"
                        name="company"
                        type="text"
                        placeholder="ABC Hotel & Restaurant"
                        value={formData.company}
                        onChange={handleChange}
                        error={errors.company}
                        required
                      />

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          icon={<Mail size={20} />}
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          error={errors.email}
                          required
                        />
                        <FormField
                          icon={<Phone size={20} />}
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          error={errors.phone}
                          required
                        />
                      </div>

                      {/* Product/Service */}
                      <FormField
                        icon={<Package size={20} />}
                        label="Product / Service Required"
                        name="product"
                        type="text"
                        placeholder="e.g., Exhaust Hood, HVAC System"
                        value={formData.product}
                        onChange={handleChange}
                        error={errors.product}
                        required
                      />

                      {/* Message */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                          <MessageSquare size={20} className="text-primary" />
                          Message / Requirements
                          <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          rows="5"
                          placeholder="Tell us about your project requirements..."
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none ${
                            errors.message
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          required
                        ></textarea>
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
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
                        Submit Enquiry
                      </motion.button>
                    </form>
                  ) : (
                    <SuccessMessage />
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const FormField = ({
  icon,
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  required,
}) => (
  <div>
    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
      <span className="text-primary">{icon}</span>
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      required={required}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const BenefitItem = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-xl flex items-center justify-center text-primary">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-secondary-dark mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
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
    <h3 className="text-3xl font-bold text-secondary-dark mb-4">Thank You!</h3>
    <p className="text-gray-600 text-lg mb-2">
      Your enquiry has been submitted successfully.
    </p>
    <p className="text-gray-500">We'll get back to you within 24 hours.</p>
  </motion.div>
);

export default Enquiry;
