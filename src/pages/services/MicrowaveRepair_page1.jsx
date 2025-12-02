import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Clock, 
  DollarSign, 
  Zap, 
  CheckCircle, 
  Wrench,
  Home,
  Star,
  Phone,
  MessageCircle
} from "lucide-react";

const MicrowaveRepair_page1 = () => {
  const problems = [
    { name: "Microwave Not Heating", description: "Issues with magnetron, diode, or capacitor requiring safe checks" },
    { name: "Turntable Not Rotating", description: "Malfunctioning motor or worn rollers preventing proper rotation" },
    { name: "Sparking Inside", description: "Damaged waveguide covers or accidental metal objects inside" },
    { name: "Buttons Not Responding", description: "Touch panel or PCB issues affecting operation" },
    { name: "Loud Noises", description: "Problems with fan motor or internal components" },
    { name: "Door Issues", description: "Damaged latches or misaligned doors preventing safe operation" },
    { name: "Error Codes", description: "Modern microwave error codes indicating internal faults" }
  ];

  const brands = ["LG", "Samsung", "IFB", "Whirlpool", "Panasonic", "Bajaj", "Morphy Richards", "Godrej", "Haier"];
  
  const processSteps = [
    { step: 1, title: "Appointment Booking", desc: "Book online or by phone with suitable timing" },
    { step: 2, title: "On-Site Evaluation", desc: "Technician inspects and explains the issue" },
    { step: 3, title: "Transparent Pricing", desc: "Clear estimate based on problem & parts" },
    { step: 4, title: "Repair Work", desc: "Quality parts with safe handling procedures" },
    { step: 5, title: "Final Testing", desc: "Testing heating performance & safety features" }
  ];

  // Set SEO meta tags
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Microwave Oven Repair Service | Professional Repair in Ahmedabad | New Star Service Centre";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    const originalDescription = metaDescription.content;
    metaDescription.content = "Professional microwave oven repair service in Ahmedabad. Expert technicians for LG, Samsung, IFB, Whirlpool, Panasonic microwave repairs. Same-day service, transparent pricing, warranty.";
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    const originalKeywords = metaKeywords.content;
    metaKeywords.content = "microwave oven repair, microwave repair service, microwave not heating, microwave sparking, microwave turntable repair, LG microwave repair, Samsung microwave repair, IFB microwave service, Ahmedabad microwave repair";
    
    // Cleanup - restore original values
    return () => {
      document.title = originalTitle;
      if (metaDescription) metaDescription.content = originalDescription;
      if (metaKeywords) metaKeywords.content = originalKeywords;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
              <Home className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Microwave Oven Repair Service
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Safe, Efficient & Trusted Microwave Repairs in Ahmedabad
            </p>
            <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-10">
              Expert repair for solo, grill, and convection microwaves from all major brands
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6367820171"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call Now: 6367820171
              </a>
              <a
                href="https://wa.me/916367820171?text=Hello,%20I%20need%20Microwave%20Oven%20Repair%20Service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-[#25D366] to-green-500 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp Enquiry
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
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Professional Microwave Oven Repair Services
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The microwave oven has become an essential appliance for modern kitchens, helping you cook, heat, and defrost food quickly. When it stops functioning or shows signs of damage, it disrupts your daily routine.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                At New Star Service Centre, we provide professional microwave oven repair services designed to offer safe, transparent, and dependable solutions. Our technicians are trained to handle solo, grill, and convection microwaves from major brands.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Why Choose Our Microwave Repair Service?
              </h3>
              <div className="space-y-4">
                {[
                  { icon: <Wrench className="w-5 h-5" />, text: "Experienced Professionals - Safe handling of sensitive electrical parts" },
                  { icon: <DollarSign className="w-5 h-5" />, text: "Clear & Honest Pricing - No hidden charges, complete transparency" },
                  { icon: <Clock className="w-5 h-5" />, text: "Quick Response Time - Same-day or next-day service" },
                  { icon: <Shield className="w-5 h-5" />, text: "Quality Spare Parts - Brand-approved components for safety" },
                  { icon: <Zap className="w-5 h-5" />, text: "All Types of Microwaves - Solo, grill, and convection models" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems We Repair */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Common Microwave Oven Problems We Repair
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">{problem.name}</h3>
                </div>
                <p className="text-gray-600">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Microwave Repair Process
          </h2>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="lg:w-1/2 p-4">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold text-lg mr-4">
                          {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                      </div>
                      <p className="text-gray-700">{step.desc}</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Brands We Service
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-lg font-semibold text-gray-800">{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips & CTA */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Star className="w-6 h-6 text-green-600 mr-3" />
                Microwave Oven Maintenance Tips
              </h3>
              <ul className="space-y-3">
                {[
                  "Avoid using metal containers inside the microwave",
                  "Keep the interior clean to prevent odor and sparks",
                  "Use microwave-safe containers only",
                  "Allow proper ventilation around the appliance",
                  "Avoid slamming the microwave door to maintain hinge performance"
                ].map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Need Microwave Repair?</h3>
              <p className="mb-6 opacity-90">
                If your microwave oven is not working properly, contact us for reliable and professional repair services.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:6367820171"
                  className="inline-flex items-center justify-center w-full bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call: 6367820171
                </a>
                <a
                  href="https://wa.me/916367820171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicrowaveRepair_page1;