import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100 mb-2 w-64 origin-bottom-right"
          >
            <h4 className="font-bold text-gray-800 mb-2">Need Help?</h4>
            <p className="text-sm text-gray-500 mb-4">
              Chat with our experts for quick assistance.
            </p>
            <div className="space-y-2">
              <a
                href="https://wa.me/9049506110"
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-green-500 text-white text-center py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition"
              >
                WhatsApp Us
              </a>
              <Link
                to="/enquiry"
                className="block w-full bg-primary text-white text-center py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
};

export default FloatingContact;
