import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Clock, 
  DollarSign, 
  Zap, 
  CheckCircle, 
  Wrench,
  Droplets,
  RotateCw,
  AlertTriangle,
  Phone,
  MessageCircle,
  Star,
  Award,
  Settings,
  Users,
  Power,
  Volume2,
  Wind,
  Code,
  Calendar,
  Search,
  FileText
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const WashingMachineRepair_page = () => {
  const problems = [
    { 
      name: "Machine Not Starting", 
      description: "Electrical supply, wiring, or internal component issues requiring step-by-step inspection",
      icon: <Power className="w-5 h-5" />
    },
    { 
      name: "Water Leakage", 
      description: "Damaged hoses, faulty pumps, or loose connections causing water leaks",
      icon: <Droplets className="w-5 h-5" />
    },
    { 
      name: "Excessive Noise/Vibration", 
      description: "Unbalanced loads, worn bearings, or drum issues causing vibrations",
      icon: <Volume2 className="w-5 h-5" />
    },
    { 
      name: "Washer Not Spinning", 
      description: "Motor, belt, or control board problems affecting spinning function",
      icon: <RotateCw className="w-5 h-5" />
    },
    { 
      name: "Water Not Draining", 
      description: "Blocked drain pipe or faulty pump disrupting washing cycles",
      icon: <AlertTriangle className="w-5 h-5" />
    },
    { 
      name: "Foul Odors", 
      description: "Detergent residue and moisture buildup causing unpleasant smells",
      icon: <Wind className="w-5 h-5" />
    },
    { 
      name: "Error Codes", 
      description: "Modern machine error codes indicating internal electronic issues",
      icon: <Code className="w-5 h-5" />
    }
  ];

  const brands = ["LG", "Samsung", "Whirlpool", "IFB", "Bosch", "Godrej", "Haier", "Panasonic", "Onida", "Siemens", "Voltas", "Electrolux"];
  
  const processSteps = [
    { step: 1, title: "Service Appointment", desc: "Schedule by phone or online form with convenient time slots", icon: <Calendar className="w-6 h-6" /> },
    { step: 2, title: "On-Site Inspection", desc: "Certified technician inspects and explains the issue clearly", icon: <Search className="w-6 h-6" /> },
    { step: 3, title: "Cost Estimate", desc: "Transparent price quote with no hidden charges", icon: <FileText className="w-6 h-6" /> },
    { step: 4, title: "Repair & Replacement", desc: "Quality repair with genuine spare parts", icon: <Wrench className="w-6 h-6" /> }, // Changed from Tool to Wrench
    { step: 5, title: "Post-Service Testing", desc: "Thorough testing to ensure proper functioning", icon: <CheckCircle className="w-6 h-6" /> },
    { step: 6, title: "Customer Feedback", desc: "We value your satisfaction and feedback", icon: <Users className="w-6 h-6" /> }
  ];

  const benefits = [
    { icon: <Users />, title: "Qualified & Experienced Technicians", desc: "Trained to handle wide range of issues with professionalism" },
    { icon: <DollarSign />, title: "Transparent Service", desc: "Clear explanations and upfront pricing for informed decisions" },
    { icon: <Clock />, title: "Same-Day Service", desc: "Quick response times to minimize disruption to your routine" },
    { icon: <Shield />, title: "Genuine Spare Parts", desc: "High-quality compatible or brand-approved parts for durability" },
    { icon: <Settings />, title: "Comprehensive Support", desc: "From minor adjustments to major component repairs" }
  ];

  return (
    <>
      <Helmet>
        <title>Washing Machine Repair Service | Professional Washer Repair in Ahmedabad | New Star Service Centre</title>
        <meta 
          name="description" 
          content="Professional washing machine repair service in Ahmedabad for LG, Samsung, Whirlpool, IFB, Bosch washers. Same-day service, genuine parts, warranty. Fix spinning, leaking, noise issues." 
        />
        <meta 
          name="keywords" 
          content="washing machine repair, washer repair service, washing machine not spinning, washer leaking, washing machine noise, LG washing machine repair, Samsung washer service, IFB washing machine repair, Ahmedabad washing machine repair, front load repair, top load repair, semi automatic washer service" 
        />
        <link rel="canonical" href="https://newstarservicecentre.com/services/washing-machine-repair-service" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Washing Machine Repair Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "New Star Service Centre",
              "image": "https://newstarservicecentre.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380015",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "23.0225",
                "longitude": "72.5714"
              },
              "url": "https://newstarservicecentre.com",
              "telephone": "+916367820171",
              "openingHours": "Mo-Su 08:00-22:00"
            },
            "areaServed": {
              "@type": "City",
              "name": "Ahmedabad"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Washing Machine Repair Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Front Load Washing Machine Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Top Load Washing Machine Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Semi-Automatic Washing Machine Repair"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-700 via-blue-800 to-purple-900 text-white py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                <Settings className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Washing Machine Repair Service
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Fast, Reliable & Professional Washing Machine Solutions in Ahmedabad
              </p>
              <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-10">
                Expert repair for front-load, top-load, semi-automatic & fully automatic washing machines
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
                  href="https://wa.me/916367820171?text=Hello,%20I%20need%20Washing%20Machine%20Repair%20Service%20from%20New%20Star%20Service%20Centre"
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
          
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-64 h-64 rounded-full border border-white/10"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 10}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
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
                className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-blue-100"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Professional Washing Machine Repair Services
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  At New Star Service Centre, we understand how essential a fully functioning washing machine is for maintaining a smooth household routine. When your appliance stops working or shows signs of trouble, it can disrupt your schedule and create unnecessary stress.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our professional washing machine repair service is designed to provide quick, reliable, and customer-friendly solutions for all major brands and models. Whether you own a front-load, top-load, semi-automatic, or fully automatic washing machine, our trained technicians are equipped to diagnose and repair issues with precision and care.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Why Choose New Star Service Centre?
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-white hover:shadow-md transition-shadow border border-gray-100"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Common Washing Machine Problems We Fix
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center text-blue-600 mr-4">
                      {problem.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{problem.name}</h3>
                  </div>
                  <p className="text-gray-600">{problem.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Brands We Service
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Our team stays updated on the latest technologies and model variations to ensure accurate diagnostics and effective repairs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {brands.map((brand, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="text-2xl font-bold text-gray-800 mb-2">{brand}</div>
                  <div className="text-sm text-gray-500">Washing Machine Repair</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Our Washing Machine Repair Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl font-bold mr-4">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips & CTA Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Maintenance Tips */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Star className="w-6 h-6 text-green-600 mr-3" />
                  Preventive Maintenance Tips
                </h3>
                <p className="text-gray-700 mb-6">
                  To keep your washing machine performing well, follow these simple tips:
                </p>
                <ul className="space-y-4">
                  {[
                    "Clean the drum periodically with vinegar or specialized cleaners",
                    "Avoid overloading the washer to maintain balance and efficiency",
                    "Keep the door open after each wash to prevent odor buildup",
                    "Check hoses for cracks or leaks every 3-6 months",
                    "Use the recommended detergent type and amount"
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-700 to-indigo-800 p-8 rounded-2xl text-white text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Book Your Washing Machine Repair Today</h3>
                <p className="mb-6 opacity-90">
                  At New Star Service Centre, we are committed to offering dependable washing machine repair services with customer satisfaction as our top priority.
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
                    href="https://wa.me/916367820171?text=Hello,%20I%20need%20immediate%20Washing%20Machine%20Repair%20Service"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-6 py-4 rounded-xl font-semibold transition-colors text-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    WhatsApp Same-Day Service
                  </a>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-80">Support</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">6M</div>
                      <div className="text-sm opacity-80">Warranty</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">2K+</div>
                      <div className="text-sm opacity-80">Repairs Done</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WashingMachineRepair_page;