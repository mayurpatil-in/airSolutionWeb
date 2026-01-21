import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Send,
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary-dark via-slate-800 to-secondary-dark text-white relative overflow-hidden pt-20 pb-6">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6 group">
              <img
                src={logo}
                alt="Vision Air Solution"
                className="h-14 w-auto object-contain brightness-0 invert group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Leading provider of complete commercial kitchen ventilation
              systems, exhaust hoods, and fresh air solutions for the
              hospitality industry.
            </p>
            <div className="flex space-x-3">
              <SocialIcon icon={<Facebook size={18} />} href="#" />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/products" text="Our Products" />
              <FooterLink to="/clients" text="Clients & Projects" />
              <FooterLink to="/enquiry" text="Request Enquiry" />
              <FooterLink to="/contact" text="Contact Us" />
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              Our Products
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/products" text="Exhaust Hoods" />
              <FooterLink to="/products" text="Fresh Air Units" />
              <FooterLink to="/products" text="HVAC Systems" />
              <FooterLink to="/products" text="Ducting & Accessories" />
              <FooterLink to="/products" text="Ecology Units" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              Get In Touch
            </h3>

            {/* Newsletter */}
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe for updates and industry news
            </p>
            <form className="flex mb-6" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email"
                className="bg-slate-700/50 text-white px-4 py-2.5 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary w-full border border-slate-600 text-sm placeholder:text-gray-500"
              />
              <button className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary-dark hover:to-blue-700 text-white px-4 py-2.5 rounded-r-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                <Send size={18} />
              </button>
            </form>

            {/* Contact Details */}
            <div className="space-y-3">
              <ContactDetail
                icon={<MapPin size={16} />}
                text="123, Pawar Mal, Kaneri, Kolhapur, Maharashtra - 416234"
              />
              <ContactDetail icon={<Phone size={16} />} text="+91 9049506110" />
              <ContactDetail
                icon={<Mail size={16} />}
                text="info@visionairsolution.in"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          {/* Copyright */}
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Vision Air Solution. All Rights
            Reserved.
          </p>

          {/* Designer Credit - Center */}
          <div className="flex items-center gap-2 text-gray-400 order-last md:order-none">
            <span>Designed by</span>
            <a
              href="https://www.mayurpatil.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light transition-colors font-semibold flex items-center gap-1 group"
            >
              www.mayurpatil.in
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          {/* Links - Right */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    className="bg-slate-700/50 hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 text-white p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-slate-600 hover:border-primary"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, text }) => (
  <li>
    <Link
      to={to}
      className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center group text-sm"
    >
      <ArrowRight
        size={14}
        className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary"
      />
      {text}
    </Link>
  </li>
);

const ContactDetail = ({ icon, text }) => (
  <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
    <div className="flex-shrink-0 text-primary mt-0.5 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="text-sm leading-relaxed">{text}</span>
  </div>
);

export default Footer;
