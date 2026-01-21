import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Package } from "lucide-react";
import { motion } from "framer-motion";

const ProductCard = ({
  id,
  title,
  description,
  category,
  image,
  delay = 0,
  viewMode = "grid",
}) => {
  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="card-premium overflow-hidden flex flex-col md:flex-row group"
      >
        <div className="md:w-1/3 h-64 md:h-auto bg-gradient-to-br from-slate-100 to-blue-50 relative overflow-hidden flex-shrink-0">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 group-hover:from-blue-100 group-hover:to-slate-200 transition-all duration-300">
              <Package size={64} className="text-primary/30" />
            </div>
          )}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            {category}
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-secondary-dark mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
            {description}
          </p>

          <Link
            to={`/enquiry?product=${encodeURIComponent(title)}`}
            className="mt-auto flex items-center justify-center w-full md:w-auto bg-gradient-to-r from-primary to-blue-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition duration-300 font-semibold group/btn"
          >
            Enquire Now{" "}
            <ArrowRight
              size={18}
              className="ml-2 transform group-hover/btn:translate-x-1 transition duration-300"
            />
          </Link>
        </div>
      </motion.div>
    );
  }

  // Grid View
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="card-premium overflow-hidden flex flex-col h-full group cursor-pointer"
    >
      <div className="h-64 bg-gradient-to-br from-slate-100 to-blue-50 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 group-hover:from-blue-100 group-hover:to-slate-200 transition-all duration-300">
            <Package
              size={80}
              className="text-primary/30 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          {category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-secondary-dark mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        <Link
          to={`/enquiry?product=${encodeURIComponent(title)}`}
          className="mt-auto flex items-center justify-center w-full bg-surface border border-primary/20 text-primary py-3 rounded-lg hover:bg-primary hover:text-white transition duration-300 font-semibold group-hover:shadow-md group/btn"
        >
          Enquire Now{" "}
          <ArrowRight
            size={18}
            className="ml-2 transform group-hover/btn:translate-x-1 transition duration-300"
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
