import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { Filter, Grid3x3, List, ChevronDown } from "lucide-react";
import { products } from "../data/products";

const Products = () => {
  const [systemFilter, setSystemFilter] = useState("All Systems");
  const [gradeFilter, setGradeFilter] = useState("Standard");
  const [viewMode, setViewMode] = useState("grid");

  const filteredProducts = products.filter((product) => {
    // Filter by System (Application)
    if (systemFilter !== "All Systems" && product.application !== systemFilter)
      return false;

    // Filter by Grade (Standard vs High Volume)
    // If 'Standard' is selected, show everything that is NOT High Volume?
    // Or strictly 'Standard'? Valid strategy: If grade filter is 'High Volume', show only High Volume.
    // If 'Standard', show Standard.
    // However, in the design 'Standard' and 'High Volume' look like toggles. I'll implement as strict filter.
    // Note: I defaulted grade to "Standard". If I want to show all by default, I need an "All" option or treat "Standard" as default.
    // Let's assume the user wants to see everything initially?
    // The image shows "Standard" selected. I'll stick to strict filtering for now.
    // Actually, to make it user friendly, I'll add an 'All' option if needed, but the image implies binary or trinary choice.
    // I'll default to displaying all if the UI allows, but the UI shows 'Standard' selected.
    // Let's change the filter logic: Show 'Standard' by default.

    if (gradeFilter === "High Volume" && product.grade !== "High Volume")
      return false;
    if (gradeFilter === "Standard" && product.grade === "High Volume")
      return false;

    return true;
  });

  return (
    <div className="flex flex-col w-full overflow-hidden bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
          >
            Our <span className="text-blue-500">Products</span>
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Engineered for performance, designed for efficiency. Explore our
            premium range of ventilation solutions.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Controls Toolbar */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-10 flex flex-col xl:flex-row justify-between items-center gap-6">
            {/* Filters Group */}
            <div className="flex flex-col md:flex-row items-center gap-6 w-full xl:w-auto overflow-x-auto pb-2 md:pb-0">
              <span className="text-slate-400 font-bold tracking-wider text-xs uppercase flex-shrink-0">
                Filters:
              </span>

              <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
                {/* System Type Filter */}
                <div className="bg-slate-100 p-1.5 rounded-lg flex items-center">
                  {["All Systems", "Commercial", "Residential"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSystemFilter(tab)}
                      className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                        systemFilter === tab
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Grade Filter */}
                <div className="bg-slate-100 p-1.5 rounded-lg flex items-center">
                  {["Standard", "High Volume"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setGradeFilter(tab)}
                      className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                        gradeFilter === tab
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sort & View */}
            <div className="flex items-center gap-6 flex-shrink-0 w-full xl:w-auto justify-between xl:justify-end">
              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-bold tracking-wider text-xs uppercase hidden sm:block">
                  Sort:
                </span>
                <div className="relative group">
                  <select className="appearance-none bg-slate-100 hover:bg-slate-200 border-none rounded-lg py-2.5 pl-4 pr-10 font-semibold text-sm text-slate-700 focus:ring-2 focus:ring-blue-500/20 cursor-pointer transition-colors min-w-[200px]">
                    <option>Power (CFM) - High to Low</option>
                    <option>Power (CFM) - Low to High</option>
                    <option>Newest Arrival</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-slate-600 transition-colors"
                    size={16}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                {...product}
                delay={index * 0.1}
                viewMode="grid"
              />
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-32"
            >
              <div className="bg-slate-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter className="text-slate-300" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-700 mb-2">
                No products found
              </h3>
              <p className="text-slate-500">
                Try adjusting your filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSystemFilter("All Systems");
                  setGradeFilter("Standard");
                }}
                className="mt-6 text-blue-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-6"
          >
            Can't Find What You're Looking For?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            We offer custom solutions tailored to your specific requirements.
            Contact us for a personalized quote.
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
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Request Custom Quote
            </a>
            <a
              href="/contact"
              className="border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
