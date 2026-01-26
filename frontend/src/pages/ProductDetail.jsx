import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Download,
  FileText,
  CheckCircle2,
  Settings,
  ShieldCheck,
  Zap,
  Package,
  ArrowLeft,
} from "lucide-react";
import { products } from "../data/products";

// Icon mapping for dynamic rendering
import * as Icons from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  // State for active image in gallery
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset active image when product changes
    if (product) {
      setActiveImage(product.image);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Product Not Found
          </h2>
          <button
            onClick={() => navigate("/products")}
            className="text-blue-600 hover:underline"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  // Helper to render dynamic icon
  const renderIcon = (iconName) => {
    const Icon = Icons[iconName] || Package;
    return <Icon size={20} />;
  };

  // Prepare images list (fallback to single image if array not present)
  const galleryImages =
    product.images || (product.image ? [product.image] : []);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 font-sans">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center text-sm text-slate-500">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-slate-800 font-semibold">{product.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Top Section: Gallery + Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Gallery Section */}
            <div className="lg:w-1/2">
              <div className="aspect-[4/3] bg-slate-100 rounded-xl mb-4 relative overflow-hidden group border border-slate-100">
                {activeImage ? (
                  <img
                    src={activeImage}
                    alt={product.title}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-100">
                    <Package size={80} className="text-slate-300" />
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {galleryImages.length > 0 && (
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg bg-slate-100 border-2 cursor-pointer overflow-hidden transition-all ${
                        activeImage === img
                          ? "border-blue-500 ring-2 ring-blue-100"
                          : "border-slate-200 hover:border-blue-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="lg:w-1/2 flex flex-col">
              {/* Badge */}
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {product.badge || "Top Rated Solution"}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
                {product.title}
              </h1>

              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {product.longDescription || product.description}
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                {product.specs?.map((spec, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="text-blue-500 mt-1">
                      {renderIcon(spec.icon)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">
                        {spec.label.split(" ").slice(1).join(" ")}
                      </h4>{" "}
                      {/* Attempt to extract label title */}
                      <p className="text-xs text-slate-500">{spec.label}</p>
                    </div>
                  </div>
                ))}
                <div className="flex gap-3">
                  <div className="text-blue-500 mt-1">
                    <Icons.Settings size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">
                      Application
                    </h4>
                    <p className="text-xs text-slate-500">
                      {product.application || "Commercial Kitchens"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100">
                <Link
                  to="/enquiry"
                  className="flex-1 bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <FileText size={20} />
                  Get a Custom Quote
                  <ArrowRight size={18} />
                </Link>
                <button className="flex-1 bg-white border border-slate-200 text-slate-700 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                  <Download size={20} />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Details & Features Split */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20">
          {/* Technical Specs Table */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Detailed Technical Specifications
            </h3>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="divide-y divide-slate-100">
                {product.technicalSpecs?.map((spec, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col sm:flex-row p-4 ${idx % 2 === 0 ? "bg-slate-50/50" : "bg-white"}`}
                  >
                    <span className="sm:w-1/3 text-slate-500 font-medium text-sm">
                      {spec.label}
                    </span>
                    <span className="sm:w-2/3 text-slate-800 font-semibold text-sm mt-1 sm:mt-0">
                      {spec.value}
                    </span>
                  </div>
                )) || (
                  <div className="p-4 text-slate-500">
                    No specifications available.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Key Features Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Zap
                  className="text-blue-600"
                  size={20}
                  fill="currentColor"
                  fillOpacity={0.1}
                />
                Key Features
              </h3>
              <div className="space-y-6">
                {product.features?.map((feature, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle2
                      className="text-blue-500 flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
            Installation & Maintenance Services
          </h3>
          <p className="text-slate-500 text-center max-w-2xl mx-auto mb-10">
            Beyond manufacturing, we offer end-to-end support to ensure your
            kitchen stays operational and compliant with safety regulations.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Settings,
                title: "Expert Installation",
                desc: "Precision mounting and seamless ducting integration by our certified technical team.",
              },
              {
                icon: ShieldCheck,
                title: "Annual Maintenance",
                desc: "Scheduled deep cleaning and performance testing to extend the lifespan of your system.",
              },
              {
                icon: Icons.PenTool,
                title: "Custom Engineering",
                desc: "CAD designs tailored to your specific kitchen layout and heat-load requirements.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <service.icon size={24} />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-black mb-4">
              Ready to upgrade your kitchen ventilation?
            </h2>
            <p className="text-slate-300">
              Contact our experts today for a site visit and a tailored solution
              that fits your budget and operational needs.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-center transition-colors"
            >
              Contact Sales Team
            </Link>
            <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold border border-slate-700 transition-colors">
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
