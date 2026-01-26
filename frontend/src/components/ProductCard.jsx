import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Package,
  Download,
  FileText,
  Wind,
  Volume2,
  ShieldCheck,
  Wifi,
  Lightbulb,
  Smartphone,
  Flame,
  Droplets,
  Fan,
  Zap,
  Thermometer,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  Wind,
  Volume2,
  ShieldCheck,
  Wifi,
  Lightbulb,
  Smartphone,
  Flame,
  Droplets,
  Fan,
  Zap,
  Thermometer,
};

const ProductCard = ({
  id,
  title,
  description,
  category,
  subCategory,
  badge,
  specs = [],
  image,
  delay = 0,
  viewMode = "grid",
}) => {
  // Tag Color Logic
  const getTagColor = (tag) => {
    switch (tag?.toLowerCase()) {
      case "commercial":
        return "bg-slate-100 text-slate-600";
      case "residential":
        return "bg-green-100 text-green-700";
      case "high volume":
        return "bg-red-100 text-red-700";
      default:
        return "bg-blue-50 text-blue-600";
    }
  };

  if (viewMode === "list") {
    // Keeping list view simple/similar for now, but enriched
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-all duration-300"
      >
        <div className="md:w-1/3 h-64 md:h-auto bg-slate-50 relative flex-shrink-0">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-300">
              <Package size={48} />
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            {subCategory && (
              <span
                className={`text-xs font-bold px-2 py-1 rounded-md uppercase ${getTagColor(subCategory)}`}
              >
                {subCategory}
              </span>
            )}
          </div>
          <p className="text-slate-600 mb-4">{description}</p>
          <div className="mt-auto flex gap-4">
            <Link
              to={`/enquiry?product=${encodeURIComponent(title)}`}
              className="btn-primary py-2 px-4 text-sm"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  // Grid View - High Fidelity Implementation
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col h-full group transition-all duration-300 hover:shadow-xl"
    >
      {/* Image Section */}
      <Link
        to={`/product/${id}`}
        className="block h-64 bg-slate-50 relative overflow-hidden group-hover:bg-slate-100 transition-colors"
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package size={80} className="text-slate-200" />
          </div>
        )}

        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
              {badge}
            </span>
          </div>
        )}
      </Link>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4 mb-3">
          <Link to={`/product/${id}`} className="block">
            <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
          </Link>
          {subCategory && (
            <span
              className={`text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide flex-shrink-0 ${getTagColor(subCategory)}`}
            >
              {subCategory}
            </span>
          )}
        </div>

        <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Specs List */}
        {specs.length > 0 && (
          <div className="space-y-3 mb-8 flex-grow">
            {specs.map((spec, idx) => {
              const Icon = iconMap[spec.icon] || Package;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <div className="flex-shrink-0 text-blue-500">
                    <Icon size={18} strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-medium">{spec.label}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-slate-100">
          <Link
            to={`/product/${id}`}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-50 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors"
          >
            <Download size={16} />
            Details
          </Link>

          <Link
            to={`/enquiry?product=${encodeURIComponent(title)}`}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            <FileText size={16} />
            Get Quote
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
