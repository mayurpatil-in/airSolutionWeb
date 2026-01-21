import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { Filter, Grid3x3, List } from "lucide-react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  const categories = [
    "All",
    "Kitchen Exhaust Hoods",
    "Fresh Air & Ventilation",
    "HVAC Systems",
    "Ducting & Accessories",
  ];

  const products = [
    {
      id: 1,
      title: "Island Exhaust Hood",
      description:
        "Premium stainless steel island exhaust hood with integrated lighting and high-capacity extraction.",
      category: "Kitchen Exhaust Hoods",
      image: null,
    },
    {
      id: 2,
      title: "Wall-Mounted Canopy Hood",
      description:
        "Professional wall-mounted canopy hood designed for heavy-duty commercial kitchen applications.",
      category: "Kitchen Exhaust Hoods",
      image: null,
    },
    {
      id: 3,
      title: "Backshelf Hood",
      description:
        "Compact backshelf hood ideal for limited space installations with efficient grease capture.",
      category: "Kitchen Exhaust Hoods",
      image: null,
    },
    {
      id: 4,
      title: "Fresh Air Handling Unit",
      description:
        "Advanced fresh air system with HEPA filtration and energy recovery ventilation.",
      category: "Fresh Air & Ventilation",
      image: null,
    },
    {
      id: 5,
      title: "Make-Up Air Unit",
      description:
        "High-efficiency make-up air unit to balance kitchen air pressure and improve comfort.",
      category: "Fresh Air & Ventilation",
      image: null,
    },
    {
      id: 6,
      title: "Ventilation Fan System",
      description:
        "Industrial-grade ventilation fans with variable speed control and low noise operation.",
      category: "Fresh Air & Ventilation",
      image: null,
    },
    {
      id: 7,
      title: "Commercial HVAC Package",
      description:
        "Complete HVAC solution with heating, cooling, and humidity control for commercial kitchens.",
      category: "HVAC Systems",
      image: null,
    },
    {
      id: 8,
      title: "Split AC System",
      description:
        "Energy-efficient split AC system designed for kitchen environments with grease-resistant components.",
      category: "HVAC Systems",
      image: null,
    },
    {
      id: 9,
      title: "Stainless Steel Ducting",
      description:
        "Premium grade stainless steel ducting with seamless joints and corrosion resistance.",
      category: "Ducting & Accessories",
      image: null,
    },
    {
      id: 10,
      title: "Grease Filters",
      description:
        "High-efficiency baffle grease filters with easy removal and dishwasher-safe design.",
      category: "Ducting & Accessories",
      image: null,
    },
    {
      id: 11,
      title: "Fire Suppression System",
      description:
        "Automated fire suppression system integrated with exhaust hood for maximum safety.",
      category: "Ducting & Accessories",
      image: null,
    },
    {
      id: 12,
      title: "UV Air Purification",
      description:
        "UV-C air purification system for eliminating odors and airborne contaminants.",
      category: "Fresh Air & Ventilation",
      image: null,
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Our{" "}
            <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Products
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light"
          >
            Premium commercial kitchen ventilation solutions engineered for
            performance and reliability
          </motion.p>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Filter className="text-primary" size={24} />
                <h2 className="text-2xl font-bold text-secondary-dark">
                  Filter by Category
                </h2>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === "grid"
                      ? "bg-white text-primary shadow-md"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Grid3x3 size={20} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === "list"
                      ? "bg-white text-primary shadow-md"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg"
                      : "bg-slate-100 text-gray-700 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Products Count */}
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              Showing{" "}
              <span className="font-bold text-primary">
                {filteredProducts.length}
              </span>{" "}
              product{filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Products Grid */}
          <motion.div
            layout
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex flex-col gap-6"
            }
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                {...product}
                delay={index * 0.1}
                viewMode={viewMode}
              />
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-blue-600 to-primary-dark text-white relative overflow-hidden">
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
              className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Request Custom Quote
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

export default Products;
