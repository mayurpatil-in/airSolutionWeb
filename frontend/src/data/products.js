import img1 from "../assets/Exhaust/1.png";
import img2 from "../assets/Exhaust/2.png";
import img3 from "../assets/Exhaust/3.png";
import img4 from "../assets/Exhaust/4.png";

export const products = [
  {
    id: 4,
    title: "AeroFlow Pro 5000",
    description:
      "Heavy-duty industrial island hood designed for 24/7 high-volume kitchens.",
    longDescription:
      "Engineered for high-performance commercial kitchens, the AeroFlow Pro 5000 provides superior smoke, steam, and odor extraction. Designed with hygiene and durability at the core, it features a fully welded construction and advanced baffling technology.",
    category: "Kitchen Exhaust Hoods",
    subCategory: "Commercial",
    application: "Commercial",
    grade: "High Volume",
    badge: "Best Seller",
    image: img2,
    specs: [
      { icon: "Wind", label: "5000 CFM Airflow Capacity" },
      { icon: "Volume2", label: "65dB Ultra-Quiet Tech" },
      { icon: "ShieldCheck", label: "304 Marine Grade Stainless" },
    ],
    technicalSpecs: [
      {
        label: "Body Construction",
        value: "Fully Welded Stainless Steel (304)",
      },
      { label: "Sheet Thickness", value: "18 Gauge / 1.2 mm Standard" },
      { label: "Filter Efficiency", value: "95% Oil Separation Rate" },
      {
        label: "Grease Collection",
        value: "Integrated V-Channel with Drain Tap",
      },
      { label: "Lighting", value: "Flush Mount Heat-Resistant LED (Optional)" },
      { label: "Fire Suppression", value: "Pre-engineered System Compatible" },
    ],
    features: [
      {
        title: "Anti-Drip Design",
        description:
          "Unique grease gutter system prevents condensate from dripping onto food.",
      },
      {
        title: "Easy Maintenance",
        description:
          "Tool-free filter removal for quick and hygienic cleaning in dishwashers.",
      },
      {
        title: "Superior Finish",
        description:
          "#4 Brushed finish provides a modern, clean look that resists fingerprints.",
      },
    ],
  },
  {
    id: 2,
    title: "UltraExtract v2",
    description:
      "Smart home integrated hood with auto-sensing particle technology.",
    longDescription:
      "The UltraExtract v2 brings commercial-grade ventilation to the modern smart home. Featuring AI-driven sensors that automatically adjust fan speed based on detected heat and smoke levels.",
    category: "Kitchen Exhaust Hoods",
    subCategory: "Residential",
    application: "Residential",
    grade: "Standard",
    badge: null,
    image: img3,
    specs: [
      { icon: "Wifi", label: "AI Heat & Smoke Sensors" },
      { icon: "Lightbulb", label: "Dimmable LED Array (4000K)" },
      { icon: "Smartphone", label: "Smart App Controls" },
    ],
    technicalSpecs: [
      { label: "Body Construction", value: "Stainless Steel / Tempered Glass" },
      { label: "Noise Level", value: "45dB (Sleep Mode)" },
      { label: "Control", value: "Touch Panel & Mobile App" },
      { label: "Extraction Rate", value: "900 CFM" },
      { label: "Filters", value: "Dishwasher Safe Baffle Filters" },
      { label: "Connectivity", value: "Wi-Fi 6 / Bluetooth 5.0" },
    ],
    features: [
      {
        title: "Smart Automation",
        description: "Automatically turns on when cooking starts.",
      },
      {
        title: "Voice Control",
        description: "Compatible with Alexa and Google Home.",
      },
      {
        title: "Energy Efficient",
        description: "DC Motor saves up to 70% energy.",
      },
    ],
  },
  {
    id: 3,
    title: "Titan Hood X-8",
    description:
      "Extreme extraction power for charcoal grills and wok stations.",
    longDescription:
      "Built for the most demanding environments, the Titan Hood X-8 handles extreme heat and heavy grease loads with ease. Perfect for steakhouses, wok stations, and charcoal grills.",
    category: "Kitchen Exhaust Hoods",
    subCategory: "High Volume",
    application: "Commercial",
    grade: "High Volume",
    badge: "New Arrival",
    image: null,
    specs: [
      { icon: "Flame", label: "Reinforced Heat Shielding" },
      { icon: "Droplets", label: "Self-Cleaning Grease Filters" },
      { icon: "Fan", label: "Vortex High Velocity Fan" },
    ],
    technicalSpecs: [
      { label: "Material", value: "Heavy Duty SS 304" },
      { label: "Airflow", value: "8000+ CFM" },
      { label: "Heat Resistance", value: "Up to 1200°F" },
      { label: "Mounting", value: "Ceiling Suspended / Wall Mount" },
      { label: "Warranty", value: "10 Year Structural Warranty" },
      { label: "Certification", value: "UL Listed / NSF Certified" },
    ],
    features: [
      {
        title: "Vortex Technology",
        description: "Cyclonic suction prevents smoke escape.",
      },
      {
        title: "Self-Cleaning",
        description: "Automated wash cycle for filters.",
      },
      {
        title: "Heat Shield",
        description: "Double-walled construction keeps exterior cool.",
      },
    ],
  },
  {
    id: 1,
    title: "Exhaust Hood Canopy Type",
    description:
      "Advanced fresh air system with HEPA filtration and energy recovery.",
    longDescription:
      "Ensure pristine indoor air quality with the Fresh Air Eco Unit. It filters incoming air while recovering energy from exhaust air to reduce heating/cooling costs.",
    category: "Fresh Air & Ventilation",
    subCategory: "Commercial",
    application: "Commercial",
    grade: "Standard",
    badge: "Eco Friendly",
    image: img1,
    images: [img1, img2],
    specs: [
      { icon: "Wind", label: "HEPA H13 Filtration" },
      { icon: "Zap", label: "Energy Recovery Core" },
      { icon: "Thermometer", label: "Humidity Control" },
    ],
    technicalSpecs: [
      { label: "Filtration", value: "Pre-filter + HEPA H13" },
      { label: "Efficiency", value: "90% Thermal Efficiency" },
      { label: "Airflow Range", value: "500 - 3000 CFM" },
      { label: "Control", value: "BMS Compatible" },
      { label: "Noise", value: "Silent Operation (<40dB)" },
      { label: "Installation", value: "Ductable / Ceiling Concealed" },
    ],
    features: [
      {
        title: "Energy Recovery",
        description: "Transfers heat/cool from exhaust to fresh air.",
      },
      {
        title: "Air Purification",
        description: "Removes 99.97% of airborne particles.",
      },
      { title: "Smart Sensors", description: "Monitors CO2 and VOC levels." },
    ],
  },
  {
    id: 5,
    title: "SkyVent Roof Exhauster",
    description:
      "High-performance roof-mounted exhaust fan for large commercial spaces.",
    longDescription:
      "The SkyVent Roof Exhauster is designed for efficient vertical discharge of contaminated air. Weather-resistant construction ensures durability in extreme conditions, while the aerodynamic impeller delivers maximum airflow with minimal noise.",
    category: "Fresh Air & Ventilation",
    subCategory: "Commercial",
    application: "Commercial",
    grade: "High Volume",
    badge: null,
    image: null,
    specs: [
      { icon: "Fan", label: "Vertical Discharge Design" },
      { icon: "ShieldCheck", label: "Weather Proof Casing" },
      { icon: "Zap", label: "High Efficiency Motor" },
    ],
    technicalSpecs: [
      { label: "Motor Power", value: "2HP - 10HP" },
      { label: "Airflow", value: "3000 - 15000 CFM" },
      { label: "Material", value: "Galvanized Steel / Aluminum" },
      { label: "IP Rating", value: "IP55 Certified" },
      { label: "Drive Type", value: "Direct / Belt Drive" },
    ],
    features: [
      {
        title: "Bird Screen",
        description: "Integrated mesh prevents bird entry.",
      },
      {
        title: "Low Maintenance",
        description: "Sealed bearings for long life.",
      },
      {
        title: "Quiet Operation",
        description: "Dynamically balanced impeller.",
      },
    ],
  },
  {
    id: 6,
    title: "PureStream ESP Unit",
    description:
      "Electrostatic Precipitator for smoke and oil mist filtration.",
    longDescription:
      "Eliminate smoke and grease emissions with the PureStream ESP. Using high-voltage electrostatic fields, it captures 98% of airborne particulates, making it ideal for urban kitchens with strict pollution control norms.",
    category: "Ducting & Accessories",
    subCategory: "Commercial",
    application: "Commercial",
    grade: "Standard",
    badge: "Pollution Control",
    image: img2,
    specs: [
      { icon: "Zap", label: "98% Smoke Removal" },
      { icon: "Wind", label: "Low Pressure Drop" },
      { icon: "ShieldCheck", label: "Modular Design" },
    ],
    technicalSpecs: [
      { label: "Efficiency", value: "98% (DOP Test)" },
      { label: "Power Supply", value: "220V / 50Hz" },
      { label: "Cells", value: "Aluminum Alloy Collection Cells" },
      { label: "Safety", value: "Auto-Power Off on Door Open" },
      { label: "Installation", value: "Inline Duct Mounting" },
    ],
    features: [
      {
        title: "Washable Cells",
        description: "Permanent filters, no replacement needed.",
      },
      {
        title: "Compact Footprint",
        description: "Fits in tight ceiling spaces.",
      },
      { title: "BMS Ready", description: "Remote monitoring capability." },
    ],
  },
  {
    id: 7,
    title: "EcoCool HVAC Package",
    description: "All-in-one heating, ventilation, and cooling solution.",
    longDescription:
      "The EcoCool HVAC Package unit offers complete climate control. It combines robust cooling power with fresh air intake options, ensuring a comfortable working environment in hot commercial kitchens.",
    category: "HVAC Systems",
    subCategory: "Commercial",
    application: "Commercial",
    grade: "High Volume",
    badge: null,
    image: null,
    specs: [
      { icon: "Thermometer", label: "Precision Cooling" },
      { icon: "Wind", label: "Fresh Air Intake" },
      { icon: "Volume2", label: "Quiet Scroll Compressors" },
    ],
    technicalSpecs: [
      { label: "Cooling Capacity", value: "5 Ton - 25 Ton" },
      { label: "Refrigerant", value: "R-410A Eco-Friendly" },
      { label: "Condenser", value: "Blue Fin Anti-Corrosion" },
      { label: "Controller", value: "Digital Thermostat" },
    ],
    features: [
      {
        title: "Economizer",
        description: "Uses outside air for free cooling when possible.",
      },
      {
        title: "Robust Build",
        description: "Cabinet tested for 1000hr salt spray.",
      },
      {
        title: "Smart Defrost",
        description: "Optimized cycle for heating mode.",
      },
    ],
  },
  {
    id: 8,
    title: "ProDuct Stainless Kit",
    description:
      "Modular stainless steel ducting system for rapid installation.",
    longDescription:
      "Upgrade to the ProDuct Stainless Kit for a leak-free, fire-safe exhaust network. Flanged connections and laser-welded seams ensure airtight performance and easy cleaning.",
    category: "Ducting & Accessories",
    subCategory: "Commercial",
    application: "All Systems",
    grade: "Standard",
    badge: "Quick Install",
    image: img4,
    specs: [
      { icon: "CheckCircle2", label: "Laser Welded Seams" },
      { icon: "ShieldCheck", label: "Fire Rated Construction" },
      { icon: "Settings", label: "Easy Flange Connection" },
    ],
    technicalSpecs: [
      { label: "Material", value: "SS 304 / SS 316" },
      { label: "Thickness", value: "0.8mm - 1.2mm" },
      { label: "Diameter", value: "4 inch - 24 inch" },
      { label: "Temp Rating", value: "Up to 1000°F" },
    ],
    features: [
      { title: "Leak Proof", description: "Class A airtightness rating." },
      {
        title: "Aesthetic",
        description: "Polished finish for open-ceiling concepts.",
      },
      {
        title: "Modular",
        description: "Bolt-together design saves 40% install time.",
      },
    ],
  },
];
