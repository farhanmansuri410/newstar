import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Clock, 
  DollarSign, 
  Zap, 
  CheckCircle, 
  Wrench,
  Thermometer,
  Droplets,
  Volume2,
  AlertCircle,
  Phone,
  MessageCircle,
  Star,
  Award,
  Snowflake
} from "lucide-react";
import { Helmet } from "react-helmet-async"; // Changed from react-helmet

const RefrigeratorRepair_page = () => {
  
  const problems = [
    { name: "Refrigerator Not Cooling", description: "Compressor, condenser coils, gas levels, or thermostat issues" },
    { name: "Excessive Ice Formation", description: "Ventilation issues or defrost system problems" },
    { name: "Water Leakage", description: "Clogged drain pipes or damaged water lines" },
    { name: "Unusual Noise", description: "Mechanical problems with fans, motors, or internal components" },
    { name: "Refrigerator Overcooling", description: "Malfunctioning thermostat or sensor causing freezing" },
    { name: "Door Seal Issues", description: "Worn-out gasket affecting temperature retention" },
    { name: "Foul Smells", description: "Blocked vents or moisture causing persistent odors" }
  ];

  const brands = ["LG", "Samsung", "Whirlpool", "Haier", "Godrej", "Panasonic", "Bosch", "Kelvinator", "Hitachi", "Voltas"];
  
  const processSteps = [
    { step: 1, title: "Service Booking", desc: "Book through website or phone with convenient time slot" },
    { step: 2, title: "Technician Visit", desc: "Trained technician examines and explains findings" },
    { step: 3, title: "Cost & Time Estimate", desc: "Transparent cost estimate before starting work" },
    { step: 4, title: "Repair Process", desc: "Safe, quality repair with suitable tools and parts" },
    { step: 5, title: "Final Testing", desc: "Cooling performance testing and quality check" }
  ];

  return (
    <>
      <Helmet>
        <title>Refrigerator Repair Service | Professional Fridge Repair in Ahmedabad | New Star Service Centre</title>
        <meta 
          name="description" 
          content="Expert refrigerator repair service in Ahmedabad for LG, Samsung, Whirlpool, Haier, Godrej fridges. Same-day service, transparent pricing, warranty on parts. Fix cooling issues, leaks, noise." 
        />
        <meta 
          name="keywords" 
          content="refrigerator repair, fridge repair service, refrigerator not cooling, fridge water leakage, refrigerator noise, LG fridge repair, Samsung refrigerator service, Whirlpool fridge repair, Ahmedabad refrigerator repair" 
        />
        <link rel="canonical" href="https://newstarservicecentre.com/services/refrigerator-repair-service" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Refrigerator Repair Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "New Star Service Centre",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              },
              "telephone": "+916367820171"
            },
            "areaServed": {
              "@type": "City",
              "name": "Ahmedabad"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                <Snowflake className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Refrigerator Repair Service
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Quick, Safe & Professional Refrigerator Solutions in Ahmedabad
              </p>
              <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-10">
                Expert repair for single-door, double-door, side-by-side, and inverter refrigerators
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:6367820171"
                  className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Emergency Repair: 6367820171
                </a>
                <a
                  href="https://wa.me/916367820171?text=Hello,%20I%20need%20Refrigerator%20Repair%20Service"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center bg-gradient-to-r from-[#25D366] to-green-500 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  WhatsApp Repair Request
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Why Choose Our Refrigerator Repair Service?
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: <Wrench />, title: "Skilled Technicians", desc: "Trained to identify and repair issues accurately" },
                    { icon: <DollarSign />, title: "Transparent Charges", desc: "Clear communication on all service costs" },
                    { icon: <Clock />, title: "Fast Response Time", desc: "Same-day or next-day appointments" },
                    { icon: <Shield />, title: "Quality Spare Parts", desc: "Brand-approved parts for long-term reliability" },
                    { icon: <Zap />, title: "All Refrigerator Types", desc: "Single-door to inverter models expertise" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-white hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-blue-100"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Professional Refrigerator Repair Services
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  A refrigerator is one of the most important appliances in any home. It keeps food fresh, preserves vegetables, and ensures daily convenience. When it breaks down, even briefly, it can lead to food spoilage and unnecessary stress.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At New Star Service Centre, we offer reliable, safe, and professional refrigerator repair services for all major brands and types. Our services are designed to be transparent and customer-focused.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Common Refrigerator Problems We Repair
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start mb-4">
                    {index === 0 && <Thermometer className="w-6 h-6 text-blue-500 mr-3 mt-1" />}
                    {index === 1 && <Snowflake className="w-6 h-6 text-blue-500 mr-3 mt-1" />}
                    {index === 2 && <Droplets className="w-6 h-6 text-blue-500 mr-3 mt-1" />}
                    {index === 3 && <Volume2 className="w-6 h-6 text-blue-500 mr-3 mt-1" />}
                    {index === 4 && <AlertCircle className="w-6 h-6 text-blue-500 mr-3 mt-1" />}
                    {index > 4 && <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{problem.name}</h3>
                      <p className="text-gray-600 mt-2">{problem.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Brands We Repair
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {brands.map((brand, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow hover:-translate-y-1"
                >
                  <div className="text-2xl font-bold text-gray-800">{brand}</div>
                  <div className="text-sm text-gray-500 mt-2">Refrigerator Repair</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              How Our Refrigerator Repair Service Works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips & CTA */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-green-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Star className="w-6 h-6 text-green-600 mr-3" />
                  Refrigerator Care Tips
                </h3>
                <ul className="space-y-4">
                  {[
                    "Keep your refrigerator clean and free from frost buildup",
                    "Avoid overloading to maintain proper airflow",
                    "Place the fridge away from heat sources",
                    "Check door seals regularly for tightness",
                    "Clean the condenser coils periodically"
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-700 to-blue-800 p-8 rounded-2xl text-white text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Schedule Your Refrigerator Repair Today</h3>
                <p className="mb-6 opacity-90">
                  Your comfort and convenience matter - let us help you restore your refrigerator to optimal condition.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:6367820171"
                    className="inline-flex items-center justify-center w-full bg-white text-blue-600 hover:bg-gray-100 px-6 py-4 rounded-xl font-semibold transition-colors text-lg"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Emergency Call: 6367820171
                  </a>
                  <a
                    href="https://wa.me/916367820171"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-6 py-4 rounded-xl font-semibold transition-colors text-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Book Service on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );


  
};

export default RefrigeratorRepair_page;







